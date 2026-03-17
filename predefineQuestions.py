import math
import re
import difflib

# === 1. Predefined Questions List ===
PREDEFINED_QUESTIONS = [
    "What is NerveSpa?",
    "Can you explain what NerveSpa?",
    "Can you explain what the NerveSpa system actually is?",
    "Could you describe what NerveSpa?",
    "Tell me about NerveSpa",
    "Explain NerveSpa to me",
    "Who owns NerveSpa?",
    "How do providers implement NerveSpa?",
    "What conditions can NerveSpa support?",
    "How can clinics order NerveSpa or request a demo?",
    "What are NerveSpa’s pricing options?",
    "Is NerveSpa FDA-registered?",
    "Is NerveSpa covered by insurance?",
    "What warranty and return policy does NerveSpa offer?",
    "Where is NerveSpa manufactured?",
    "How long has PMT been in business?",
    "Where can FDA listings be verified?",
    "What certifications does PMT hold?",
    "Does NerveSpa replace medical care?",
    "Who decides if NerveSpa is appropriate?",
    "Do I need a prescription for NerveSpa?",
    "Is NerveSpa a US based company?",
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
    "When should Super Flex Joint Formula – Rebuild + Maintain be used?",
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
    "What if I’m having issues with stimulation on Knee Pro?",
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
    "What if my skin feels too sensitive after PowerWrap use?",
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
    "What if the Nerve Bath unit does not turn on?",
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
    "What if I don’t feel stimulation in the water?",
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
    "Where do I download the user manual?",
    "Where do I download the user manual for all devices?",
    "Where do I download the user manual for Footbath?",
    "Where do I download the user manual for Conductive Garments?",
    "Where do I download the user manual for LED Wrap?",
    "Where do I download the user manual for Power Wrap?",
    "Where do I download the user manual for QuakePlate?",
    "Where do I download the user manual for Knee Pro?",
    "Where do I download the user manual for Shoulder Pro?",
    "all",
    "quick-start guide",
    "guide",
    "Footbath",
    "Conductive Garments",
    "LED Wrap",
    "Power Wrap",
    "QuakePlate",
    "Knee Pro",
    "Shoulder Pro",
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
    "Where can I read your privacy policy?",
    "Where can I read your terms and conditions?",
    "Do you have an FAQ page I can browse?",
    "How will my items be shipped?",
    "When will my order arrive?",
    "How do I pay for my order?",
    "Why did my order fail?",
    "Do you charge sales tax?",
    "Is my product under warranty?",
    "How do I file a warranty claim?",
    "I don't want this product, can I return my order?",
    "How do I return my order?",
    "How long to charge and how to maintain the battery?",
    "How much water to add?",
    "Do the carbon rubber pads need replaced?",
    "How often should I use the NerveSpa?",
    "What do the modes do?",
    "Why is it recommended to rotate the pads from treatment to treatment?",
    "Which light therapy device should I purchase?",
    "Can I use two LED therapy wraps at the same time?",
    "Will my insurance cover the NerveSpa?",
    "What is the HCPCS code for the NerveSpa?",
    "Do you ship internationally?",
    "Do you ship to Canada?"
]

# === 2. Configuration & Helpers ===
SYNONYMS = {
    "made": "manufactured", "produced": "manufactured", "created": "manufactured", "built": "manufactured", "origin": "manufactured",
    "cost": "pricing", "pay": "pricing", "price": "pricing", "purchase": "pricing", "buy": "pricing", "amount": "pricing",
    "clinics": "clinic", "providers": "clinic", "provider": "clinic", "practice": "clinic", "medical": "clinic", "doctor": "clinic", "physician": "clinic",
    "offering": "start", "begin": "start", "setup": "set", "starting": "start", "ordering": "order",
    "usa": "us", "america": "us", "united": "us", "states": "us",
    "vibration": "quake plate", "platform": "quake plate", "vibrational": "quake plate",
    "knee": "knee pro", "shoulder": "shoulder pro",
    "laser": "cold laser", "led": "led wrap",
    "socks": "diabetic socks", "garments": "conductive garments",
    "bath": "nerve bath", "aquatic": "nerve bath", "water": "nerve bath", "footbath": "nerve bath",
    "participation": "consistency", "engagement": "consistency", "consistency": "repeatability",
    "issues": "conditions", "concerns": "conditions", "problems": "conditions", "symptoms": "conditions",
    "address": "support", "manage": "support", "help": "support",
    "supplies": "consumables", "materials": "consumables", "items": "consumables", "parts": "consumables",
    "canada": "internationally", "uk": "internationally", "europe": "internationally", "overseas": "internationally", "global": "internationally", "international": "internationally",
    "faq": "faq", "blog": "faq", "education": "faq", "newsletter": "faq",
    "bulk": "bulk pricing", "wholesale": "bulk pricing", "discount": "pricing", "coupon": "pricing", "veteran": "pricing", "senior": "pricing", "lease": "pricing",
    "hsa": "insurance", "fsa": "insurance",
    "paypal": "pay", "apple": "pay", "credit": "pay",
    "ship": "shipped", "shipping": "shipped", "track": "shipped", "tracking": "shipped", "arrive": "shipped", "delivery": "shipped", "po box": "shipped",
    "return": "return my order", "exchange": "return my order", "refund": "return my order", "cancel": "return my order",
    "damage": "warranty", "broken": "warranty", "repair": "warranty", "lifespan": "warranty",
    "video": "demo", "videos": "demo", "guide": "manuals", "manual": "manuals", "setup": "manuals",
    "locator": "contact", "chat": "contact", "human": "contact", "sales": "contact", "book": "contact", "callback": "contact", "person": "contact",
    "onboarding": "implement", "marketing": "implement", "multi-location": "clinic",
    "certification": "training", "credits": "training", "staff": "training",
    "schedule": "often", "morning": "often", "evening": "often", "exercise": "often", "tv": "often",
    "lotion": "pad", "intensity": "strong", "beginner": "strong",
    "both": "same", "household": "share", "sanitize": "clean", "store": "clean",
    "diagnose": "medical", "medication": "medical", "sore": "condition", "swelling": "condition", "blood": "condition", "cancer": "condition", "kidney": "condition", "allergy": "condition", "emergency": "medical", "plan": "program", "clinician": "medical",
    "tens": "compare", "gabapentin": "compare", "pregabalin": "compare", "physical": "compare", "massage": "compare", "acupuncture": "compare",
    "evidence": "certified", "research": "certified", "data": "certified", "outcome": "certified",
    "password": "login", "account": "login"
}

STOP_WORDS = {
    "a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it",
    "no", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this",
    "to", "was", "will", "with", "do", "does", "did", "can", "could", "should", "would",
    "i", "you", "he", "she", "we", "my", "your", "his", "her", "our",
    "how", "what", "why", "where", "when", "who", "has", "been", "hold", "just", "really", "very"
}

def normalize_text(text):
    if not text:
        return ""
    # split camel case
    base = re.sub(r'([a-z])([A-Z])', r'\1 \2', str(text)).lower()
    # remove non-alphanumeric
    base = re.sub(r'[^a-z0-9\s]', ' ', base)
    # replace multiple spaces
    base = re.sub(r'\s+', ' ', base).strip()
    
    words = base.split(" ")
    words = [SYNONYMS.get(w, w) for w in words]
    return " ".join(words)

def stem(word):
    if len(word) <= 3:
        return word
    # simple stemming to catch plurals and common suffixes consistently
    return re.sub(r'(ing|ly|ed|er|es|s|ion)$', '', word)

def get_tokens(text):
    norm = normalize_text(text)
    words = norm.split(" ")
    return [stem(w) for w in words if w and w not in STOP_WORDS]

# === 3. TF-IDF Pre-calculation ===
doc_count = len(PREDEFINED_QUESTIONS)
freq_map = {}

# Compute document frequencies
for q in PREDEFINED_QUESTIONS:
    tokens = set(get_tokens(q))
    for t in tokens:
        freq_map[t] = freq_map.get(t, 0) + 1

# Compute IDF
idf_weights = {}
for t, freq in freq_map.items():
    idf_weights[t] = math.log(doc_count / freq) + 1.0

# === 4. Semantic Similarity Engine ===
def get_semantic_score(input_text, target_text):
    tokens_input = get_tokens(input_text)
    tokens_target = get_tokens(target_text)
    
    if not tokens_input or not tokens_target:
        return 0.0
        
    weighted_intersection = 0.0
    total_input_weight = sum(idf_weights.get(t, 1.0) for t in tokens_input)
    total_target_weight = sum(idf_weights.get(t, 1.0) for t in tokens_target)
    
    matched_target_indices = set()
    
    for w1 in tokens_input:
        best_match_score = 0
        best_match_idx = -1
        w1_weight = idf_weights.get(w1, 1.0)
        
        for j, w2 in enumerate(tokens_target):
            if j in matched_target_indices:
                continue
                
            if w1 == w2:
                best_match_score = 1.0
                best_match_idx = j
                break
            elif len(w1) >= 4 and len(w2) >= 4:
                # Use difflib for string similarity
                similarity = difflib.SequenceMatcher(None, w1, w2).ratio()
                if similarity >= 0.75:
                    if similarity > best_match_score:
                        best_match_score = similarity
                        best_match_idx = j
                elif w1 in w2 or w2 in w1:
                    if 0.6 > best_match_score:
                        best_match_score = 0.6
                        best_match_idx = j
                        
        if best_match_idx != -1:
            weighted_intersection += best_match_score * w1_weight
            matched_target_indices.add(best_match_idx)
            
    input_coverage = weighted_intersection / total_input_weight if total_input_weight else 0
    target_coverage = weighted_intersection / total_target_weight if total_target_weight else 0
    
    final_score = (input_coverage * 0.7) + (target_coverage * 0.3)
    
    # Penalize weak matches on long queries
    if len(tokens_input) >= 4 and weighted_intersection < 2.5:
        final_score *= 0.5
        
    return final_score

def get_levenshtein_distance(s1, s2):
    if len(s1) > len(s2):
        s1, s2 = s2, s1
    distances = range(len(s1) + 1)
    for index2, char2 in enumerate(s2):
        new_distances = [index2 + 1]
        for index1, char1 in enumerate(s1):
            if char1 == char2:
                new_distances.append(distances[index1])
            else:
                new_distances.append(1 + min((distances[index1], distances[index1+1], new_distances[-1])))
        distances = new_distances
    return distances[-1]

# === 5. Main Execution within n8n Context ===
def main():
    try:
        # n8n provides variables like "items" or we use a defined input mechanism
        # Simulating n8n Python node retrieval
        # Accessing the first item's chatInput
        first_item = items[0] if 'items' in globals() and items else {}
        incoming_question = ""
        
        # Check standard n8n nested locations
        if "json" in first_item:
            if "query" in first_item["json"] and "chatInput" in first_item["json"]["query"]:
                incoming_question = first_item["json"]["query"]["chatInput"]
            elif "chatInput" in first_item["json"]:
                incoming_question = first_item["json"]["chatInput"]
                
        if not incoming_question:
            # Fallback if chatInput is missing to prevent crash
            incoming_question = ""

        # Normalize the incoming input
        clean_incoming = normalize_text(incoming_question)
        threshold_lev = max(3, int(len(clean_incoming) * 0.15))
        
        final_question = incoming_question
        best_match_question = ""
        best_score_found = 0
        is_match = False
        
        for q in PREDEFINED_QUESTIONS:
            q_norm = normalize_text(q)
            dist = get_levenshtein_distance(clean_incoming, q_norm)
            semantic_score = get_semantic_score(incoming_question, q)
            
            # Form heuristic
            current_heuristic = (1.0 if dist <= threshold_lev else 0) + semantic_score
            
            if current_heuristic > best_score_found:
                best_score_found = current_heuristic
                best_match_question = q
                
            # Decision threshold
            if dist <= threshold_lev or semantic_score >= 0.6:
                is_match = True
                
        if is_match and best_match_question:
            final_semantic = get_semantic_score(incoming_question, best_match_question)
            
            # Only snap if we are very confident
            if final_semantic >= 0.85:
                final_question = best_match_question
            else:
                final_question = incoming_question

        output_value = "0" if is_match else "1"
        
        return [
            {
                "json": {
                    "result": output_value,
                    "chatInput": final_question
                }
            }
        ]
        
    except Exception as e:
        # Fallback to pure pass-through upon error
        return [
            {
                "json": {
                    "result": "1",
                    "chatInput": incoming_question if "incoming_question" in locals() else "",
                    "error": str(e)
                }
            }
        ]

# n8n Python nodes require the output to be returned
return main()
