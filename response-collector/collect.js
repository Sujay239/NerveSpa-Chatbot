const fs = require('fs');
const path = require('path');
const https = require('https');
const { parse } = require('csv-parse/sync');
const config = require('./config');
const generateHtml = require('./template_html');

// Generate a random session ID
function generateSessionId() {
    return 'sess-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
}

// Perform HTTPS GET request
function fetchResponse(query, sessionId) {
    const url = `${config.apiEndpoint}?chatInput=${encodeURIComponent(query)}&sessionId=${sessionId}`;
    
    return new Promise((resolve, reject) => {
        const start = Date.now();
        const request = https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                const duration = Date.now() - start;
                try {
                    const json = JSON.parse(data);
                    // Extract answer from [0].output as configured in old tester
                    const answer = (json && json[0] && json[0].output) || 'No output found';
                    resolve({ answer, duration });
                } catch (e) {
                    resolve({ answer: 'Error parsing JSON response', duration });
                }
            });
        });
        
        request.on('error', (err) => {
            reject(err);
        });
        
        request.setTimeout(config.timeout, () => {
            request.destroy();
            reject(new Error('Request Timeout'));
        });
    });
}

async function main() {
    console.log('🚀 NerveSpa Response Collector Starting...');
    const sessionId = generateSessionId();
    console.log(`📡 Session ID: ${sessionId}`);

    // Resolve CSV Path
    const absoluteCsvPath = path.resolve(__dirname, config.csvPath);
    if (!fs.existsSync(absoluteCsvPath)) {
        console.error(`❌ CSV File not found at: ${absoluteCsvPath}`);
        return;
    }

    // Load and Parse CSV
    const csvContent = fs.readFileSync(absoluteCsvPath, 'utf8');
    const records = parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
        bom: true
    });

    const questions = records.map(r => r.Question || r.question).filter(Boolean);
    console.log(`📝 Loaded ${questions.length} questions from CSV.`);

    const results = [];
    let totalDuration = 0;

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        process.stdout.write(`[${i + 1}/${questions.length}] Collecting: "${question.substring(0, 40)}..." `);

        try {
            const { answer, duration } = await fetchResponse(question, sessionId);
            results.push({ question, answer, duration });
            totalDuration += duration;
            console.log(`✅ (${duration}ms)`);
        } catch (err) {
            console.log(`❌ Error: ${err.message}`);
            results.push({ question, answer: `Failed to collect: ${err.message}`, duration: 0 });
        }

        // Delay to prevent rate limiting
        if (i < questions.length - 1) {
            await new Promise(resolve => setTimeout(resolve, config.delayBetweenRequests));
        }
    }

    // Calculate Summary Data
    const summary = {
        title: config.reportTitle,
        clientName: config.clientName,
        reportTitle: config.reportTitle,
        timestamp: new Date().toISOString(),
        sessionId: sessionId,
        results: results,
        avgResponseTime: Math.round(totalDuration / (results.length || 1))
    };

    // Save JSON Results
    fs.writeFileSync(path.resolve(__dirname, config.resultsJsonPath), JSON.stringify(summary, null, 2));
    console.log(`\n📂 Saved results to ${config.resultsJsonPath}`);

    // Generate and Save HTML Report
    const htmlReport = generateHtml(summary);
    fs.writeFileSync(path.resolve(__dirname, config.reportHtmlPath), htmlReport);
    console.log(`📊 Generated HTML report at ${config.reportHtmlPath}`);

    console.log('\n✨ Task Completed Successfully!');
}

main().catch(err => {
    console.error('\n💥 Fatal Error:', err);
});
