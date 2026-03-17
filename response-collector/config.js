/**
 * NerveSpa Response Collector Configuration
 */
module.exports = {
  // n8n Webhook URL
    apiEndpoint: 'https://n8n.srv917960.hstgr.cloud/webhook/nervespa-chatbot',

  // Input CSV path (relative to project root)
  csvPath: "first.csv",

  // Output paths
  resultsJsonPath: "./results-first.json",
  reportHtmlPath: "./report-first.html",

  // Timing
  delayBetweenRequests: 1500, // ms
  timeout: 45000, // ms

  // UI Customization
  clientName: "NerveSpa",
  reportTitle: "AI Response Collector Report"
};
