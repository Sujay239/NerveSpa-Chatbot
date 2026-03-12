const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");

// Read predefined questions
const preDefQPath = path.join(__dirname, "..", "predefineQuestiosn.js");
const preDefQuestionsContent = fs.readFileSync(preDefQPath, "utf8");

// I'm dumping the new algorithm exactly as it exists in the user's file
function getSemanticScoreNEW(input, target) {
  const stopWords = new Set([
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "but",
    "by",
    "for",
    "if",
    "in",
    "into",
    "is",
    "it",
    "no",
    "of",
    "on",
    "or",
    "such",
    "that",
    "the",
    "their",
    "then",
    "there",
    "these",
    "they",
    "this",
    "to",
    "was",
    "will",
    "with",
    "do",
    "does",
    "did",
    "can",
    "could",
    "should",
    "would",
    "i",
    "you",
    "he",
    "she",
    "we",
    "my",
    "your",
    "his",
    "her",
    "our",
    "how",
    "what",
    "why",
    "where",
    "when",
    "who",
    "has",
    "been",
    "hold",
    "us",
    "u",
    "s",
  ]);

  const getTokens = (str) =>
    normalize(str)
      .split(" ")
      .filter((w) => w.length > 0 && !stopWords.has(w))
      .map(stem);

  const tokens1 = getTokens(input);
  const tokens2 = getTokens(target);

  if (tokens1.length === 0 || tokens2.length === 0) return 0;

  let intersection = 0;
  const matched2 = new Set();

  for (let i = 0; i < tokens1.length; i++) {
    let bestMatchScore = 0;
    let bestMatchIdx = -1;
    let w1 = tokens1[i];

    for (let j = 0; j < tokens2.length; j++) {
      if (matched2.has(j)) continue;

      let w2 = tokens2[j];

      if (w1 === w2) {
        bestMatchScore = 1;
        bestMatchIdx = j;
        break; // perfect match
      } else if (w1.length >= 4 && w2.length >= 4) {
        // String distance for slight typos
        let dist = levenshteinDistance(w1, w2);
        let maxLen = Math.max(w1.length, w2.length);
        let similarity = 1 - dist / maxLen;

        if (similarity >= 0.75) {
          // High similarity required for words (e.g. 1 letter off)
          bestMatchScore = Math.max(bestMatchScore, similarity);
          bestMatchIdx = j;
        } else if (w1.includes(w2) || w2.includes(w1)) {
          // If it's a prefix/suffix match but not that close, give it a lower score
          bestMatchScore = Math.max(bestMatchScore, 0.6);
          bestMatchIdx = j;
        }
      }
    }

    if (bestMatchIdx !== -1) {
      intersection += bestMatchScore;
      matched2.add(bestMatchIdx);
    }
  }

  // We want to reward coverage of the input query heavily
  let inputCoverage = intersection / tokens1.length;
  let targetCoverage = intersection / tokens2.length;

  // Weighted combination: input coverage is more important than target coverage
  // But we only count if it actually had real matched words!
  let finalScore = inputCoverage * 0.6 + targetCoverage * 0.4;

  // If the query is very long and has very few overlapping words, penalize it heavily
  // to avoid matching just because "NerveSpa" matched.
  if (tokens1.length >= 4 && intersection < 2) {
    finalScore *= 0.5;
  }

  return finalScore;
}

let predefinedQuestions = [];
try {
  const qMatch = preDefQuestionsContent.match(
    /const predefinedQuestions = \[\s*([\s\S]*?)\s*\];/,
  );
  if (qMatch && qMatch[1]) {
    predefinedQuestions = eval(`[${qMatch[1]}]`);
  }
} catch (e) {
  console.error("Could not parse predefined questions", e);
}

// Load failed test cases
const csvPath = path.join(__dirname, "tests", "failed.csv");
const csvData = fs.readFileSync(csvPath, "utf8");
const records = parse(csvData, { columns: true, skip_empty_lines: true });

const synonyms = {
  made: "manufactured",
  produced: "manufactured",
  created: "manufactured",
  built: "manufactured",
  origin: "manufactured",
  cost: "pricing",
  pay: "pricing",
  price: "pricing",
  purchase: "pricing",
  buy: "pricing",
  amount: "pricing",
};

function normalize(text) {
  if (!text) return "";
  let base = text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  let words = base.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (synonyms[words[i]]) {
      words[i] = synonyms[words[i]];
    }
  }
  return words.join(" ");
}

function stem(w) {
  if (w.length <= 3) return w;
  return w.replace(/(ing|ly|ed|er|es|s|ion)$/, "");
}

function levenshteinDistance(s, t) {
  if (!s.length) return t.length;
  if (!t.length) return s.length;
  const arr = [];
  for (let i = 0; i <= t.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= s.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1),
            );
    }
  }
  return arr[t.length][s.length];
}

console.log(
  `Testing 5 questions with FULL LOGIC (including Levenshtein check)...`,
);

records.slice(0, 5).forEach((record, index) => {
  const incomingQuestion = record.Question;
  const cleanIncoming = normalize(incomingQuestion);
  const thresholdLev = Math.max(3, Math.floor(cleanIncoming.length * 0.15));

  let isMatch = false;
  let bestScore = 0;
  let bestMatchStr = "";

  for (const q of predefinedQuestions) {
    const qNorm = normalize(q);
    const dist = levenshteinDistance(cleanIncoming, qNorm);
    const semanticScore = getSemanticScoreNEW(incomingQuestion, q);

    if (semanticScore > bestScore) {
      bestScore = semanticScore;
      bestMatchStr = q;
    }

    // Raise the threshold logic
    if (dist <= thresholdLev || semanticScore >= 0.55) {
      isMatch = true;
      // Not breaking here so we can see the best match for debug
    }
  }

  console.log(`\n--- Q${index + 1}: ${incomingQuestion} ---`);
  console.log(`Is Match Triggered (Output "0")? ${isMatch}`);
  console.log(`Best Match: "${bestMatchStr}" (Score: ${bestScore.toFixed(3)})`);
});
