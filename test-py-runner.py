
items = [{'json': {'query': {'chatInput': 'What if stimulation feels too weak?'}, 'output': ''}}]

def to_python(value):
    return value

import re

# === Candidate questions (plain ASCII quotes) ===
CANDIDATE_QUESTIONS = [
"youtube",
  "What is NerveSpa?",
  "What conditions and symptoms can NerveSpa support?",
  "How can my clinic order NerveSpa or get a demo?",
  "What are NerveSpa’s pricing options?",
  "what is the difference between biphasic and monophasic waveforms",
  "What makes NerveSpa unique?",
  "Is NerveSpa FDA-registered?",
  "Is NerveSpa covered by insurance?",
  "Does NerveSpa replace medical care?",
  "How should the battery be maintained?",
  "What modes does the system use?",
  "Why water-based therapy?",
  "What improvements do patients report?",
  "What consumables are used with the system?",
  "What are NerveSpa Condtive Foot pads, socks and Gloves?",
  "How are the foot pad and gloves used in therapy?",
  "What is the NerveSpa QuakePlate?",
  "How is the QuakePlate used?",
  "Who should not use the QuakePlate?",
  "What outcomes are expected with the QuakePlate?",
  "What is the NerveSpa KneePro?",
  "How is the KneePro used?",
  "Who should not use the KneePro?",
  "What outcomes are expected with the KneePro?",
  "What is the NerveSpa ShoulderPro?",
  "How is the ShoulderPro used?",
  "Who should not use the ShoulderPro?",
  "What outcomes are expected with the ShoulderPro?",
  "What is the NerveSpa Vibe?",
  "How is the Vibe used?",
  "Who should not use the Vibe?",
  "What outcomes are expected with the Vibe?",
  "What topical products are part of NerveSpa?",
  "What is the Plantar Fasciitis & Heel Spur Cream?",
  "How should Plantar Fasciitis Cream be applied?",
  "What outcomes are expected from NerveSpa topicals?",
  "Are NerveSpa creams and roll-ons safe for everyone?",
  "How should NerveSpa creams and roll-ons be applied?",
  "Do topicals replace medical care?",
  "How do topicals integrate with the full NerveSpa system?",
  "Are demo resources available for creams and roll-ons?",
  "What support resources are available for providers?",
  "What resources are available for patients?",
  "How do clinics contact NerveSpa support?",
  "How do patients contact NerveSpa?",
  "How do clinics order or reorder supplies?",
  "How do patients receive consumables or supplements?",
  "What outcomes are expected from the QuakePlate?",
  "What outcomes are expected from the KneePro?",
  "What outcomes are expected from the ShoulderPro?",
  "What outcomes are expected from the Vibe?",
  "What outcomes are expected from supplements?",
  "Can supplements be combined with NerveSpa devices?",
  "Are supplements safe for everyone?",
  "what are ODF's and why are they effective",
  "What ingredients are in N1 Nerve+?",
  "How does N1 Nerve+ support improve nerve health?",
  "What makes the N1 Nerve+ oral dissolvable film unique?",
  "What ingredients are in N1 Skinny Blend?",
  "How does N1 Skinny Blend support weight management and metabolism?",
  "What ingredients are in N1 Gut Support?",
  "How does N1 Gut Support improve digestion and nutrient absorption?",
  "What makes N1 Gut Support unique?",
  "What ingredients are in the Super Flex Joint Formula?",
  "How does the Super Flex Joint Formula support joint health?",
  "What makes the Super Flex Joint Formula unique?",
  "What ingredients are in the Blood Flow Super Formula?",
  "How does the Blood Flow Super Formula support neuropathy and circulation?",
  "What makes the Blood Flow Super Formula unique?",
  "What ingredients are in the Nerve Rebuilder supplement?",
  "How does the Nerve Rebuilder support nerve health and regeneration?",
  "What makes the Nerve Rebuilder unique?",
  "What ingredients are in the ImmunityGut Super Formula?",
  "How does the ImmunityGut Super Formula support gut and immune health?",
  "What makes the ImmunityGut Super Formula unique?",
  "Why is compliance important for supplement outcomes?",
  "What is the Nerve Target Roll-On?",
  "How should the Nerve Target Roll-On be applied?",
  "What outcomes are expected from creams and roll-ons?",
  "Are topicals safe for everyone?",
  "Can topicals be used with other NerveSpa therapies?",
  "Do topicals replace oral supplements or devices?",
  "Why is compliance important for topical outcomes?",
  "What support resources exist for topical use?",
  "How do patients reorder creams and roll-ons?",
  "Do topicals require FDA clearance?",
  "Who is PMT in relation to NerveSpa?",
  "What certifications does PMT hold?",
  "Where are NerveSpa products manufactured?",
  "Where can FDA listings be verified?",
  "What is the NerveSpa return policy?",
  "Does NerveSpa replace medical treatment?",
  "Who determines how NerveSpa should be used?",
  "Do NerveSpa products require direct provider supervision?",
  "What should patients do if discomfort or side effects occur?",
  "What if stimulation feels weak?",
  "How quickly are products shipped?",
  "How are returns processed?",
  "How do clinics contact NerveSpa for support?",
  "What role do patients play in outcomes?",
  "Where can patients get NerveSpa creams and roll-ons?",
  "What support resources are available for topicals?",
  "What do patients say about creams and roll-ons?",
  "How do patients or clinics order topicals?",
  "Do providers or clinics receive training for topical use?",
  "Can topicals be used long-term?",
  "Does insurance cover consumables like salts or garments?",
  "What is HCPCS code E0720?",
  "How do clinics order NerveSpa?",
  "How do clinics bill insurance for NerveSpa?",
  "How do I set up a provider account?",
  "How much does NerveSpa cost for patients?",
  "Are there minimum order requirements?",
  "What products are included in a starter kit?",
  "Are bundles available for patients?",
  "Who should patients contact for technical issues?",
  "Are starter kits or bundles for clinics available?",
  "What outcomes are expected from bundles?",
  "What training do providers receive?",
  "How can patients learn proper use?",
  "What outcomes are expected from conductive garments?",
  "Is NerveSpa safe for everyone?",
  "What support resources are available?",
  "Can NerveSpa be used with other treatments?",
  "Can NerveSpa be used long-term?",
  "Can multiple NerveSpa modalities be used in the same day?",
  "What happens after the initial 60–90 day program?",
  "What lifestyle changes support NerveSpa therapy?",
  "What research supports NerveSpa therapies?",
  "Who decides if NerveSpa is appropriate?",
  "What should patients do if discomfort or side effects occur?",
  "What support resources are available for patients?",
  "Who should not use NerveSpa Creams and Roll-Ons?",
  "Can NerveSpa topicals be combined with device therapies?",
  "How do patients reorder NerveSpa supplements?",
  "How do patients reorder consumables like salts, electrodes, or lead wires?",
  "Can NerveSpa supplements be combined with device therapies?",
  "What lifestyle changes can support NerveSpa therapy?",
  "Contact",
  "phone number",
  "email",
  "Who should NOT use NerveSpa Hand & Footbath?",
  "What are NerveSpa Conductive Garments (gloves/socks)?",
  "How do I use the conductive gloves or socks?",
  "Who should NOT use the conductive garments?",
  "Who should NOT use NerveBeam?",
  "What is QuakePlate and what does it do?",
  "How do I use QuakePlate safely?",
  "Who should NOT use QuakePlate?",
  "What is NerveSpa Knee Pro?",
  "How do I set up Knee Pro?",
  "How do I care for Knee Pro electrodes and when to replace?",
  "What does Knee Pro therapy feel like?",
  "Who should NOT use Knee Pro?",
  "What is NerveSpa Shoulder Pro?",
  "How do I set up Shoulder Pro?",
  "How do I care for Shoulder Pro electrodes and when to replace?",
  "What does Shoulder Pro therapy feel like?",
  "Who should NOT use Shoulder Pro?",
  "Can children use NerveSpa products?",
  "Who do I contact for technical support?",
  "What is the turnaround time for repairs or replacements?",
  "What consumables come with NerveSpa systems?",
  "How do I reorder consumables and accessories?",
  "What results can I expect from using NerveSpa Footbath?",
  "What results can I expect from using Conductive Garments?",
  "What results can I expect from using QuakePlate?",
  "What results can I expect from using Knee Pro?",
  "What results can I expect from using Shoulder Pro?",
  "What does treatment feel like?",
  "How quickly will I notice improvements?",
  "Are results permanent?",
  "Can NerveSpa be combined with other therapies?",
  "Can I use NerveSpa if I have a pacemaker?",
  "Can I use NerveSpa during pregnancy?",
  "Can I sleep with a NerveSpa device running?",
  "Can NerveSpa products be used daily?",
  "Can NerveSpa help with arthritis?",
  "Is NerveSpa HSA/FSA eligible?",
  "Do I need a prescription for NerveSpa?",
  "Can NerveSpa replace my medications?",
  "How do I replace gel electrodes?",
  "How do I charge my NerveSpa device?",
  "How do I troubleshoot if my device will not power on?",
  "Can I travel with my NerveSpa device?",
  "Are NerveSpa products FDA cleared?",
  "Do NerveSpa products come with instructions?",
  "How do I access NerveSpa demo videos?",
  "Can I share my NerveSpa device with others?",
  "Are there clinical studies on NerveSpa?",
  "What is included in the starter kit for each product?",
  "How do I know which NerveSpa product is right for me?",
  "Can I combine multiple NerveSpa therapies?",
  "What are the benefits of red vs infrared light?",
  "What is the difference between NerveSpa Footbath and Conductive Garments?",
  "Can I use QuakePlate together with Footbath?",
  "How do I know if my electrodes are still effective?",
  "Can I use NerveSpa with compression socks or braces?",
  "Are there side effects from NerveSpa?",
  "What precautions should I take before starting therapy?",
  "Can I return a NerveSpa product if it doesn’t work for me?",
  "What conditions does NerveSpa support?",
  "Are NerveSpa products safe to use with medications?",
  "Do NerveSpa devices need calibration?",
  "Where can I find NerveSpa product manuals?",
  "Where can I watch NerveSpa YouTube videos?",
  "Can I get medical advice from NerveSpa?",
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
  "Welcome (Clinic)",
  "Main Menu (Clinic)",
  "Choose a device",
  "Troubleshoot QuakePlate",
  "Show videos",
  "Product video",
  "How do providers prescribe or implement NerveSpa?",
  "How long is a typical session?",
  "How often should the system be used?",
  "How do providers determine which topical to recommend?",
  "Can topicals be used in clinics during therapy sessions?",
  "How are supplements usually prescribed?",
  "Do providers need to prescribe topicals?",
  "How do providers bill insurance for NerveSpa?",
  "Do providers prescribe supplements or can patients self-select?",
  "How often should conductive garments be used?",
  "How long is a NerveBeam session?",
  "How long is a Knee Pro session and what are the modes?",
  "How often should Knee Pro be used?",
  "How long is a Shoulder Pro session and what are the modes?",
  "How often should Shoulder Pro be used?",
  "Is NerveSpa safe for seniors to use at home?",
  "How do I store NerveSpa products between sessions?",
  "How often should consumables be replaced?",
  "How long is the warranty period?",
  "Can I use QuakePlate before or after Knee/Shoulder Pro sessions?",
  "Can NerveSpa devices be used in clinics or only at home?",
  "What should I do if I feel discomfort during a session?",
  "How long do NerveSpa devices typically last?",
  "How long is a QuakePlate session?",
  "How often should QuakePlate be used?",
  "How often should the LED Wrap be used?",
  "How often should the Power Wrap be used?",
  "is 22,000 mW power coming out of LED's more effective therapeuticaly than 12000mW power coming out of lasers?",
  "What are the pros and cons of a Wrappable LED device vs. a physical hard device",
  "Does the LED wrap Produce a lot of heat",
  "Why doesnt the LED wrap have higher Joules",
  "The Health Light LED device markets a high amount of joules, why doesnt the nerve beam have as high joules?",
  "What are NerveSpa LED Wraps?",
  "Who should not use  Wraps?",
  "What is the NerveBeam LED Light Therapy Wrap?",
  "How is the NerveBeam LED Wrap used?",
  "Who should not use the NerveBeam LED Wrap?",
  "What is the NerveBeam Cold Laser?",
  "How is the Cold Laser used?",
  "Who should not use the Cold Laser?",
  "What is the PowerWrap?",
  "How is the PowerWrap used?",
  "Who should not use the PowerWrap?",
  "What outcomes are expected with Cold Laser or PowerWrap therapy?",
  "What outcomes are expected with Wrap therapy?",
  "What outcomes are expected from the LED Wrap?",
  "What outcomes are expected from the Cold Laser?",
  "What outcomes are expected from the PowerWrap?",
  "What if the LED Wrap does not light?",
  "What if Wraps feel uncomfortable?",
  "What outcomes are expected from Wraps?",
  "Who should not use NerveSpa Wraps?",
  "What is NerveBeam (LED/Power Wrap)?",
  "How do I use the NerveBeam LED/Power Wrap?",
  "How do I clean and store the NerveBeam wrap?",
  "What accessories are included with each system?",
  "What results can I expect from using NerveBeam LED/Power Wraps?",
  "How do I clean and maintain NerveBeam wraps?",
  "What is the difference between LED Wrap and Power Wrap?",
  "What accessories require replacement most often?",
  "What is the NerveSpa Hand & Foot Neuropathy System?",
  "How does the Hand & Foot Neuropathy System work?",
  "How should the Hand & Foot Neuropathy System be set up?",
  "What is the Nerve & Neuropathy Cream?",
  "How should the Nerve & Neuropathy Cream be applied?",
  "Who should not use the Nerve & Neuropathy Cream?",
  "What outcomes are expected with the Nerve & Neuropathy Cream?",
  "What is the Osteoarthritis & RA Cream?",
  "How should the OA/RA Cream be applied?",
  "Who should not use the OA/RA Cream?",
  "What outcomes are expected with the OA/RA Cream?",
  "What is the Nerve Target Roll-On Pain Relief?",
  "How should the Roll-On Pain Relief be applied?",
  "Who should not use the Roll-On Pain Relief?",
  "What outcomes are expected with the Roll-On Pain Relief?",
  "What outcomes are expected from the Hand & Foot Neuropathy System?",
  "What ingredients are in the Nerve & Neuropathy Cream?",
  "How does the Nerve & Neuropathy Cream provide relief?",
  "What ingredients are in the Osteoarthritis & RA Cream?",
  "How does the Osteoarthritis & RA Cream provide relief?",
  "What if the Hand & Foot Neuropathy System does not power on?",
  "What is the Osteoarthritis & Rheumatoid Arthritis (OA/RA) Cream?",
  "How should the OA/RA Cream be used?",
  "Can NerveSpa be used if I have open wounds or skin conditions?",
  "What warranty and return policy does NerveSpa offer?",
  "Are topicals covered by warranty or return policies?",
  "What warranty does NerveSpa offer?",
  "How does NerveSpa ensure safety?",
  "How do I clean and maintain QuakePlate?",
  "How do I register my NerveSpa product for warranty?",
  "What is included in the warranty?",
  "How do I clean and maintain the NerveSpa Footbath?",
  "How do I clean and maintain the conductive garments?",
  "How do I clean and store Knee Pro?",
  "How do I clean and store the Shoulder Pro?",
  "How do I clean and maintain the conductive garments?",
  "Who owns NerveSpa?",
  "How do providers implement NerveSpa?",
  
  "How can clinics order NerveSpa or request a demo?",
  "Where is NerveSpa manufactured?",
  "How long has PMT been in business?",
  "How does NerveSpa compare to other nerve therapy systems?",
  "How does the NerveSpa family of products work together?",
  "Can patients purchase NerveSpa directly?",
  "Are starter kits or bundles available for clinics?",
  "Are NerveSpa programs difficult to implement?",
  "How long is a typical NerveSpa program?",
  "Is NerveSpa safe for most patients?",
  "Does NerveSpa offer training for clinics?",
  "Who determines if a patient is a good candidate for NerveSpa?",
  "Does NerveSpa support insurance reimbursement?",
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
  
  "How do I set up and use the Quake Plate?",
  "How long and how often should I use the Quake Plate?",
  
  "What outcomes are expected with LED wrap therapy?",
  "How is the NerveBeam Cold Laser used?",
  "Who should not use the NerveBeam Cold Laser?",
  "What outcomes are expected with Cold Laser therapy?",
  "What is the Knee Pro?",
  "How is the Knee Pro used?",
  "Who should not use the Knee Pro?",
  
  "What is the Shoulder Pro?",
  
  
  
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
'What conditions can NerveSpa support?',
  'What is the NerveSpa Quake Plate?',
  'Who should not use the Quake Plate?',
  'What outcomes are expected with the Knee Pro?',
  'How is the Shoulder Pro used?',
  'Who should not use the Shoulder Pro?',
  'What outcomes are expected with the Shoulder Pro?',
  'How often should the Quake Plate be used?',
  'What if the stimulation feels too weak?',
  'What if the Knee Pro stimulation feels too strong?'
]


# Injecting new products dynamically
CANDIDATE_QUESTIONS.extend([
    "What is (1pk) Effervescent Tablets?",
    "What is Carbon Rubber Electrodes?",
    "What is Epsom Salt - 8oz jar?",
    "What is LAVENDER SCENTED EPSOM SALT - 8OZ JAR?",
    "What is N1-Nerve+ Neuropathy Support?",
    "What is NERVESPA SILVER CONDUCTIVE GLOVE - HAND GARMENT SYSTEM?",
    "What is NERVESPA SILVER CONDUCTIVE SOCK - FOOT GARMENT SYSTEM?",
    "What is NERVESPA PRO - 60 DAY SUPPLY PROGRAM?",
    "What is NERVESPA PRO - 90 DAY SUPPLY PROGRAM?",
    "What is NERVESPA PRO, HAND AND FOOT NEUROPATHY SYSTEM - 90 DAY SUPPLY PROGRAM - DUAL CHANNEL DEVICE?",
    "What is Nerve & Neuropathy Cream by NerveSpa - Maximum Strength Relief..?",
    "What is Nerve & Neuropathy Support Kit (Includes: Blood Flow Drink powder, Neuropathy Capsules, Nerve ODF, Nerve Cream)?",
    "What is Nerve Spa Foot bath Supply Kit?",
    "What is Nerve Spa Performance diabetic Socks?",
    "What is Nerve Spa performance Supplement?",
    "What is NerveSpa Classic, Hand and Foot Pain Relief System - 10 DAY SUPPLY PROGRAM?",
    "What is Replacement Charger cord for The NerveBeam cold laser?",
    "What is Replacement Charger cord for The Quake Plate?",
    "What is Replacement Charger for The NerveBeam LED Light Therapy Wrap?",
    "What is Replacement Charger for the Nerve Spa Nerve Bath System?",
    "What is Replacement lead wires for Nerve Spa?",
    "What is The 90-Day Neuropathy Program?",
    "What is The Blood Flow Super formula Drink Powder by Nerve Spa?",
    "What is The NerveBeam Cold Laser?",
    "What is The NerveBeam LED Light Therapy Wrap - Red & Infrared light therapy?",
    "What is The Quake Plate Vibrational Massage Therapy?",
    "What is Joint Heath Support Kit (Includes: Joint Drink Powder, OA Cream)?",
    "What is Nerve Spa Knee Pro - Advanced OA/RA treatment Device - Size: Fits Small to Large?",
    "What is Nerve Spa Knee Pro - Replacement Pads - 3 x VB35 and 3 x VBKnee?",
    "What is Nerve Spa Shoulder Pro?",
    "What is NerveSpa Knee Pro - 180 day supply kit?",
    "What is NerveSpa Knee Pro Size Extender Straps (1 pair) _ XL-XXL?",
    "What is Osteoarthritis and Rheumatoid Arthritis Cream?",
    "What is Roll On Pain Relief by Nerve Target - Roll On Muscle Pain Reliever, Back Pain, Arthritis..?",
    "What is Super Flex Joint Formula Drink Powder by NerveSpa - Joint Support Supplement..?",
    "What is ImmunoGut Super Formula: Essential Immunity & Gut Support | Vitamin D, Zinc, Beta Glucan | Detox & Stress Relief | 480g Powder, 60 Servings?",
    "What is N1 - Gut Support with probiotics?",
    "What is N1 - Skinny Blend?",
    "What is Nerve Spa Vibe | Deep Tissue Vibrational Massager with Attachement Heads..?",
    "What is Nerve Wave 2.5 Rd Clinical Grade Electrode?",
    "What is Nerve Wave by Nerve Spa - Clinical Nerve Spa Multi-Modality Treatment Device?",
    "What is The Power Wrap - Ultra-High Powered LED COLD LASER..?",
])
CANDIDATE_QUESTIONS.extend([
    
    
    
    
    
    
    
    
    
])

# === Helpers ===
def to_python(value):
    """Convert JsProxy-like objects to native Python when possible."""
    try:
        return value.to_py()
    except Exception:
        return value

_word_regex = re.compile(r"\b[\w']+\b", re.UNICODE)

def words_set(s):
    """Return normalized set of words from a string (lowercase, alnum + apostrophe)."""
    if not s:
        return set()
    s = str(s).lower()
    return {w for w in _word_regex.findall(s) if len(w) > 0}

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
print(output_items)

