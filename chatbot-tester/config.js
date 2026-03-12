/**
 * Chatbot Tester Configuration
 *
 * Edit this file to configure for your chatbot.
 * The default is set up for the NerveSpa chatbot at test13.autocomputation.com.
 */
module.exports = {
  // ─── Chatbot Target ────────────────────────────────────────────
  // The webpage URL where the chatbot lives
  chatbotUrl: "https://test13.autocomputation.com/v2.html",

  // Direct API endpoint (if the chatbot has one)
  // The NerveSpa chatbot uses a webhook that accepts GET requests
  apiEndpoint: "https://n8n.srv917960.hstgr.cloud/webhook/nervespa",

  // API request format: "get_query" | "post_json" | "post_form"
  //   get_query  = GET ?chatInput=...&sessionId=...
  //   post_json  = POST { "message": "...", "sessionId": "..." }
  //   post_form  = POST form-encoded body
  apiFormat: "get_query",

  // How to extract the bot's answer from the API response JSON
  // Use dot notation: "data[0].output", "response.text", "answer", etc.
  apiResponsePath: "[0].output",

  // ─── Browser Selectors (for Playwright mode) ──────────────────
  selectors: {
    // Button to open the chat widget (if hidden by default)
    chatToggle: ".chat-toggle",

    // The text input where user types messages
    chatInput: ".chat-input textarea",

    // The send button
    sendButton: ".chat-input button",

    // Container that holds all messages
    messagesContainer: ".chat-messages",

    // Selector for bot messages (the last one is the response)
    botMessage: ".message.bot .message-text-block",

    // Typing indicator (wait for this to disappear)
    typingIndicator: "#typing-indicator",
  },

  // ─── Timing ───────────────────────────────────────────────────
  // Max time to wait for bot response (ms)
  responseTimeout: 30000,

  // Delay between sending questions (ms) — prevents rate limiting
  delayBetweenQuestions: 2000,

  // ─── Test Data ────────────────────────────────────────────────
  // Path to CSV file with test cases
  csvPath: "./tests/questions.csv",

  // CSV column names
  csvColumns: {
    question: "Question",
    expectedAnswer: "Answer",
  },

  // ─── Validation ───────────────────────────────────────────────
  // How to compare expected vs actual response
  //   "exact"    = actual must equal expected (case-insensitive)
  //   "contains" = actual must contain expected (case-insensitive)
  //   "keywords" = actual must contain all comma-separated keywords
  //   "keywords_auto"  = auto-extract key terms from expected answer,
  //                      check if bot response contains enough of them
  matchMode: "keywords_auto",

  // For keywords_auto: minimum percentage of key terms that must match (0.0 to 1.0)
  keywordMatchThreshold: 0.4,

  // Trim whitespace and normalize spaces before comparison
  normalizeText: true,

  // ─── Output ───────────────────────────────────────────────────
  // Save detailed results to JSON file
  saveResultsJson: true,
  resultsJsonPath: "./results/results-fixed.json",

  // Generate HTML report
  saveResultsHtml: true,
  resultsHtmlPath: "./results/report-fixed.html",
};
