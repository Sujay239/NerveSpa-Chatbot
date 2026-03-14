/**
 * Premium HTML Template for NerveSpa Response Report
 */
module.exports = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title} - ${data.clientName}</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-deep: #05070a;
            --bg-card: rgba(15, 20, 30, 0.7);
            --accent: #00edff;
            --text-primary: #f0f4f8;
            --text-secondary: #a0aec0;
            --glass-border: rgba(255, 255, 255, 0.08);
            --glow: rgba(0, 237, 255, 0.3);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Plus Jakarta Sans', sans-serif; 
            background: var(--bg-deep); 
            color: var(--text-primary); 
            line-height: 1.6;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(0, 237, 255, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(0, 237, 255, 0.03) 0%, transparent 50%);
            min-height: 100vh;
            padding: 40px 20px;
        }

        .container { max-width: 1100px; margin: 0 auto; }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding: 24px;
            background: var(--bg-card);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            backdrop-filter: blur(12px);
        }

        .title-group h1 { font-size: 24px; font-weight: 700; color: #fff; letter-spacing: -0.5px; }
        .title-group p { color: var(--text-secondary); font-size: 14px; }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .stat-card {
            background: var(--bg-card);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--glass-border);
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover { 
            transform: translateY(-5px); 
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            border-color: var(--accent);
        }

        .stat-card.pass { border-color: #00ff88; }
        .stat-card.fail { border-color: #ff4d4d; }

        .stat-card .value { font-size: 28px; font-weight: 700; color: var(--accent); display: block; margin-bottom: 4px; }
        .stat-card.pass .value { color: #00ff88; }
        .stat-card.fail .value { color: #ff4d4d; }
        .stat-card .label { color: var(--text-secondary); font-size: 12px; text-transform: uppercase; font-weight: 600; }

        .search-container { margin-bottom: 30px; position: relative; }
        .search-container input {
            width: 100%;
            padding: 16px 24px;
            background: var(--bg-card);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            color: #fff;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s ease;
        }
        .search-container input:focus { border-color: var(--accent); box-shadow: 0 0 15px var(--glow); }

        .response-list { display: flex; flex-direction: column; gap: 20px; }

        .response-card {
            background: var(--bg-card);
            padding: 24px;
            border-radius: 16px;
            border: 1px solid var(--glass-border);
            position: relative;
            overflow: hidden;
            transition: background 0.3s ease;
        }

        .response-card.status-pass::before {
            content: '';
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 4px;
            background: #00ff88;
            opacity: 0.8;
        }

        .response-card.status-fail::before {
            content: '';
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 4px;
            background: #ff4d4d;
            opacity: 0.8;
        }

        .response-card:hover { background: rgba(20, 25, 40, 0.9); }

        .status-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .badge-pass { background: rgba(0, 255, 136, 0.1); color: #00ff88; border: 1px solid rgba(0, 255, 136, 0.2); }
        .badge-fail { background: rgba(255, 77, 77, 0.1); color: #ff4d4d; border: 1px solid rgba(255, 77, 77, 0.2); }

        .q-section { margin-bottom: 16px; padding-right: 80px; }
        .q-label { font-size: 12px; font-weight: 700; color: var(--accent); text-transform: uppercase; display: block; margin-bottom: 4px; }
        .question-text { font-size: 18px; font-weight: 600; color: #fff; }

        .a-section { padding-left: 20px; border-left: 2px solid var(--glass-border); position: relative; }
        .a-label { font-size: 12px; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; display: block; margin-bottom: 4px; }
        .answer-text { color: #cbd5e0; font-size: 15px; white-space: pre-wrap; }

        .meta-footer { 
            display: flex; 
            justify-content: space-between; 
            margin-top: 16px; 
            padding-top: 12px; 
            border-top: 1px solid var(--glass-border);
            font-size: 12px;
            color: var(--text-secondary);
        }

        @media (max-width: 600px) {
            header { flex-direction: column; text-align: center; gap: 15px; }
            .stats-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="title-group">
                <h1>${data.reportTitle}</h1>
                <p>NerveSpa AI Diagnostics System</p>
            </div>
            <div style="text-align: right">
                <p style="font-weight: 600; color: var(--accent)">${new Date(data.timestamp).toLocaleString()}</p>
                <p>Session: ${data.sessionId}</p>
            </div>
        </header>

        <div class="stats-grid">
            <div class="stat-card">
                <span class="value">${data.stats.total}</span>
                <span class="label">Questions</span>
            </div>
            <div class="stat-card pass">
                <span class="value">${data.stats.passed}</span>
                <span class="label">Passed</span>
            </div>
            <div class="stat-card fail">
                <span class="value">${data.stats.failed}</span>
                <span class="label">Failed</span>
            </div>
            <div class="stat-card">
                <span class="value">${data.stats.passRate}%</span>
                <span class="label">Success Rate</span>
            </div>
            <div class="stat-card">
                <span class="value">${data.stats.avgResponseTime}ms</span>
                <span class="label">Avg. Latency</span>
            </div>
        </div>

        <div class="search-container">
            <input type="text" id="searchInput" placeholder="Search within questions and answers..." onkeyup="filterResults()">
        </div>

        <div class="response-list" id="responseList">
            ${data.results.map((res, i) => `
                <div class="response-card status-${res.pass ? 'pass' : 'fail'}" data-index="${i}">
                    <div class="status-badge badge-${res.pass ? 'pass' : 'fail'}">
                        ${res.pass ? 'PASSED' : 'FAILED'}
                    </div>
                    <div class="q-section">
                        <span class="q-label">Question #${i+1}</span>
                        <div class="question-text">${res.question}</div>
                    </div>
                    <div class="a-section">
                        <span class="a-label">Bot Response</span>
                        <div class="answer-text">${res.answer || 'No response collected.'}</div>
                    </div>
                    <div class="meta-footer">
                        <span>Latency: ${res.duration}ms</span>
                        <span>ID: ${data.sessionId}-${i}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>

    <script>
        function filterResults() {
            const input = document.getElementById('searchInput');
            const filter = input.value.toLowerCase();
            const cards = document.getElementsByClassName('response-card');

            for (let i = 0; i < cards.length; i++) {
                const text = cards[i].innerText.toLowerCase();
                if (text.includes(filter)) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
                }
            }
        }
    </script>
</body>
</html>
`;
