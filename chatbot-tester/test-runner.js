#!/usr/bin/env node
/**
 * Chatbot Test Runner
 *
 * Usage:
 *   node test-runner.js                    # API mode (default, fastest)
 *   node test-runner.js --mode api         # API mode explicitly
 *   node test-runner.js --mode browser     # Playwright browser mode
 *   node test-runner.js --csv ./my-tests.csv   # Custom CSV path
 *   node test-runner.js --report html      # Also generate HTML report
 *
 * CSV format:
 *   question,expected_answer
 *   "What are your hours?","We are open 9am to 5pm"
 */

const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");
const config = require("./config");

// ─── Parse CLI arguments ─────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    mode: "api",
    csv: config.csvPath,
    report: null,
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--mode" && args[i + 1]) opts.mode = args[++i];
    if (args[i] === "--csv" && args[i + 1]) opts.csv = args[++i];
    if (args[i] === "--report" && args[i + 1]) opts.report = args[++i];
  }

  return opts;
}

// ─── Load test cases from CSV ────────────────────────────────────────

function loadTestCases(csvPath) {
  const fullPath = path.resolve(csvPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`\n  CSV file not found: ${fullPath}`);
    console.error(
      `  Create it with columns: ${config.csvColumns.question},${config.csvColumns.expectedAnswer}\n`,
    );
    process.exit(1);
  }

  const content = fs.readFileSync(fullPath, "utf-8");
  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
    bom: true,
  });

  const qCol = config.csvColumns.question;
  const aCol = config.csvColumns.expectedAnswer;

  const tests = records
    .filter((r) => r[qCol] && r[qCol].trim())
    .map((r, i) => ({
      id: i + 1,
      question: r[qCol].trim(),
      expectedAnswer: (r[aCol] || "").trim(),
    }));

  if (tests.length === 0) {
    console.error(`\n  No test cases found in ${csvPath}`);
    console.error(`  Expected columns: "${qCol}" and "${aCol}"\n`);
    process.exit(1);
  }

  return tests;
}

// ─── Text normalization ──────────────────────────────────────────────

function normalize(text) {
  if (!config.normalizeText) return text;
  return text
    .replace(/\s+/g, " ")
    .replace(/[\r\n]+/g, " ")
    .trim();
}

// ─── Answer validation ──────────────────────────────────────────────

/**
 * Extract meaningful keywords from a paragraph of text.
 * Filters out common stop words and returns unique key terms.
 */
function extractKeyTerms(text) {
  const stopWords = new Set([
    "a",
    "an",
    "the",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "could",
    "should",
    "may",
    "might",
    "shall",
    "can",
    "need",
    "must",
    "i",
    "me",
    "my",
    "we",
    "our",
    "you",
    "your",
    "he",
    "she",
    "it",
    "its",
    "they",
    "them",
    "their",
    "this",
    "that",
    "these",
    "those",
    "and",
    "or",
    "but",
    "if",
    "of",
    "at",
    "by",
    "for",
    "with",
    "about",
    "to",
    "from",
    "in",
    "on",
    "into",
    "through",
    "during",
    "before",
    "after",
    "above",
    "below",
    "between",
    "under",
    "not",
    "no",
    "nor",
    "as",
    "so",
    "than",
    "too",
    "very",
    "just",
    "also",
    "then",
    "when",
    "how",
    "what",
    "which",
    "who",
    "whom",
    "where",
    "why",
    "all",
    "each",
    "every",
    "both",
    "few",
    "more",
    "most",
    "other",
    "some",
    "any",
    "such",
    "only",
    "own",
    "same",
    "here",
    "there",
    "again",
    "once",
    "further",
    "while",
    "because",
    "until",
    "although",
    "including",
    "used",
    "use",
    "using",
    "based",
    "part",
    "well",
    "designed",
    "intended",
    "provided",
    "may",
    "also",
    "often",
    "many",
    "help",
    "helps",
    "support",
    "supports",
    "include",
    "includes",
  ]);

  // Extract multi-word proper nouns and product names first
  const properNouns = [];
  const properNounPattern =
    /\b(?:NerveSpa|Nerve Bath|Quake Plate|NerveBeam|Cold Laser|Knee Pro|Shoulder Pro|PowerWrap|NerveWave|Vibe|LED Wrap|Super Flex|Nerve Rebuilder|Nerve Regeneration|Blood Flow Super Formula|Pain Management Technologies|PMT|FDA|HCPCS|E0720|HSA|FSA|OA|RA|DME)\b/gi;
  let match;
  while ((match = properNounPattern.exec(text)) !== null) {
    properNouns.push(match[0].toLowerCase());
  }

  // Extract numbers, percentages, time durations
  const numbers = [];
  const numberPattern =
    /\b\d+[\-–]?\d*\s*(?:minutes?|hours?|days?|weeks?|months?|years?|sessions?|uses?|%|mW|mg)?\b/gi;
  while ((match = numberPattern.exec(text)) !== null) {
    numbers.push(match[0].toLowerCase().trim());
  }

  // Extract remaining significant words (3+ chars, not stop words)
  const words = text
    .toLowerCase()
    .replace(/https?:\/\/[^\s,)]+/g, "") // remove URLs
    .replace(/[^a-z0-9\s\-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !stopWords.has(w));

  // Count word frequency, keep meaningful ones
  const freq = {};
  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
  }

  // Get unique meaningful terms: proper nouns + top frequent words
  const allTerms = new Set([...properNouns]);

  // Add top significant words (sorted by frequency, then length)
  const sorted = Object.entries(freq).sort(
    (a, b) => b[1] - a[1] || b[0].length - a[0].length,
  );

  // Take key terms — aim for ~5-10 terms from the expected answer
  const targetCount = Math.min(
    Math.max(5, Math.ceil(sorted.length * 0.25)),
    12,
  );
  for (let i = 0; i < Math.min(targetCount, sorted.length); i++) {
    allTerms.add(sorted[i][0]);
  }

  // Add numbers if present (important for medical/technical answers)
  for (const n of numbers.slice(0, 3)) {
    if (n.length >= 2) allTerms.add(n);
  }

  return [...allTerms];
}

function validateAnswer(actual, expected, mode) {
  if (!expected)
    return { pass: true, reason: "No expected answer — skipped validation" };

  const a = normalize(actual).toLowerCase();
  const e = normalize(expected).toLowerCase();

  switch (mode || config.matchMode) {
    case "exact":
      return {
        pass: a === e,
        reason: a === e ? "Exact match" : `Expected exact: "${expected}"`,
      };

    case "contains":
      return {
        pass: a.includes(e),
        reason: a.includes(e)
          ? "Contains expected text"
          : `Response does not contain: "${expected}"`,
      };

    case "keywords": {
      const keywords = e
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
      const missing = keywords.filter((k) => !a.includes(k));
      return {
        pass: missing.length === 0,
        reason:
          missing.length === 0
            ? "All keywords found"
            : `Missing keywords: ${missing.join(", ")}`,
      };
    }

    case "keywords_auto": {
      // Automatically extract key terms from the expected answer
      // and check if a sufficient percentage appear in the bot response
      const keyTerms = extractKeyTerms(expected);
      if (keyTerms.length === 0) {
        return { pass: true, reason: "No key terms to validate" };
      }

      const found = keyTerms.filter((term) => a.includes(term));
      const missing = keyTerms.filter((term) => !a.includes(term));
      const matchRatio = found.length / keyTerms.length;

      // Require at least 60% of key terms to be present
      const threshold = config.keywordMatchThreshold || 0.6;
      const pass = matchRatio >= threshold;

      return {
        pass,
        reason: pass
          ? `Matched ${found.length}/${keyTerms.length} key terms (${Math.round(matchRatio * 100)}%)`
          : `Only ${found.length}/${keyTerms.length} key terms found (${Math.round(matchRatio * 100)}%). Missing: ${missing.slice(0, 5).join(", ")}${missing.length > 5 ? "..." : ""}`,
      };
    }

    default:
      return { pass: a.includes(e), reason: "Default contains check" };
  }
}

// ─── Generate session ID (matches NerveSpa format) ───────────────────

function generateSessionId() {
  return "sess-" + Math.random().toString(36).substr(2, 16) + "-" + Date.now();
}

// ─── API Mode: Direct webhook testing ────────────────────────────────

async function runApiTest(testCase, sessionId) {
  const startTime = Date.now();

  try {
    let url, options;

    if (config.apiFormat === "get_query") {
      const params = new URLSearchParams({
        chatInput: testCase.question,
        sessionId: sessionId,
      });
      url = `${config.apiEndpoint}?${params.toString()}`;
      options = { method: "GET" };
    } else if (config.apiFormat === "post_json") {
      url = config.apiEndpoint;
      options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: testCase.question,
          sessionId: sessionId,
        }),
      };
    }

    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      config.responseTimeout,
    );

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return {
        ...testCase,
        actualAnswer: "",
        pass: false,
        reason: `HTTP ${response.status}: ${response.statusText}`,
        durationMs: Date.now() - startTime,
      };
    }

    const data = await response.json();

    // Extract answer using the configured path
    const answer = extractByPath(data, config.apiResponsePath);
    const actualAnswer =
      typeof answer === "string" ? answer : JSON.stringify(answer);

    const validation = validateAnswer(actualAnswer, testCase.expectedAnswer);

    return {
      ...testCase,
      actualAnswer: normalize(actualAnswer),
      pass: validation.pass,
      reason: validation.reason,
      durationMs: Date.now() - startTime,
    };
  } catch (err) {
    return {
      ...testCase,
      actualAnswer: "",
      pass: false,
      reason:
        err.name === "AbortError"
          ? `Timeout after ${config.responseTimeout}ms`
          : `Error: ${err.message}`,
      durationMs: Date.now() - startTime,
    };
  }
}

/**
 * Extract a value from a JSON object using dot/bracket notation.
 * e.g., "[0].output" extracts data[0].output from data
 */
function extractByPath(data, pathStr) {
  const parts = pathStr.match(/[^.[\]]+/g) || [];
  let current = data;
  for (const part of parts) {
    if (current == null) return undefined;
    current = current[isNaN(part) ? part : parseInt(part)];
  }
  return current;
}

// ─── Browser Mode: Playwright testing ────────────────────────────────

async function runBrowserTests(testCases) {
  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch {
    console.error("\n  Playwright not installed. Install it:");
    console.error("  npm install playwright");
    console.error("  npx playwright install chromium\n");
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: false }); // headless:false so you can watch
  const page = await browser.newPage();

  console.log(`\n  Opening ${config.chatbotUrl}...`);
  await page.goto(config.chatbotUrl, { waitUntil: "networkidle" });

  // Open the chat widget
  try {
    await page.click(config.selectors.chatToggle, { timeout: 5000 });
    await page.waitForTimeout(1000);
  } catch {
    console.log("  Chat widget already open (or no toggle button found)");
  }

  const results = [];

  for (const testCase of testCases) {
    const startTime = Date.now();
    console.log(
      `\n  [${testCase.id}/${testCases.length}] Sending: "${testCase.question}"`,
    );

    try {
      // Count existing bot messages before sending
      const beforeCount = await page
        .locator(config.selectors.botMessage)
        .count();

      // Clear the input and type the question
      const input = page.locator(config.selectors.chatInput);
      await input.fill("");
      await input.fill(testCase.question);
      await page.waitForTimeout(300);

      // Click send
      await page.click(config.selectors.sendButton);

      // Wait for typing indicator to appear, then disappear
      try {
        await page.waitForSelector(config.selectors.typingIndicator, {
          timeout: 5000,
        });
        await page.waitForSelector(config.selectors.typingIndicator, {
          state: "detached",
          timeout: config.responseTimeout,
        });
      } catch {
        // Typing indicator may not appear or may have already gone
      }

      // Wait for a new bot message to appear
      await page.waitForFunction(
        (selector, prevCount) => {
          const msgs = document.querySelectorAll(selector);
          return msgs.length > prevCount;
        },
        { timeout: config.responseTimeout },
        config.selectors.botMessage,
        beforeCount,
      );

      // Get the latest bot message text
      const botMessages = page.locator(config.selectors.botMessage);
      const count = await botMessages.count();
      const actualAnswer = await botMessages.nth(count - 1).innerText();

      const validation = validateAnswer(actualAnswer, testCase.expectedAnswer);

      results.push({
        ...testCase,
        actualAnswer: normalize(actualAnswer),
        pass: validation.pass,
        reason: validation.reason,
        durationMs: Date.now() - startTime,
      });
    } catch (err) {
      results.push({
        ...testCase,
        actualAnswer: "",
        pass: false,
        reason: `Browser error: ${err.message}`,
        durationMs: Date.now() - startTime,
      });
    }

    // Delay between questions
    if (testCase.id < testCases.length) {
      await page.waitForTimeout(config.delayBetweenQuestions);
    }
  }

  await browser.close();
  return results;
}

// ─── Console output ──────────────────────────────────────────────────

function printResults(results, mode, durationMs) {
  const passed = results.filter((r) => r.pass).length;
  const failed = results.filter((r) => !r.pass).length;
  const total = results.length;

  console.log("\n" + "=".repeat(70));
  console.log(`  CHATBOT TEST RESULTS  (${mode.toUpperCase()} mode)`);
  console.log("=".repeat(70));

  for (const r of results) {
    const icon = r.pass ? "PASS" : "FAIL";
    const color = r.pass ? "\x1b[32m" : "\x1b[31m";
    const reset = "\x1b[0m";

    console.log(`\n  ${color}[${icon}]${reset} #${r.id}: "${r.question}"`);
    if (r.expectedAnswer) {
      console.log(`         Expected: ${truncate(r.expectedAnswer, 80)}`);
    }
    console.log(
      `         Actual:   ${truncate(r.actualAnswer || "(empty)", 80)}`,
    );
    if (!r.pass) {
      console.log(`         Reason:   ${r.reason}`);
    }
    console.log(`         Time:     ${r.durationMs}ms`);
  }

  console.log("\n" + "-".repeat(70));
  console.log(`  SUMMARY: ${passed} passed, ${failed} failed, ${total} total`);
  console.log(
    `  Pass rate: ${total > 0 ? Math.round((passed / total) * 100) : 0}%`,
  );
  console.log(`  Total time: ${(durationMs / 1000).toFixed(1)}s`);
  console.log("-".repeat(70) + "\n");
}

function truncate(str, maxLen) {
  return str.length > maxLen ? str.slice(0, maxLen) + "..." : str;
}

// ─── Save results ────────────────────────────────────────────────────

function saveResults(results, mode, durationMs) {
  if (config.saveResultsJson) {
    const outputPath = path.resolve(config.resultsJsonPath);
    const output = {
      timestamp: new Date().toISOString(),
      mode,
      totalDurationMs: durationMs,
      summary: {
        total: results.length,
        passed: results.filter((r) => r.pass).length,
        failed: results.filter((r) => !r.pass).length,
        passRate:
          results.length > 0
            ? Math.round(
                (results.filter((r) => r.pass).length / results.length) * 100,
              )
            : 0,
      },
      results,
    };
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(`  Results saved to: ${outputPath}`);
  }
}

function saveHtmlReport(results, mode, durationMs) {
  const passed = results.filter((r) => r.pass).length;
  const failed = results.filter((r) => !r.pass).length;
  const total = results.length;
  const passRate = total > 0 ? Math.round((passed / total) * 100) : 0;

  const rows = results
    .map(
      (r) => `
    <tr class="${r.pass ? "pass" : "fail"}">
      <td>${r.id}</td>
      <td>${escapeHtml(r.question)}</td>
      <td>${escapeHtml(r.expectedAnswer || "—")}</td>
      <td>${escapeHtml(truncate(r.actualAnswer || "(empty)", 200))}</td>
      <td class="status">${r.pass ? "PASS" : "FAIL"}</td>
      <td>${r.reason}</td>
      <td>${r.durationMs}ms</td>
    </tr>
  `,
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Chatbot Test Report</title>
  <style>
    body { font-family: -apple-system, system-ui, sans-serif; max-width: 1200px; margin: 0 auto; padding: 24px; background: #0f0f14; color: #e8e8f0; }
    h1 { color: #fff; } .meta { color: #8888a8; margin-bottom: 24px; }
    .summary { display: flex; gap: 24px; margin-bottom: 24px; }
    .stat { background: #1e1e2e; padding: 16px 24px; border-radius: 12px; text-align: center; }
    .stat .number { font-size: 32px; font-weight: 700; }
    .stat .label { color: #8888a8; font-size: 13px; }
    .stat.pass .number { color: #22c55e; } .stat.fail .number { color: #ef4444; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    th { background: #1e1e2e; padding: 10px; text-align: left; border-bottom: 2px solid #2e2e44; }
    td { padding: 10px; border-bottom: 1px solid #2e2e44; vertical-align: top; max-width: 300px; word-wrap: break-word; }
    tr.pass .status { color: #22c55e; font-weight: 600; }
    tr.fail .status { color: #ef4444; font-weight: 600; }
    tr.fail { background: rgba(239,68,68,0.05); }
  </style>
</head>
<body>
  <h1>Chatbot Test Report</h1>
  <div class="meta">Mode: ${mode.toUpperCase()} | Date: ${new Date().toLocaleString()} | Duration: ${(durationMs / 1000).toFixed(1)}s</div>
  <div class="summary">
    <div class="stat"><div class="number">${total}</div><div class="label">Total Tests</div></div>
    <div class="stat pass"><div class="number">${passed}</div><div class="label">Passed</div></div>
    <div class="stat fail"><div class="number">${failed}</div><div class="label">Failed</div></div>
    <div class="stat"><div class="number">${passRate}%</div><div class="label">Pass Rate</div></div>
  </div>
  <table>
    <thead><tr><th>#</th><th>Question</th><th>Expected</th><th>Actual</th><th>Status</th><th>Reason</th><th>Time</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`;

  const outputPath = path.resolve(config.resultsHtmlPath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
  console.log(`  HTML report saved to: ${outputPath}`);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs();

  console.log("\n  Chatbot Test Runner");
  console.log(`  Mode: ${opts.mode}`);
  console.log(`  CSV:  ${path.resolve(opts.csv)}`);

  // Load test cases
  const testCases = loadTestCases(opts.csv);
  console.log(`  Tests: ${testCases.length} questions loaded\n`);

  const startTime = Date.now();
  let results;

  if (opts.mode === "browser") {
    // ─── Playwright browser mode ─────────────────────────────
    results = await runBrowserTests(testCases);
  } else {
    // ─── API direct mode (default) ──────────────────────────
    const sessionId = generateSessionId();
    console.log(`  Session: ${sessionId}\n`);
    results = [];

    for (const testCase of testCases) {
      process.stdout.write(
        `  [${testCase.id}/${testCases.length}] Testing: "${truncate(testCase.question, 50)}" ...`,
      );
      const result = await runApiTest(testCase, sessionId);
      results.push(result);

      const icon = result.pass ? "\x1b[32mPASS\x1b[0m" : "\x1b[31mFAIL\x1b[0m";
      process.stdout.write(` ${icon} (${result.durationMs}ms)\n`);

      // Delay between questions
      if (testCase.id < testCases.length) {
        await new Promise((resolve) =>
          setTimeout(resolve, config.delayBetweenQuestions),
        );
      }
    }
  }

  const totalDuration = Date.now() - startTime;

  // Print results
  printResults(results, opts.mode, totalDuration);

  // Save results
  saveResults(results, opts.mode, totalDuration);

  if (opts.report === "html" || config.saveResultsHtml) {
    saveHtmlReport(results, opts.mode, totalDuration);
  }

  // Exit with non-zero if any tests failed
  const failCount = results.filter((r) => !r.pass).length;
  process.exit(failCount > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("\n  Fatal error:", err.message);
  process.exit(1);
});
