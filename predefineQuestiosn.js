// Get the incoming question from the chat trigger
const incomingQuestion = $input.first().json.query.chatInput;

// Define your predefined questions
const predefinedQuestions = [
  "What is NerveSpa?",
  "Can you explain what NerveSpa?",
  "Could you describe what NerveSpa?",
  "Tell me about NerveSpa",
  "Explain NerveSpa to me",
  "Who owns NerveSpa?",
  "How do providers implement NerveSpa?",
  "What conditions can NerveSpa support?",
  "How can clinics order NerveSpa or request a demo?",
  "What are NerveSpa\u2019s pricing options?",
  "Is NerveSpa FDA-registered?",
  "Is NerveSpa covered by insurance?",
  "What warranty and return policy does NerveSpa offer?",
  "Where is NerveSpa manufactured?",
  "How long has PMT been in business?",
  "Where can FDA listings be verified?",
  "What certifications does PMT hold?",
  "Does NerveSpa replace medical care?",
  "Who decides if NerveSpa is appropriate?",
  "Can NerveSpa be used with other treatments?",
  "How does NerveSpa compare to other nerve therapy systems?",
  "What makes NerveSpa unique?",
  "How does the NerveSpa family of products work together?",
  "Can patients purchase NerveSpa directly?",
  "Are starter kits or bundles available for clinics?",
  "Are NerveSpa programs difficult to implement?",
  "How long is a typical NerveSpa program?",
  "Is NerveSpa safe for most patients?",
  "Does NerveSpa offer training for clinics?",
  "How do clinics contact NerveSpa for support?",
  "Does NerveSpa replace medical treatment?",
  "Who determines if a patient is a good candidate for NerveSpa?",
  "Does NerveSpa support insurance reimbursement?",
  "What is HCPCS code E0720?",
  "How quickly are products shipped?",
  "Can NerveSpa be combined with in-clinic treatments?",
  "What outcomes do patients commonly report?",
  "Can patients travel with NerveSpa devices?",
  "What is the NerveSpa Nerve Bath?",
  "How does the NerveSpa Nerve Bath work?",
  "How should the NerveSpa Nerve Bath be set up?",
  "How long is a typical NerveSpa Nerve Bath session?",
  "How often should the NerveSpa Nerve Bath be used?",
  "Why water-based therapy for the NerveSpa Nerve Bath?",
  "What improvements do patients report with the NerveSpa Nerve Bath?",
  "What consumables does the NerveSpa Nerve Bath use?",
  "What are NerveSpa conductive foot pads, socks, and gloves?",
  "How are the NerveSpa conductive foot pads and gloves used in therapy?",
  "Who should not use NerveSpa conductive garments?",
  "What is the NerveSpa Quake Plate?",
  "How do I set up and use the Quake Plate?",
  "How long and how often should I use the Quake Plate?",
  "Who should not use the Quake Plate?",
  "What is the NerveBeam LED Light Therapy Wrap?",
  "How is the NerveBeam LED Wrap used?",
  "Who should not use the NerveBeam LED Wrap?",
  "What outcomes are expected with LED wrap therapy?",
  "What is the NerveBeam Cold Laser?",
  "How is the NerveBeam Cold Laser used?",
  "Who should not use the NerveBeam Cold Laser?",
  "What outcomes are expected with Cold Laser therapy?",
  "What is the Knee Pro?",
  "How is the Knee Pro used?",
  "Who should not use the Knee Pro?",
  "What outcomes are expected with the Knee Pro?",
  "What is the Shoulder Pro?",
  "How is the Shoulder Pro used?",
  "Who should not use the Shoulder Pro?",
  "What outcomes are expected with the Shoulder Pro?",
  "What is the PowerWrap?",
  "How is the PowerWrap used?",
  "Who should not use the PowerWrap?",
  "What outcomes are expected with PowerWrap therapy?",
  "What are the NerveSpa Performance Diabetic Socks?",
  "How do I put on the Diabetic Socks correctly?",
  "How should the Diabetic Socks be washed or cared for?",
  "Can the Diabetic Socks be worn all day?",
  "What is the NerveSpa Neuropathy Program?",
  "How does the Neuropathy Program work?",
  "What devices are used in the Neuropathy Program?",
  "Do patients need all the devices in the Neuropathy Program?",
  "How long does the Neuropathy Program take?",
  "Why is consistency important in the Neuropathy Program?",
  "What happens after the initial Neuropathy Program is completed?",
  "Can the Neuropathy Program be adjusted over time?",
  "How do supplements fit into the Neuropathy Program?",
  "Can supplements be used alone without devices?",
  "How long is a typical Nerve Bath session?",
  "Can the Nerve Bath be used with other devices the same day?",
  "What should patients feel during a Nerve Bath session?",
  "How often should the Quake Plate be used?",
  "How long should a Quake Plate session last?",
  "Can Quake Plate be used with other neuropathy devices?",
  "What should patients feel during Quake Plate therapy?",
  "How often should the NerveBeam LED Wrap be used?",
  "How long is an LED Wrap session?",
  "What should patients feel during LED Wrap therapy?",
  "How should the LED Wrap be positioned for treatment?",
  "Who should not use the LED Wrap?",
  "How often should the NerveBeam Cold Laser be used?",
  "How long is a Cold Laser session?",
  "How should the Cold Laser be positioned during treatment?",
  "What should patients feel during Cold Laser therapy?",
  "Who should not use the Cold Laser?",
  "Can Cold Laser be combined with other neuropathy modalities?",
  "What supplements are commonly used in the Neuropathy Program?",
  "When should Nerve Rebuilder be taken?",
  "When should Nerve Regeneration be taken?",
  "When should Blood Flow Super Formula be taken?",
  "How do supplements support the Neuropathy Program?",
  "What is the NerveSpa Joint & Mobility Program?",
  "How does the Joint & Mobility Program work?",
  "What devices are used in the Joint & Mobility Program?",
  "How long does the Joint & Mobility Program take?",
  "Can the Joint & Mobility Program be adjusted over time?",
  "How often should patients use the Knee Pro?",
  "How long is a Knee Pro session?",
  "Can Knee Pro be used with other joint therapies?",
  "What should patients feel during Knee Pro therapy?",
  "How often should patients use the Shoulder Pro?",
  "How long is a Shoulder Pro session?",
  "Can Shoulder Pro be used with other joint therapies?",
  "What should patients feel during Shoulder Pro therapy?",
  "What joint supplements are commonly used in the Joint & Mobility Program?",
  "When should Super Flex Joint Formula \u2013 Rebuild + Maintain be used?",
  "When should OA & RA Relief Cream be used?",
  "When should Nerve Target Roll-On be used?",
  "How do joint supplements fit into the Joint & Mobility Program?",
  "Can joint supplements be used alone without devices?",
  "What is the PowerWrap used for in the Clinical Program?",
  "How long is a PowerWrap session?",
  "How often can I use PowerWrap in a day?",
  "What power level should I start with on PowerWrap?",
  "How do I choose Constant vs Pulse mode on PowerWrap?",
  "What are the key safety rules for PowerWrap use?",
  "Can PowerWrap be combined with other therapies?",
  "What is NerveWave used for in the Clinical Program?",
  "How do I start a program on NerveWave?",
  "What intensity should NerveWave be set to?",
  "What is the recommended schedule for NerveWave regenerative pain control?",
  "How is NerveWave typically used for neuropathy?",
  "What is the recommended schedule for NerveWave restorative recovery?",
  "How does NerveWave track usage?",
  "Can NerveWave be used with accessory tools?",
  "What is the recommended schedule for NerveWave vagus nerve therapy?",
  "How long should Vibe be used in a typical session?",
  "How is Vibe typically used within a clinical plan?",
  "What should I do if my Nerve Bath device is frozen?",
  "What if there is no stimulation or weak stimulation in the Nerve Bath?",
  "What if the Nerve Bath device does not power on?",
  "What if stimulation stops or the program ends short of 30 minutes?",
  "What should I do if the LED Wrap lights are flickering or powering down early?",
  "Which treatment mode should I use on the LED Wrap?",
  "What should I avoid doing with the LED Wrap?",
  "How do I power the Knee Pro on/off and change modes?",
  "What if I\u2019m having issues with stimulation on Knee Pro?",
  "What should I know before using the Quake Plate?",
  "What if the Quake Plate makes a loud grinding noise?",
  "What if the Quake Plate remote does not work?",
  "What battery does the Quake Plate remote use?",
  "What should I do if stimulation feels weak with conductive socks or gloves?",
  "How do I clean conductive socks, gloves, or garments?",
  "How often should conductive garments be replaced?",
  "What should I do if the Cold Laser does not turn on?",
  "What if the Cold Laser shuts off during treatment?",
  "What should I do if the LED Wrap does not turn on?",
  "What if the LED Wrap lights flicker during use?",
  "What should I do if the LED Wrap powers down early?",
  "How do I clean the LED Wrap?",
  "What should I do if the PowerWrap does not turn on?",
  "What should I do if my skin feels too sensitive after PowerWrap use?",
  "What if the PowerWrap remote does not respond?",
  "What should I do if NerveWave does not power on?",
  "What if I feel no sensation during NerveWave use?",
  "What should I do if NerveWave stimulation feels too strong?",
  "What if the electrodes are not sticking properly?",
  "How do I place electrodes correctly?",
  "What should I do if NerveWave shuts off during treatment?",
  "What should I do if the Vibe device does not turn on?",
  "What if the Vibe stops during a session?",
  "What should patients feel during Vibe use?",
  "What should I do if Knee Pro does not power on?",
  "What if stimulation feels weak on Knee Pro?",
  "How do I change Knee Pro modes?",
  "What should I do if Shoulder Pro does not power on?",
  "What if stimulation feels weak on Shoulder Pro?",
  "How do I change Shoulder Pro modes?",
  "What if I feel little or no sensation during a Nerve Bath session?",
  "What should I do if the Nerve Bath unit does not turn on?",
  "Is tingling or warmth normal during a Nerve Bath session?",
  "What if the LED wrap does not turn on?",
  "What should I feel during LED wrap therapy?",
  "What if the Cold Laser does not activate?",
  "What should I feel during Cold Laser therapy?",
  "What if the Quake Plate feels too intense?",
  "What if the Quake Plate does not start vibrating?",
  "Is muscle fatigue normal after using the Quake Plate?",
  "What should I do if the PowerWrap does not power on?",
  "What if PowerWrap feels uncomfortable during use?",
  "What if I feel little or no sensation during NerveWave use?",
  "What should I feel during a NerveWave session?",
  "What if NerveWave does not turn on?",
  "When should I contact support for device issues?",
  "What if my device will not charge?",
  "What if my device turns off during use?",
  "What if stimulation feels too strong or uncomfortable?",
  "What if stimulation feels too weak?",
  "Can I continue treatment if I experience skin irritation?",
  "What if my conductive socks or garments do not work properly?",
  "How do I clean conductive garments?",
  "Where can I find setup guides and manuals?",
  "What if I feel no sensation during a Nerve Bath session?",
  "What if the water feels too hot or uncomfortable?",
  "What if the unit does not power on?",
  "What if stimulation feels uneven between hands or feet?",
  "What if the PowerWrap does not turn on?",
  "What if the wrap feels too warm?",
  "What if I do not feel stimulation with NerveWave?",
  "What if electrodes lose adhesion during use?",
  "What if the NerveWave unit will not power on?",
  "What if the Vibe device does not start?",
  "What if vibration feels uncomfortable?",
  "What if the Knee Pro does not deliver sensation?",
  "What if the Knee Pro strap feels too tight or loose?",
  "What if the Shoulder Pro feels uncomfortable during use?",
  "What if the Shoulder Pro does not power on?",
  "What if I don\u2019t feel stimulation in the water?",
  "What if stimulation feels uneven between feet or hands?",
  "What if the unit shuts off during a session?",
  "What if the Cold Laser does not emit light?",
  "What if treatment feels ineffective?",
  "What if vibration feels too intense?",
  "What if the Quake Plate does not power on?",
  "What if conductive socks or gloves feel dry during use?",
  "What if stimulation cuts in and out when using conductive garments?",
  "What if the garment no longer conducts stimulation well?",
  "What if Knee Pro shuts off during a session?",
  "What if the Knee Pro feels uncomfortable around the knee?",
  "What if the Shoulder Pro shifts during use?",
  "What if the Shoulder Pro shuts off unexpectedly?",
  "What if the screen does not respond or freezes?",
  "What if lead wires appear damaged?",
  "When should I stop treatment and contact my provider?",
  "What if a device will not power on?",
  "What if stimulation feels weaker than expected?",
  "What if the device becomes warm during use?",
  "What if an error message appears on the screen?",
  "What if the battery drains faster than expected?",
  "What if accessories are lost or damaged?",
  "Can devices be shared between patients?",
  "How should devices be cleaned after use?",
  "When should I contact NerveSpa support?",
  "What if there is no sensation during a NerveSpa Nerve Bath session?",
  "What if the sensation feels uneven between feet or hands?",
  "What if the water feels too warm or too cool?",
  "What if the session stops",
  "What if the session stops before 30 minutes?",
  "What if the device will not power on?",
  "What if stimulation feels too strong?",
  "What if the wrap shuts off during a session?",
  "What if I do not feel anything during treatment?",
  "What if the Cold Laser does not power on?",
  "What if the laser shuts off during treatment?",
  "What if I do not feel any sensation from the laser?",
  "What should I do if the device overheats?",
  "What if the wrap does not stay secured?",
  "What if the LEDs appear dim?",
  "What if the Knee Pro does not power on?",
  "What if the stimulation feels too strong?",
  "What if the stimulation feels too weak?",
  "How do clinics measure patient engagement with NerveSpa?",
  "What non-diagnostic indicators can providers monitor when using NerveSpa?",
  "How does NerveSpa support patient-reported comfort or function tracking?",
  "Can clinics document changes in patient experience over time with NerveSpa?",
  "Does NerveSpa provide usage or adherence data to clinics?",
  "How can providers discuss progress with patients without making medical claims?",
  "What types of patient feedback are most commonly reported with NerveSpa use?",
  "How should front-desk staff explain NerveSpa to patients in simple terms?",
  "What should staff say if a patient asks whether NerveSpa replaces medical treatment?",
  "How should staff respond if a patient asks whether NerveSpa is FDA approved?",
  "What should staff say if a patient asks about insurance coverage?",
  "How should staff explain home use versus in-clinic guidance?",
  "What is the best way for staff to set expectations before a patient begins using NerveSpa?",
  "How should staff handle common patient misconceptions about NerveSpa?",
  "How is NerveSpa different from consumer-grade nerve stimulation devices?",
  "What makes NerveSpa a clinic-grade system rather than a retail product?",
  "Why do clinics choose NerveSpa over generic home wellness devices?",
  "How does NerveSpa integrate into existing clinical workflows?",
  "What design principles guide the NerveSpa system?",
  "How does NerveSpa support consistency and repeatability in patient use?",
  "When should clinics pause or discontinue use of NerveSpa?",
  "What should providers do if a patient reports discomfort during use?",
  "When should a clinic contact NerveSpa support versus handling an issue internally?",
  "What situations require clinical judgment before continuing NerveSpa use?",
  "Are there any patient scenarios where NerveSpa may not be appropriate?",
  "How does NerveSpa support safe use alongside other clinical modalities?",
  "Is NerveSpa available outside the United States?",
  "Are international certifications or markets planned for NerveSpa?",
  "Can clinics outside the U.S. request information or express interest?",
  "How does NerveSpa evaluate expansion into new regions or care settings?",
  "Show me a demo",
  "Show me demos for all devices",
  "Show me a demo for Footbath",
  "Show me a demo for Conductive Garments",
  "Show me a demo for LED Wrap",
  "Show me a demo for Power Wrap",
  "Show me a demo for QuakePlate",
  "Show me a demo for Knee Pro",
  "Show me a demo for Shoulder Pro",
  "Troubleshoot Knee Pro",
  "Troubleshoot Shoulder Pro",
  "How do I clean and store Knee Pro?",
  "How do I clean and store Shoulder Pro?",
  "How long is a QuakePlate session?",
  "How often should QuakePlate be used?",
  "How do I clean and maintain the conductive garments?",
  "How often should the LED Wrap be used?",
  "How often should the Power Wrap be used?",
  "Troubleshoot QuakePlate",
  "contact info",
  "phone number",
  "email id",
];

// Synonym map for common variants
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

// Helper function to normalize text
function normalize(text) {
  if (!text) return "";
  let base = text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Replace synonyms
  let words = base.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (synonyms[words[i]]) {
      words[i] = synonyms[words[i]];
    }
  }
  return words.join(" ");
}

// Simple stemmer
function stem(w) {
  if (w.length <= 3) return w;
  return w.replace(/(ing|ly|ed|er|es|s|ion)$/, "");
}

// Calculate Levenshtein Distance to allow minor typos
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

function getSemanticScore(input, target) {
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

// Normalize the incoming input
const cleanIncoming = normalize(incomingQuestion);
const thresholdLev = Math.max(3, Math.floor(cleanIncoming.length * 0.15));

let isMatch = false;
let bestMatchStr = "";
let bestScoreFound = 0;

for (const q of predefinedQuestions) {
  const qNorm = normalize(q);
  const dist = levenshteinDistance(cleanIncoming, qNorm);
  const semanticScore = getSemanticScore(incomingQuestion, q);

  if (semanticScore > bestScoreFound) {
    bestScoreFound = semanticScore;
    bestMatchStr = q;
  }

  if (dist <= thresholdLev || semanticScore >= 0.55) {
    isMatch = true;
    // We do not break immediately so we can find the absolute best semantic match
  }
}

let outputValue = isMatch ? "0" : "1";
let finalQuestion = isMatch ? bestMatchStr : incomingQuestion;

// Return the output in n8n format
return [
  {
    json: {
      result: outputValue,
      chatInput: finalQuestion,
    },
  },
];
