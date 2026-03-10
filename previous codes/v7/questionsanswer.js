const incomingQuestion = $("Webhook").first().json.query.chatInput;

// JSON Q&A pairs
const qaPairs = [

  {
    question: "What is NerveSpa?",
    answer:
      "NerveSpa is a family of clinical-grade products and programs designed to support neuropathy, joint pain, and metabolic health. It includes aquatic nerve stimulation, LED therapy, cold laser, vibration therapy, supplements, and topicals. All products are manufactured in FDA-registered facilities and distributed through licensed clinicians.\n[How do providers prescribe or implement NerveSpa?][What conditions and symptoms can NerveSpa support?][How can my clinic order NerveSpa or get a demo?]",
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
      "NerveSpa devices are sold to clinics at wholesale pricing. Retail pricing applies to patient consumables such as salts and garments. Some devices may qualify for insurance coverage under HCPCS code E0720 depending on the plan.\n[Are bundles available for patients?]",
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
      "NerveSpa integrates multiple clinical-grade modalities into one family of products—water-based stimulation, high-powered LED wraps, cold laser, vibration therapy, targeted joint devices, and supplementation—offering broader coverage than single-modality systems.\n[Is NerveSpa FDA-registered?][How does the Hand & Foot Neuropathy System work?]",
  },
  {
    question: "Is NerveSpa FDA-registered?",
    answer:
      "Yes. NerveSpa devices are FDA-registered and manufactured in FDA-registered facilities. Registration confirms establishment and product listing; it does not represent FDA approval of medical claims.\n[Is NerveSpa covered by insurance?][Where can FDA listings be verified?][What certifications does PMT hold?]",
  },
  {
    question: "Is NerveSpa covered by insurance?",
    answer:
      "Coverage varies by plan. Some clinics bill eligible components under neuropathy programs, while others use cash-pay, HSA/FSA, or membership models. Patients should verify with their insurer.\n[What is HCPCS code E0720?][Does insurance cover consumables like salts or garments?][How do providers bill insurance for NerveSpa?]",
  },
  {
    question: "Does NerveSpa replace medical care?",
    answer:
      "No. NerveSpa does not replace medical diagnosis or treatment. Providers determine appropriate use, recommend protocols, and guide patients throughout care.\n[Who decides if NerveSpa is appropriate?][Can NerveSpa be used with other treatments?][What role do patients play in outcomes?]",
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
      "PMT maintains FDA establishment registration and manufactures products through FDA-registered facilities worldwide, ensuring compliance with federal manufacturing and distribution standards.\n[Who is PMT in relation to NerveSpa?][Where are NerveSpa products manufactured?][Where can FDA listings be verified?]",
  },
  {
    question: "Where are NerveSpa products manufactured?",
    answer:
      "NerveSpa products are sourced globally. Devices are produced in FDA-registered facilities, while supplements and topicals are made in FDA-registered and cGMP facilities.\n[What certifications does PMT hold?][Where can FDA listings be verified?][How does NerveSpa ensure safety?]",
  },
  {
    question: "Where can FDA listings be verified?",
    answer:
      "Clinics can verify FDA establishment registrations and product listings through the FDA’s official database using PMT’s registration information.  View listings here: https://docs.google.com/spreadsheets/u/0/d/1qX86EUZUUwZKHMVHDy6IqY27pQankwW89ukJwa-F7G8/edit\n[What certifications does PMT hold?][Is NerveSpa FDA-registered?][Where are NerveSpa products manufactured?]",
  },
  {
    question: "What is the NerveSpa return policy?",
    answer:
      "NerveSpa offers a return policy for devices and consumables if patients are not satisfied. Specific terms should be confirmed at purchase or with the provider.\n[What warranty does NerveSpa offer?][Are topicals covered by warranty or return policies?][Who should patients contact for technical issues?]",
  },
  {
    question: "Does NerveSpa replace medical treatment?",
    answer:
      "No. NerveSpa does not replace medical diagnosis or treatment. Providers determine whether the products and protocols are appropriate and patients should follow professional guidance.\n[Who determines how NerveSpa should be used?][What support resources are available?][What role do patients play in outcomes?]",
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
      "Most orders ship within standard fulfillment timelines depending on inventory and clinic volume. Providers can contact their representative for order-specific updates.\n[How are returns processed?][What warranty does NerveSpa offer?][How do patients receive consumables or supplements?]",
  },
  {
    question: "How are returns processed?",
    answer:
      "Returns are handled through NerveSpa or the clinic where the purchase was made. Contact support for instructions and eligibility.\n[What warranty does NerveSpa offer?][What is the NerveSpa return policy?][Who should patients contact for technical issues?]",
  },
  {
    question: "How do clinics contact NerveSpa for support?",
    answer:
      "Clinics can contact NerveSpa by clicking ‘Support’ in this chatbot to submit a contact form, by emailing support@nervespa.com, or by calling 1-800-239-7880.\n[How do patients contact NerveSpa?][Who should patients contact for technical issues?][What support resources are available?]",
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
      "E0720 is a durable medical equipment (DME) billing code used by some clinics for certain types of neuromuscular stimulation. Coverage depends on the insurer and clinical documentation.\n[Is NerveSpa covered by insurance?][How do clinics bill insurance for NerveSpa?]",
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
      "Yes. Clinics commonly pair NerveSpa with chiropractic care, PT, metabolic programs, red light therapy, or other supportive modalities as part of a broader treatment plan.\n[Can multiple NerveSpa modalities be used in the same day?][What lifestyle changes support NerveSpa therapy?][Who decides if NerveSpa is appropriate?]",
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
      "Licensed providers determine whether NerveSpa devices or supplements are suitable based on the patient’s condition, safety factors, and treatment goals.\n[What research supports NerveSpa therapies?][What role do patients play in outcomes?][What support resources are available?]",
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
      "The NerveBeam LED Wrap is a flexible red and infrared light therapy wrap designed to support circulation, reduce inflammation, and help with nerve and joint discomfort in areas like the knee, shoulder, arm, or leg. It is intended to be used under the guidance of a clinic as part of a structured program. For full details and instructions, please refer to the NerveBeam LED Wrap User Guide: https://cdn.hmsctl.com/media/nervespa/pdf/NerveBeam_UserManual_LED-wrap_v03.pdf\n[How is the NerveBeam LED Wrap used?][Who should not use the NerveBeam LED Wrap?][What outcomes are expected from the LED Wrap?]",
  },
  {
    question: "How is the NerveBeam LED Wrap used?",
    answer:
      "Place the NerveBeam LED Wrap around the target area, secure it with the straps so it is snug but comfortable, and connect it to the controller. Turn the system on and follow your clinic’s recommended program for session length and frequency. For step-by-step setup, refer to the NerveBeam LED Wrap User Guide: https://cdn.hmsctl.com/media/nervespa/pdf/NerveBeam_UserManual_LED-wrap_v03.pdf\n[What outcomes are expected from the LED Wrap?]",
  },
  {
    question: "Who should not use the NerveBeam LED Wrap?",
    answer:
      "Patients with pacemakers or other implanted electronic devices, known light sensitivity or photosensitive conditions, active cancer in the treatment area, or those whose provider has advised against light-based or stimulation therapies should not use the NerveBeam LED Wrap. Always review the safety and contraindication section of the NerveBeam LED Wrap User Guide (https://cdn.hmsctl.com/media/nervespa/pdf/NerveBeam_UserManual_LED-wrap_v03.pdf) and consult your clinic before use.\n[What outcomes are expected from the LED Wrap?]",
  },
  {
    question: "What is the NerveBeam Cold Laser?",
    answer:
      "The NerveBeam Cold Laser is a handheld low-level laser therapy device that uses red and infrared laser light to support circulation, reduce inflammation, and provide targeted comfort in nerve and joint areas as part of a clinic-directed plan. For detailed setup instructions and safety, see the Cold Laser User Guide: https://drive.google.com/file/d/1pHUIbj5dt7BjVwwqzriCmf5ODdpA5hLQ/view?usp=sharing and for an overview of how red and infrared light support cellular energy, you can watch: https://youtu.be/wrWQvDcjEFA\n[How is the Cold Laser used?][Who should not use the Cold Laser?]",
  },
  {
    question: "How is the Cold Laser used?",
    answer:
      "The handheld applicator is placed directly over the treatment area for 15–20 minutes per session. Providers guide recommended frequency and safety precautions.\n[Who should not use the Cold Laser?]",
  },
  {
    question: "Who should not use the Cold Laser?",
    answer:
      "Patients with pacemakers or implanted electronic devices, epilepsy, or cancerous lesions should not use Cold Laser therapy unless cleared by a provider. Providers should screen for contraindications and proper use.",
  },
  {
    question: "What is the PowerWrap?",
    answer:
      "The PowerWrap is a high-powered LED + laser wrap designed to deliver red and infrared light therapy around a joint or limb to help support circulation, reduce discomfort, and target nerve and joint pain. It contains both LEDs and lasers in a flexible wrap format and is used as part of a clinic-directed program. For full details, see the PowerWrap User Manual: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/NerveBeam-Power-Wrap_UserManual-250703-lowres.pdf and the product demo: https://youtu.be/lj_1L8FRtwM?si=FK7RkRbKwKhTmnyH\n[How is the PowerWrap used?][Who should not use the PowerWrap?]",
  },
  {
    question: "How is the PowerWrap used?",
    answer:
      "Place the PowerWrap around the target area (such as a knee, shoulder, or limb), secure it snugly with the straps, and connect it to the controller. Follow your clinic’s instructions for session length and frequency. For step-by-step setup, placement diagrams, and operating instructions, refer to the PowerWrap User Manual: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/NerveBeam-Power-Wrap_UserManual-250703-lowres.pdf and the product demo video: https://youtu.be/lj_1L8FRtwM?si=FK7RkRbKwKhTmnyH\n[Who should not use the PowerWrap?]",
  },
  {
    question: "Who should not use the PowerWrap?",
    answer:
      "Patients with pacemakers or other implanted electronic devices, light-sensitive conditions, or cancerous lesions in the treatment area should not use the PowerWrap. It should not be used over the eyes or in any area where your provider has advised against light-based therapy. Providers must screen patients for contraindications before recommending use. For full safety guidance, consult the PowerWrap User Manual: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/NerveBeam-Power-Wrap_UserManual-250703-lowres.pdf",
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
      "All devices include a one-year limited warranty covering manufacturing defects. Returns are accepted within 30 days if unused and undamaged. Providers should contact the seller for RMA instructions.\n[What is the NerveSpa return policy?][Who should patients contact for technical issues?][How quickly are products shipped?]",
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
    answer: "https://www.youtube.com/@NerveSpa",
  },
  {
    question: "Who owns NerveSpa?",
    answer:
      "NerveSpa is owned and distributed by Pain Management Technologies (PMT), an FDA-registered medical device establishment based in Akron, Ohio. PMT manufactures and distributes the full NerveSpa product family. https://www.paintechnology.com",
  },
  {
    question: "How do providers implement NerveSpa?",
    answer:
      "NerveSpa devices do not require a medical prescription. Licensed clinicians guide patients on correct use and integrate devices and supplements into their care plans.",
  },
  {
    question: "What conditions can NerveSpa support?",
    answer:
      "NerveSpa is used for peripheral neuropathy, diabetic neuropathy, chemotherapy-related neuropathy, plantar fasciitis, heel spurs, restless legs, circulation issues, numbness, tingling, burning, stiffness, balance concerns, cramps, cold feet, and joint-related discomfort such as knee and shoulder arthritis.",
  },
  {
    question: "How can clinics order NerveSpa or request a demo?",
    answer:
      "Clinics can open a provider account to order NerveSpa products or request demos. Starter kits and bundles are available. Patients cannot purchase devices directly but may obtain salts, garments, and accessories through approved channels.",
  },
  {
    question: "Where is NerveSpa manufactured?",
    answer:
      "NerveSpa devices are manufactured in FDA-registered facilities from all over the world, with final distribution handled through PMT in Akron, Ohio.",
  },
  {
    question: "How long has PMT been in business?",
    answer:
      "PMT has been in business for over 25 years, supplying clinics nationwide with FDA-registered therapeutic technologies.",
  },
  {
    question: "How does NerveSpa compare to other nerve therapy systems?",
    answer:
      "NerveSpa integrates multiple clinical-grade modalities—water-based stimulation, LED therapy, cold laser, vibration therapy, and supplementation—creating broader coverage than single-modality systems.",
  },
  {
    question: "How does the NerveSpa family of products work together?",
    answer:
      "Each product plays a specific role across nerve, joint, and metabolic pathways. Clinics can combine devices and supplements to build customized, condition-specific programs that extend care between visits.",
  },
  {
    question: "Can patients purchase NerveSpa directly?",
    answer:
      "Patients cannot purchase full therapeutic systems directly. Devices are distributed through licensed clinics. Patients may reorder consumables such as salts, garments, and supplements through approved channels.",
  },
  {
    question: "Are starter kits or bundles available for clinics?",
    answer:
      "Yes. Clinics may order starter kits or pathway-specific bundles depending on their patient population and protocols.",
  },
  {
    question: "Are NerveSpa programs difficult to implement?",
    answer:
      "Clinics typically integrate NerveSpa in one session. Devices are designed for ease of use, and providers oversee protocols while patients follow structured at-home routines.",
  },
  {
    question: "How long is a typical NerveSpa program?",
    answer:
      "Most pathways follow a structured 60–90 day program with additional maintenance options depending on patient outcomes and provider guidance.",
  },
  {
    question: "Is NerveSpa safe for most patients?",
    answer:
      "NerveSpa devices are generally safe when used as directed under the guidance of a licensed provider. Providers screen for contraindications such as pacemakers, open wounds, pregnancy, or certain medical conditions depending on the device.",
  },
  {
    question: "Does NerveSpa offer training for clinics?",
    answer:
      "Yes. Clinics receive onboarding support, device training, and access to guides, protocols, and provider resources. Additional training is available as needed.",
  },
  {
    question: "Who determines if a patient is a good candidate for NerveSpa?",
    answer:
      "Licensed providers determine suitability based on symptoms, medical history, and contraindications for each device or supplement.",
  },
  {
    question: "Does NerveSpa support insurance reimbursement?",
    answer:
      "Insurance coverage varies by provider and plan. Some clinics bill eligible treatments under neuropathy programs. Others use cash-pay, HSA/FSA, or memberships.",
  },
  {
    question: "Can NerveSpa be combined with in-clinic treatments?",
    answer:
      "Yes. Many clinics layer NerveSpa with chiropractic, PT, neuropathy care, and joint mobility programs to support outcomes between visits.",
  },
  {
    question: "What outcomes do patients commonly report?",
    answer:
      "Patients often report reduced tingling, burning, and numbness; improved circulation; decreased stiffness; and better mobility or sleep depending on the product used. Outcomes vary by individual and consistency.",
  },
  {
    question: "Can patients travel with NerveSpa devices?",
    answer:
      "Most NerveSpa products are compact and travel-friendly. Patients should pack chargers, consumables, and any accessories, and follow provider instructions while away.",
  },
  {
    question: "What is the NerveSpa Nerve Bath?",
    answer:
      "The NerveSpa Nerve Bath (Hand & Foot Neuropathy System) is a touch-screen aquatic electrotherapy device for hands or feet. Patients submerge their hands or feet in warm water with Epsom salt and effervescent tablets so the system can deliver circumferential nerve stimulation that supports circulation and nerve activity.",
  },
  {
    question: "How does the NerveSpa Nerve Bath work?",
    answer:
      "The system delivers comfortable low-frequency stimulation through a warm water bath. Patients place their hands or feet in the basins with Epsom salt and effervescent tablets, then the device runs a pre-programmed waveform to support circulation and nerve health. For a step-by-step overview, see the Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing",
  },
  {
    question: "How should the NerveSpa Nerve Bath be set up?",
    answer:
      "Connect the lead wires and electrodes, fill both sides with warm water, add 1 tablespoon of Epsom salt and 1 effervescent tablet per side, place hands or feet in the water, power on the unit, select Hands/Feet mode, and gradually increase intensity until you feel a mild, comfortable tingle. For visuals and full instructions, use the Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing and the Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing",
  },
  {
    question: "How long is a typical NerveSpa Nerve Bath session?",
    answer:
      "The default program runs for 30 minutes and the device will automatically shut off at the end of the session. After treatment, remove hands or feet and dry the skin thoroughly. Session timing is also outlined in the Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing",
  },
  {
    question: "How often should the NerveSpa Nerve Bath be used?",
    answer:
      "Typical clinic and home protocols use the system once daily, 4–6 days per week, for about 90 sessions total. After the initial program, many patients transition to periodic maintenance, often repeating a 90-session cycle once per year as needed. Details are included in the Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing",
  },
  {
    question: "Why water-based therapy for the NerveSpa Nerve Bath?",
    answer:
      "Warm water allows full circumferential contact around the hands or feet, so current is distributed evenly rather than just through small pad areas. This helps improve comfort, consistency of stimulation, and engagement of more nerve endings compared to pad-only approaches.",
  },
  {
    question:
      "What improvements do patients report with the NerveSpa Nerve Bath?",
    answer:
      "Many patients report reduced tingling, burning, numbness, coldness, and stiffness in their feet or hands, along with improved circulation, comfort, and sleep over time. Results vary by individual, condition severity, and how consistently the program is followed.",
  },
  {
    question: "What consumables does the NerveSpa Nerve Bath use?",
    answer:
      "Each session uses warm water plus Epsom salt and one effervescent tablet per side. These consumables are replaced as needed. The Quick Guide also lists the required consumables for each session: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing",
  },
  {
    question: "What are NerveSpa conductive foot pads, socks, and gloves?",
    answer:
      "NerveSpa conductive foot pads, socks, and gloves are silver-conductive garment systems designed for localized stimulation of the feet and hands. They connect to the NerveSpa controller to deliver targeted electrotherapy as part of a neuropathy or nerve-support program.",
  },
  {
    question:
      "How are the NerveSpa conductive foot pads and gloves used in therapy?",
    answer:
      "Patients wear the conductive pads or gloves over the targeted area, moisten them slightly, and connect them to the NerveSpa unit. Providers guide placement and settings to help ensure safe and effective stimulation as part of the overall program.",
  },
  {
    question: "Who should not use NerveSpa conductive garments?",
    answer:
      "Patients with pacemakers, other implanted electronics, or severe skin conditions in the treatment area should not use conductive garments. Providers should screen patients for contraindications before recommending use.",
  },
  {
    question: "What is the NerveSpa Quake Plate?",
    answer:
      "The NerveSpa Quake Plate is a vibration therapy platform designed to help regain mobility and ease pain in the feet and lower extremities. It provides deep tissue massage, helps relieve pain and relax irritated nerves, and supports increased circulation and blood flow when used as directed by your clinic.",
  },
  {
    question: "How do I set up and use the Quake Plate?",
    answer:
      "Place the Quake Plate on a flat, stable surface, connect it to a 110V AC outlet, and install the provided battery in the remote as shown in the user manual. Sit or stand as instructed by your clinic, place your feet (or hands) on the platform, and use the remote to start and adjust the session to a comfortable setting. Always follow the Quake Plate User Manual (https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/QuakePlate_Manual_230713.pdf) and your clinic’s instructions, and you can also watch the setup video here: https://youtu.be/GZT58LDOT2o?si=Cik7VKLMSM7uEfLL.",
  },
  {
    question: "How long and how often should I use the Quake Plate?",
    answer:
      "Session length and weekly frequency for the Quake Plate should follow your clinic’s specific protocol and the guidance in the Quake Plate User Manual. Your provider will determine how long each session should last and how often you should use it based on your condition, goals, and overall program. Do not exceed the usage recommended by your clinic.",
  },
  {
    question: "Who should not use the Quake Plate?",
    answer:
      "Patients with circulatory syndromes such as Raynaud’s disease, Buerger’s disease, peripheral vascular disease, vasospastic disorders, sickle cell anemia, hypercoagulable clotting disorders, local tissue infection, or potential wound-healing problems should not use the Quake Plate unless cleared by their provider. It should also not be used if you are pregnant or on a recent injury. Always review the CONTRAINDICATIONS and ELECTRICAL PRECAUTIONS sections in the Quake Plate User Manual and consult your clinic before use.",
  },
  {
    question: "What outcomes are expected with LED wrap therapy?",
    answer:
      "When used consistently as directed by a provider, the NerveBeam LED Wrap is intended to support reduced pain, improved circulation, and better comfort and mobility in the treated area over time. Individual results vary based on the condition being treated and adherence to the prescribed program. For guidance on clinical use, clinics should refer to the NerveBeam LED Wrap User Guide: https://cdn.hmsctl.com/media/nervespa/pdf/NerveBeam_UserManual_LED-wrap_v03.pdf",
  },
  {
    question: "How is the NerveBeam Cold Laser used?",
    answer:
      "Place the handheld Cold Laser applicator directly over the target area and keep it in place for the session length recommended by your clinic, often around 15–20 minutes per site. Do not shine the laser into the eyes and always follow your provider’s protocol. For placement diagrams and step-by-step instructions, refer to the Cold Laser User Guide: https://drive.google.com/file/d/1pHUIbj5dt7BjVwwqzriCmf5ODdpA5hLQ/view?usp=sharing and the educational video on red/infrared light therapy: https://youtu.be/wrWQvDcjEFA",
  },
  {
    question: "Who should not use the NerveBeam Cold Laser?",
    answer:
      "Patients with pacemakers, epilepsy, or cancerous lesions in the treatment area should not use the Cold Laser. It should also not be used over the eyes or in any area where your provider has advised against light-based therapy. Providers should screen patients for contraindications before recommending use. For full safety guidance, see the Cold Laser User Guide: https://drive.google.com/file/d/1pHUIbj5dt7BjVwwqzriCmf5ODdpA5hLQ/view?usp=sharing",
  },
  {
    question: "What outcomes are expected with Cold Laser therapy?",
    answer:
      "When used consistently as part of a clinic-directed plan, patients often experience improved circulation, reduced discomfort, and better mobility in the treated area over time. Individual outcomes vary based on the condition and adherence to the program. For more on how red and infrared light support cellular energy pathways, see: https://youtu.be/wrWQvDcjEFA and review the Cold Laser User Guide: https://drive.google.com/file/d/1pHUIbj5dt7BjVwwqzriCmf5ODdpA5hLQ/view?usp=sharing",
  },
  {
    question: "What is the Knee Pro?",
    answer:
      "The Knee Pro is a clinical-grade knee therapy device designed to support OA/RA comfort, mobility, and cartilage health using targeted stimulation and long-duration sessions. It is used as part of a clinic-directed plan over several months. For setup and placement details, see the Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Quick%20start%20guide-250916-print.pdf and the Knee Pro overview video: https://youtu.be/D3mmA02khW8?si=rUQjdsxa5mfJHXLp",
  },
  {
    question: "How is the Knee Pro used?",
    answer:
      "The Knee Pro wraps securely around the knee and connects to the controller. Sessions are typically 1 hour and the Knee Pro is meant for long-duration, multi-month use (often 6–9 months) as part of a structured joint protocol. Always follow your provider’s instructions. For correct setup and strap placement, refer to the Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Quick%20start%20guide-250916-print.pdf and the How-It-Works demonstration: https://youtu.be/D3mmA02khW8?si=rUQjdsxa5mfJHXLp",
  },
  {
    question: "Who should not use the Knee Pro?",
    answer:
      "Patients with pacemakers, open wounds near the knee, or uncontrolled medical conditions should not use the Knee Pro. Providers should screen for contraindications before prescribing. Always follow clinic-directed use. For safety guidelines, refer to the Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Quick%20start%20guide-250916-print.pdf",
  },
  {
    question: "What outcomes are expected with the Knee Pro?",
    answer:
      "Patients commonly report improved mobility, reduced discomfort, and better day-to-day function over consistent multi-month use. Individual outcomes vary, but long-term adherence is key. For an in-clinic perspective on patient results, see Dr. Perkins’ Knee Pro testimonial: https://youtu.be/mUzxul6TRfc?si=Gtv4vV9wVNWR5IHb",
  },
  {
    question: "What is the Shoulder Pro?",
    answer:
      "The Shoulder Pro is a clinical-grade shoulder therapy device designed to support joint comfort, mobility, and function in the shoulder using targeted stimulation and long-duration sessions. It is used as part of a clinic-directed program over several months. For setup and strap placement, see the Shoulder Pro Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Shoulder-Quick%20start%20guide-250916-lowres-print.pdf",
  },
  {
    question: "How is the Shoulder Pro used?",
    answer:
      "Place the Shoulder Pro over the shoulder so the treatment area is fully covered, then secure the straps as shown in the Quick Start Guide. Connect it to the controller and follow your clinic’s instructions for session length and frequency, typically longer-duration sessions similar to other joint protocols. For placement diagrams and setup steps, refer to the Shoulder Pro Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Shoulder-Quick%20start%20guide-250916-lowres-print.pdf",
  },
  {
    question: "Who should not use the Shoulder Pro?",
    answer:
      "Patients with pacemakers, open wounds near the shoulder, or uncontrolled medical conditions should not use the Shoulder Pro. Providers should screen for contraindications before prescribing and patients should follow clinic-directed use only. For safety information, see the Shoulder Pro Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Shoulder-Quick%20start%20guide-250916-lowres-print.pdf",
  },
  {
    question: "What outcomes are expected with the Shoulder Pro?",
    answer:
      "When used consistently as directed, patients commonly report reduced shoulder discomfort, improved range of motion, and better day-to-day shoulder function over time. Individual results vary based on the condition and adherence to the program. Your clinic will guide expectations as part of your overall joint and mobility plan.",
  },
  {
    question: "What outcomes are expected with PowerWrap therapy?",
    answer:
      "When used consistently as part of a clinic-directed program, patients often report reduced pain and stiffness and improved comfort and mobility in the treated area over time. Individual results vary based on the condition and adherence to the protocol. For a clinician’s perspective on patient experience, see the doctor testimonial: https://youtube.com/shorts/QRF_zFGeMUI?si=5RPxEfqIQtJ5lxzx and review the PowerWrap User Manual for best-practice use: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/NerveBeam-Power-Wrap_UserManual-250703-lowres.pdf",
  },
  {
    question: "What are the NerveSpa Performance Diabetic Socks?",
    answer:
      "The NerveSpa Performance Diabetic Socks are comfort-focused, non-binding socks designed to support circulation, reduce irritation, and provide gentle cushioning for neuropathy-related foot discomfort. They are made with soft, moisture-wicking materials and a seamless toe to help minimize friction and pressure points.",
  },
  {
    question: "How do I put on the Diabetic Socks correctly?",
    answer:
      "Slide the socks on smoothly to avoid bunching, making sure the heel and toe areas are aligned. The socks are designed to be non-binding, so they should fit comfortably without squeezing the calf or ankle. Ensure no wrinkles under the foot to prevent pressure points for sensitive neuropathy patients.",
  },
  {
    question: "How should the Diabetic Socks be washed or cared for?",
    answer:
      "Wash the Diabetic Socks in cold or warm water on a gentle cycle and tumble dry low or air dry. Avoid bleach or high-heat drying, as these can damage fibers and reduce softness. Proper care helps maintain the cushioning and comfort needed for neuropathy support.",
  },
  {
    question: "Can the Diabetic Socks be worn all day?",
    answer:
      "Yes. The socks are designed for extended wear, providing gentle comfort and reduced friction throughout the day. Many neuropathy patients wear them during daily activities, at home, and in shoes. Follow your clinic’s guidance if you have circulation-related medical conditions.",
  },
  {
    question: "What is the NerveSpa Neuropathy Program?",
    answer:
      "The NerveSpa Neuropathy Program is a structured, multi-modal protocol designed to support peripheral nerve health, circulation, and comfort. It combines nerve stimulation, light-based therapies, vibration, targeted topicals, and supplementation to support nerve function when used consistently under provider guidance.",
  },
  {
    question: "How does the Neuropathy Program work?",
    answer:
      "The program uses a layered approach that combines electrical stimulation, light therapy, vibration therapy, topical support, and supplements. These modalities are used together to support circulation, nerve signaling, and tissue health as part of a coordinated protocol directed by a provider.",
  },
  {
    question: "What devices are used in the Neuropathy Program?",
    answer:
      "Depending on the provider’s recommendations, the Neuropathy Program may include the NerveSpa Nerve Bath, conductive garments, Quake Plate vibration therapy, NerveBeam LED Light Therapy Wrap, NerveBeam Cold Laser, and related accessories. Not all patients require every modality.",
  },
  {
    question: "Do patients need all the devices in the Neuropathy Program?",
    answer:
      "No. Providers customize the program based on the patient’s symptoms, tolerance, and goals. Some patients may use a full system, while others may use select devices and supplements as part of their personalized protocol.",
  },
  {
    question: "How long does the Neuropathy Program take?",
    answer:
      "The Neuropathy Program is structured around approximately 60–90 total uses of each recommended modality. Sessions are typically about 30 minutes and are used consistently as directed by the provider, followed by a maintenance phase if appropriate.",
  },
  {
    question: "Why is consistency important in the Neuropathy Program?",
    answer:
      "The Neuropathy Program is designed to work through repeated, consistent use. Each session builds on prior sessions, supporting cumulative effects over time. Skipping or inconsistent use may reduce the overall effectiveness of the protocol.",
  },
  {
    question: "What happens after the initial Neuropathy Program is completed?",
    answer:
      "After completing the initial series of uses, many providers transition patients into a maintenance routine. Maintenance protocols vary and may include periodic device use, continued supplementation, and lifestyle guidance based on individual needs.",
  },
  {
    question: "Can the Neuropathy Program be adjusted over time?",
    answer:
      "Yes. Providers may adjust device selection, frequency, or supportive products as symptoms change or improve. The program is designed to be flexible and responsive to patient progress under clinical supervision.",
  },
  {
    question: "How do supplements fit into the Neuropathy Program?",
    answer:
      "Supplements are used to support nerve health, circulation, and metabolic processes that influence nerve function. They are typically taken daily as directed by the provider and are intended to complement device-based therapies, not replace them.",
  },
  {
    question: "Can supplements be used alone without devices?",
    answer:
      "Supplements may be used independently in some cases, but many providers recommend combining them with device-based therapies for a more comprehensive approach. The appropriate combination depends on individual clinical assessment.",
  },
  {
    question: "How long is a typical Nerve Bath session?",
    answer:
      "A standard Nerve Bath session lasts approximately 30 minutes. The device includes an automatic shutoff at the end of the session to support consistent and safe use as directed by the provider.",
  },
  {
    question: "Can the Nerve Bath be used with other devices the same day?",
    answer:
      "Yes. Many providers integrate the Nerve Bath with other modalities such as light therapy, vibration therapy, topicals, or supplements on the same day. The specific combination and order are determined by the provider.",
  },
  {
    question: "What should patients feel during a Nerve Bath session?",
    answer:
      "Patients typically feel a mild to moderate tingling sensation in the feet or hands. The intensity should remain comfortable and is adjustable. Strong discomfort or pain is not expected and should be discussed with the provider.",
  },
  {
    question: "How often should the Quake Plate be used?",
    answer:
      "The Quake Plate is commonly used once per session as part of the Neuropathy Program, often on a daily or near-daily basis. Use contributes toward the overall 60–90 uses recommended by the provider.",
  },
  {
    question: "How long should a Quake Plate session last?",
    answer:
      "A typical Quake Plate session ranges from 10 to 20 minutes, depending on provider guidance and patient tolerance. Duration may be adjusted as part of the overall protocol.",
  },
  {
    question: "Can Quake Plate be used with other neuropathy devices?",
    answer:
      "Yes. Providers often combine vibration therapy with nerve stimulation, light therapy, and supplements. The order and combination are individualized based on patient needs and clinic protocols.",
  },
  {
    question: "What should patients feel during Quake Plate therapy?",
    answer:
      "Patients typically experience gentle vibration through the feet or hands. Sensations may include warmth or increased circulation. Discomfort should be avoided and settings adjusted as needed.",
  },
  {
    question: "How often should the NerveBeam LED Wrap be used?",
    answer:
      "The NerveBeam LED Wrap is commonly used consistently as part of the Neuropathy Program, often daily or near-daily. Sessions are typically about 30 minutes and contribute toward the recommended 60–90 uses.",
  },
  {
    question: "How long is an LED Wrap session?",
    answer:
      "A typical LED Wrap session lasts approximately 20–30 minutes, depending on provider guidance. The wrap is positioned over the target area and used comfortably without excessive heat.",
  },
  {
    question: "What should patients feel during LED Wrap therapy?",
    answer:
      "Most patients feel gentle warmth or little to no sensation during LED Wrap sessions. The treatment should remain comfortable. If the wrap feels excessively hot or irritating, stop use and follow your provider’s guidance.",
  },
  {
    question: "How should the LED Wrap be positioned for treatment?",
    answer:
      "Place the LED Wrap over the target area as directed by your provider and secure it so it lies flat against the body without creasing or excessive pressure. Proper positioning supports even coverage and consistent treatment.",
  },
  {
    question: "Who should not use the LED Wrap?",
    answer:
      "Patients with pacemakers or implanted electronic devices, or those with known light sensitivity, should not use the LED Wrap unless cleared by a provider. Providers should screen for contraindications based on individual medical history.",
  },
  {
    question: "How often should the NerveBeam Cold Laser be used?",
    answer:
      "Providers typically recommend consistent Cold Laser use as part of the Neuropathy Program. Sessions are integrated into the overall protocol and contribute toward the recommended 60–90 total uses, based on provider direction.",
  },
  {
    question: "How long is a Cold Laser session?",
    answer:
      "A typical Cold Laser session is guided by the provider and is performed per treatment area. Follow your clinic’s instructions for duration, placement, and total coverage for the session.",
  },
  {
    question: "How should the Cold Laser be positioned during treatment?",
    answer:
      "The Cold Laser applicator is placed directly over the target area as instructed by the provider. Maintain steady placement and avoid shining light into the eyes. Your provider will guide site selection and treatment coverage.",
  },
  {
    question: "What should patients feel during Cold Laser therapy?",
    answer:
      "Cold Laser therapy is typically comfortable and may produce little to no sensation. Some patients notice mild warmth or a subtle soothing feeling in the treated area. Discomfort is not expected—pause and consult your provider if it occurs.",
  },
  {
    question: "Can Cold Laser be combined with other neuropathy modalities?",
    answer:
      "Yes. Many providers combine Cold Laser with nerve stimulation, LED therapy, vibration therapy, supplements, and topicals as part of a coordinated protocol. The exact combination and order should follow provider direction.",
  },
  {
    question: "What supplements are commonly used in the Neuropathy Program?",
    answer:
      "Depending on the provider’s plan, neuropathy supplementation may include Nerve Rebuilder, Nerve Regeneration, and Blood Flow Super Formula. These are typically used daily as directed to complement device-based therapies.",
  },
  {
    question: "When should Nerve Rebuilder be taken?",
    answer:
      "Nerve Rebuilder is typically taken daily as directed by the provider. It is intended to support nerve health and metabolic processes as part of the overall Neuropathy Program, alongside device-based therapies.",
  },
  {
    question: "When should Nerve Regeneration be taken?",
    answer:
      "Nerve Regeneration is generally taken daily according to provider guidance. It is designed to complement other neuropathy modalities by supporting nerve-related cellular processes when used consistently.",
  },
  {
    question: "When should Blood Flow Super Formula be taken?",
    answer:
      "Blood Flow Super Formula is typically taken daily as directed by the provider. It is used to support circulation as part of a comprehensive Neuropathy Program and is often paired with stimulation and light-based therapies.",
  },
  {
    question: "How do supplements support the Neuropathy Program?",
    answer:
      "Supplements are used to support nerve health, circulation, and metabolic pathways that influence nerve function. They are intended to work alongside device-based therapies rather than replace them, under provider direction.",
  },
  {
    question: "What is the NerveSpa Joint & Mobility Program?",
    answer:
      "The Joint & Mobility Program is a provider-guided protocol designed to support joint comfort, mobility, and function. It combines targeted stimulation devices, light-based therapies, and joint-focused supplements to address joint-related discomfort under clinical direction.",
  },
  {
    question: "How does the Joint & Mobility Program work?",
    answer:
      "The program integrates targeted joint devices with supportive therapies and supplements. Providers customize usage based on joint location, severity, and patient tolerance, focusing on consistent use over time.",
  },
  {
    question: "What devices are used in the Joint & Mobility Program?",
    answer:
      "Depending on the provider’s plan, the Joint & Mobility Program may include Knee Pro, Shoulder Pro, PowerWrap, and related joint-focused modalities. Not all patients require every device.",
  },
  {
    question: "How long does the Joint & Mobility Program take?",
    answer:
      "The Joint & Mobility Program is designed for consistent, long-term use as directed by the provider. Program length varies depending on joint condition, severity, and response to therapy.",
  },
  {
    question: "Can the Joint & Mobility Program be adjusted over time?",
    answer:
      "Yes. Providers may adjust device selection, session frequency, and supportive products based on patient progress, comfort, and clinical goals.",
  },
  {
    question: "How often should patients use the Knee Pro?",
    answer:
      "The Knee Pro is used according to provider guidance as part of the Joint & Mobility Program. It is designed for consistent, repeated use over time to support joint comfort and mobility, with session frequency determined by the clinic.",
  },
  {
    question: "How long is a Knee Pro session?",
    answer:
      "A typical Knee Pro session is a long-duration treatment, often up to one hour, as directed by the provider. The duration is intended to support sustained joint-focused therapy.",
  },
  {
    question: "Can Knee Pro be used with other joint therapies?",
    answer:
      "Yes. Providers may combine Knee Pro with other joint-focused modalities such as LED therapy, vibration therapy, or joint supplements as part of a coordinated Joint & Mobility Program.",
  },
  {
    question: "What should patients feel during Knee Pro therapy?",
    answer:
      "Patients may feel gentle stimulation, warmth, or compression around the knee. Sensations should remain comfortable. Any discomfort should be reported to the provider for adjustment.",
  },
  {
    question: "How often should patients use the Shoulder Pro?",
    answer:
      "The Shoulder Pro is used as directed by the provider as part of the Joint & Mobility Program. Frequency is customized based on shoulder condition, tolerance, and treatment goals.",
  },
  {
    question: "How long is a Shoulder Pro session?",
    answer:
      "Shoulder Pro sessions are performed according to provider direction and are designed for extended use to support shoulder mobility and comfort. Duration may vary based on clinical guidance.",
  },
  {
    question: "Can Shoulder Pro be used with other joint therapies?",
    answer:
      "Yes. Providers may integrate Shoulder Pro with other joint-focused therapies such as PowerWrap, LED therapy, or supplements as part of a coordinated plan.",
  },
  {
    question: "What should patients feel during Shoulder Pro therapy?",
    answer:
      "Patients may feel gentle stimulation or compression around the shoulder. Sensations should be comfortable and adjustable. Pain or discomfort should be discussed with the provider.",
  },
  {
    question:
      "What joint supplements are commonly used in the Joint & Mobility Program?",
    answer:
      "Depending on provider guidance, joint supplementation may include Super Flex Joint Formula – Rebuild + Maintain, OA & RA Relief Cream, and Nerve Target Roll-On. These products are used to support joint comfort and mobility alongside device-based therapies.",
  },
  {
    question:
      "When should Super Flex Joint Formula – Rebuild + Maintain be used?",
    answer:
      "Super Flex Joint Formula is typically taken daily as directed by the provider. It is intended to support joint structure and comfort as part of the overall Joint & Mobility Program.",
  },
  {
    question: "When should OA & RA Relief Cream be used?",
    answer:
      "OA & RA Relief Cream is generally applied to the affected joint area as directed by the provider. It is often used alongside device-based therapies to support localized comfort.",
  },
  {
    question: "When should Nerve Target Roll-On be used?",
    answer:
      "Nerve Target Roll-On is applied topically to targeted joint or muscle areas as directed by the provider. It is typically used to complement other joint-focused therapies within the program.",
  },
  {
    question: "How do joint supplements fit into the Joint & Mobility Program?",
    answer:
      "Joint supplements and topicals are used to support comfort, mobility, and recovery while patients follow device-based therapies. Providers determine how supplements are integrated based on individual joint needs.",
  },
  {
    question: "Can joint supplements be used alone without devices?",
    answer:
      "In some cases, joint supplements may be used independently. However, many providers recommend combining them with devices such as Knee Pro or Shoulder Pro for a more comprehensive approach.",
  },
  {
    question: "What is the PowerWrap used for in the Clinical Program?",
    answer:
      "PowerWrap is used in the Clinical Program as a wrap-style light therapy modality (red + infrared) to support targeted comfort and recovery as directed by the provider. It includes adjustable power levels and mode options (Constant, Pulse, Alternating) with preset safety timers.",
  },
  {
    question: "How long is a PowerWrap session?",
    answer:
      "PowerWrap session length depends on the mode: the device uses **preset timers**—**Constant mode is preset to 3 minutes**, and **Pulse mode is preset to 6 minutes** (Alternating switches between the two).",
  },
  {
    question: "How often can I use PowerWrap in a day?",
    answer:
      "Follow provider guidance. The user manual advises **not exceeding 1–2 times per treatment area per day**. It also recommends taking **1 rest day for every 2 days of treatment**.",
  },
  {
    question: "What power level should I start with on PowerWrap?",
    answer:
      "The manual recommends starting on **Low or Medium power** for the first uses and adjusting only as tolerated. Power levels shown on the remote are **Low (8,000 mW)**, **Medium (10,000 mW)**, and **High (12,000 mW)**.",
  },
  {
    question: "How do I choose Constant vs Pulse mode on PowerWrap?",
    answer:
      "Use **MODE** on the remote to switch between **Constant**, **Pulse**, and **Alternating**. The manual notes **Constant mode should not exceed 3 minutes per treatment area**, and **Pulse mode should not exceed 6 minutes per treatment area**.",
  },
  {
    question: "What are the key safety rules for PowerWrap use?",
    answer:
      "Key manual guidance includes: **do not overlap** treatment areas; if moving the wrap, place it on a **new, untreated area**; and **inspect skin** during/after use. The manual also cautions to reduce intensity or stop if sensitivity occurs.",
  },
  {
    question: "Can PowerWrap be combined with other therapies?",
    answer:
      "Yes—providers may coordinate PowerWrap with other modalities as part of an overall plan. Always follow provider direction on sequencing and frequency, and keep PowerWrap use within the manual’s timing/frequency guidance.",
  },
  {
    question: "What is NerveWave used for in the Clinical Program?",
    answer:
      "NerveWave is a clinical electrotherapy device with preset programs and adjustable intensity that should always feel **comfortable to mild (never strong)**. It’s used under provider guidance within structured pathways such as regenerative pain control, neuropathy support, restorative recovery, and vagus nerve therapy.",
  },
  {
    question: "How do I start a program on NerveWave?",
    answer:
      "Quick operation steps: **charge the device for 12 hours before first use (or power via wall adapter)**, plug in lead wires by channel, **hold the Power button to turn on**, press **Program** to access programs, select a program/subprogram, then **increase intensity** using the large dial. Each program is **preset with a timer**, and stimulation ends when the program ends.",
  },
  {
    question: "What intensity should NerveWave be set to?",
    answer:
      "The Quick Start Guide states intensity should **always feel comfortable to mild—never strong**.",
  },
  {
    question:
      "What is the recommended schedule for NerveWave regenerative pain control?",
    answer:
      "The Quick Start Guide lists **Regenerative Pain Control** usage guidance as **4–5x/week over the course of 26 weeks**, including use for degenerative joint conditions (such as OA/RA of the knee, hand, shoulder) and intractable back pain, under provider guidance.",
  },
  {
    question: "How is NerveWave typically used for neuropathy?",
    answer:
      "The Quick Start Guide lists **Neuropathy** usage guidance as **5x/week over 60–90 days**. It also notes: for the first **60–90 uses**, use the **Primary and Secondary phases**, ideally **two treatments per day** (1 primary + 1 secondary). After the initial uses, it notes a **maintenance phase** schedule such as **2–3 times/week for 6 weeks**, and repeating consistency **about 1x/year** (per provider guidance).",
  },
  {
    question:
      "What is the recommended schedule for NerveWave restorative recovery?",
    answer:
      "The Quick Start Guide lists **Restorative Recovery** usage guidance as **4–5x/week over the course of 13–20 weeks**, including use for post-surgical or post-injury pain and muscle rehabilitation (Rehabilitative Relief) and for muscular-derived pain conditions (Muscle Activation), under provider guidance.",
  },
  {
    question: "How does NerveWave track usage?",
    answer:
      "The Quick Start Guide notes the “**track usage**” button shows cumulative use—**number of sessions and total minutes used**. It also notes users can record pain scale results post-treatment (manual entry is possible, and there can be an automated pop-up before each program for starting/ending pain scale if enabled).",
  },
  {
    question: "Can NerveWave be used with accessory tools?",
    answer:
      "Yes. The Quick Start Guide includes accessory guidance such as a **scraper tool (gua sha scraper)**, **earlobe clips** (for vagus nerve stimulation—both clips on the **same ear**, not one on each ear), **pre-gelled electrodes** (keep pads **1–6 inches apart**), **carbon rubber pads**, and **foot pads** (sold separately).",
  },
  {
    question:
      "What is the recommended schedule for NerveWave vagus nerve therapy?",
    answer:
      "The Quick Start Guide lists **Vagus Nerve Therapy** usage guidance as **10 minutes, 1–2x daily as needed**, and notes that longer durations may be used when guided by the timer and provider direction.",
  },
  {
    question: "How long should Vibe be used in a typical session?",
    answer:
      "The Vibe document states the device has an **automatic 10-minute timer** for a session.",
  },
  {
    question: "How is Vibe typically used within a clinical plan?",
    answer:
      "The Vibe document describes Vibe as a **5–10 minute add-on session** that can complement a broader plan, depending on provider direction.",
  },
  {
    question: "What should I do if my Nerve Bath device is frozen?",
    answer:
      "1) Confirm the lock/unlock icon at the top of the screen is set to unlocked. 2) Confirm lead wires are plugged in, carbon rubber pads are connected (one in each water bay), and feet are inserted—intensity won’t engage until the user is engaged. 3) Make sure hands are not wet when touching the touch screen. 4) Use a light tap—don’t press the buttons too hard. 5) Confirm the device was not dropped in water. 6) Shut down the device, charge for 24 hours, and restart.",
  },
  {
    question:
      "What if there is no stimulation or weak stimulation in the Nerve Bath?",
    answer:
      "1) Confirm lead wires are plugged in, carbon rubber pads are connected (one in each water bay), and feet are inserted—intensity won’t engage until the user is engaged. 2) If neuropathy is late stage, you may have reduced sensation—test by inserting your hands into the bays with the intensity up (don’t over-stimulate your feet by turning it up too high). 3) Add more salt to the water. 4) Replace lead wires if the device is over 6 months old.",
  },
  {
    question: "What if the Nerve Bath device does not power on?",
    answer:
      "1) Charge the device for 24 hours. 2) Hold down the power button on the side of the device for 3–5 seconds.",
  },
  {
    question:
      "What if stimulation stops or the program ends short of 30 minutes?",
    answer: "Charge the device for 24 hours.",
  },
  {
    question:
      "What should I do if the LED Wrap lights are flickering or powering down early?",
    answer:
      "Make sure the cord is firmly connected to the wall and into the power brick.",
  },
  {
    question: "Which treatment mode should I use on the LED Wrap?",
    answer:
      "Use the blue mode (second setting), not the green mode (first setting). Blue mode powers both the red lights and the infrared lights. Green mode powers just the red lights.",
  },
  {
    question: "What should I avoid doing with the LED Wrap?",
    answer:
      "IMPORTANT: Never crease the LED wrap by folding it in half and then putting pressure on it.",
  },
  {
    question: "How do I power the Knee Pro on/off and change modes?",
    answer:
      "Hold the power button down to turn on or off. Tap to change modes. The device will automatically cycle from Mode 1 to Mode 2.",
  },
  {
    question: "What if I’m having issues with stimulation on Knee Pro?",
    answer:
      "Charge the device for 24 hours to make sure the battery is fully charged.",
  },
  {
    question: "What should I know before using the Quake Plate?",
    answer: "Do not stand on the Quake Plate.",
  },
  {
    question: "What if the Quake Plate makes a loud grinding noise?",
    answer:
      "A loud grinding noise usually indicates a mechanical issue. Stop using the device and contact support for further assistance.",
  },
  {
    question: "What if the Quake Plate remote does not work?",
    answer:
      "Check that the remote has a working battery and that there are no obstructions between the remote and the device. If issues persist, contact support.",
  },
  {
    question: "What battery does the Quake Plate remote use?",
    answer:
      "The Quake Plate remote uses a standard coin-style battery. Replace the battery if the remote becomes unresponsive.",
  },
  {
    question:
      "What should I do if stimulation feels weak with conductive socks or gloves?",
    answer:
      "Lightly moisten the conductive garments before use and confirm proper leadwire connection. Weak stimulation is often related to dryness or loose connections.",
  },
  {
    question: "How do I clean conductive socks, gloves, or garments?",
    answer:
      "Hand wash with mild soap and water, then air dry completely before reuse. Do not machine wash or dry.",
  },
  {
    question: "How often should conductive garments be replaced?",
    answer:
      "Replacement frequency depends on use and care. If stimulation becomes inconsistent despite proper moistening and connections, replacement may be needed.",
  },
  {
    question: "What should I do if the Cold Laser does not turn on?",
    answer:
      "Confirm the device is fully charged and that the power button is held down for several seconds. If it still does not power on, contact support.",
  },
  {
    question: "What if the Cold Laser shuts off during treatment?",
    answer:
      "Check battery charge and restart the device. If the issue continues, contact support.",
  },
  {
    question: "What should I do if the LED Wrap does not turn on?",
    answer:
      "Confirm the power brick is plugged into a working outlet and securely connected to the wrap. Try a different outlet if needed.",
  },
  {
    question: "What if the LED Wrap lights flicker during use?",
    answer:
      "Check that the power brick and cable connections are secure at both the outlet and the device. Flickering is commonly caused by a loose connection.",
  },
  {
    question: "What should I do if the LED Wrap powers down early?",
    answer:
      "Confirm the power brick is firmly connected and that the outlet is providing consistent power. If the issue continues, discontinue use and contact support.",
  },
  {
    question: "How do I clean the LED Wrap?",
    answer:
      "Disconnect the wrap from power before cleaning. Wipe the surface gently with a soft, dry or lightly damp cloth. Do not submerge in water.",
  },
  {
    question: "What should I do if the PowerWrap does not turn on?",
    answer:
      "Ensure the device is charged and the power button is pressed firmly. If it still does not turn on, discontinue use and contact support.",
  },
  {
    question:
      "What should I do if my skin feels too sensitive after PowerWrap use?",
    answer:
      "Stop treatment and allow the skin to return to normal before resuming. Reduce power level or frequency as directed by your provider.",
  },
  {
    question: "What if the PowerWrap remote does not respond?",
    answer:
      "Replace the remote battery and confirm there is a clear line of sight to the device. If the issue persists, contact support.",
  },
  {
    question: "What should I do if NerveWave does not power on?",
    answer:
      "Confirm the device is charged or connected to a wall adapter. Hold the power button to turn on. If it still does not start, contact support.",
  },
  {
    question: "What if I feel no sensation during NerveWave use?",
    answer:
      "Increase intensity gradually until a comfortable, mild sensation is felt. Check electrode placement and leadwire connections.",
  },
  {
    question: "What should I do if NerveWave stimulation feels too strong?",
    answer:
      "Reduce the intensity immediately to a comfortable level. Stimulation should always feel mild and never painful.",
  },
  {
    question: "What if the electrodes are not sticking properly?",
    answer:
      "Replace worn electrodes and ensure the skin is clean and dry before placement. Poor adhesion can reduce stimulation effectiveness.",
  },
  {
    question: "How do I place electrodes correctly?",
    answer:
      "Place electrodes on clean, dry skin with pads spaced approximately 1–6 inches apart, following provider guidance and the user guide.",
  },
  {
    question: "What should I do if NerveWave shuts off during treatment?",
    answer:
      "Check the battery level and restart the device. If shutdown continues, discontinue use and contact support.",
  },
  {
    question: "What should I do if the Vibe device does not turn on?",
    answer:
      "Confirm the device is charged or properly powered, then press the power button firmly. If it does not turn on, contact support.",
  },
  {
    question: "What if the Vibe stops during a session?",
    answer:
      "Allow the session to complete its automatic timer. If the device stops unexpectedly, recharge and restart.",
  },
  {
    question: "What should patients feel during Vibe use?",
    answer:
      "A gentle vibration is expected. If discomfort occurs, stop use and consult your provider.",
  },
  {
    question: "What should I do if Knee Pro does not power on?",
    answer:
      "Charge the device fully and hold the power button to turn it on. If it does not respond, contact support.",
  },
  {
    question: "What if stimulation feels weak on Knee Pro?",
    answer:
      "Charge the device fully and confirm proper leadwire and garment placement. Weak stimulation is often related to battery level or placement.",
  },
  {
    question: "How do I change Knee Pro modes?",
    answer:
      "Tap the power button to cycle through available modes. The device will automatically progress through its preset modes.",
  },
  {
    question: "What should I do if Shoulder Pro does not power on?",
    answer:
      "Charge the device fully and press the power button to turn it on. If it does not respond, contact support.",
  },
  {
    question: "What if stimulation feels weak on Shoulder Pro?",
    answer:
      "Confirm the device is fully charged and that the conductive garment is properly fitted and snug. Weak stimulation is commonly related to battery level or garment placement.",
  },
  {
    question: "How do I change Shoulder Pro modes?",
    answer:
      "Press the power button to cycle through the preset modes. The device will automatically advance through its programmed sequence.",
  },
  {
    question:
      "What if I feel little or no sensation during a Nerve Bath session?",
    answer:
      "Check water level, electrode placement, and connection cables. Sensation may vary and should be guided by provider instructions.",
  },
  {
    question: "What should I do if the Nerve Bath unit does not turn on?",
    answer:
      "Confirm the unit is plugged in securely and the power switch is on. If the unit still does not power on, contact support.",
  },
  {
    question: "Is tingling or warmth normal during a Nerve Bath session?",
    answer:
      "Mild tingling or warmth can be normal. If discomfort occurs, stop the session and consult your provider.",
  },
  {
    question: "What if the LED wrap does not turn on?",
    answer:
      "Ensure the controller is charged and properly connected to the wrap. If it still does not power on, contact support.",
  },
  {
    question: "What should I feel during LED wrap therapy?",
    answer:
      "A gentle warmth is typical. If excessive heat or discomfort occurs, stop use and consult your provider.",
  },
  {
    question: "What if the Cold Laser does not activate?",
    answer:
      "Confirm the device is charged and properly powered. Follow the user guide for correct activation steps.",
  },
  {
    question: "What should I feel during Cold Laser therapy?",
    answer:
      "Cold Laser therapy is typically painless. A mild warming sensation may occur, but no discomfort should be felt.",
  },
  {
    question: "What if the Quake Plate feels too intense?",
    answer:
      "Reduce intensity or shorten session time as directed by your provider. Stop use if discomfort occurs.",
  },
  {
    question: "What if the Quake Plate does not start vibrating?",
    answer:
      "Confirm the unit is plugged in, powered on, and that the control settings are properly selected. If the plate does not activate, contact support.",
  },
  {
    question: "Is muscle fatigue normal after using the Quake Plate?",
    answer:
      "Mild muscle fatigue can occur after use. If soreness persists or discomfort increases, pause use and consult your provider.",
  },
  {
    question: "What should I do if the PowerWrap does not power on?",
    answer:
      "Ensure the controller is fully charged and properly connected to the wrap. Refer to the user guide for setup steps before contacting support.",
  },
  {
    question: "What if PowerWrap feels uncomfortable during use?",
    answer:
      "Stop the session and adjust placement or intensity as directed by your provider. Discomfort should not occur during normal use.",
  },
  {
    question: "What if I feel little or no sensation during NerveWave use?",
    answer:
      "Check electrode placement and connections. Sensation levels may vary and should follow provider guidance.",
  },
  {
    question: "What should I feel during a NerveWave session?",
    answer:
      "A mild pulsing or tingling sensation is typical. If discomfort occurs, stop use and consult your provider.",
  },
  {
    question: "What if NerveWave does not turn on?",
    answer:
      "Confirm the device is charged and that electrodes are properly connected. If the issue continues, contact support.",
  },
  {
    question: "When should I contact support for device issues?",
    answer:
      "If a device does not function as expected after following setup and troubleshooting steps, contact support for assistance.",
  },
  {
    question: "What if my device will not charge?",
    answer:
      "Check that the charging cable and power source are working properly. Allow the device to charge fully before use. If it still does not charge, contact support.",
  },
  {
    question: "What if my device turns off during use?",
    answer:
      "If a device powers off unexpectedly, stop the session and ensure it is adequately charged. Restart only after confirming proper power levels.",
  },
  {
    question: "What if stimulation feels too strong or uncomfortable?",
    answer:
      "Stop the session and reduce intensity or adjust placement according to provider guidance. Therapy should remain comfortable at all times.",
  },
  {
    question: "What if stimulation feels too weak?",
    answer:
      "Check connections, electrode placement, or device positioning. Follow provider guidance for proper setup and intensity.",
  },
  {
    question: "Can I continue treatment if I experience skin irritation?",
    answer:
      "Stop use if irritation occurs and allow skin to recover. Consult your provider before resuming therapy.",
  },
  {
    question: "What if my conductive socks or garments do not work properly?",
    answer:
      "Ensure garments are slightly moistened and properly connected. Replace worn garments as recommended by your provider.",
  },
  {
    question: "How do I clean conductive garments?",
    answer:
      "Follow care instructions provided with the garments. Proper cleaning helps maintain conductivity and performance.",
  },
  {
    question: "Where can I find setup guides and manuals?",
    answer:
      "Setup guides and user manuals are provided by your clinic or can be accessed through official NerveSpa resources as directed by your provider.",
  },
  {
    question: "What if I feel no sensation during a Nerve Bath session?",
    answer:
      "Ensure the unit is powered on, salts/tablets are added as directed, and hands or feet are fully submerged. Gradually increase intensity to a comfortable level per provider guidance.",
  },
  {
    question: "What if the water feels too hot or uncomfortable?",
    answer:
      "Stop the session and allow the water to cool. Sessions should always be comfortable; adjust water temperature before restarting.",
  },
  {
    question: "What if the unit does not power on?",
    answer:
      "Check the power connection and battery charge. If the unit still does not power on, contact support for assistance.",
  },
  {
    question: "What if stimulation feels uneven between hands or feet?",
    answer:
      "Reposition hands or feet evenly in the water and confirm equal setup on both sides. Adjust intensity gradually as needed.",
  },
  {
    question: "What if the PowerWrap does not turn on?",
    answer:
      "Verify the power connection and ensure the device is properly charged before use. Restart only after confirming power.",
  },
  {
    question: "What if the wrap feels too warm?",
    answer:
      "Stop the session and allow the device to cool. PowerWrap therapy should remain comfortable when used as directed by a provider.",
  },
  {
    question: "What if I do not feel stimulation with NerveWave?",
    answer:
      "Check electrode placement and connections. Increase intensity slowly to a comfortable level per provider guidance.",
  },
  {
    question: "What if electrodes lose adhesion during use?",
    answer:
      "Replace or reapply electrodes as directed. Clean, dry skin helps maintain proper adhesion during sessions.",
  },
  {
    question: "What if the NerveWave unit will not power on?",
    answer:
      "Confirm the device is charged and all connections are secure. If the unit still does not power on, contact support for assistance.",
  },
  {
    question: "What if the Vibe device does not start?",
    answer:
      "Ensure the device is properly connected and powered on. Restart the device following the setup steps provided by your clinic or provider.",
  },
  {
    question: "What if vibration feels uncomfortable?",
    answer:
      "Stop the session and restart at a lower setting if recommended by your provider. Vibration therapy should remain comfortable at all times.",
  },
  {
    question: "What if the Knee Pro does not deliver sensation?",
    answer:
      "Check strap placement and ensure the device is powered on. Increase intensity gradually as directed by your provider.",
  },
  {
    question: "What if the Knee Pro strap feels too tight or loose?",
    answer:
      "Readjust the strap so it is secure but comfortable. Proper fit helps ensure effective therapy.",
  },
  {
    question: "What if the Shoulder Pro feels uncomfortable during use?",
    answer:
      "Stop the session and adjust placement. Shoulder Pro should fit securely without causing pain or discomfort.",
  },
  {
    question: "What if the Shoulder Pro does not power on?",
    answer:
      "Check connections and power status. If the issue persists, contact support for further guidance.",
  },
  {
    question: "What if I don’t feel stimulation in the water?",
    answer:
      "Gradually increase the intensity using the control dial until a mild, comfortable sensation is felt. Ensure the water contains the recommended salts and tablets as directed.",
  },
  {
    question: "What if stimulation feels uneven between feet or hands?",
    answer:
      "Ensure both sides are filled with the same amount of warm water and consumables. Adjust positioning so hands or feet are fully submerged and relaxed.",
  },
  {
    question: "What if the unit shuts off during a session?",
    answer:
      "The NerveSpa Nerve Bath includes an automatic shutoff at the end of the programmed session. If it shuts off early, check battery charge and restart if needed.",
  },
  {
    question: "What if the Cold Laser does not emit light?",
    answer:
      "Check that the device is powered on and properly charged. Ensure the applicator is positioned correctly against the skin.",
  },
  {
    question: "What if treatment feels ineffective?",
    answer:
      "Confirm session duration and placement follow provider guidance. Consistent use over time is important for results.",
  },
  {
    question: "What if vibration feels too intense?",
    answer:
      "Stop the session and restart at a lower setting if recommended by your provider. Vibration should remain comfortable.",
  },
  {
    question: "What if the Quake Plate does not power on?",
    answer:
      "Check the power source and ensure the device is properly connected. Contact support if the issue continues.",
  },
  {
    question: "What if conductive socks or gloves feel dry during use?",
    answer:
      "Lightly moisten the conductive garments with water before starting the session. Proper moisture helps ensure consistent stimulation.",
  },
  {
    question:
      "What if stimulation cuts in and out when using conductive garments?",
    answer:
      "Check lead wire connections and ensure the garments are evenly moistened. Inconsistent stimulation is often related to connection or moisture issues.",
  },
  {
    question: "What if the garment no longer conducts stimulation well?",
    answer:
      "Over time, conductive garments can wear down. If stimulation remains inconsistent despite proper setup, replacement may be needed.",
  },
  {
    question: "What if Knee Pro shuts off during a session?",
    answer:
      "Charge the device fully before restarting. If shutdown continues, discontinue use and contact support.",
  },
  {
    question: "What if the Knee Pro feels uncomfortable around the knee?",
    answer:
      "Stop the session and adjust strap placement so the device is secure but comfortable.",
  },
  {
    question: "What if the Shoulder Pro shifts during use?",
    answer:
      "Readjust the wrap so it fits snugly and remains in place during the session.",
  },
  {
    question: "What if the Shoulder Pro shuts off unexpectedly?",
    answer:
      "Ensure the device is fully charged before use. If the issue continues, contact support.",
  },
  {
    question: "What if the screen does not respond or freezes?",
    answer:
      "Turn the device off and back on. If the issue persists, discontinue use and contact support.",
  },
  {
    question: "What if lead wires appear damaged?",
    answer:
      "Stop using the device and replace damaged lead wires. Using compromised accessories can affect performance.",
  },
  {
    question: "When should I stop treatment and contact my provider?",
    answer:
      "Stop treatment if pain, discomfort, or unexpected reactions occur. Contact your provider for guidance before resuming use.",
  },
  {
    question: "What if a device will not power on?",
    answer:
      "Ensure the device is fully charged or properly connected to power. If it still does not turn on, discontinue use and contact support.",
  },
  {
    question: "What if stimulation feels weaker than expected?",
    answer:
      "Check connections, electrode or garment moisture, and device settings. Weak stimulation is often related to setup issues.",
  },
  {
    question: "What if the device becomes warm during use?",
    answer:
      "Mild warmth can be normal. If the device becomes excessively hot, stop use and allow it to cool before restarting.",
  },
  {
    question: "What if an error message appears on the screen?",
    answer:
      "Power the device off and restart. If the error persists, contact support for further guidance.",
  },
  {
    question: "What if the battery drains faster than expected?",
    answer:
      "Fully charge the device before each use. If battery performance declines significantly, contact support.",
  },
  {
    question: "What if accessories are lost or damaged?",
    answer:
      "Replacement accessories can be ordered through approved channels. Contact support for assistance.",
  },
  {
    question: "Can devices be shared between patients?",
    answer:
      "Devices are assigned per provider guidance. Sharing policies depend on clinical protocols and hygiene standards.",
  },
  {
    question: "How should devices be cleaned after use?",
    answer:
      "Follow the cleaning instructions provided in the user guide. Use gentle cleaning methods and avoid submerging electronic components.",
  },
  {
    question: "When should I contact NerveSpa support?",
    answer:
      "Contact support if troubleshooting steps do not resolve the issue or if the device does not function as expected.",
  },
  {
    question:
      "What if there is no sensation during a NerveSpa Nerve Bath session?",
    answer:
      "Check that lead wires are connected properly, salts and tablets are added, and intensity is increased gradually until a mild sensation is felt.",
  },
  {
    question: "What if the sensation feels uneven between feet or hands?",
    answer:
      "Uneven sensation can occur due to skin condition or placement. Adjust position and ensure equal contact with the water.",
  },
  {
    question: "What if the water feels too warm or too cool?",
    answer:
      "Use warm, comfortable water. Avoid hot water, as it may affect comfort and session quality.",
  },
  {
    question: "What if the session stops",
    answer:
      "If the session stops before the full programmed time, first check whether the device automatically completed its preset cycle. Many NerveSpa devices are designed to stop once the selected program has finished.\n\nIf the session stopped unexpectedly:\n\n• Ensure the device is properly connected and powered on\n• Check that all cables, pads, or wraps are securely attached\n• Confirm the battery is adequately charged (if applicable)\n• Restart the device and begin a new session\n\nIf the device continues to stop unexpectedly after these steps, discontinue use and contact NerveSpa customer support or your provider for assistance.",
  },
  {
    question: "What if the session stops before 30 minutes?",
    answer:
      "The NerveSpa Nerve Bath is designed with an automatic 30-minute shutoff. If the session ends early, check battery charge and connections before restarting.",
  },
  {
    question: "What if the device will not power on?",
    answer:
      "Ensure the unit is fully charged and all cables are securely connected. If the device still does not power on, contact support.",
  },
  {
    question: "What if stimulation feels too strong?",
    answer:
      "Reduce intensity using the control buttons until the sensation is mild and comfortable. Sessions should never be painful.",
  },
  {
    question: "What if the wrap shuts off during a session?",
    answer:
      "The wrap may shut off automatically at the end of a programmed session or if battery power is low. Recharge the unit and restart if needed.",
  },
  {
    question: "What if I do not feel anything during treatment?",
    answer:
      "LED therapy may not produce a strong sensation. Consistent use as directed is important even if minimal sensation is felt.",
  },
  {
    question: "What if the Cold Laser does not power on?",
    answer:
      "Ensure the device is fully charged and the power button is pressed firmly. Confirm the applicator is properly connected before starting a session.",
  },
  {
    question: "What if the laser shuts off during treatment?",
    answer:
      "The Cold Laser may shut off automatically at the end of a timed session or if the battery is low. Recharge the device and restart as directed.",
  },
  {
    question: "What if I do not feel any sensation from the laser?",
    answer:
      "Cold laser therapy may not create a noticeable sensation. Follow provider guidance and use consistently even if little or no sensation is felt.",
  },
  {
    question: "What should I do if the device overheats?",
    answer:
      "If the device feels unusually warm, stop the session and allow it to cool. Ensure proper placement and airflow before resuming use.",
  },
  {
    question: "What if the wrap does not stay secured?",
    answer:
      "Adjust the straps to ensure a snug but comfortable fit around the treatment area. Proper positioning helps deliver consistent therapy.",
  },
  {
    question: "What if the LEDs appear dim?",
    answer:
      "Check battery level and ensure the wrap is fully charged. Dim light may indicate low battery power.",
  },
  {
    question: "What if the Knee Pro does not power on?",
    answer:
      "Confirm the controller is charged and all connections are secure. Press the power button firmly to start the session.",
  },
  {
    question: "What if the stimulation feels too strong?",
    answer:
      "Lower the intensity until the sensation is mild and comfortable. Knee Pro sessions should never be painful.",
  },
  {
    question: "What if the stimulation feels too weak?",
    answer:
      "Increase intensity gradually until a comfortable sensation is felt. Check strap fit and skin",
  },
  {
    question: "How do clinics measure patient engagement with NerveSpa?",
    answer:
      "Clinics can measure engagement through usage consistency, session completion, and patient participation over time. NerveSpa supports clinics by providing non-diagnostic usage insights that help assess adherence and engagement trends.",
  },
  {
    question:
      "What non-diagnostic indicators can providers monitor when using NerveSpa?",
    answer:
      "Providers may monitor patient-reported comfort, tolerance, functional ease, and overall experience during use. These indicators are observational and experiential, not diagnostic or treatment outcomes.",
  },
  {
    question:
      "How does NerveSpa support patient-reported comfort or function tracking?",
    answer:
      "NerveSpa supports clinics by enabling consistent use routines and optional documentation of patient feedback related to comfort and daily function, as determined by the provider’s clinical workflow.",
  },
  {
    question:
      "Can clinics document changes in patient experience over time with NerveSpa?",
    answer:
      "Yes. Clinics may document patient-reported experiences over time using their own clinical notes or systems. NerveSpa does not diagnose or treat conditions but supports structured, repeatable use.",
  },
  {
    question: "Does NerveSpa provide usage or adherence data to clinics?",
    answer:
      "NerveSpa systems may provide usage-related information such as session duration or frequency, depending on configuration. This information is intended for operational insight, not medical evaluation.",
  },
  {
    question:
      "How can providers discuss progress with patients without making medical claims?",
    answer:
      "Providers should focus on patient-reported experiences, comfort, and engagement rather than outcomes or diagnoses. Discussions should emphasize support, consistency, and overall wellness experience.",
  },
  {
    question:
      "What types of patient feedback are most commonly reported with NerveSpa use?",
    answer:
      "Feedback often relates to comfort during sessions, ease of use, relaxation, and overall experience. Individual responses vary, and feedback should be documented at the provider’s discretion.",
  },
  {
    question:
      "How should front-desk staff explain NerveSpa to patients in simple terms?",
    answer:
      "Staff can explain NerveSpa as a clinic-guided wellness technology designed to support nerve-focused comfort and relaxation as part of a broader care plan.",
  },
  {
    question:
      "What should staff say if a patient asks whether NerveSpa replaces medical treatment?",
    answer:
      "Staff should clarify that NerveSpa does not replace medical treatment and is intended to support wellness alongside provider-directed care.",
  },
  {
    question:
      "How should staff respond if a patient asks whether NerveSpa is FDA approved?",
    answer:
      "Staff may state that NerveSpa is produced by an FDA-registered manufacturer and used under provider guidance, without making claims about treatment or cure.",
  },
  {
    question:
      "What should staff say if a patient asks about insurance coverage?",
    answer:
      "Staff should explain that coverage varies by clinic and payer, and patients should consult the clinic directly for billing or reimbursement information.",
  },
  {
    question: "How should staff explain home use versus in-clinic guidance?",
    answer:
      "Staff can explain that some clinics may recommend guided home use, while others focus on in-clinic protocols, based on provider discretion.",
  },
  {
    question:
      "What is the best way for staff to set expectations before a patient begins using NerveSpa?",
    answer:
      "Staff should emphasize comfort, gradual familiarization, and provider guidance, while avoiding promises of outcomes.",
  },
  {
    question:
      "How should staff handle common patient misconceptions about NerveSpa?",
    answer:
      "Staff should correct misconceptions by reinforcing that NerveSpa supports wellness and comfort and is not a diagnostic or treatment device.",
  },
  {
    question:
      "How is NerveSpa different from consumer-grade nerve stimulation devices?",
    answer:
      "NerveSpa is designed for clinical environments, emphasizing provider-guided use, consistency, and integration into care workflows rather than direct-to-consumer self-treatment.",
  },
  {
    question:
      "What makes NerveSpa a clinic-grade system rather than a retail product?",
    answer:
      "NerveSpa is distributed through professional channels and intended for use under clinical guidance, with systems and support designed for healthcare settings.",
  },
  {
    question:
      "Why do clinics choose NerveSpa over generic home wellness devices?",
    answer:
      "Clinics choose NerveSpa for its structured approach, professional support, and alignment with clinical workflows and patient education.",
  },
  {
    question: "How does NerveSpa integrate into existing clinical workflows?",
    answer:
      "NerveSpa is designed to complement existing care plans, allowing clinics to incorporate it into evaluations, education, and ongoing support routines.",
  },
  {
    question: "What design principles guide the NerveSpa system?",
    answer:
      "The system emphasizes consistency, ease of use, patient comfort, and provider oversight, supporting repeatable and reliable wellness routines.",
  },
  {
    question:
      "How does NerveSpa support consistency and repeatability in patient use?",
    answer:
      "NerveSpa supports repeatable use through standardized protocols and clear guidance established by the clinic.",
  },
  {
    question: "When should clinics pause or discontinue use of NerveSpa?",
    answer:
      "Clinics should pause use if a patient reports discomfort, unexpected reactions, or if clinical judgment indicates reassessment is appropriate.",
  },
  {
    question:
      "What should providers do if a patient reports discomfort during use?",
    answer:
      "Providers should stop the session, assess the situation, and determine next steps based on professional judgment and clinic protocols.",
  },
  {
    question:
      "When should a clinic contact NerveSpa support versus handling an issue internally?",
    answer:
      "Clinics should contact NerveSpa support for device-related questions or technical issues, while clinical decisions remain the responsibility of the provider.",
  },
  {
    question:
      "What situations require clinical judgment before continuing NerveSpa use?",
    answer:
      "Any changes in patient tolerance, reported discomfort, or clinical context should prompt provider review before continuing use.",
  },
  {
    question:
      "Are there any patient scenarios where NerveSpa may not be appropriate?",
    answer:
      "Appropriateness is determined by the provider based on individual patient circumstances and clinical discretion.",
  },
  {
    question:
      "How does NerveSpa support safe use alongside other clinical modalities?",
    answer:
      "NerveSpa is designed to complement other modalities, with integration determined by provider judgment and clinic protocols.",
  },
  {
    question: "Is NerveSpa available outside the United States?",
    answer:
      "Availability may vary by region. Clinics outside the U.S. may contact NerveSpa to inquire about current options.",
  },
  {
    question:
      "Are international certifications or markets planned for NerveSpa?",
    answer:
      "NerveSpa evaluates expansion opportunities based on regulatory requirements, clinical demand, and operational readiness.",
  },
  {
    question:
      "Can clinics outside the U.S. request information or express interest?",
    answer:
      "Yes. Clinics may contact NerveSpa to request information and discuss potential availability in their region.",
  },
  {
    question:
      "How does NerveSpa evaluate expansion into new regions or care settings?",
    answer:
      "Expansion is evaluated based on regulatory compliance, clinical alignment, and the ability to support providers effectively.",
  },,
  {
    question: 'What conditions can NerveSpa support?',
    answer: `NerveSpa is used for peripheral neuropathy, diabetic neuropathy, chemotherapy-related neuropathy, plantar fasciitis, heel spurs, restless legs, circulation issues, numbness, tingling, burning, stiffness, balance concerns, cramps, cold feet, and joint-related discomfort such as knee and shoulder arthritis.`
  },
  {
    question: 'What is the NerveSpa Quake Plate?',
    answer: `The NerveSpa Quake Plate is a vibration therapy platform designed to help regain mobility and ease pain in the feet and lower extremities. It provides deep tissue massage, helps relieve pain and relax irritated nerves, and supports increased circulation and blood flow when used as directed by your clinic.`
  },
  {
    question: 'Who should not use the Quake Plate?',
    answer: `Patients with circulatory syndromes such as Raynaud’s disease, Buerger’s disease, peripheral vascular disease, vasospastic disorders, sickle cell anemia, hypercoagulable clotting disorders, local tissue infection, or potential wound-healing problems should not use the Quake Plate unless cleared by their provider. It should also not be used if you are pregnant or on a recent injury. Always review the CONTRAINDICATIONS and ELECTRICAL PRECAUTIONS sections in the Quake Plate User Manual and consult your clinic before use.`
  },
  {
    question: 'What outcomes are expected with the Knee Pro?',
    answer: `Patients commonly report improved mobility, reduced discomfort, and better day-to-day function over consistent multi-month use. Individual outcomes vary, but long-term adherence is key. For an in-clinic perspective on patient results, see Dr. Perkins’ Knee Pro testimonial: https://youtu.be/mUzxul6TRfc?si=Gtv4vV9wVNWR5IHb`
  },
  {
    question: 'How is the Shoulder Pro used?',
    answer: `Place the Shoulder Pro over the shoulder so the treatment area is fully covered, then secure the straps as shown in the Quick Start Guide. Connect it to the controller and follow your clinic’s instructions for session length and frequency, typically longer-duration sessions similar to other joint protocols. For placement diagrams and setup steps, refer to the Shoulder Pro Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Shoulder-Quick%20start%20guide-250916-lowres-print.pdf`
  },
  {
    question: 'Who should not use the Shoulder Pro?',
    answer: `Patients with pacemakers, open wounds near the shoulder, or uncontrolled medical conditions should not use the Shoulder Pro. Providers should screen for contraindications before prescribing and patients should follow clinic-directed use only. For safety information, see the Shoulder Pro Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Shoulder-Quick%20start%20guide-250916-lowres-print.pdf`
  },
  {
    question: 'What outcomes are expected with the Shoulder Pro?',
    answer: `When used consistently as directed, patients commonly report reduced shoulder discomfort, improved range of motion, and better day-to-day shoulder function over time. Individual results vary based on the condition and adherence to the program. Your clinic will guide expectations as part of your overall joint and mobility plan.`
  },
  {
    question: 'How often should the Quake Plate be used?',
    answer: `The Quake Plate is commonly used once per session as part of the Neuropathy Program, often on a daily or near-daily basis. Use contributes toward the overall 60–90 uses recommended by the provider.`
  },
  {
    question: 'What if the stimulation feels too weak?',
    answer: `Increase intensity gradually until a comfortable sensation is felt. Check strap fit and skin`
  }
];

// Default output
let outputValue =
  "Sorry, I couldn't find a relevant answer for your question. Please try a different question or contact support directly at support@nervespa.com";

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

// Helper function to normalize text for comparison
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

// Calculate semantic/token matching score using Sorensen-Dice coefficient
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
        break;
      } else if (w1.length >= 2 && w2.length >= 2) {
        let dist = levenshteinDistance(w1, w2);
        if (dist <= 1) {
          if (0.8 > bestMatchScore) {
            bestMatchScore = 0.8;
            bestMatchIdx = j;
          }
        } else if (w1.includes(w2) || w2.includes(w1)) {
          if (0.6 > bestMatchScore) {
            bestMatchScore = 0.6;
            bestMatchIdx = j;
          }
        }
      }
    }

    if (bestMatchIdx !== -1) {
      intersection += bestMatchScore;
      matched2.add(bestMatchIdx);
    }
  }

  let baseScore = (2 * intersection) / (tokens1.length + tokens2.length);

  let inputCoverage = intersection / tokens1.length;
  let finalScore = baseScore;

  if (tokens1.length >= 2 && inputCoverage <= 0.5) {
    finalScore *= 0.3; // Penalty
  }

  return finalScore;
}

// Normalize the incoming question once
const cleanIncoming = normalize(incomingQuestion);
const thresholdLev = Math.max(3, Math.floor(cleanIncoming.length * 0.15));

let bestMatch = null;
let bestScore = -1;


// Injecting new products dynamically
qaPairs.push(...[
  {
    question: "What is (1pk) Effervescent Tablets?",
    answer: "These effervescent tablets are designed to provide support for nerve and neuropathy issues. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/(1pk)-effervescent-tablets-19037?pa=1",
  },
  {
    question: "What is Carbon Rubber Electrodes?",
    answer: "Clinical-grade carbon rubber electrodes used for TENS or similar electrotherapy devices. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/carbon-rubber-electrodes-19030?pa=1",
  },
  {
    question: "What is Epsom Salt - 8oz jar?",
    answer: "A jar of traditional Epsom salt, often used for foot soaks to help soothe discomfort. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/epsom-salt-8oz-jar-19038?pa=1",
  },
  {
    question: "What is LAVENDER SCENTED EPSOM SALT - 8OZ JAR?",
    answer: "Epsom salt infused with a relaxing lavender scent for an enhanced foot bath experience. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/lavender-scented-epsom-salt-8oz-jar-19435?pa=1",
  },
  {
    question: "What is N1-Nerve+ Neuropathy Support?",
    answer: "A dedicated supplement designed to provide specialized support for nerve and neuropathy health. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/n1-nerve+-neuropathy-support-19489?pa=1",
  },
  {
    question: "What is NERVESPA SILVER CONDUCTIVE GLOVE - HAND GARMENT SYSTEM?",
    answer: "A conductive glove system designed to deliver electrotherapy relief to the hands. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-silver-conductive-glove-hand-garment-system-19476?pa=1",
  },
  {
    question: "What is NERVESPA SILVER CONDUCTIVE SOCK - FOOT GARMENT SYSTEM?",
    answer: "A conductive sock system designed to deliver electrotherapy relief to the feet. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-silver-conductive-sock-foot-garment-system-19487?pa=1",
  },
  {
    question: "What is NERVESPA PRO - 60 DAY SUPPLY PROGRAM?",
    answer: "A comprehensive 60-day supply program for the NerveSpa Pro system. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-pro-60-day-supply-program-19459?pa=1",
  },
  {
    question: "What is NERVESPA PRO - 90 DAY SUPPLY PROGRAM?",
    answer: "A comprehensive 90-day supply program for the NerveSpa Pro system. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-pro-90-day-supply-program-18936?pa=1",
  },
  {
    question: "What is NERVESPA PRO, HAND AND FOOT NEUROPATHY SYSTEM - 90 DAY SUPPLY PROGRAM - DUAL CHANNEL DEVICE?",
    answer: "A complete dual-channel system for hand and foot neuropathy treatment, including a 90-day supply. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-pro-hand-and-foot-neuropathy-system-90-day-supply-program-dual-channel-device-19671?pa=1",
  },
  {
    question: "What is Nerve & Neuropathy Cream by NerveSpa - Maximum Strength Relief..?",
    answer: "A maximum strength topical cream with L-Arginine, B6, and Menthol for pain relief and improved circulation in feet, hands, and legs. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-&-neuropathy-cream-by-nervespa-maximum-strength-relief-for-foot-hands-legs-toes-includes-7grams-of-larginine-vitamin-b6-menthol-aloe-scientifically-developed-to-improve-blood-circulation-and-relieve-pain-2.82oz-19194?pa=1",
  },
  {
    question: "What is Nerve & Neuropathy Support Kit (Includes: Blood Flow Drink powder, Neuropathy Capsules, Nerve ODF, Nerve Cream)?",
    answer: "A complete kit combining supplements and cream for comprehensive nerve and neuropathy support. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-&-neuropathy-support-kit-(includes:-blood-flow-drink-powder-neuropathy-capsules-nerve-odf-nerve-cream)-19635?pa=1",
  },
  {
    question: "What is Nerve Spa Foot bath Supply Kit?",
    answer: "A convenient supply kit for use with the Nerve Spa foot bath system. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-spa-foot-bath-supply-kit-18934?pa=1",
  },
  {
    question: "What is Nerve Spa Performance diabetic Socks?",
    answer: "Specialized diabetic socks designed for comfort and performance (available in Small and Large). You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-spa-performance-diabetic-socks-18935?pa=1",
  },
  {
    question: "What is Nerve Spa performance Supplement?",
    answer: "A performance-focused dietary supplement to support nerve function. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-spa-performance-supplement-18933?pa=1",
  },
  {
    question: "What is NerveSpa Classic, Hand and Foot Pain Relief System - 10 DAY SUPPLY PROGRAM?",
    answer: "A 10-day supply program for the NerveSpa Classic hand and foot pain relief system. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-classic-hand-and-foot-pain-relief-system-10-day-supply-program-18883?pa=1",
  },
  {
    question: "What is Replacement Charger cord for The NerveBeam cold laser?",
    answer: "A replacement charging cord for the NerveBeam Cold Laser device. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-charger-cord-for-the-nervebeam-cold-laser-19903?pa=1",
  },
  {
    question: "What is Replacement Charger cord for The Quake Plate?",
    answer: "A replacement charging cord for The Quake Plate vibrational massager. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-charger-cord-for-the-quake-plate-19904?pa=1",
  },
  {
    question: "What is Replacement Charger for The NerveBeam LED Light Therapy Wrap?",
    answer: "A replacement charger for the NerveBeam LED Light Therapy Wrap device. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-charger-for-the-nervebeam-led-light-therapy-wrap-19887?pa=1",
  },
  {
    question: "What is Replacement Charger for the Nerve Spa Nerve Bath System?",
    answer: "A replacement charger for the Nerve Spa Nerve Bath System. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-charger-for-the-nerve-spa-nerve-bath-system.-19460?pa=1",
  },
  {
    question: "What is Replacement lead wires for Nerve Spa?",
    answer: "Replacement wires for connecting electrodes to the Nerve Spa devices. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-lead-wires-for-nerve-spa-19562?pa=1",
  },
  {
    question: "What is The 90-Day Neuropathy Program?",
    answer: "A complete 90-day program designed to manage and support neuropathy. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-90-day-neuropathy-program-19044?pa=1",
  },
  {
    question: "What is The Blood Flow Super formula Drink Powder by Nerve Spa?",
    answer: "A drink powder formulated to support and improve healthy blood flow. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-blood-flow-super-formula-drink-powder-by-nerve-spa-19483?pa=1",
  },
  {
    question: "What is The NerveBeam Cold Laser?",
    answer: "A cold laser device intended for therapeutic use in relieving pain (available in White). You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-nervebeam-cold-laser-18986?pa=1",
  },
  {
    question: "What is The NerveBeam LED Light Therapy Wrap - Red & Infrared light therapy?",
    answer: "An LED light therapy wrap utilizing red and infrared light for therapeutic relief (available in single and pair options). You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-nervebeam-led-light-therapy-wrap-red-&-infrared-light-therapy-18990?pa=1",
  },
  {
    question: "What is The Quake Plate Vibrational Massage Therapy?",
    answer: "A vibrational massage therapy plate designed for use in pain management (available in White). You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-quake-plate-vibrational-massage-therapy-18988?pa=1",
  },
  {
    question: "What is Joint Heath Support Kit (Includes: Joint Drink Powder, OA Cream)?",
    answer: "A kit that combines a joint drink powder and an Osteoarthritis (OA) cream for comprehensive joint support. You can find it here: https://nervespa.com/products/joint-&-mobility/joint-heath-support-kit-(includes:-joint-drink-powder-oa-cream)-19636?pa=1",
  },
  {
    question: "What is Nerve Spa Knee Pro - Advanced OA/RA treatment Device - Size: Fits Small to Large?",
    answer: "An advanced device for the treatment of Osteoarthritis (OA) and Rheumatoid Arthritis (RA) in the knee (also available in a 90-day supply kit). You can find it here: https://nervespa.com/products/joint-&-mobility/nerve-spa-knee-pro-advanced-oara-treatment-device-size:-fits-small-to-large-19728?pa=1",
  },
  {
    question: "What is Nerve Spa Knee Pro - Replacement Pads - 3 x VB35 and 3 x VBKnee?",
    answer: "Replacement electrode pads for the Nerve Spa Knee Pro device. You can find it here: https://nervespa.com/products/joint-&-mobility/nerve-spa-knee-pro-replacement-pads-3-x-vb35-and-3-x-vbknee-19647?pa=1",
  },
  {
    question: "What is Nerve Spa Shoulder Pro?",
    answer: "A device designed for therapeutic support and treatment for the shoulder joint. You can find it here: https://nervespa.com/products/joint-&-mobility/nerve-spa-shoulder-pro-19760?pa=1",
  },
  {
    question: "What is NerveSpa Knee Pro - 180 day supply kit?",
    answer: "A comprehensive 180-day supply kit for the NerveSpa Knee Pro system. You can find it here: https://nervespa.com/products/joint-&-mobility/nervespa-knee-pro-180-day-supply-kit-19729?pa=1",
  },
  {
    question: "What is NerveSpa Knee Pro Size Extender Straps (1 pair) _ XL-XXL?",
    answer: "Extender straps to help fit the NerveSpa Knee Pro device on larger sizes. You can find it here: https://nervespa.com/products/joint-&-mobility/nervespa-knee-pro-size-extender-straps-(1-pair)-_-xl-xxl-19731?pa=1",
  },
  {
    question: "What is Osteoarthritis and Rheumatoid Arthritis Cream?",
    answer: "A topical cream formulated to help relieve discomfort associated with Osteoarthritis and Rheumatoid Arthritis. You can find it here: https://nervespa.com/products/joint-&-mobility/osteoarthritis-and-rheumatoid-arthritis-cream-19378?pa=1",
  },
  {
    question: "What is Roll On Pain Relief by Nerve Target - Roll On Muscle Pain Reliever, Back Pain, Arthritis..?",
    answer: "A roll-on topical muscle and joint pain reliever containing Arnica, Menthol, and Camphor. You can find it here: https://nervespa.com/products/joint-&-mobility/roll-on-pain-relief-by-nerve-target-roll-on-muscle-pain-reliever-back-pain-arthritis-with-arnica-menthol-&-camphor-19908?pa=1",
  },
  {
    question: "What is Super Flex Joint Formula Drink Powder by NerveSpa - Joint Support Supplement..?",
    answer: "A powdered drink supplement containing Glucosamine, Chondroitin, and Turmeric to support and restore joint health. You can find it here: https://nervespa.com/products/joint-&-mobility/super-flex-joint-formula-drink-powder-by-nervespa-joint-support-supplement-help-repairrestore-with-glucosamine-chondroitin-turmeric-ginger-msm-boswellia-30-servings-19503?pa=1",
  },
  {
    question: "What is ImmunoGut Super Formula: Essential Immunity & Gut Support | Vitamin D, Zinc, Beta Glucan | Detox & Stress Relief | 480g Powder, 60 Servings?",
    answer: "A powdered super formula designed for comprehensive immune and gut health, containing Vitamin D, Zinc, and Beta Glucan. You can find it here: https://nervespa.com/products/metabolic-gut-&-immunity/immunogut-super-formula:-essential-immunity-&-gut-support-vitamin-d-zinc-beta-glucan-detox-&-stress-relief-480g-powder-60-servings.-19711?pa=1",
  },
  {
    question: "What is N1 - Gut Support with probiotics?",
    answer: "A supplement formulated for gut health and digestive support, fortified with probiotics. You can find it here: https://nervespa.com/products/metabolic-gut-&-immunity/n1-gut-support-with-probiotics-19490?pa=1",
  },
  {
    question: "What is N1 - Skinny Blend?",
    answer: "A blend supplement intended to support weight control and metabolic health. You can find it here: https://nervespa.com/products/metabolic-gut-&-immunity/n1-skinny-blend-19488?pa=1",
  },
  {
    question: "What is Nerve Spa Vibe | Deep Tissue Vibrational Massager with Attachement Heads..?",
    answer: "A powerful, cordless deep tissue vibrational massager with interchangeable heads for relief from sciatica, neuropathy, and muscle pain. You can find it here: https://nervespa.com/products/clinical-devices/nerve-spa-vibe-deep-tissue-vibrational-massager-with-attachement-heads-7500-rpm-vibration-therapy-for-deep-tissue-sciatica-neuropathy, joint-&-muscle-relief-cordless-compact-&-powerful.-19915?pa=1",
  },
  {
    question: "What is Nerve Wave 2.5 Rd Clinical Grade Electrode?",
    answer: "Clinical-grade, 2.5-inch round electrodes for use with electrotherapy devices. You can find it here: https://nervespa.com/products/clinical-devices/nerve-wave-2.5-rd-clinical-grade-electrode-19901?pa=1",
  },
  {
    question: "What is Nerve Wave by Nerve Spa - Clinical Nerve Spa Multi-Modality Treatment Device?",
    answer: "A clinical, multi-modality treatment device for comprehensive nerve spa therapy. You can find it here: https://nervespa.com/products/clinical-devices/nerve-wave-by-nerve-spa-clinical-nerve-spa-multi-modality-treatment-device-19868?pa=1",
  },
  {
    question: "What is The Power Wrap - Ultra-High Powered LED COLD LASER..?",
    answer: "An ultra-high-powered LED cold laser wrap using infrared and red light for intense relief therapy. You can find it here: https://nervespa.com/products/clinical-devices/the-power-wrap-ultra-high-powered-led-cold-laser-infrared-and-red-light-relief-12-000mw-650nm-red-light-808nm-infrared-diodes-78-lasers-+-192-leds-19721?pa=1",
  }
]);

// Loop through Q&A and find the closest match
for (const pair of qaPairs) {
  const qNorm = normalize(pair.question);

  const dist = levenshteinDistance(cleanIncoming, qNorm);
  const semanticScore = getSemanticScore(incomingQuestion, pair.question);

  // Calculate a combined heuristic score for sorting:
  // We want to pick the absolute best match if multiple exceed the thresholds
  const matchScore = (dist <= thresholdLev ? 1.0 : 0) + semanticScore;

  if (
    (dist <= thresholdLev || semanticScore >= 0.45) &&
    matchScore > bestScore
  ) {
    bestScore = matchScore;
    bestMatch = pair;
  }
}

// If we found a suitable match, return its answer.
if (bestMatch) {
  outputValue = bestMatch.answer;
}

// Return the result
return [
  {
    json: {
      output: outputValue,
    },
  },
];
