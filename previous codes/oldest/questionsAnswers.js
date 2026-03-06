const incomingQuestion = $("Webhook").first().json.query.chatInput;

// JSON Q&A pairs
const qaPairs = [
  {
    question: "What is NerveSpa?",
    answer:
      "NerveSpa is a clinical-grade program with clinical grade modalities that specializes in neuropathy, joint pain, and metabolic supplementation. It combines aquatic nerve stimulation, high powered LED wraps, cold lasers, vibration therapy, supplements, and topicals. Products are manufactured in FDA-registered facilities and provided through licensed clinicians.\n[How do providers prescribe or implement NerveSpa?][What conditions and symptoms can NerveSpa support?][How can my clinic order NerveSpa or get a demo?]",
  },
  {
    question: "What conditions and symptoms can NerveSpa support?",
    answer:
      "NerveSpa is used for peripheral neuropathy, diabetic neuropathy, chemotherapy-related neuropathy, plantar fasciitis, heel spurs, restless legs, poor circulation, numbness, tingling, burning, stiffness, balance issues, cramps, cold feet, and general nerve discomfort.  As welll as arthritis (knee, shoulder, OA/RA) and other joint related ailments through our joint therapy devices.",
  },
  {
    question: "How can my clinic order NerveSpa or get a demo?",
    answer:
      "Clinics can open a provider account with NerveSpa to place orders or request demos. Starter kits and bundles are available. Patients cannot purchase directly but may obtain consumables and replacment parts through approved channels such as DoctorStore.com.\n[How do I set up a provider account?][How do clinics contact NerveSpa for support?]",
  },
  {
    question: "What are NerveSpa’s pricing options?",
    answer:
      "Nerve Spa is sold through clinics and doctors offices.  Pricing includes wholesale rates for providers (with options for bundles and starter kits) and retail pricing for patients on consumables only, such as salts, garments, and lead wires. Some devices may qualify for insurance coverage under HCPCS code E0720 depending on the plan.\n[Are bundles available for patients?]",
  },
  {
    question:
      "what is the difference between biphasic and monophasic waveforms",
    answer:
      "In biphasic current, current flows in both directions, so feeling current from the ground pad is normal.   Whereas in monophasic waveform, Current flows in one direction from the active electrode (+) to the ground electrode (-).  Typically current is felt from the active electrode.   While biphasic waveforms are common in the use of TENS units, and more comfortable on the surface of the skin, monophsic waveforms are more effective at pushing fluids and have a more therapeutic outcome.",
  },
  {
    question: "What makes NerveSpa unique?",
    answer:
      "NerveSpa integrates multiple clinical-grade modalities—aquatic electrotherapy, LED wraps, cold laser, vibration therapy—with supplements and topicals to support nerve and joint comfort. Its water-based stimulation provides even, circumferential coverage that pad-only systems can’t match.   In addition, Nerve Spa leverages proprietary programming, and heavy duty grade hardware with concentration significants in regards to power outputs.\n[Is NerveSpa FDA-registered?][How does the Hand & Foot Neuropathy System work?]",
  },
  {
    question: "Is NerveSpa FDA-registered?",
    answer:
      "NerveSpa products are FDA registered and/or cleared, and manufactured in FDA-registered facilities and distributed by PMT, an FDA-registered establishment. FDA registration confirms establishment and product listing; it is not an FDA clearance or approval of specific claims.\n[Is NerveSpa covered by insurance?][Where can FDA listings be verified?][What certifications does PMT hold?]",
  },
  {
    question: "Is NerveSpa covered by insurance?",
    answer:
      "Coverage varies by plan. Some providers bill eligible treatments under neuropathy programs; others use cash-pay, HSA/FSA, or memberships. Patients should check benefits with their insurer; clinic billing policies vary.\n[What is HCPCS code E0720?][Does insurance cover consumables like salts or garments?][How do providers bill insurance for NerveSpa?]",
  },
  {
    question: "Does NerveSpa replace medical care?",
    answer:
      "No. NerveSpa does not replace medical diagnosis or treatment. Providers determine suitability and protocols; patients should follow provider guidance and report concerns.\n[Who decides if NerveSpa is appropriate?][Can NerveSpa be used with other treatments?][What role do patients play in outcomes?]",
  },
  {
    question: "How should the battery be maintained?",
    answer:
      "The Hand & Foot Neuropathy System uses a rechargeable lithium-ion battery. Charge fully before first use, recharge when low, and avoid leaving it plugged in continuously. A full charge provides up to 72 hours of use.\n[How quickly are products shipped?][Who should patients contact for technical issues?]",
  },
  {
    question: "What modes does the system use?",
    answer:
      "The device runs a proprietary program with a monophasic waveform and biphasic rest periods at 7.83Hz. Modes automatically alternate to optimize stimulation—patients only adjust intensity.  Low frequency stimulation coupled with high voltage output and at a monophasic wave form has been found to regenerate nerves in clinical studies.\n[Why water-based therapy?][What outcomes are expected from the Hand & Foot Neuropathy System?]",
  },
  {
    question: "Why water-based therapy?",
    answer:
      "Submersion in warm water allows full circumferential stimulation of the feet or hands. This ensures even current delivery, improved comfort, and deeper engagement of nerves compared to pad-based devices that treat only small surface areas.\n[What outcomes are expected from the Hand & Foot Neuropathy System?]",
  },
  {
    question: "What improvements do patients report?",
    answer:
      "Patients often report reduced tingling, burning, and numbness; improved circulation; less stiffness; and better sleep and mobility over time. Outcomes vary by individual and compliance.",
  },
  {
    question: "What consumables are used with the system?",
    answer:
      "Epsom salt and effervescent tablets per side per session; replace as needed. Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing.\n[How do clinics order or reorder supplies?]",
  },
  {
    question: "What are NerveSpa Condtive Foot pads, socks and Gloves?",
    answer:
      "NerveSpa Wraps are silver conductive garment systems designed for localized stimulation of the  feet and hands. They connect to the NerveSpa controller to deliver targeted electrotherapy.\n[Who should not use Wraps?][What outcomes are expected from Wraps?]",
  },
  {
    question: "How are the foot pad and gloves used in therapy?",
    answer:
      "Patients wear the Wraps over the targeted area, moisten them slightly, and connect them to the NerveSpa unit. Providers guide placement to ensure safe and effective stimulation.\n[Who should not use Wraps?][What outcomes are expected from Wraps?]",
  },
  {
    question: "What is the NerveSpa QuakePlate?",
    answer:
      "The QuakePlate is a vibrational therapy platform designed to stimulate circulation, relieve pain, and support recovery through targeted vibration therapy.  It offers both low frequency and high rpm frequency.\n[How is the QuakePlate used?][Who should not use the QuakePlate?][What outcomes are expected with the QuakePlate?]",
  },
  {
    question: "How is the QuakePlate used?",
    answer:
      "Patients place their feet or hands on the platform and run sessions for 10–20 minutes. Providers can adjust settings based on therapeutic goals.\n[Who should not use the QuakePlate?][What outcomes are expected with the QuakePlate?]",
  },
  {
    question: "Who should not use the QuakePlate?",
    answer:
      "Patients with pacemakers, seizure disorders, or uncontrolled cardiovascular conditions should not use the QuakePlate. Providers should screen before prescribing.\n[What outcomes are expected with the QuakePlate?]",
  },
  {
    question: "What outcomes are expected with the QuakePlate?",
    answer:
      "Patients often report improved circulation, reduced stiffness, and increased comfort in feet, legs, and hands. Results depend on consistency and condition.\n[What outcomes are expected with the KneePro?][What outcomes are expected with the ShoulderPro?][What outcomes are expected with the Vibe?]",
  },
  {
    question: "What is the NerveSpa KneePro?",
    answer:
      "The KneePro is an advanced OA/RA treatment device using targeted stimulation and wrap design to reduce pain, support cartilage health, and improve knee mobility.\n[How is the KneePro used?][Who should not use the KneePro?][What outcomes are expected with the KneePro?]",
  },
  {
    question: "How is the KneePro used?",
    answer:
      "The KneePro is strapped securely around the knee and connected to the controller. Sessions usually last 1 hour.  The knee pro is a long duration treatment modality and is used for 6-9 months in total duration.\n[Who should not use the KneePro?][What outcomes are expected with the KneePro?]",
  },
  {
    question: "Who should not use the KneePro?",
    answer:
      "Patients with pacemakers, open wounds near the knee, or uncontrolled medical conditions should not use the KneePro. Providers should evaluate safety before prescribing.\n[What outcomes are expected with the KneePro?]",
  },
  {
    question: "What outcomes are expected with the KneePro?",
    answer:
      "Patients report reduced knee pain, improved flexibility, and greater mobility with consistent sessions. Outcomes vary depending on severity and adherence.\n[What outcomes are expected with the ShoulderPro?][What outcomes are expected with the Vibe?]",
  },
  {
    question: "What is the NerveSpa ShoulderPro?",
    answer:
      "The ShoulderPro is a targeted OA/RA treatment device that delivers therapeutic stimulation to relieve pain, improve mobility, and support joint function in the shoulder.\n[How is the ShoulderPro used?][Who should not use the ShoulderPro?][What outcomes are expected with the ShoulderPro?]",
  },
  {
    question: "How is the ShoulderPro used?",
    answer:
      "The ShoulderPro is strapped securely around the shoulder and connected to the controller. Sessions are 1 hour long and used over a long duration treatment program of 6-9 months.\n[Who should not use the ShoulderPro?][What outcomes are expected with the ShoulderPro?]",
  },
  {
    question: "Who should not use the ShoulderPro?",
    answer:
      "Patients with pacemakers, severe skin conditions, or open wounds near the shoulder should not use the ShoulderPro. Providers should evaluate safety before recommending.\n[What outcomes are expected with the ShoulderPro?]",
  },
  {
    question: "What outcomes are expected with the ShoulderPro?",
    answer:
      "Patients report reduced pain, increased shoulder mobility, and improved daily function with consistent use. Results vary depending on the individual’s condition.\n[What outcomes are expected with the Vibe?]",
  },
  {
    question: "What is the NerveSpa Vibe?",
    answer:
      "The NerveSpa Vibe is a handheld deep tissue vibrational massager designed to relieve muscle tension, support circulation, and complement neuropathy and joint therapies.\n[How is the Vibe used?][Who should not use the Vibe?][What outcomes are expected with the Vibe?]",
  },
  {
    question: "How is the Vibe used?",
    answer:
      "The Vibe is applied directly to muscles or joints using different attachment heads. Sessions typically last 10–15 minutes, guided by provider or patient need.\n[Who should not use the Vibe?][What outcomes are expected with the Vibe?]",
  },
  {
    question: "Who should not use the Vibe?",
    answer:
      "Patients with pacemakers, seizure disorders, or severe musculoskeletal conditions should avoid using the Vibe. Providers should screen before recommending.\n[What outcomes are expected with the Vibe?]",
  },
  {
    question: "What outcomes are expected with the Vibe?",
    answer:
      "Patients report reduced muscle tension, improved circulation, and greater comfort. Results vary depending on consistency and the condition treated.",
  },
  {
    question: "What topical products are part of NerveSpa?",
    answer:
      "NerveSpa offers a range of topicals, including Nerve & Neuropathy Cream, Osteoarthritis & RA Cream, Plantar Fasciitis & Heel Spur Cream, and Nerve Target Roll-On.\n[What is the Nerve & Neuropathy Cream?][What is the Osteoarthritis & RA Cream?][What is the Plantar Fasciitis & Heel Spur Cream?]",
  },
  {
    question: "What is the Plantar Fasciitis & Heel Spur Cream?",
    answer:
      "A doctor-formulated cream targeting pain and inflammation caused by plantar fasciitis and heel spurs. Supports circulation and provides relief for feet and heels.\n[How should Plantar Fasciitis Cream be applied?]",
  },
  {
    question: "How should Plantar Fasciitis Cream be applied?",
    answer:
      "Apply to the inner arch and plantar fascia or affected foot areas. Massage thoroughly until absorbed. Use consistently as directed by a provider.",
  },
  {
    question: "What outcomes are expected from NerveSpa topicals?",
    answer:
      "Patients typically experience localized relief of pain, inflammation reduction, and improved comfort when used consistently. Results vary by product and condition.",
  },
  {
    question: "Are NerveSpa creams and roll-ons safe for everyone?",
    answer:
      "Most patients can safely use NerveSpa topicals, but those with ingredient allergies or severe skin conditions should avoid them. Provider consultation is recommended.\n[Do topicals replace medical care?]",
  },
  {
    question: "How should NerveSpa creams and roll-ons be applied?",
    answer:
      "Apply directly to affected areas, massage gently, and allow to absorb. Frequency of use depends on product instructions or provider guidance.\n[What outcomes are expected from creams and roll-ons?]",
  },
  {
    question: "Do topicals replace medical care?",
    answer:
      "No, NerveSpa creams and roll-ons do not replace medical care. They are supportive tools designed to complement therapies and provider guidance.\n[What resources are available for patients?]",
  },
  {
    question: "How do topicals integrate with the full NerveSpa system?",
    answer:
      "Topicals can be used alongside devices and supplements to provide localized relief while supporting systemic improvements.\n[What outcomes are expected from creams and roll-ons?]",
  },
  {
    question: "Are demo resources available for creams and roll-ons?",
    answer:
      "Clinics may receive sample sizes or demo kits to show patients how products are applied and how they complement other NerveSpa therapies.\n[Can topicals be used in clinics during therapy sessions?][What support resources are available for providers?]",
  },
  {
    question: "What support resources are available for providers?",
    answer:
      "NerveSpa offers provider training, demo videos, and access to clinical support staff. Providers can also request direct assistance for protocols and usage.\n[What resources are available for patients?][How do clinics contact NerveSpa support?][How do patients contact NerveSpa?]",
  },
  {
    question: "What resources are available for patients?",
    answer:
      "Patients have access to educational videos, FAQs, and support from NerveSpa’s customer service team. Providers may also supply resources directly.\n[How do patients contact NerveSpa?]",
  },
  {
    question: "How do clinics contact NerveSpa support?",
    answer:
      "Providers can reach out for support in the following ways: | Chatbot – Use the “Contact Support” option directly in the chatbot. | Email – support@nervespa.com | Phone – 1-800-239-7880 (available during business hours). | Provider Portal – coming soon.\n[How do patients contact NerveSpa?][How do clinics order or reorder supplies?]",
  },
  {
    question: "How do patients contact NerveSpa?",
    answer:
      "Patients can use the chatbot Contact Support option, call customer service, or email support@nervespa.com for assistance with products, consumables, or supplements.\n[What resources are available for patients?][What support resources are available for providers?]",
  },
  {
    question: "How do clinics order or reorder supplies?",
    answer:
      "Providers can place orders directly through our online order form @ www.nervespa.com or by contacting their account representative (email/phone).\n[How do patients receive consumables or supplements?][What are NerveSpa’s pricing options?]",
  },
  {
    question: "How do patients receive consumables or supplements?",
    answer:
      "Patients typically receive consumables (salts, films, garments, supplements) through their provider. Patients may also order select consumables or replacement parts directly from DoctorStore.com.\n[What consumables are used with the system?][What resources are available for patients?]",
  },
  {
    question: "What outcomes are expected from the QuakePlate?",
    answer:
      "Patients often experience muscle relaxation, improved circulation, and reduced stiffness. Results vary depending on frequency and condition treated. https://www.youtube.com/watch?v=GZT58LDOT2o.\n[What outcomes are expected with the KneePro?][What outcomes are expected with the ShoulderPro?][What outcomes are expected with the Vibe?]",
  },
  {
    question: "What outcomes are expected from the KneePro?",
    answer:
      "Patients often report reduced knee pain, faster rehabilitation post-surgery or injury, and improved joint mobility. Also, the knee pro can be used to stave off total knee replacement until the patient is at the right age for such replacement to be ideal. https://www.youtube.com/watch?v=86sgHv-asNw.\n[What outcomes are expected with the ShoulderPro?][What outcomes are expected with the Vibe?]",
  },
  {
    question: "What outcomes are expected from the ShoulderPro?",
    answer:
      "Patients typically report decreased shoulder pain, improved range of motion, and relief from arthritis-related stiffness when used consistently.\n[What outcomes are expected with the Vibe?]",
  },
  {
    question: "What outcomes are expected from the Vibe?",
    answer:
      "Patients often feel muscle relaxation, reduced stiffness, and improved circulation in targeted areas like legs, back, or arms.",
  },
  {
    question: "What outcomes are expected from supplements?",
    answer:
      "Patients typically report improved nerve function, reduced discomfort, enhanced joint support, and improved overall wellness when used as part of a multimodal program.\n[What ingredients are in N1 Nerve+?][What ingredients are in N1 Skinny Blend?][What ingredients are in N1 Gut Support?]",
  },
  {
    question: "Can supplements be combined with NerveSpa devices?",
    answer:
      "Yes, supplements are designed to complement device therapies, creating a multimodal approach for better outcomes.\n[What outcomes are expected from supplements?][Are supplements safe for everyone?][Why is compliance important for supplement outcomes?]",
  },
  {
    question: "Are supplements safe for everyone?",
    answer:
      "Most NerveSpa supplements are safe for adults but may not be suitable for children, pregnant or nursing women, or those with certain medical conditions. Patients should consult their provider.\n[What outcomes are expected from supplements?][How are supplements usually prescribed?][Why is compliance important for supplement outcomes?]",
  },
  {
    question: "what are ODF's and why are they effective",
    answer:
      "ODF stands for Oral Dissolvable Film.  Oral dissolvable films are highly effective and effcient supplement delivery platforms.  ODF's melt into the users gums, and deliver the nutrients sublingally, directly into the body and bipass the stomach/stomach acids.  ODF's take effect more immediately, and have higher effective delivery of said supplements.  ODF's are easy to take (vs. capsules), have no filler ingredients (like powders) and are sugar free (unlike gummies).",
  },
  {
    question: "What ingredients are in N1 Nerve+?",
    answer:
      "N1 Nerve+ features Korean Red Ginseng in oral dissolvable film format, formulated to improve circulation, boost immunity, and support nervous system health.\n[What makes the N1 Nerve+ oral dissolvable film unique?][What outcomes are expected from supplements?]",
  },
  {
    question: "How does N1 Nerve+ support improve nerve health?",
    answer:
      "Korean Red Ginseng in N1 Nerve+ provides antioxidant support, helps reduce fatigue, and may enhance memory and circulation, all important for nerve repair and function.\n[What makes the N1 Nerve+ oral dissolvable film unique?][What outcomes are expected from supplements?][Can supplements be combined with NerveSpa devices?]",
  },
  {
    question: "What makes the N1 Nerve+ oral dissolvable film unique?",
    answer:
      "The ODF format avoids added sugars, is easy to take on-the-go, and provides efficient absorption for patients who dislike pills, gummies, or powders.\n[What ingredients are in N1 Skinny Blend?][What ingredients are in N1 Gut Support?]",
  },
  {
    question: "What ingredients are in N1 Skinny Blend?",
    answer:
      "N1 Skinny Blend includes Chromium Picolinate, Silver Fir Extract, and Gymnema, supporting weight management, glucose control, and metabolism.\n[How does N1 Skinny Blend support weight management and metabolism?][What outcomes are expected from supplements?]",
  },
  {
    question:
      "How does N1 Skinny Blend support weight management and metabolism?",
    answer:
      "Chromium Picolinate helps control sugar intake and cravings, Silver Fir Extract supports oxidative stress defense, and Gymnema promotes glucose utilization and regeneration of islet cells.\n[What ingredients are in N1 Gut Support?][Are supplements safe for everyone?]",
  },
  {
    question: "What ingredients are in N1 Gut Support?",
    answer:
      "N1 Gut Support includes Lactobacillus, Propolis, Saururus Chinensis Extract, and DL-Malic Acid, supporting digestion, nutrient absorption, and colon health.\n[How does N1 Gut Support improve digestion and nutrient absorption?][What outcomes are expected from supplements?][Why is compliance important for supplement outcomes?]",
  },
  {
    question:
      "How does N1 Gut Support improve digestion and nutrient absorption?",
    answer:
      "Lactobacillus aids in breaking down food and improving absorption, Propolis provides anti-inflammatory benefits, Saururus Chinensis supports liver function, and DL-Malic Acid stimulates digestive enzymes.\n[What makes N1 Gut Support unique?][What outcomes are expected from supplements?][Are supplements safe for everyone?]",
  },
  {
    question: "What makes N1 Gut Support unique?",
    answer:
      "The ODF format provides an easy-to-use, sugar-free delivery method, while the probiotic blend supports both digestion and immunity in a convenient daily strip.\n[What ingredients are in the Super Flex Joint Formula?][How does the Super Flex Joint Formula support joint health?][What outcomes are expected from supplements?]",
  },
  {
    question: "What ingredients are in the Super Flex Joint Formula?",
    answer:
      "The Super Flex Joint Formula contains Glucosamine Sulfate, Chondroitin Sulfate, MSM, Boswellia, Hyaluronic Acid, Turmeric, Ginger, Black Pepper, and White Willow Bark.\n[How does the Super Flex Joint Formula support joint health?][What makes the Super Flex Joint Formula unique?][What outcomes are expected from supplements?]",
  },
  {
    question: "How does the Super Flex Joint Formula support joint health?",
    answer:
      "Glucosamine and Chondroitin stimulate cartilage production, MSM reduces inflammation, and Turmeric and Boswellia add anti-inflammatory and antioxidant support for improved mobility.\n[What makes the Super Flex Joint Formula unique?][What outcomes are expected from supplements?][Are supplements safe for everyone?]",
  },
  {
    question: "What makes the Super Flex Joint Formula unique?",
    answer:
      "Delivered as a drink powder, it allows higher dosages and encourages hydration. The multi-ingredient formula is designed for patients with osteoarthritis or joint pain needing comprehensive support.\n[What ingredients are in the Blood Flow Super Formula?][How does the Blood Flow Super Formula support neuropathy and circulation?][What outcomes are expected from supplements?]",
  },
  {
    question: "What ingredients are in the Blood Flow Super Formula?",
    answer:
      "The Blood Flow Super Formula contains L-Arginine, L-Citrulline, vitamins, and minerals designed to increase vasodilation, reduce inflammation, and support nerve and vascular health.\n[How does the Blood Flow Super Formula support neuropathy and circulation?][What makes the Blood Flow Super Formula unique?][What outcomes are expected from supplements?]",
  },
  {
    question:
      "How does the Blood Flow Super Formula support neuropathy and circulation?",
    answer:
      "L-Arginine and L-Citrulline boost nitric oxide production for vasodilation, improving blood flow and circulation while supporting nerve repair and reducing inflammation.\n[What makes the Blood Flow Super Formula unique?][What outcomes are expected from supplements?][Are supplements safe for everyone?]",
  },
  {
    question: "What makes the Blood Flow Super Formula unique?",
    answer:
      "Delivered as a drink powder, it encourages hydration while combining amino acids with high% daily vitamins. Designed to complement other NerveSpa therapies for circulation and nerve support.\n[What ingredients are in the Nerve Rebuilder supplement?][How does the Nerve Rebuilder support nerve health and regeneration?][What outcomes are expected from supplements?]",
  },
  {
    question: "What ingredients are in the Nerve Rebuilder supplement?",
    answer:
      "The Nerve Rebuilder includes amino acids such as L-Arginine, L-Histidine, L-Glutamine, L-Serine, L-Lysine, Acetyl L-Carnitine, and botanicals like Griffonia Extract, formulated to support nerve repair.\n[How does the Nerve Rebuilder support nerve health and regeneration?][What makes the Nerve Rebuilder unique?][What outcomes are expected from supplements?]",
  },
  {
    question:
      "How does the Nerve Rebuilder support nerve health and regeneration?",
    answer:
      "The blend of amino acids and nutrients helps restore neurotransmitter balance, support nerve regeneration, reduce inflammation, and improve sensation in neuropathy patients.\n[What makes the Nerve Rebuilder unique?][What outcomes are expected from supplements?][Are supplements safe for everyone?]",
  },
  {
    question: "What makes the Nerve Rebuilder unique?",
    answer:
      "It is based on clinically researched formulations for neuropathy, with a multi-ingredient blend targeting nerve pain and regeneration. Manufactured in a certified, FDA-registered facility.\n[What ingredients are in the ImmunityGut Super Formula?][How does the ImmunityGut Super Formula support gut and immune health?][What outcomes are expected from supplements?]",
  },
  {
    question: "What ingredients are in the ImmunityGut Super Formula?",
    answer:
      "This blend includes Vitamin D, Zinc, Beta Glucan, antioxidants, minerals, and adaptogens, and other nutrients designed for gut restoration and immune system support.\n[How does the ImmunityGut Super Formula support gut and immune health?][What makes the ImmunityGut Super Formula unique?][What outcomes are expected from supplements?]",
  },
  {
    question:
      "How does the ImmunityGut Super Formula support gut and immune health?",
    answer:
      "Its three-phase approach—Clear, Seal, Rebuild—strengthens gut lining, reduces inflammation, and fortifies immunity with targeted nutrients.\n[What makes the ImmunityGut Super Formula unique?][What outcomes are expected from supplements?][Are supplements safe for everyone?]",
  },
  {
    question: "What makes the ImmunityGut Super Formula unique?",
    answer:
      "Provides a comprehensive, all-in-one powder addressing gut integrity, detoxification, and stress relief with adaptogens and minerals, unlike single-focus supplements.\n[What outcomes are expected from supplements?][Can supplements be combined with NerveSpa devices?][Why is compliance important for supplement outcomes?]",
  },
  {
    question: "Why is compliance important for supplement outcomes?",
    answer:
      "Consistent daily use of supplements allows the body to build therapeutic levels of nutrients, maximizing benefits and long-term results.\n[What outcomes are expected from supplements?][Can supplements be combined with NerveSpa devices?][Are supplements safe for everyone?]",
  },
  {
    question: "What is the Nerve Target Roll-On?",
    answer:
      "Nerve Target Roll-On is a topical pain reliever with Arnica, Menthol, Camphor, and Aloe, designed for neuropathy, arthritis, and muscle pain.  Nerve Target has the pain relieving power of brand name pain gels but in an all natural formulation.\n[How should the Nerve Target Roll-On be applied?][What outcomes are expected from creams and roll-ons?][Are topicals safe for everyone?]",
  },
  {
    question: "How should the Nerve Target Roll-On be applied?",
    answer:
      "Apply directly to affected areas such as knees, back, or feet. The roll-on format ensures easy application without mess.\n[What outcomes are expected from creams and roll-ons?][Are topicals safe for everyone?][Can topicals be used with other NerveSpa therapies?]",
  },
  {
    question: "What outcomes are expected from creams and roll-ons?",
    answer:
      "Patients report reduced localized pain, improved comfort in daily activities, and better circulation when topicals are applied consistently as directed.\n[How should NerveSpa creams and roll-ons be applied?][Why is compliance important for topical outcomes?]",
  },
  {
    question: "Are topicals safe for everyone?",
    answer:
      "Generally safe, but patients with skin sensitivities or allergies should check ingredients or consult a provider before use.\n[What outcomes are expected from creams and roll-ons?][How should NerveSpa creams and roll-ons be applied?]",
  },
  {
    question: "Can topicals be used with other NerveSpa therapies?",
    answer:
      "Yes. Creams and roll-ons can be paired with devices and supplements for a multi-modal approach, enhancing overall outcomes.\n[What outcomes are expected from creams and roll-ons?][Why is compliance important for topical outcomes?][What support resources exist for topical use?]",
  },
  {
    question: "Do topicals replace oral supplements or devices?",
    answer:
      "No. Topicals provide localized relief, while devices and supplements address underlying nerve, joint, or circulation issues. They are intended to work together.\n[What outcomes are expected from creams and roll-ons?][Why is compliance important for topical outcomes?]",
  },
  {
    question: "Why is compliance important for topical outcomes?",
    answer:
      "Regular application ensures active ingredients build consistent therapeutic effects, supporting pain relief and circulation benefits.\n[What outcomes are expected from creams and roll-ons?][What support resources exist for topical use?]",
  },
  {
    question: "What support resources exist for topical use?",
    answer:
      "Clinics may provide application demos, and NerveSpa offers instructions, videos, and customer support for correct use of creams and roll-ons.\n[What outcomes are expected from creams and roll-ons?][How do patients reorder creams and roll-ons?][How do clinics order or reorder supplies?]",
  },
  {
    question: "How do patients reorder creams and roll-ons?",
    answer:
      "Patients can reorder through their provider or directly from approved online channels such as doctorstore.com.\n[How do clinics order or reorder supplies?][What support resources exist for topical use?][Are topicals covered by warranty or return policies?]",
  },
  {
    question: "Do topicals require FDA clearance?",
    answer:
      "NerveSpa creams and roll-ons are made in FDA-registered and cGMP facilities, but they are not FDA-cleared medical devices.\n[Are topicals safe for everyone?][What outcomes are expected from creams and roll-ons?][Do topicals replace oral supplements or devices?]",
  },
  {
    question: "Who is PMT in relation to NerveSpa?",
    answer:
      "PMT (Pain Management Technologies) is the parent company of NerveSpa, with over 30 years of experience in developing clinical-grade electrotherapy devices.\n[What certifications does PMT hold?][Where are NerveSpa products manufactured?][How does NerveSpa ensure safety?]",
  },
  {
    question: "What certifications does PMT hold?",
    answer:
      "PMT (Pain Management Technologies) is an FDA-registered establishment. NerveSpa products are produced in FDA-registered facilities, and supplements and topicals are manufactured in FDA-registered and cGMP facilities.\n[Who is PMT in relation to NerveSpa?][Where are NerveSpa products manufactured?][Where can FDA listings be verified?]",
  },
  {
    question: "Where are NerveSpa products manufactured?",
    answer:
      "NerveSpa products are sourced globally. Devices are produced in FDA-registered facilities, while supplements and topicals are made in FDA-registered and cGMP facilities.\n[What certifications does PMT hold?][Where can FDA listings be verified?][How does NerveSpa ensure safety?]",
  },
  {
    question: "Where can FDA listings be verified?",
    answer:
      "PMT and NerveSpa’s FDA establishment and product registrations can be verified in the FDA registration database or via the official spreadsheet: https://bit.ly/41mMufw.\n[What certifications does PMT hold?][Is NerveSpa FDA-registered?][Where are NerveSpa products manufactured?]",
  },
  {
    question: "What is the NerveSpa return policy?",
    answer:
      "NerveSpa offers a return policy for devices and consumables if patients are not satisfied. Specific terms should be confirmed at purchase or with the provider.\n[What warranty does NerveSpa offer?][Are topicals covered by warranty or return policies?][Who should patients contact for technical issues?]",
  },
  {
    question: "Does NerveSpa replace medical treatment?",
    answer:
      "No. NerveSpa is a complementary therapy. It does not replace medical care, diagnosis, or treatment from a licensed healthcare professional.\n[Who determines how NerveSpa should be used?][What support resources are available?][What role do patients play in outcomes?]",
  },
  {
    question: "Who determines how NerveSpa should be used?",
    answer:
      "NerveSpa protocols are typically recommended by providers such as chiropractors or physical therapists. Patients use the devices at home under provider guidance.\n[Does NerveSpa replace medical treatment?][What support resources are available?]",
  },
  {
    question: "Do NerveSpa products require direct provider supervision?",
    answer:
      "No. Products are designed for home use. Providers prescribe or recommend protocols, but patients can use devices independently.\n[Who determines how NerveSpa should be used?][Does NerveSpa replace medical treatment?][What support resources are available?]",
  },
  {
    question: "What should patients do if discomfort or side effects occur?",
    answer:
      "Stop use immediately and consult their provider. Side effects are rare but any discomfort should be reported to a healthcare professional.\n[What role do patients play in outcomes?]",
  },
  {
    question: "What if stimulation feels weak?",
    answer:
      "Ensure salt and effervescent tablets are added to the water, electrodes are connected properly, and feet or hands are fully submerged. If still weak, consult support.\n[What if the Hand & Foot Neuropathy System does not power on?][What if Wraps feel uncomfortable?][Who should patients contact for technical issues?]",
  },
  {
    question: "How quickly are products shipped?",
    answer:
      "Most orders ship within 1–3 business days. Shipping times may vary depending on product availability and destination.\n[How are returns processed?][What warranty does NerveSpa offer?][How do patients receive consumables or supplements?]",
  },
  {
    question: "How are returns processed?",
    answer:
      "Returns are handled through NerveSpa or the clinic where the purchase was made. Contact support for instructions and eligibility.\n[What warranty does NerveSpa offer?][What is the NerveSpa return policy?][Who should patients contact for technical issues?]",
  },
  {
    question: "How do clinics contact NerveSpa for support?",
    answer:
      "Clinics can contact NerveSpa through the official support portal, email, or phone for product or billing questions.\n[How do patients contact NerveSpa?][Who should patients contact for technical issues?][What support resources are available?]",
  },
  {
    question: "What role do patients play in outcomes?",
    answer:
      "Patients are key to success. Consistency with therapy, adherence to provider guidance, and healthy lifestyle choices all enhance results.\n[What lifestyle changes support NerveSpa therapy?][Can NerveSpa be used long-term?]",
  },
  {
    question: "Where can patients get NerveSpa creams and roll-ons?",
    answer:
      "Patients can obtain them through their provider or directly from NerveSpa. Consumables may also be available via doctorstore.com.\n[How do patients reorder creams and roll-ons?][Do topicals require FDA clearance?][Do topicals replace medical care?]",
  },
  {
    question: "What support resources are available for topicals?",
    answer:
      "Support includes training guides, application videos, and direct access to NerveSpa’s clinical support team for questions or troubleshooting.\n[Are demo resources available for creams and roll-ons?][How do patients reorder creams and roll-ons?][What do patients say about creams and roll-ons?]",
  },
  {
    question: "What do patients say about creams and roll-ons?",
    answer:
      "Patients report fast relief, improved circulation, reduced inflammation, and ease of use with the roll-on format or fast-absorbing creams.\n[What outcomes are expected from NerveSpa topicals?][Are topicals safe for everyone?][How do providers determine which topical to recommend?]",
  },
  {
    question: "How do patients or clinics order topicals?",
    answer:
      "Orders can be placed through NerveSpa, authorized providers, or doctorstore.com for consumables. Clinics may set up wholesale accounts for bulk supply.\n[How do patients reorder creams and roll-ons?][Are topicals covered by warranty or return policies?]",
  },
  {
    question: "Do providers or clinics receive training for topical use?",
    answer:
      "Yes. NerveSpa offers training guides and educational resources so providers understand indications, application, and integration with other therapies.\n[Are demo resources available for creams and roll-ons?][What support resources are available for topicals?][How do topicals integrate with the full NerveSpa system?]",
  },
  {
    question: "Can topicals be used long-term?",
    answer:
      "Yes. They are safe for ongoing use when applied as directed, making them a useful part of chronic neuropathy or arthritis care plans.\n[Are topicals safe for everyone?][Do topicals replace medical care?][What outcomes are expected from NerveSpa topicals?]",
  },
  {
    question: "Does insurance cover consumables like salts or garments?",
    answer:
      "Consumables (e.g., salts, garments, lead wires) are not typically covered by insurance. Patients usually purchase them directly via providers or doctorstore.com.\n[What are NerveSpa’s pricing options?][Is NerveSpa covered by insurance?]",
  },
  {
    question: "What is HCPCS code E0720?",
    answer:
      "HCPCS code E0720 refers to transcutaneous electrical nerve stimulation (TENS). Some providers may use it when billing electrotherapy treatments, but coverage varies by insurer.\n[Is NerveSpa covered by insurance?][How do clinics bill insurance for NerveSpa?]",
  },
  {
    question: "How do clinics order NerveSpa?",
    answer:
      "Clinics can order by contacting NerveSpa directly to set up a provider account. A wholesale portal is planned but not yet live.\n[How do I set up a provider account?][Are there minimum order requirements?][Are starter kits or bundles for clinics available?]",
  },
  {
    question: "How do clinics bill insurance for NerveSpa?",
    answer:
      "Clinics may use HCPCS code E0720 for electrotherapy when appropriate. Coverage depends on the patient’s insurer and documentation.\n[What is HCPCS code E0720?][Is NerveSpa covered by insurance?]",
  },
  {
    question: "How do I set up a provider account?",
    answer:
      "Providers should contact NerveSpa directly to establish an account. This grants access to wholesale pricing, training, and ordering. A dedicated online portal will be added in the future.\n[How do clinics order NerveSpa?][Are there minimum order requirements?][Are starter kits or bundles for clinics available?]",
  },
  {
    question: "How much does NerveSpa cost for patients?",
    answer:
      "Pricing for patients depends on the products recommended by their provider. Devices are purchased through clinics, while consumables and supplements can be ordered via providers or doctorstore.com.\n[What are NerveSpa’s pricing options?]",
  },
  {
    question: "Are there minimum order requirements?",
    answer:
      "Provider accounts may include minimum purchase quantities for wholesale pricing. Requirements vary by product type and order size.\n[How do clinics order NerveSpa?][How do I set up a provider account?][Are starter kits or bundles for clinics available?]",
  },
  {
    question: "What products are included in a starter kit?",
    answer:
      "Starter kits typically include the Hand & Foot Neuropathy System, consumables (salt, tablets, lead wires), and educational materials. Options vary by clinic needs.\n[Are bundles available for patients?][How do clinics order NerveSpa?][How do I set up a provider account?]",
  },
  {
    question: "Are bundles available for patients?",
    answer:
      "Yes. NerveSpa offers patient bundles that may include devices, supplements, and topicals to support therapy at home. Availability may vary by clinic.\n[What products are included in a starter kit?][What outcomes are expected from bundles?][How do patients receive consumables or supplements?]",
  },
  {
    question: "Who should patients contact for technical issues?",
    answer:
      "Patients should contact NerveSpa support through the website contact form or by phone for troubleshooting, warranty claims, or replacement requests.\n[How do clinics contact NerveSpa for support?][What is the NerveSpa return policy?][What warranty does NerveSpa offer?]",
  },
  {
    question: "Are starter kits or bundles for clinics available?",
    answer:
      "Yes. NerveSpa offers starter kits and clinic bundles designed for easy onboarding. These include core devices, consumables, supplements, and educational materials.\n[What products are included in a starter kit?][How do clinics order NerveSpa?][Are there minimum order requirements?]",
  },
  {
    question: "What outcomes are expected from bundles?",
    answer:
      "Bundles provide patients and clinics with a complete therapy package. Combining devices, supplements, and topicals helps improve consistency and outcomes.\n[Are bundles available for patients?][Are starter kits or bundles for clinics available?][What resources are available for patients?]",
  },
  {
    question: "What training do providers receive?",
    answer:
      "Providers receive training resources including setup guides, demo videos, and optional live onboarding calls to ensure correct use.\n[What support resources are available?][How do clinics order NerveSpa?][How can patients learn proper use?]",
  },
  {
    question: "How can patients learn proper use?",
    answer:
      "Patients can watch demo videos, read included manuals, or request live support from their provider or NerveSpa.\n[What resources are available for patients?][What training do providers receive?][Who should patients contact for technical issues?]",
  },
  {
    question: "What outcomes are expected from conductive garments?",
    answer:
      "Conductive garments (socks, gloves) help deliver even stimulation across the entire hand or foot, supporting circulation, reducing pain, and calming nerve discomfort.",
  },
  {
    question: "Is NerveSpa safe for everyone?",
    answer:
      "NerveSpa devices and products are designed to be safe when used as directed, but contraindications apply (e.g., pacemakers, open wounds). Providers should guide usage.\n[Who should not use Wraps?][Who should not use the Cold Laser?]",
  },
  {
    question: "What support resources are available?",
    answer:
      "NerveSpa provides provider guides, demo videos, manuals, and direct support to help with onboarding and patient use.\n[What training do providers receive?][What resources are available for patients?][How can patients learn proper use?]",
  },
  {
    question: "Can NerveSpa be used with other treatments?",
    answer:
      "Yes. NerveSpa can be safely combined with many therapies such as chiropractic care, PT, or red light therapy. Providers determine the best plan.\n[Can multiple NerveSpa modalities be used in the same day?][What lifestyle changes support NerveSpa therapy?][Who decides if NerveSpa is appropriate?]",
  },
  {
    question: "Can NerveSpa be used long-term?",
    answer:
      "NerveSpa is designed for sustained use. After the initial 60–90 day program, most patients transition to a maintenance schedule recommended by their provider.\n[What happens after the initial 60–90 day program?][What lifestyle changes support NerveSpa therapy?][Who decides if NerveSpa is appropriate?]",
  },
  {
    question: "Can multiple NerveSpa modalities be used in the same day?",
    answer:
      "Yes. Patients often combine the Hand & Foot Neuropathy System with wraps, lasers, or topicals for complementary results, under provider guidance.\n[Can NerveSpa be used with other treatments?][Who decides if NerveSpa is appropriate?]",
  },
  {
    question: "What happens after the initial 60–90 day program?",
    answer:
      "After 60–90 days of consistent use, patients usually shift to a maintenance schedule with reduced frequency, as guided by their provider.\n[Can NerveSpa be used long-term?][Can NerveSpa be used with other treatments?][What outcomes are expected from the Hand & Foot Neuropathy System?]",
  },
  {
    question: "What lifestyle changes support NerveSpa therapy?",
    answer:
      "Healthy sleep, nutrition, exercise, and limiting screen time can enhance outcomes with NerveSpa therapies.\n[Can NerveSpa be used long-term?][Who decides if NerveSpa is appropriate?][What role do patients play in outcomes?]",
  },
  {
    question: "What research supports NerveSpa therapies?",
    answer:
      "NerveSpa is built on established electrotherapy, red light therapy, and supplement research. Providers can request clinical references, white papers, and case studies from the NerveSpa team.\n[Who decides if NerveSpa is appropriate?][What role do patients play in outcomes?][How does NerveSpa ensure safety?]",
  },
  {
    question: "Who decides if NerveSpa is appropriate?",
    answer:
      "Providers evaluate patient history, symptoms, and goals to determine if NerveSpa is suitable, and which modalities or supplements to use.\n[What research supports NerveSpa therapies?][What role do patients play in outcomes?][What support resources are available?]",
  },
  {
    question: "What should patients do if discomfort or side effects occur?",
    answer:
      "Stop use immediately and consult the prescribing provider. If symptoms persist, contact NerveSpa support for guidance.\n[Is NerveSpa safe for everyone?][What support resources are available?]",
  },
  {
    question: "What support resources are available for patients?",
    answer:
      "Patients can access demo videos, user manuals, supplement guides, and request live assistance through their provider or NerveSpa support.\n[How do patients contact NerveSpa?][What resources are available for patients?][How can patients learn proper use?]",
  },
  {
    question: "Who should not use NerveSpa Creams and Roll-Ons?",
    answer:
      "Creams and Roll-Ons should not be applied to broken skin, open wounds, or areas of active rash or infection. Patients with allergies to listed ingredients (menthol, camphor, arnica, etc.) should avoid use. When in doubt, they should consult their provider.\n[How do patients reorder creams and roll-ons?]",
  },
  {
    question: "Can NerveSpa topicals be combined with device therapies?",
    answer:
      "Yes. NerveSpa creams and Roll-Ons can be safely combined with device therapies. They are often recommended as part of a multimodal program, providing targeted relief while stimulation supports circulation and nerve activity.\n[What outcomes are expected from creams and roll-ons?]",
  },
  {
    question: "How do patients reorder NerveSpa supplements?",
    answer:
      "Patients can reorder supplements through their provider’s office or approved distributor channels such as doctorstore.com. Providers should guide on which supplement is appropriate for their condition and ensure compliance with the overall program.\n[What outcomes are expected from supplements?]",
  },
  {
    question:
      "How do patients reorder consumables like salts, electrodes, or lead wires?",
    answer:
      "Consumables such as salts, electrodes, and lead wires are reordered through provider clinics or approved portals like doctorstore.com. Providers may also set up automatic reordering systems for long-term patients.\n[How quickly are products shipped?]",
  },
  {
    question: "Can NerveSpa supplements be combined with device therapies?",
    answer:
      "Yes. Supplements are designed to work in tandem with NerveSpa devices by supporting circulation, nutrient supply, and nerve repair at the systemic level while devices target local nerve stimulation.\n[What outcomes are expected from supplements?]",
  },
  {
    question: "What lifestyle changes can support NerveSpa therapy?",
    answer:
      "Lifestyle changes such as maintaining balanced nutrition, consistent physical activity, proper hydration, sleep hygiene, and limiting alcohol or tobacco use can significantly enhance NerveSpa therapy outcomes. Stress management and compliance with provider guidance are also important.\n[Can NerveSpa be used long-term?][What role do patients play in outcomes?][What support resources are available?]",
  },
  {
    question: "Contact",
    answer:
      "Providers can reach out for support in the following ways: | Chatbot – Use the “Contact Support” option directly in the chatbot. | Email – support@nervespa.com | Phone – 1-800-239-7880 (available during business hours). | Provider Portal – coming soon.\n[Phone number][Email]",
  },
  {
    question: "phone number",
    answer:
      "Phone – 1-800-239-7880 (available during business hours).\n[Contact][Email]",
  },
  {
    question: "email",
    answer: "Email – support@nervespa.com.\n[Contact][Phone number]",
  },
  {
    question: "Who should NOT use NerveSpa Hand & Footbath?",
    answer:
      "Do not use with open wounds on treatment area, during pregnancy, or with implanted pacemakers without physician guidance. Check skin frequently. Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Is NerveSpa covered by insurance?]",
  },
  {
    question: "What are NerveSpa Conductive Garments (gloves/socks)?",
    answer:
      "Alternative to footbath using conductive gloves/socks with the NerveSpa device. Spray inside/outside until damp, wear comfortably, and adjust intensity to a mild tingle. Guide: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing  | Video: https://www.youtube.com/@nervespa.\n[How often should the system be used?]",
  },
  {
    question: "How do I use the conductive gloves or socks?",
    answer:
      "Charge device, connect lead wires to garment pigtails, spray garments inside and out, put on, start program and adjust intensity as needed. Use 4–6×/week. Guide: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing  | Video: https://www.youtube.com/@nervespa.\n[What are NerveSpa Conductive Garments (gloves/socks)?][What does treatment feel like?]",
  },
  {
    question: "Who should NOT use the conductive garments?",
    answer:
      "Do not use if under 18, pregnant, have a pacemaker, open wounds, total loss of sensation, or skin irritation; check skin every 15 minutes. Guide: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing.\n[Who should NOT use NerveSpa Hand & Footbath?][What does treatment feel like?]",
  },
  {
    question: "Who should NOT use NerveBeam?",
    answer:
      "Avoid use on malignant tumors, open wounds, recent injuries (<72h), and avoid tight wrapping/heat trapping. Not for pregnancy; supervise elderly/children; do not sleep with device. LED Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing  | Power Wrap Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing.\n[What does treatment feel like?]",
  },
  {
    question: "What is QuakePlate and what does it do?",
    answer:
      "A deep-tissue vibration/massage platform for feet/lower extremities to improve mobility, relieve pain, and support circulation. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[How do I use QuakePlate safely?][Who should NOT use QuakePlate?][How long is a QuakePlate session?]",
  },
  {
    question: "How do I use QuakePlate safely?",
    answer:
      "Use indoors on 110V AC, keep connections dry, unplug after use, do not use with wet hands. Monitor comfort; stop with any adverse reaction. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[What is QuakePlate and what does it do?][Who should NOT use QuakePlate?][How do I clean and maintain QuakePlate?]",
  },
  {
    question: "Who should NOT use QuakePlate?",
    answer:
      "Avoid if pregnant, with recent injuries, local infections, or circulatory syndromes (e.g., Raynaud’s, PVD, sickle cell). Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[How do I use QuakePlate safely?][How long is a QuakePlate session?]",
  },
  {
    question: "What is NerveSpa Knee Pro?",
    answer:
      "A knee wrap with Jstim electrotherapy for OA/RA therapy aimed at regenerative support (cartilage, tendons, ligaments). Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[How do I set up Knee Pro?][How often should Knee Pro be used?]",
  },
  {
    question: "How do I set up Knee Pro?",
    answer:
      "Charge device (first use 12+ hrs), mount device magnetically to wrap, place 3x5 thigh electrode and patella electrode, connect leads (red=patella). Start program and adjust intensity to a comfortable level. Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[What is NerveSpa Knee Pro?][How often should Knee Pro be used?]",
  },
  {
    question: "How do I care for Knee Pro electrodes and when to replace?",
    answer:
      "Replace clear film after use; optionally unplug pigtails; each gel electrode typically lasts ~10–12 uses before replacement. Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[How often should Knee Pro be used?][How do I set up Knee Pro?]",
  },
  {
    question: "What does Knee Pro therapy feel like?",
    answer:
      "A mild, comfortable tingling. Reduce intensity if sharp/prickling, then increase to comfort.\n[How long is a Knee Pro session and what are the modes?][How often should Knee Pro be used?][How do I care for Knee Pro electrodes and when to replace?]",
  },
  {
    question: "Who should NOT use Knee Pro?",
    answer:
      "Do not use with pacemakers, open wounds, while driving/operating equipment; consult physician for medical conditions. Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[What is NerveSpa Knee Pro?][How do I set up Knee Pro?]",
  },
  {
    question: "What is NerveSpa Shoulder Pro?",
    answer:
      "A shoulder wrap with Jstim electrotherapy for regenerative therapy of the shoulder joint. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How do I set up Shoulder Pro?][How often should Shoulder Pro be used?]",
  },
  {
    question: "How do I set up Shoulder Pro?",
    answer:
      'Charge device (first use 12+ hrs), place two 3" round electrodes on the wrap (leads to channel), connect red=top electrode, start program and adjust intensity. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[What is NerveSpa Shoulder Pro?][How often should Shoulder Pro be used?]',
  },
  {
    question: "How do I care for Shoulder Pro electrodes and when to replace?",
    answer:
      "Replace clear film after use; optionally unplug pigtails; each gel electrode typically lasts ~10–12 uses before replacement. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How often should Shoulder Pro be used?][How do I set up Shoulder Pro?]",
  },
  {
    question: "What does Shoulder Pro therapy feel like?",
    answer:
      "A mild, comfortable tingling. Reduce intensity if sharp/prickling, then increase to comfort.\n[How long is a Shoulder Pro session and what are the modes?][How often should Shoulder Pro be used?][How do I care for Shoulder Pro electrodes and when to replace?]",
  },
  {
    question: "Who should NOT use Shoulder Pro?",
    answer:
      "Contraindications include pacemakers/serious arrhythmia, pregnancy (especially abdominal), undiagnosed pain syndromes, epilepsy (consult doctor). Use only under physician supervision. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[What is NerveSpa Shoulder Pro?][How do I set up Shoulder Pro?]",
  },
  {
    question: "Can children use NerveSpa products?",
    answer:
      "NerveSpa products are not recommended for children under 18. Conductive garments and electrotherapy wraps specifically exclude pediatric use. Garments Guide: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing.\n[Who should NOT use the conductive garments?][Is NerveSpa safe for seniors to use at home?][What does treatment feel like?]",
  },
  {
    question: "Who do I contact for technical support?",
    answer:
      "Contact NerveSpa customer service at the official website or via phone/email provided in your manual. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How do I register my NerveSpa product for warranty?][What is included in the warranty?]",
  },
  {
    question: "What is the turnaround time for repairs or replacements?",
    answer:
      "Typical turnaround time is 2–3 weeks after receipt of your device at service center. Contact support for RMA. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Who do I contact for technical support?][What is included in the warranty?][How do I register my NerveSpa product for warranty?]",
  },
  {
    question: "What consumables come with NerveSpa systems?",
    answer:
      "Hand & Footbath includes Epsom salts + effervescent tablets; Conductive Garments require conductive spray; Knee/Shoulder include gel electrodes; QuakePlate requires no consumables. Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing.\n[What consumables are used with the system?][How often should consumables be replaced?]",
  },
  {
    question: "How do I reorder consumables and accessories?",
    answer:
      "Consumables (salts, tablets, conductive sprays, gel electrodes) and accessories (straps, cables, remotes) can be ordered through the NerveSpa website or authorized distributors. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What consumables come with NerveSpa systems?][What consumables are used with the system?]",
  },
  {
    question: "What results can I expect from using NerveSpa Footbath?",
    answer:
      "Many users report improved circulation, reduced tingling, and greater comfort within weeks. Most consistent outcomes appear over 60–90 days of daily use. Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What outcomes are expected from the Hand & Foot Neuropathy System?][How often should the system be used?][What improvements do patients report?]",
  },
  {
    question: "What results can I expect from using Conductive Garments?",
    answer:
      "Consistent daily sessions (4–6×/week) can reduce neuropathic pain and improve hand/foot comfort. Benefits often noted within 2–3 weeks, with stronger outcomes at 60–90 days. Garments Guide: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing.\n[How often should conductive garments be used?][What does treatment feel like?][Who should NOT use the conductive garments?]",
  },
  {
    question: "What results can I expect from using QuakePlate?",
    answer:
      "Many users feel immediate muscle relaxation and reduced foot/leg tension. Circulation benefits may appear after 2–4 weeks of regular use. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[What is QuakePlate and what does it do?][How do I use QuakePlate safely?][Who should NOT use QuakePlate?]",
  },
  {
    question: "What results can I expect from using Knee Pro?",
    answer:
      "Clinical protocol supports long-term improvement in OA/RA symptoms. Outcomes generally appear after 1–2 months of consistent use; full program (6–12 months) offers regenerative benefits. Knee Pro Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[How often should Knee Pro be used?][How long is a Knee Pro session and what are the modes?][What does Knee Pro therapy feel like?]",
  },
  {
    question: "What results can I expect from using Shoulder Pro?",
    answer:
      "Users often report reduced shoulder pain, increased mobility, and joint comfort after 1–2 months. Best outcomes occur with the full 6–12 month program. Shoulder Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How often should Shoulder Pro be used?][How long is a Shoulder Pro session and what are the modes?][What does Shoulder Pro therapy feel like?]",
  },
  {
    question: "What does treatment feel like?",
    answer:
      "All NerveSpa therapies should feel like a mild, comfortable tingling, warmth, or gentle vibration. Reduce intensity if prickling or burning occurs. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How long is a typical session?][What outcomes are expected from the Hand & Foot Neuropathy System?][Who should NOT use NerveSpa Hand & Footbath?]",
  },
  {
    question: "How quickly will I notice improvements?",
    answer:
      "Some users report relief within days; others require 2–6 weeks. Maximum benefits usually occur after 60–90 days of consistent daily use. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What results can I expect from using NerveSpa Footbath?][What outcomes are expected from the Hand & Foot Neuropathy System?][How often should the system be used?]",
  },
  {
    question: "Are results permanent?",
    answer:
      "Results depend on condition and compliance. Many users maintain improvements with continued regular use; discontinuing may allow symptoms to return gradually.   Some users will actually repeat a full 90-day program each year to maintain optimal results.  Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What results can I expect from using NerveSpa Footbath?][How quickly will I notice improvements?][What outcomes are expected from the Hand & Foot Neuropathy System?]",
  },
  {
    question: "Can NerveSpa be combined with other therapies?",
    answer:
      "Yes, NerveSpa is often used alongside medications, physical therapy, or lifestyle changes. Always consult your healthcare provider for combined treatment plans. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Who should NOT use NerveSpa Hand & Footbath?][Is NerveSpa safe for seniors to use at home?][What results can I expect from using Knee Pro?]",
  },
  {
    question: "Can I use NerveSpa if I have a pacemaker?",
    answer:
      "NerveSpa electrotherapy systems (Footbath, Garments, Knee Pro, Shoulder Pro) should not be used with pacemakers or implanted stimulators without explicit physician clearance. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Who should NOT use NerveSpa Hand & Footbath?][Who should NOT use Shoulder Pro?][Who should NOT use Knee Pro?]",
  },
  {
    question: "Can I use NerveSpa during pregnancy?",
    answer:
      "NerveSpa systems are not recommended during pregnancy. This includes Footbath, Garments, Knee Pro, and Shoulder Pro. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Who should NOT use NerveSpa Hand & Footbath?][Who should NOT use Shoulder Pro?][Is NerveSpa safe for seniors to use at home?]",
  },
  {
    question: "Can I sleep with a NerveSpa device running?",
    answer:
      "No. NerveSpa devices (including NerveBeam wraps) should not be used while sleeping. Risk of burns, skin irritation, or unsafe postures may result. LED Wrap Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing.\n[Who should NOT use NerveBeam?][How long is a NerveBeam session?][What does treatment feel like?]",
  },
  {
    question: "Can NerveSpa products be used daily?",
    answer:
      "Yes. Most protocols recommend daily or near-daily use (4–6×/week) for best results. See product-specific guides. Footbath User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How often should the system be used?][How often should Knee Pro be used?][How often should Shoulder Pro be used?]",
  },
  {
    question: "Can NerveSpa help with arthritis?",
    answer:
      "Knee Pro and Shoulder Pro are specifically designed for osteoarthritis and rheumatoid arthritis support. Improvements in pain, mobility, and function are documented after consistent use. Knee Pro Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[What is NerveSpa Knee Pro?][What is NerveSpa Shoulder Pro?][What results can I expect from using Knee Pro?]",
  },
  {
    question: "Is NerveSpa HSA/FSA eligible?",
    answer:
      "Yes. NerveSpa devices can generally be purchased with HSA or FSA accounts. Check with your plan provider for documentation requirements. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Is NerveSpa covered by insurance?][How do I register my NerveSpa product for warranty?][What is included in the warranty?]",
  },
  {
    question: "Do I need a prescription for NerveSpa?",
    answer:
      "Most products are available direct-to-consumer. Shoulder Pro may require a prescription in some jurisdictions as a regulated medical device. Shoulder Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[What is NerveSpa Shoulder Pro?][Is NerveSpa covered by insurance?][Who should NOT use Shoulder Pro?]",
  },
  {
    question: "Can NerveSpa replace my medications?",
    answer:
      "No. NerveSpa is a complementary therapy. Continue medications unless advised otherwise by your physician. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Can NerveSpa be combined with other therapies?][What results can I expect from using NerveSpa Footbath?][What results can I expect from using Knee Pro?]",
  },
  {
    question: "How do I replace gel electrodes?",
    answer:
      "Peel gently from skin after each session, reseal on plastic film, and replace after ~10–12 uses or if adhesion weakens. Shoulder Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How do I care for Shoulder Pro electrodes and when to replace?][How do I care for Knee Pro electrodes and when to replace?][How do I store NerveSpa products between sessions?]",
  },
  {
    question: "How do I charge my NerveSpa device?",
    answer:
      "Plug supplied charger into wall outlet, connect to device port, and allow to fully charge (first use: 12+ hours). Recharge every 3–5 sessions depending on intensity. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How should the battery be maintained?][How do I store NerveSpa products between sessions?][What is included in the warranty?]",
  },
  {
    question: "How do I troubleshoot if my device will not power on?",
    answer:
      "Ensure device is fully charged, hold power button for 2 seconds, check charger connections, and confirm outlet. If unresolved, contact support. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How do I charge my NerveSpa device?][Who do I contact for technical support?][What is the turnaround time for repairs or replacements?]",
  },
  {
    question: "Can I travel with my NerveSpa device?",
    answer:
      "Yes, devices are portable. Ensure charger is compatible with voltage at destination. Keep electrodes and consumables in sealed bags. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How should the battery be maintained?][How do I store NerveSpa products between sessions?][What accessories are included with each system?]",
  },
  {
    question: "Are NerveSpa products FDA cleared?",
    answer:
      "NerveSpa devices are registered with the FDA as wellness/therapy devices. Check the NerveSpa website for current regulatory status by product. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Is NerveSpa covered by insurance?][Is NerveSpa HSA/FSA eligible?][Do I need a prescription for NerveSpa?]",
  },
  {
    question: "Do NerveSpa products come with instructions?",
    answer:
      "Yes, every product includes a printed quick start guide and an online manual. Manuals are also available here: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How do I register my NerveSpa product for warranty?][Who do I contact for technical support?][What is included in the warranty?]",
  },
  {
    question: "How do I access NerveSpa demo videos?",
    answer:
      "Demo videos are available on the official YouTube channel: https://www.youtube.com/@nervespa and linked in the relevant FAQ answers.",
  },
  {
    question: "Can I share my NerveSpa device with others?",
    answer:
      "For hygiene reasons, consumables and electrodes should not be shared. If sharing, each user should use their own electrodes/sprays/salts. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What consumables come with NerveSpa systems?][How do I reorder consumables and accessories?][What accessories are included with each system?]",
  },
  {
    question: "Are there clinical studies on NerveSpa?",
    answer:
      "NerveSpa technology is based on established electrotherapy and photobiomodulation principles. References are available on request via NerveSpa support. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What results can I expect from using Knee Pro?][What results can I expect from using Shoulder Pro?][What results can I expect from using NerveBeam LED/Power Wraps?]",
  },
  {
    question: "What is included in the starter kit for each product?",
    answer:
      "Each system includes device, leads/cables, and starter consumables (varies by product). Manuals list exact contents. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What accessories are included with each system?][What consumables come with NerveSpa systems?][How do I reorder consumables and accessories?]",
  },
  {
    question: "How do I know which NerveSpa product is right for me?",
    answer:
      "Footbath is best for peripheral neuropathy in feet; Garments for hands/feet neuropathy; LED/Power Wraps for localized pain/inflammation; Knee Pro/Shoulder Pro for arthritis; QuakePlate for vibration therapy and circulation. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What results can I expect from using NerveSpa Footbath?][What is NerveSpa Knee Pro?][What is QuakePlate and what does it do?]",
  },
  {
    question: "Can I combine multiple NerveSpa therapies?",
    answer:
      "Yes, many users combine devices (e.g., Footbath + LED Wrap, or Knee Pro + QuakePlate) for complementary effects. Consult physician before combining electrotherapy and phototherapy. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Can NerveSpa replace my medications?][Can NerveSpa be combined with other therapies?][What results can I expect from using Knee Pro?]",
  },
  {
    question: "What are the benefits of red vs infrared light?",
    answer:
      "Red (visible) light promotes skin healing; infrared penetrates deeper to aid joints, muscles, and circulation. Many wraps combine both for maximum effect. LED Wrap Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing.\n[What results can I expect from using NerveBeam LED/Power Wraps?][How long is a NerveBeam session?][Who should NOT use NerveBeam?]",
  },
  {
    question:
      "What is the difference between NerveSpa Footbath and Conductive Garments?",
    answer:
      "Footbath provides immersion therapy with salts and electrodes for feet; Garments use gloves/socks with conductive spray for flexible use (hands/feet). Garments Guide: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing.\n[What results can I expect from using NerveSpa Footbath?]",
  },
  {
    question: "Can I use QuakePlate together with Footbath?",
    answer:
      "No. Use QuakePlate separately from Footbath sessions. Combining could cause unsafe vibration with water/electrodes. QuakePlate Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[What is QuakePlate and what does it do?][How do I use QuakePlate safely?][Who should NOT use QuakePlate?]",
  },
  {
    question: "How do I know if my electrodes are still effective?",
    answer:
      "Good electrodes should stick well and conduct current evenly. Replace when tingling is uneven, adhesion weakens, or after ~10–12 uses. Shoulder Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How do I care for Shoulder Pro electrodes and when to replace?][How do I care for Knee Pro electrodes and when to replace?][What if stimulation feels weak?]",
  },
  {
    question: "Can I use NerveSpa with compression socks or braces?",
    answer:
      "No. Electrodes should contact bare skin. Do not layer NerveSpa therapy with compression garments or braces unless instructed by a provider. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Who should NOT use NerveSpa Hand & Footbath?][Who should NOT use the conductive garments?][What does treatment feel like?]",
  },
  {
    question: "Are there side effects from NerveSpa?",
    answer:
      "Most users tolerate therapy well. Mild redness, tingling, or skin irritation may occur; usually resolves quickly. Discontinue if persistent discomfort. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Who should NOT use Knee Pro?][Who should NOT use Shoulder Pro?][Who should NOT use NerveBeam?]",
  },
  {
    question: "What precautions should I take before starting therapy?",
    answer:
      "Read the Quick Start guide, ensure skin is clean/dry, use recommended consumables, and start with lower intensity. Increase gradually as tolerated. Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing.\n[What does treatment feel like?][Who should NOT use NerveSpa Hand & Footbath?][What improvements do patients report?]",
  },
  {
    question: "Can I return a NerveSpa product if it doesn’t work for me?",
    answer:
      "Return policies depend on distributor or seller. Typically 30-day return windows apply if device is undamaged. Check seller terms. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What is included in the warranty?][Who do I contact for technical support?][How do I register my NerveSpa product for warranty?]",
  },
  {
    question: "What conditions does NerveSpa support?",
    answer:
      "NerveSpa is designed for neuropathy, arthritis, chronic pain, and circulation issues. Results vary by condition and adherence. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What results can I expect from using NerveSpa Footbath?][Can NerveSpa help with arthritis?][What improvements do patients report?]",
  },
  {
    question: "Are NerveSpa products safe to use with medications?",
    answer:
      "Yes, NerveSpa can be used while continuing most medications. Always consult a physician before altering prescriptions. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Can NerveSpa replace my medications?][Can NerveSpa be combined with other therapies?][What precautions should I take before starting therapy?]",
  },
  {
    question: "Do NerveSpa devices need calibration?",
    answer:
      "No, all devices are pre-calibrated. Only consumables/electrodes require replacement as instructed. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How do I replace gel electrodes?][How do I charge my NerveSpa device?][How do I troubleshoot if my device will not power on?]",
  },
  {
    question: "Where can I find NerveSpa product manuals?",
    answer:
      "All current manuals are available in print with each product and online here: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Do NerveSpa products come with instructions?][How do I access NerveSpa demo videos?][Who do I contact for technical support?]",
  },
  {
    question: "Where can I watch NerveSpa YouTube videos?",
    answer:
      "Visit the official YouTube channel: https://www.youtube.com/@nervespa for demos, setup guidance, and educational content.\n[How do I access NerveSpa demo videos?][What results can I expect from using Knee Pro?][How do I use the NerveBeam LED/Power Wrap?]",
  },
  {
    question: "Can I get medical advice from NerveSpa?",
    answer:
      "No. NerveSpa provides device guidance only. For diagnosis, prescriptions, or clinical decisions, consult your healthcare provider. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Are NerveSpa products safe to use with medications?][Can NerveSpa replace my medications?][What precautions should I take before starting therapy?]",
  },
  {
    question: "Show me a demo",
    answer:
      "Which product would you like a demo for? Options: Footbath • Conductive Garments • LED Wrap • Power Wrap • QuakePlate • Knee Pro • Shoulder Pro. You can also say “all” to see demos/manuals for every device.\n[Show me demos for all devices][Show me a demo for Footbath][Show me a demo for Knee Pro]",
  },
  {
    question: "Show me demos for all devices",
    answer:
      "Footbath — Demos: https://www.youtube.com/@nervespa • Manuals: Quick Guide https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing | User Guide https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing | Conductive Garments — Demos: https://www.youtube.com/@nervespa • Manual: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing | LED Wrap — Demos: https://www.youtube.com/@nervespa • Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing | Power Wrap — Demos: https://www.youtube.com/@nervespa • Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing | QuakePlate — Demos: https://www.youtube.com/@nervespa • Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing | Knee Pro — Demos: https://www.youtube.com/@nervespa • Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing | Shoulder Pro — Demos: https://www.youtube.com/@nervespa • Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[Show me a demo][Where can I watch NerveSpa YouTube videos?][Where can I find NerveSpa product manuals?]",
  },
  {
    question: "Show me a demo for Footbath",
    answer:
      "YouTube demos: https://www.youtube.com/@nervespa • Manuals: Quick Guide https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing | User Guide https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Show me a demo][Show me demos for all devices][How should the Hand & Foot Neuropathy System be set up?]",
  },
  {
    question: "Show me a demo for Conductive Garments",
    answer:
      "YouTube demos: https://www.youtube.com/@nervespa • Manual: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing.\n[Show me a demo][Show me demos for all devices][How do I use the conductive gloves or socks?]",
  },
  {
    question: "Show me a demo for LED Wrap",
    answer:
      "YouTube demos: https://www.youtube.com/@nervespa • Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing.\n[Show me a demo][Show me demos for all devices][How do I use the NerveBeam LED/Power Wrap?]",
  },
  {
    question: "Show me a demo for Power Wrap",
    answer:
      "YouTube demos: https://www.youtube.com/@nervespa • Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing.\n[Show me a demo][Show me demos for all devices][How do I use the NerveBeam LED/Power Wrap?]",
  },
  {
    question: "Show me a demo for QuakePlate",
    answer:
      "YouTube demos: https://www.youtube.com/@nervespa • Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[Show me a demo][Show me demos for all devices][What is QuakePlate and what does it do?]",
  },
  {
    question: "Show me a demo for Knee Pro",
    answer:
      "YouTube demos: https://www.youtube.com/@nervespa • Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[Show me a demo][Show me demos for all devices][How do I set up Knee Pro?]",
  },
  {
    question: "Show me a demo for Shoulder Pro",
    answer:
      "YouTube demos: https://www.youtube.com/@nervespa • Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[Show me a demo][Show me demos for all devices][How do I set up Shoulder Pro?]",
  },
  {
    question: "Troubleshoot Knee Pro",
    answer:
      "Charge fully (first use 12+ hrs). Hold power 2s. Check lead connections (red→patella), confirm Mode (green=30 min, blue=2 hrs). Ensure gel electrodes adhere; replace after ~10–12 uses. Increase intensity gradually; hydrate skin. Auto shut-off at ~2.5 hrs is normal. Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[How do I set up Knee Pro?][How long is a Knee Pro session and what are the modes?][How do I care for Knee Pro electrodes and when to replace?]",
  },
  {
    question: "Troubleshoot Shoulder Pro",
    answer:
      "Charge fully (first use 12+ hrs). Hold power 2s. Check leads (red→top electrode). Verify Mode (green=30 min, blue=2 hrs). Ensure gel electrodes adhere; replace after ~10–12 uses. Adjust intensity to mild, comfortable tingle. Auto shut-off at ~2.5 hrs is normal. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How do I set up Shoulder Pro?][How long is a Shoulder Pro session and what are the modes?][How do I care for Shoulder Pro electrodes and when to replace?]",
  },
  {
    question: "Welcome (Clinic)",
    answer: "Welcome to NerveSpa Clinic. Choose a section or type a question.",
  },
  {
    question: "Main Menu (Clinic)",
    answer: "Setup | Protocols | Troubleshoot | Billing | Orders | Warranty.",
  },
  {
    question: "Choose a device",
    answer:
      "Select a device to continue: Footbath | Conductive Garments | LED Wrap | Power Wrap | QuakePlate | Knee Pro | Shoulder Pro.",
  },
  {
    question: "Troubleshoot QuakePlate",
    answer:
      "Check power is connected to 110V AC, switch is ON, and connections are dry. If remote is unresponsive, replace batteries and re-pair per manual. Stop use with any adverse reaction. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[What is QuakePlate and what does it do?][How do I use QuakePlate safely?][How do I clean and maintain QuakePlate?]",
  },
  {
    question: "Show videos",
    answer:
      "Which product would you like videos for? Options: Footbath • Conductive Garments • LED Wrap • Power Wrap • QuakePlate • Knee Pro • Shoulder Pro. You can also say “all” for every device.\n[Show me a demo][Show me demos for all devices][Where can I watch NerveSpa YouTube videos?]",
  },
  {
    question: "Product video",
    answer:
      "Sure—pick a product, or say “all” to see every device: Footbath • Conductive Garments • LED Wrap • Power Wrap • QuakePlate • Knee Pro • Shoulder Pro.\n[Show me a demo][Show me demos for all devices][Where can I watch NerveSpa YouTube videos?]",
  },
  {
    question: "How do providers prescribe or implement NerveSpa?",
    answer:
      "NerveSpa is registered with the FDA under prescription use and over-the-counter - so it is not required to obtain a medical prescription. It is typically recommended and distributed by licensed providers such as chiropractors, who guide patients on use and may include supplements or consumables as part of a treatment plan.\n[What is NerveSpa?][What are NerveSpa’s pricing options?][How can my clinic order NerveSpa or get a demo?]",
  },
  {
    question: "How long is a typical session?",
    answer:
      "The default program runs for 30 minutes and the device auto-shuts off. Dry skin thoroughly after use. Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing.\n[How often should the system be used?][What happens after the initial 60–90 day program?]",
  },
  {
    question: "How often should the system be used?",
    answer:
      "Typical clinic/home protocol is once daily, 4–6 days/week for 90 sessions in total, with continued use as needed. Typically users can scale back after this initial program, and often times patients will reuse once per year for a full 90 consecutive uses.  Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What improvements do patients report?][What happens after the initial 60–90 day program?][Can NerveSpa be used long-term?]",
  },
  {
    question: "How do providers determine which topical to recommend?",
    answer:
      "Providers base recommendations on patient symptoms, conditions, and treatment goals. For example, OA/RA Cream for arthritis or Nerve & Neuropathy Cream for neuropathic pain.\n[Are demo resources available for creams and roll-ons?]",
  },
  {
    question: "Can topicals be used in clinics during therapy sessions?",
    answer:
      "Yes, topicals are frequently used in conjunction with device-based treatments to maximize comfort and effectiveness.",
  },
  {
    question: "How are supplements usually prescribed?",
    answer:
      "Providers typically recommend supplements as daily support, often alongside device therapy, based on patient needs.\n[What outcomes are expected from supplements?][Why is compliance important for supplement outcomes?][Are supplements safe for everyone?]",
  },
  {
    question: "Do providers need to prescribe topicals?",
    answer:
      "Topicals do not require a prescription. Providers typically recommend them as part of a patient’s care plan.\n[How do patients reorder creams and roll-ons?][How do clinics order or reorder supplies?][What support resources exist for topical use?]",
  },
  {
    question: "How do providers bill insurance for NerveSpa?",
    answer:
      "Insurance coverage is uncommon. Providers should consult payer guidelines for possible reimbursement of consumables or related therapies.\n[Does insurance cover consumables like salts or garments?][How do clinics order NerveSpa?]",
  },
  {
    question: "Do providers prescribe supplements or can patients self-select?",
    answer:
      "Supplements are generally recommended by providers for best results, though patients can purchase them directly when appropriate.\n[Are supplements safe for everyone?][How are supplements usually prescribed?][What outcomes are expected from supplements?]",
  },
  {
    question: "How often should conductive garments be used?",
    answer:
      "Use once daily, 4–6 days/week. Benefits typically accumulate over 60–90 days. Guide: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing.\n[What does treatment feel like?][How long is a typical session?]",
  },
  {
    question: "How long is a NerveBeam session?",
    answer:
      "One 20-minute session per area; check skin after 10 minutes. The wrap auto-shuts off. LED Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing.\n[How do I use the NerveBeam LED/Power Wrap?][What does treatment feel like?][Who should NOT use NerveBeam?]",
  },
  {
    question: "How long is a Knee Pro session and what are the modes?",
    answer:
      "Mode 1 (green) runs 30 min; Mode 2 (blue) runs 2 hours; unit shuts off at ~2.5 hours. Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[How do I set up Knee Pro?][How often should Knee Pro be used?]",
  },
  {
    question: "How often should Knee Pro be used?",
    answer:
      "Recommended long-term program: 5 sessions/week, 130 sessions total (~325 hours over ~6 months); extend to 9–12 months for optimal results. Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[How long is a Knee Pro session and what are the modes?]",
  },
  {
    question: "How long is a Shoulder Pro session and what are the modes?",
    answer:
      "Mode 1 (green) runs 30 min; Mode 2 (blue) runs 2 hours; unit shuts off at ~2.5 hours. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How do I set up Shoulder Pro?][How often should Shoulder Pro be used?]",
  },
  {
    question: "How often should Shoulder Pro be used?",
    answer:
      "Program: 5 sessions/week, 130 sessions (~325 hours over ~6 months); extend to 9–12 months depending on improvement. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How long is a Shoulder Pro session and what are the modes?]",
  },
  {
    question: "Is NerveSpa safe for seniors to use at home?",
    answer:
      "Yes, NerveSpa systems are designed for home use under caregiver or self-monitoring. Seniors should ensure safe seating, proper water level (if footbath), and regular skin checks. Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Who should NOT use NerveSpa Hand & Footbath?][Is NerveSpa covered by insurance?]",
  },
  {
    question: "How do I store NerveSpa products between sessions?",
    answer:
      "Store devices in a cool, dry environment. Do not leave plugged in. Keep electrodes sealed on protective film. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How do I clean and maintain the NerveSpa Footbath?][How do I care for Knee Pro electrodes and when to replace?][How do I care for Shoulder Pro electrodes and when to replace?]",
  },
  {
    question: "How often should consumables be replaced?",
    answer:
      "Epsom salt/tablets: per session. Gel electrodes: 10–12 uses. Conductive spray: reapply each session. Replace accessories when worn. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What consumables come with NerveSpa systems?][How do I reorder consumables and accessories?][What accessories are included with each system?]",
  },
  {
    question: "How long is the warranty period?",
    answer:
      "Standard warranty is 1 year against manufacturing defects. Extended warranty options may be available through authorized distributors. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What is included in the warranty?][How do I register my NerveSpa product for warranty?][Who do I contact for technical support?]",
  },
  {
    question:
      "Can I use QuakePlate before or after Knee/Shoulder Pro sessions?",
    answer:
      "Yes, QuakePlate can be used before Knee/Shoulder therapy to relax muscles, or after sessions to enhance circulation. Allow a break between devices. QuakePlate Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[What results can I expect from using QuakePlate?][How often should Knee Pro be used?][How often should Shoulder Pro be used?]",
  },
  {
    question: "Can NerveSpa devices be used in clinics or only at home?",
    answer:
      "NerveSpa systems are designed for home use but are also used in physical therapy and pain clinics. Check with your provider for supervised protocols. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Is NerveSpa safe for seniors to use at home?][Do I need a prescription for NerveSpa?][Are there clinical studies on NerveSpa?]",
  },
  {
    question: "What should I do if I feel discomfort during a session?",
    answer:
      "Stop immediately, reduce intensity, and recheck electrode placement or consumables. Resume only if comfortable. Consult a physician if persistent. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What does treatment feel like?][What if stimulation feels weak?][Are there side effects from NerveSpa?]",
  },
  {
    question: "How long do NerveSpa devices typically last?",
    answer:
      "With proper care, most units last 3–5 years. Consumables require periodic replacement. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How do I clean and maintain the NerveSpa Footbath?][How do I store NerveSpa products between sessions?][What accessories require replacement most often?]",
  },
  {
    question: "How long is a QuakePlate session?",
    answer:
      "Start with 10 minutes and increase up to ~20 minutes as tolerated. Monitor comfort; stop if discomfort occurs. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[What is QuakePlate and what does it do?][How do I use QuakePlate safely?][Who should NOT use QuakePlate?]",
  },
  {
    question: "How often should QuakePlate be used?",
    answer:
      "Use 1–2× daily or per clinic protocol on non-irritated skin. Do not combine with water/electrotherapy sessions. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[How long is a QuakePlate session?][What is QuakePlate and what does it do?][How do I clean and maintain QuakePlate?]",
  },
  {
    question: "How often should the LED Wrap be used?",
    answer:
      "Use once or twice daily on intact skin as tolerated; stop if irritation occurs. One session is ~20 minutes (auto-shutoff). Follow clinic protocol. Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing.\n[How long is a NerveBeam session?][How do I use the NerveBeam LED/Power Wrap?][Who should NOT use NerveBeam?]",
  },
  {
    question: "How often should the Power Wrap be used?",
    answer:
      "Use once or twice daily on intact skin as tolerated; stop if irritation occurs. One session is ~20 minutes (auto-shutoff). Follow clinic protocol. Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing.\n[How long is a NerveBeam session?][How do I use the NerveBeam LED/Power Wrap?][Who should NOT use NerveBeam?]",
  },
  {
    question:
      "is 22,000 mW power coming out of LED's more effective therapeuticaly than 12000mW power coming out of lasers?",
    answer:
      "The therapeutic effectiveness of 22,000 mW power from LEDs compared to 12,000 mW power from lasers generally favors lasers, despite the higher nominal power output from LEDs. This is because lasers provide coherent, monochromatic, and collimated light, which penetrates deeper and delivers energy more efficiently to tissues. LEDs produce incoherent, non-collimated light, where much energy is dispersed and less effectively absorbed by deep tissues, limiting therapeutic depth and efficacy compared to lasers.",
  },
  {
    question:
      "What are the pros and cons of a Wrappable LED device vs. a physical hard device",
    answer:
      "There is a large then pcb circuit board inside a wrapable LED device.  At times patients will crease the pad with excess pressure and this will short circuit the board. \n\nIt is sort of the nature of the beast for skin distant distribution of red light.  Solid shape units solve this but do not provide coverage like the skin distant wrappable ones.   \n\nThe Nerve Beam has reinforcements to protect it from creasing but creasing will destroy the wrap. If the PCB is damaged by a user it is covered under our 1 year warranty.",
  },
  {
    question: "Does the LED wrap Produce a lot of heat",
    answer:
      "The LED wrap produces some heat - but given that we use 2/3rd infrared lights vs. 1/3rd redlights, less heat is produced on the surface but the heat is translated into penetrating deeper into the tissue.",
  },
  {
    question: "Why doesnt the LED wrap have higher Joules",
    answer:
      "The effectiveness of the LED wrap comes down to power and quantity. Our LED wrap, for instance, features 600 LEDs, with two-thirds of them being infrared. It's important to note that infrared, having a lower wavelength, generates less frequency and consequently less heat. This allows infrared light to penetrate deeper into the tissue without producing surface-level heat joules.",
  },
  {
    question:
      "The Health Light LED device markets a high amount of joules, why doesnt the nerve beam have as high joules?",
    answer:
      'The way they calculate joules is not proper in our opinion.  It is misleading because of the following:\nIt confuses "Total Energy" with "Energy Density."\n\n3040 joules: This is the Total Energy. It refers to the sum of all light energy emitted by the device over a specific period.\n\nEffective Dose J/cm² (joules per square centimeter): This is the Energy Density. It refers to the energy delivered to each square centimeter of your skin.\n\nThe Key Question: Over what area is this total energy distributed?\n\nW need to divide by the treatment area.\n\nEnergy Density (J/cm²) = Total Energy (J) / Treatment Area (cm²)\n\nDose (J/cm²）= Irradition（mW/cm²) * Time (Seconds) *0.001.',
  },
  {
    question: "What are NerveSpa LED Wraps?",
    answer:
      "Nerve spa LED wraps use clinical grade specficications with robust power that increaes overall irradiance output.  All waveforms deployed are within clinically researched ranges.",
  },
  {
    question: "Who should not use  Wraps?",
    answer:
      "Patients with pacemakers, other implanted electronics, or severe skin conditions should not use Wraps. Providers should screen patients before recommending.\n[What outcomes are expected from Wraps?]",
  },
  {
    question: "What is the NerveBeam LED Light Therapy Wrap?",
    answer:
      "The NerveBeam LED Wrap delivers a high quantity red and infrared light therapy to improve circulation, reduce inflammation, and support nerve and joint health. It is lightweight and designed for at-home or clinic use.\n[How is the NerveBeam LED Wrap used?][Who should not use the NerveBeam LED Wrap?][What outcomes are expected from the LED Wrap?]",
  },
  {
    question: "How is the NerveBeam LED Wrap used?",
    answer:
      "The wrap is positioned around the target area (such as knee, shoulder, or arm), secured with straps, and connected to the controller. Sessions typically last 20–30 minutes as guided by providers.\n[What outcomes are expected from the LED Wrap?]",
  },
  {
    question: "Who should not use the NerveBeam LED Wrap?",
    answer:
      "Patients with pacemakers, other implanted electronics, or light sensitivity conditions should not use the LED Wrap. Providers should screen for contraindications before use.\n[What outcomes are expected from the LED Wrap?]",
  },
  {
    question: "What is the NerveBeam Cold Laser?",
    answer:
      "The NerveBeam Cold Laser uses low-level red and infrared laser therapy to reduce inflammation, promote circulation, and support nerve recovery. It is designed for targeted treatment of neuropathy and joint pain.\n[How is the Cold Laser used?][Who should not use the Cold Laser?]",
  },
  {
    question: "How is the Cold Laser used?",
    answer:
      "The handheld applicator is placed directly over the treatment area for 15–20 minutes per session. Providers guide recommended frequency and safety precautions.\n[Who should not use the Cold Laser?]",
  },
  {
    question: "Who should not use the Cold Laser?",
    answer:
      "Patients with pacemakers, epilepsy, or cancerous lesions should not use the Cold Laser. Providers should screen patients for contraindications before use.",
  },
  {
    question: "What is the PowerWrap?",
    answer:
      "The PowerWrap is a high-powered LED + Laser device that contains both red light and infrared lights.  It wraps around a body part to deliver deep tissue relief for neuropathy, joint pain, and inflammation. It includes 78 lasers and 192 LEDs for clinical-level therapy.\n[How is the PowerWrap used?][Who should not use the PowerWrap?]",
  },
  {
    question: "How is the PowerWrap used?",
    answer:
      "The wrap is secured around the target area and connected to its controller. Sessions typically last 3-6 minutes per treatment site. Providers guide frequency and treatment plans.\n[Who should not use the PowerWrap?]",
  },
  {
    question: "Who should not use the PowerWrap?",
    answer:
      "Patients with pacemakers, other implanted electronics, or certain uncontrolled medical conditions should not use the PowerWrap. Providers should screen before recommending use.",
  },
  {
    question:
      "What outcomes are expected with Cold Laser or PowerWrap therapy?",
    answer:
      "Patients typically report reduced pain, improved circulation, and better mobility over consistent sessions. Outcomes vary by condition and adherence to the program.\n[What outcomes are expected with the QuakePlate?][What outcomes are expected with the KneePro?][What outcomes are expected with the ShoulderPro?]",
  },
  {
    question: "What outcomes are expected with Wrap therapy?",
    answer:
      "Patients typically report reduced pain, improved mobility, and better circulation when using Wraps consistently. Outcomes vary depending on condition and adherence.\n[What outcomes are expected with the QuakePlate?]",
  },
  {
    question: "What outcomes are expected from the LED Wrap?",
    answer:
      "Patients often experience relief from pain, better circulation, reduced inflammation, and improved tissue recovery when used consistently. https://www.youtube.com/watch?v=GIxociDKnrw.\n[What outcomes are expected with the QuakePlate?]",
  },
  {
    question: "What outcomes are expected from the Cold Laser?",
    answer:
      "Patients often report reduced nerve pain, improved sensation, and faster healing in targeted areas. Clinical testimonials support positive results.  https://www.youtube.com/shorts/QRF_zFGeMUI.\n[What outcomes are expected with the KneePro?][What outcomes are expected with the ShoulderPro?]",
  },
  {
    question: "What outcomes are expected from the PowerWrap?",
    answer:
      "Patients report targeted relief of neuropathy (numbing and tingling) and joint pain, reduction in inflammation, increased circulation and improved mobility. Testimonials highlight faster recovery when combined with other therapies. https://www.youtube.com/watch?v=GgvYnLvrEQE.\n[What outcomes are expected with the KneePro?][What outcomes are expected with the QuakePlate?]",
  },
  {
    question: "What if the LED Wrap does not light?",
    answer:
      "Confirm that the charger is connected and the wrap is powered on. Check replacement parts if needed. If unresolved, contact NerveSpa support.\n[Who should patients contact for technical issues?][Are demo resources available for creams and roll-ons?]",
  },
  {
    question: "What if Wraps feel uncomfortable?",
    answer:
      "Ensure wraps are secured snugly but not too tight. Adjust position for comfort. Discontinue use if irritation occurs and consult support if needed.\n[What if stimulation feels weak?][What if the LED Wrap does not light?][Who should patients contact for technical issues?]",
  },
  {
    question: "What outcomes are expected from Wraps?",
    answer:
      "Wraps help deliver consistent stimulation to targeted areas, improving comfort, reducing pain, and supporting recovery.\n[Who should not use Wraps?]",
  },
  {
    question: "Who should not use NerveSpa Wraps?",
    answer:
      "NerveSpa Wraps should not be used by patients with open wounds, active skin infections, implanted electronic devices (such as pacemakers), or by those who have been specifically advised by their provider not to use electrical stimulation therapies. Wraps are intended for external use only.",
  },
  {
    question: "What is NerveBeam (LED/Power Wrap)?",
    answer:
      "Flexible red (660nm) and infrared (830/850nm) light therapy wraps for neuropathy, pain, and recovery. LED Wrap Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing  | Power Wrap Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing  | Video: https://www.youtube.com/@nervespa.\n[How long is a NerveBeam session?]",
  },
  {
    question: "How do I use the NerveBeam LED/Power Wrap?",
    answer:
      "Plug in or charge, position wrap over area, secure LOOSELY (allow airflow), press power 2s. Red only for skin; red+IR for deeper tissues. Auto-shutoff ~20 min. LED Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing  | Power Wrap Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing  | Video: https://www.youtube.com/@nervespa.\n[What is NerveBeam (LED/Power Wrap)?][What does treatment feel like?][Who should NOT use NerveBeam?]",
  },
  {
    question: "How do I clean and store the NerveBeam wrap?",
    answer:
      "Hand-wipe lightly with a damp cloth; do not soak; keep power button and LEDs dry; store cool/dry unplugged. LED Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing.\n[How do I use the NerveBeam LED/Power Wrap?][Who should NOT use NerveBeam?][How long is a NerveBeam session?]",
  },
  {
    question: "What accessories are included with each system?",
    answer:
      "Footbath includes leads/electrodes; Garments include gloves/socks; LED/Power Wraps include straps and power adapters; QuakePlate includes a remote; Knee/Shoulder include wraps and electrodes. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How do I reorder consumables and accessories?][What consumables come with NerveSpa systems?][What consumables are used with the system?]",
  },
  {
    question: "What results can I expect from using NerveBeam LED/Power Wraps?",
    answer:
      "Red light supports skin and surface tissue healing; red+infrared penetrates deeper for pain relief, inflammation reduction, and recovery. Outcomes may be seen after 2–4 weeks of consistent use. LED Wrap Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing.\n[How long is a NerveBeam session?][Who should NOT use NerveBeam?]",
  },
  {
    question: "How do I clean and maintain NerveBeam wraps?",
    answer:
      "Unplug device, wipe gently with damp cloth, do not soak, and allow to fully dry before storage. Store flat and cool. LED Wrap Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing.\n[How do I use the NerveBeam LED/Power Wrap?][Who should NOT use NerveBeam?][How long is a NerveBeam session?]",
  },
  {
    question: "What is the difference between LED Wrap and Power Wrap?",
    answer:
      "LED Wrap uses standard red/infrared output, while Power Wrap delivers higher energy for deeper tissue penetration and faster results. LED Wrap Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing  | Power Wrap Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing.\n[What is NerveBeam (LED/Power Wrap)?][How do I use the NerveBeam LED/Power Wrap?][What results can I expect from using NerveBeam LED/Power Wraps?]",
  },
  {
    question: "What accessories require replacement most often?",
    answer:
      "Consumables like salts, effervescent tablets, conductive sprays, and gel electrodes need regular replacement. Straps and cables may also require periodic replacement. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[How often should consumables be replaced?][How do I reorder consumables and accessories?][What accessories are included with each system?]",
  },
  {
    question: "What is the NerveSpa Hand & Foot Neuropathy System?",
    answer:
      "The Hand & Foot Neuropathy System is a touch-screen device that uses aquatic electrotherapy with proprietary specifications and unique waveforms. Patients submerge hands or feet in warm water with salts and tablets, allowing circumferential stimulation that supports nerve activity and circulation.\n[How does the Hand & Foot Neuropathy System work?][How long is a typical session?][How often should the system be used?]",
  },
  {
    question: "How does the Hand & Foot Neuropathy System work?",
    answer:
      "The system delivers comfortable stimulation via a warm foot bath to support circulation and nerve health; select Hands/Feet mode and adjust intensity to a mild, comfortable tingle. 30-minute auto-shutoff. Manual: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing.\n[Why water-based therapy?][What consumables are used with the system?][What outcomes are expected from the Hand & Foot Neuropathy System?]",
  },
  {
    question: "How should the Hand & Foot Neuropathy System be set up?",
    answer:
      "Connect lead wires and electrodes, add 1 tbsp Epsom salt + 1 effervescent tablet per side, fill with warm water, insert feet, power on, select Hands/Feet, increase intensity until comfortable. Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing  |  Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[What if the Hand & Foot Neuropathy System does not power on?][What if stimulation feels weak?][What consumables are used with the system?]",
  },
  {
    question: "What is the Nerve & Neuropathy Cream?",
    answer:
      "A doctor-formulated topical designed to relieve nerve pain and improve circulation in hands, feet, legs, and joints. Key ingredients include high concentration of L-Arginine, Vitamin B6, Menthol, and Aloe.\n[How should the Nerve & Neuropathy Cream be applied?][Who should not use the Nerve & Neuropathy Cream?][What outcomes are expected with the Nerve & Neuropathy Cream?]",
  },
  {
    question: "How should the Nerve & Neuropathy Cream be applied?",
    answer:
      "Apply directly to affected areas such as feet, hands, or joints. Massage gently until absorbed. Use as directed by a provider.\n[What outcomes are expected with the Nerve & Neuropathy Cream?]",
  },
  {
    question: "Who should not use the Nerve & Neuropathy Cream?",
    answer:
      "Patients with allergies to any listed ingredients, or with severe open wounds on the application area, should avoid using the cream. Consult a provider if unsure.\n[What outcomes are expected with the Nerve & Neuropathy Cream?]",
  },
  {
    question: "What outcomes are expected with the Nerve & Neuropathy Cream?",
    answer:
      "Patients typically experience reduced nerve pain, improved circulation, and relief from stiffness or inflammation in the applied areas. Results may vary based on condition.\n[What outcomes are expected with the OA/RA Cream?]",
  },
  {
    question: "What is the Osteoarthritis & RA Cream?",
    answer:
      "A topical designed to relieve pain and inflammation associated with osteoarthritis and rheumatoid arthritis. Key ingredients include Glucosamine, Arnica, Arginine, Menthol, and Aloe.\n[How should the OA/RA Cream be applied?][Who should not use the OA/RA Cream?][What outcomes are expected with the OA/RA Cream?]",
  },
  {
    question: "How should the OA/RA Cream be applied?",
    answer:
      "Apply directly to affected joints such as knees, hands, or shoulders. Massage gently until absorbed. Use as directed by a provider.\n[Who should not use the OA/RA Cream?][What outcomes are expected with the OA/RA Cream?]",
  },
  {
    question: "Who should not use the OA/RA Cream?",
    answer:
      "Patients with allergies to listed ingredients, or with severe skin conditions/open wounds on the application area, should avoid use. Provider consultation recommended.\n[What outcomes are expected with the OA/RA Cream?]",
  },
  {
    question: "What outcomes are expected with the OA/RA Cream?",
    answer:
      "Patients often report decreased joint stiffness, reduced pain, and improved mobility. Outcomes depend on consistent use and severity of arthritis.\n[What outcomes are expected with the Roll-On Pain Relief?]",
  },
  {
    question: "What is the Nerve Target Roll-On Pain Relief?",
    answer:
      "A topical roll-on formula designed to relieve neuropathy symptoms, arthritis, back pain, and sore muscles. Key ingredients include Arnica, Menthol, Camphor, Aloe, and Magnesium.\n[How should the Roll-On Pain Relief be applied?][Who should not use the Roll-On Pain Relief?][What outcomes are expected with the Roll-On Pain Relief?]",
  },
  {
    question: "How should the Roll-On Pain Relief be applied?",
    answer:
      "Apply directly to painful areas such as joints, muscles, or feet. Roll on evenly and allow to absorb. Use as directed by a provider.\n[Who should not use the Roll-On Pain Relief?][What outcomes are expected with the Roll-On Pain Relief?]",
  },
  {
    question: "Who should not use the Roll-On Pain Relief?",
    answer:
      "Patients with allergies to Arnica, Menthol, Camphor, or Aloe should avoid use. Avoid applying to broken skin or severe wounds.\n[What outcomes are expected with the Roll-On Pain Relief?]",
  },
  {
    question: "What outcomes are expected with the Roll-On Pain Relief?",
    answer:
      "Patients often report reduced muscle tension, relief from inflammation, and cooling/soothing sensations. Relief may be temporary but supports overall therapy.",
  },
  {
    question:
      "What outcomes are expected from the Hand & Foot Neuropathy System?",
    answer:
      "Many users report improved circulation, reduced tingling, reduced pain and numbing sensation and greater comfort within weeks. Most consistent outcomes appear over 60–90 uses of daily use (4–6×/week) with proper session setup and consumables. See Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.",
  },
  {
    question: "What ingredients are in the Nerve & Neuropathy Cream?",
    answer:
      "The cream includes L-Arginine, Vitamin B6, Menthol, and Aloe. These ingredients improve circulation, reduce pain, and soothe inflammation in feet, hands, and legs.\n[How does the Nerve & Neuropathy Cream provide relief?][What outcomes are expected from creams and roll-ons?][Are topicals safe for everyone?]",
  },
  {
    question: "How does the Nerve & Neuropathy Cream provide relief?",
    answer:
      "L-Arginine boosts nitric oxide for circulation, Menthol provides cooling pain relief, and Vitamin B6 supports nerve health. The cream absorbs quickly for targeted action.\n[What ingredients are in the Osteoarthritis & RA Cream?][What outcomes are expected from creams and roll-ons?][Are topicals safe for everyone?]",
  },
  {
    question: "What ingredients are in the Osteoarthritis & RA Cream?",
    answer:
      "The OA/RA Cream contains Glucosamine, Arnica, Arginine, Menthol, and Aloe, designed to reduce inflammation, rebuild cartilage, and relieve joint pain.\n[How does the Osteoarthritis & RA Cream provide relief?][What outcomes are expected from creams and roll-ons?][Are topicals safe for everyone?]",
  },
  {
    question: "How does the Osteoarthritis & RA Cream provide relief?",
    answer:
      "Glucosamine supports cartilage rebuild, Arnica and Menthol reduce inflammation and pain, and Aloe soothes tissues. The cream absorbs quickly for targeted joint relief.\n[What is the Plantar Fasciitis & Heel Spur Cream?][What outcomes are expected from creams and roll-ons?][Are topicals safe for everyone?]",
  },
  {
    question: "What if the Hand & Foot Neuropathy System does not power on?",
    answer:
      "Check that the charger is connected, the device is fully charged, and all cables are secure. If issues persist, contact NerveSpa support.\n[What if stimulation feels weak?][Who should patients contact for technical issues?][How are returns processed?]",
  },
  {
    question:
      "What is the Osteoarthritis & Rheumatoid Arthritis (OA/RA) Cream?",
    answer:
      "The OA/RA Cream combines Glucosamine, Arnica, Arginine, Menthol, and Aloe to relieve joint pain, reduce inflammation, and support cartilage and tissue repair.\n[How should the OA/RA Cream be used?][Are topicals safe for everyone?]",
  },
  {
    question: "How should the OA/RA Cream be used?",
    answer:
      "Apply directly to painful joints (hands, knees, feet). It absorbs quickly and can be used to support daily joint health alongside therapy.\n[What is the Osteoarthritis & RA Cream?][Are topicals safe for everyone?]",
  },
  {
    question: "Can NerveSpa be used if I have open wounds or skin conditions?",
    answer:
      "Do not use on areas with open wounds, rashes, infections, or broken skin. Wait until skin heals before resuming use. Manuals: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing.\n[Who should NOT use NerveSpa Hand & Footbath?][Who should NOT use the conductive garments?][Who should NOT use QuakePlate?]",
  },
  {
    question: "What warranty and return policy does NerveSpa offer?",
    answer:
      "Devices include a limited warranty against defects for one year. Returns are accepted within 30 days if undamaged; buyers are responsible for shipping and a restocking fee. Contact your seller for RMA instructions.\n[What is the NerveSpa return policy?][Who should patients contact for technical issues?][How quickly are products shipped?]",
  },
  {
    question: "Are topicals covered by warranty or return policies?",
    answer:
      "Yes. NerveSpa offers satisfaction guarantees and return policies for creams and roll-ons. Clinics can confirm details with their representative.\n[How do patients reorder creams and roll-ons?][How do clinics order or reorder supplies?][What support resources exist for topical use?]",
  },
  {
    question: "What warranty does NerveSpa offer?",
    answer:
      "NerveSpa devices include a standard limited warranty. Terms vary by product and can be confirmed with a NerveSpa representative.\n[What is the NerveSpa return policy?][Are topicals covered by warranty or return policies?][Who should patients contact for technical issues?]",
  },
  {
    question: "How does NerveSpa ensure safety?",
    answer:
      "All NerveSpa products are manufactured in FDA-registered facilities. Supplements and topicals are produced in FDA-registered and cGMP facilities. Devices are drug-free, non-invasive, and designed for home or clinic use.\n[What certifications does PMT hold?][Is NerveSpa FDA-registered?][Who determines how NerveSpa should be used?]",
  },
  {
    question: "How do I clean and maintain QuakePlate?",
    answer:
      "Wipe surfaces, keep cords away from heat, inspect for damage; unplug immediately if cords are damaged; contact supplier for service. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing.\n[How do I use QuakePlate safely?][Who should NOT use QuakePlate?][What is QuakePlate and what does it do?]",
  },
  {
    question: "How do I register my NerveSpa product for warranty?",
    answer:
      "Most devices include a manufacturer’s warranty. Register your device online or via included card to activate. Keep proof of purchase. Shoulder Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[What is included in the warranty?][Who do I contact for technical support?][How long is the warranty period?]",
  },
  {
    question: "What is included in the warranty?",
    answer:
      "NerveSpa products include coverage against manufacturing defects for 1 year (standard). Consumables (salts, tablets, electrodes, sprays) are excluded. Shoulder Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How do I register my NerveSpa product for warranty?][Who do I contact for technical support?][How long is the warranty period?]",
  },
  {
    question: "How do I clean and maintain the NerveSpa Footbath?",
    answer:
      "Empty basin after each session, dry electrodes and wires thoroughly, and store in a cool, dry place. Do not submerge controller. Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing.\n[What consumables are used with the system?][How should the Hand & Foot Neuropathy System be set up?][Who should NOT use NerveSpa Hand & Footbath?]",
  },
  {
    question: "How do I clean and maintain the conductive garments?",
    answer:
      "Hand-wash garments gently with mild soap, air-dry completely before reuse, and respray with conductive solution before each session. Garments Guide: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing.\n[What are NerveSpa Conductive Garments (gloves/socks)?][How often should conductive garments be used?][Who should NOT use the conductive garments?]",
  },
  {
    question: "How do I clean and store Knee Pro?",
    answer:
      "Wipe wrap with a lightly damp cloth; do not soak. Keep ports dry. Reseal gel electrodes on protective film; replace after ~10–12 uses. Store cool/dry; unplug pigtails if desired. Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing.\n[How do I care for Knee Pro electrodes and when to replace?][Troubleshoot Knee Pro][How often should Knee Pro be used?]",
  },
  {
    question: "How do I clean and store the Shoulder Pro?",
    answer:
      "Wipe wrap with a lightly damp cloth; do not soak. Keep ports dry. Reseal gel electrodes on protective film; replace after ~10–12 uses. Store cool/dry; unplug pigtails if desired. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing.\n[How do I care for Shoulder Pro electrodes and when to replace?][Troubleshoot Shoulder Pro][How often should Shoulder Pro be used?]",
  },
  {
    question: "How do I clean and maintain the conductive garments?",
    answer:
      "Hand-wash gloves/socks gently with mild soap; do not wring; air-dry completely before reuse. Spray inside/outside with conductive solution before each session. Store cool/dry. Manual: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing.\n[What are NerveSpa Conductive Garments (gloves/socks)?][How often should conductive garments be used?][How do I use the conductive gloves or socks?]",
  },
  {
    question: "youtube",
    answer: "https://youtu.be/ld_LcAYu3Zs?si=QKrSUx5VDj2qe-iH",
  },
];

// Default output
let outputValue = "No match";

// Helper function to normalize text for comparison
// 1. Converts to lowercase (handles "small letter")
// 2. Removes '?' (handles "not using ? mark")
// 3. Trims and collapses spaces (handles "using space")
function normalize(text) {
  if (!text) return "";
  return text.toLowerCase().replace(/\?/g, "").replace(/\s+/g, " ").trim();
}

// Normalize the incoming question once
const cleanIncoming = normalize(incomingQuestion);

// Loop through Q&A and find match
for (const pair of qaPairs) {
  // Compare the normalized versions of both questions
  if (normalize(pair.question) === cleanIncoming) {
    outputValue = pair.answer;
    break;
  }
}

// Return the result
return [
  {
    json: {
      output: outputValue,
    },
  },
];
