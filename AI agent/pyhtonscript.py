import re

# === Candidate questions (plain ASCII quotes) ===
CANDIDATE_QUESTIONS = [
    "youtube",
    "What is NerveSpa?",
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
]

# === Helpers ===
def to_python(value):
    """Convert JsProxy-like objects to native Python when possible."""
    try:
        return value.to_py()
    except Exception:
        return value

_word_regex = re.compile(r"\b[\w']+\b", re.UNICODE)

_stop_words = {"a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with", "do", "does", "did", "can", "could", "should", "would", "i", "you", "he", "she", "we", "my", "your", "his", "her", "our", "how", "what", "why", "where", "when", "who", "has", "been", "hold", "us", "u", "s"}

def words_set(s):
    """Return normalized set of words from a string (lowercase, alnum + apostrophe), excluding stopwords."""
    if not s:
        return set()
    s = str(s).lower()
    return {w for w in _word_regex.findall(s) if len(w) > 0 and w not in _stop_words}

def normalize_text_for_compare(s):
    """Lowercase and strip surrounding punctuation/whitespace for simple comparisons."""
    if s is None:
        return ""
    s = str(s).strip().lower()
    s = re.sub(r'^[\W_]+|[\W_]+$', '', s)
    return s

def existing_bracketed_questions(text):
    """Return a set of existing bracketed questions normalized for duplicate checking."""
    if text is None:
        return set()
    found = re.findall(r'\[([^\]]+)\]', str(text))
    return {normalize_text_for_compare(q) for q in found}

def score_candidate(candidate_q, incoming_words):
    cand_words = words_set(candidate_q)
    overlap = cand_words & incoming_words
    return len(overlap), overlap

# === Get chatInput from the FIRST input item explicitly ===
chat_input_global = None
try:
    first_item = items[0] if items and isinstance(items, list) else {}
    chat_input_global = to_python(first_item.get("json", {}) .get("query", {}) .get("chatInput"))
except Exception:
    chat_input_global = None

# Normalized forms of chat_input for robust matching
chat_input_words = words_set(chat_input_global)
chat_input_norm = normalize_text_for_compare(chat_input_global) if chat_input_global else None

# If chat_input exactly matches any candidate by word-set equality, exclude that candidate
excluded_by_chat_input = set()
if chat_input_words:
    for c in CANDIDATE_QUESTIONS:
        if words_set(c) == chat_input_words or normalize_text_for_compare(c) == chat_input_norm:
            excluded_by_chat_input.add(normalize_text_for_compare(c))

# === Main processing ===
output_items = []

for item in items:
    incoming_json = to_python(item.get("json", {}) or {})

    # current output text
    raw_output = to_python(incoming_json.get("output", ""))

    # Remove chatInput occurrences from working_text ONLY if it exactly matched a candidate (to avoid bias).
    working_text = str(raw_output) if raw_output is not None else ""
    if chat_input_global and normalize_text_for_compare(chat_input_global) in excluded_by_chat_input:
        try:
            escaped = re.escape(str(chat_input_global))
            working_text = re.sub(escaped, "", working_text, flags=re.IGNORECASE)
        except Exception:
            working_text = working_text.replace(str(chat_input_global), "")

    # Prepare sets for matching and duplicate avoidance
    incoming_words = words_set(working_text)
    existing_qs_norm = existing_bracketed_questions(raw_output)

    # Score candidates while skipping existing/excluded ones
    scored = []
    for q in CANDIDATE_QUESTIONS:
        q_norm = normalize_text_for_compare(q)
        if q_norm in existing_qs_norm:
            continue
        if q_norm in excluded_by_chat_input:
            continue
        s, overlap = score_candidate(q, incoming_words)
        scored.append((s, q, overlap))

    # Select up to 4 with score >= 3 first (priority)
    high_match = [(s, q, ov) for s, q, ov in scored if s >= 3]
    high_match.sort(key=lambda x: (-x[0], CANDIDATE_QUESTIONS.index(x[1])))
    selected = []
    selected_norm = set()
    for s, q, ov in high_match:
        if len(selected) >= 3:
            break
        qn = normalize_text_for_compare(q)
        if qn in selected_norm:
            continue
        # Extra safety: never select if it matches chat_input by either measure
        if chat_input_global and (words_set(q) == chat_input_words or qn == chat_input_norm):
            continue
        selected.append(q)
        selected_norm.add(qn)

    # Fill remaining slots from remaining candidates by highest score (even if < 3)
    if len(selected) < 3:
        remaining = [(s, q, ov) for s, q, ov in scored if normalize_text_for_compare(q) not in selected_norm]
        remaining.sort(key=lambda x: (-x[0], CANDIDATE_QUESTIONS.index(x[1])))
        for s, q, ov in remaining:
            if len(selected) >= 3:
                break
            qn = normalize_text_for_compare(q)
            if qn in selected_norm:
                continue
            if chat_input_global and (words_set(q) == chat_input_words or qn == chat_input_norm):
                continue
            selected.append(q)
            selected_norm.add(qn)

    # Final fallback: fill from full candidate list (avoid existing/excluded/duplicates)
    if len(selected) < 3:
        for q in CANDIDATE_QUESTIONS:
            qn = normalize_text_for_compare(q)
            if qn in existing_qs_norm or qn in excluded_by_chat_input or qn in selected_norm:
                continue
            if chat_input_global and (words_set(q) == chat_input_words or qn == chat_input_norm):
                continue
            selected.append(q)
            selected_norm.add(qn)
            if len(selected) >= 3:
                break

    # Build bracketed strings ensuring we don't duplicate existing ones and not include excluded candidate
    to_append = []
    for q in selected:
        qn = normalize_text_for_compare(q)
        if qn in existing_qs_norm:
            continue
        if chat_input_global and (words_set(q) == chat_input_words or qn == chat_input_norm):
            continue
        to_append.append("[" + q + "]")

    to_append = to_append[:3]  # now append 4 questions

    # Append them to original text preserving format
    original_text = str(raw_output).rstrip()
    if not to_append:
        new_text = original_text
    else:
        trailing_brackets_match = re.search(r'(\s*(\[[^\]]+\]\s*)+)\s*$', original_text, re.DOTALL)
        if trailing_brackets_match:
            new_text = original_text + ''.join(to_append)
        else:
            new_text = original_text + "\n\n" + ''.join(to_append)

    # Build pure-Python json for return
    new_json = {}
    for k, v in incoming_json.items():
        new_json[k] = to_python(v)
    new_json["output"] = new_text

    # Optional debug metadata (uncomment to include in returned item for testing)
    # new_json["_chat_input_global"] = chat_input_global
    # new_json["_excluded_by_chat_input"] = list(excluded_by_chat_input)
    # new_json["_selected_questions"] = selected

    output_items.append({"json": new_json})

# REQUIRED by n8n: return list of dicts
return output_items
