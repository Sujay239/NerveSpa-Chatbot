const incomingQuestion = $input.first().json.chatInput || $("Webhook").first().json.query.chatInput;

// JSON Q&A pairs
const qaPairs = [
  {
    question: "What is NerveSpa?",
    answer: "NerveSpa is a family of clinical-grade products and programs designed to support neuropathy, joint pain, and metabolic health. It includes aquatic nerve stimulation, LED therapy, cold laser, vibration therapy, supplements, and topicals. All products are manufactured in FDA-registered facilities and distributed through licensed clinicians."
  },
  {
    question: "Can you explain what NerveSpa?",
    answer: "NerveSpa is a family of clinical-grade products and programs designed to support neuropathy, joint pain, and metabolic health. It includes aquatic nerve stimulation, LED therapy, cold laser, vibration therapy, supplements, and topicals. All products are manufactured in FDA-registered facilities and distributed through licensed clinicians."
  },
  {
    question: "Could you describe what NerveSpa?",
    answer: "NerveSpa is a family of clinical-grade products and programs designed to support neuropathy, joint pain, and metabolic health. It includes aquatic nerve stimulation, LED therapy, cold laser, vibration therapy, supplements, and topicals. All products are manufactured in FDA-registered facilities and distributed through licensed clinicians."
  },
  {
    question: "Tell me about NerveSpa",
    answer: "NerveSpa is a family of clinical-grade products and programs designed to support neuropathy, joint pain, and metabolic health. It includes aquatic nerve stimulation, LED therapy, cold laser, vibration therapy, supplements, and topicals. All products are manufactured in FDA-registered facilities and distributed through licensed clinicians."
  },
  {
    question: "Explain NerveSpa to me",
    answer: "NerveSpa is a family of clinical-grade products and programs designed to support neuropathy, joint pain, and metabolic health. It includes aquatic nerve stimulation, LED therapy, cold laser, vibration therapy, supplements, and topicals. All products are manufactured in FDA-registered facilities and distributed through licensed clinicians."
  },
  {
    question: "Who owns NerveSpa?",
    answer: "NerveSpa is owned and distributed by Pain Management Technologies (PMT), an FDA-registered medical device establishment based in Akron, Ohio. PMT manufactures and distributes the full NerveSpa product family. https://www.paintechnology.com"
  },
  {
    question: "How do providers implement NerveSpa?",
    answer: "NerveSpa devices do not require a medical prescription. Licensed clinicians guide patients on correct use and integrate devices and supplements into their care plans."
  },
  {
    question: "What conditions can NerveSpa support?",
    answer: "NerveSpa is used for peripheral neuropathy, diabetic neuropathy, chemotherapy-related neuropathy, plantar fasciitis, heel spurs, restless legs, circulation issues, numbness, tingling, burning, stiffness, balance concerns, cramps, cold feet, and joint-related discomfort such as knee and shoulder arthritis."
  },
  {
    question: "How can clinics order NerveSpa or request a demo?",
    answer: "Clinics can open a provider account to order NerveSpa products or request demos. Starter kits and bundles are available. Patients cannot purchase devices directly but may obtain salts, garments, and accessories through approved channels."
  },
  {
    question: "What are NerveSpa\u2019s pricing options?",
    answer: "NerveSpa devices are sold to clinics at wholesale pricing. Retail pricing applies to patient consumables such as salts and garments. Some devices may qualify for insurance coverage under HCPCS code E0720 depending on the plan."
  },
  {
    question: "Is NerveSpa FDA-registered?",
    answer: "Yes. NerveSpa devices are FDA-registered and manufactured in FDA-registered facilities. Registration confirms establishment and product listing; it does not represent FDA approval of medical claims."
  },
  {
    question: "Is NerveSpa covered by insurance?",
    answer: "Coverage varies by plan. Some clinics bill eligible components under neuropathy programs, while others use cash-pay, HSA/FSA, or membership models. Patients should verify with their insurer."
  },
  {
    question: "What warranty and return policy does NerveSpa offer?",
    answer: "All devices include a one-year limited warranty covering manufacturing defects. Returns are accepted within 30 days if unused and undamaged. Providers should contact the seller for RMA instructions."
  },
  {
    question: "Where is NerveSpa manufactured?",
    answer: "NerveSpa devices are manufactured in FDA-registered facilities from all over the world, with final distribution handled through PMT in Akron, Ohio."
  },
  {
    question: "How long has PMT been in business?",
    answer: "PMT has been in business for over 25 years, supplying clinics nationwide with FDA-registered therapeutic technologies."
  },
  {
    question: "Where can FDA listings be verified?",
    answer: "Clinics can verify FDA establishment registrations and product listings through the FDA\u2019s official database using PMT\u2019s registration information.  View listings here: https://docs.google.com/spreadsheets/u/0/d/1qX86EUZUUwZKHMVHDy6IqY27pQankwW89ukJwa-F7G8/edit"
  },
  {
    question: "What certifications does PMT hold?",
    answer: "PMT maintains FDA establishment registration and manufactures products through FDA-registered facilities worldwide, ensuring compliance with federal manufacturing and distribution standards."
  },
  {
    question: "Does NerveSpa replace medical care?",
    answer: "No. NerveSpa does not replace medical diagnosis or treatment. Providers determine appropriate use, recommend protocols, and guide patients throughout care."
  },
  {
    question: "Who decides if NerveSpa is appropriate?",
    answer: "Licensed providers determine whether NerveSpa devices or supplements are suitable based on the patient\u2019s condition, safety factors, and treatment goals."
  },
  {
    question: "Can NerveSpa be used with other treatments?",
    answer: "Yes. Clinics commonly pair NerveSpa with chiropractic care, PT, metabolic programs, red light therapy, or other supportive modalities as part of a broader treatment plan."
  },
   {
     question: "Do I need a prescription for NerveSpa?",
     answer: "NerveSpa devices do not require a medical prescription. Licensed clinicians guide patients on correct use and integrate devices and supplements into their care plans."
   },
   {
     question: "Is NerveSpa a US based company?",
     answer: "Yes. NerveSpa appears to be U.S.-based. Its official contact page lists a mailing address in Akron, Ohio, and the site identifies the brand as “NerveSpa by PMT.” NerveSpa’s legal pages also name Pain Management Technologies, Inc. d/b/a NerveSpa at 1760 Wadsworth Road, Akron, Ohio 44320."
   },
  {
    question: "How does NerveSpa compare to other nerve therapy systems?",
    answer: "NerveSpa integrates multiple clinical-grade modalities\u2014water-based stimulation, LED therapy, cold laser, vibration therapy, and supplementation\u2014creating broader coverage than single-modality systems."
  },
  {
    question: "What makes NerveSpa unique?",
    answer: "NerveSpa integrates multiple clinical-grade modalities into one family of products\u2014water-based stimulation, high-powered LED wraps, cold laser, vibration therapy, targeted joint devices, and supplementation\u2014offering broader coverage than single-modality systems."
  },
  {
    question: "How does the NerveSpa family of products work together?",
    answer: "Each product plays a specific role across nerve, joint, and metabolic pathways. Clinics can combine devices and supplements to build customized, condition-specific programs that extend care between visits."
  },
  {
    question: "Can patients purchase NerveSpa directly?",
    answer: "Patients cannot purchase full therapeutic systems directly. Devices are distributed through licensed clinics. Patients may reorder consumables such as salts, garments, and supplements through approved channels."
  },
  {
    question: "Are starter kits or bundles available for clinics?",
    answer: "Yes. Clinics may order starter kits or pathway-specific bundles depending on their patient population and protocols."
  },
  {
    question: "Are NerveSpa programs difficult to implement?",
    answer: "Clinics typically integrate NerveSpa in one session. Devices are designed for ease of use, and providers oversee protocols while patients follow structured at-home routines."
  },
  {
    question: "How long is a typical NerveSpa program?",
    answer: "Most pathways follow a structured 60\u201390 day program with additional maintenance options depending on patient outcomes and provider guidance."
  },
  {
    question: "Is NerveSpa safe for most patients?",
    answer: "NerveSpa devices are generally safe when used as directed under the guidance of a licensed provider. Providers screen for contraindications such as pacemakers, open wounds, pregnancy, or certain medical conditions depending on the device."
  },
  {
    question: "Does NerveSpa offer training for clinics?",
    answer: "Yes. Clinics receive onboarding support, device training, and access to guides, protocols, and provider resources. Additional training is available as needed."
  },
  {
    question: "How do clinics contact NerveSpa for support?",
    answer: "Clinics can contact NerveSpa by clicking \u2018Support\u2019 in this chatbot to submit a contact form, by emailing support@nervespa.com, or by calling 1-800-239-7880."
  },
  {
    question: "Does NerveSpa replace medical treatment?",
    answer: "No. NerveSpa does not replace medical diagnosis or treatment. Providers determine whether the products and protocols are appropriate and patients should follow professional guidance."
  },
  {
    question: "Who determines if a patient is a good candidate for NerveSpa?",
    answer: "Licensed providers determine suitability based on symptoms, medical history, and contraindications for each device or supplement."
  },
  {
    question: "Does NerveSpa support insurance reimbursement?",
    answer: "Insurance coverage varies by provider and plan. Some clinics bill eligible treatments under neuropathy programs. Others use cash-pay, HSA/FSA, or memberships."
  },
  {
    question: "What is HCPCS code E0720?",
    answer: "E0720 is a durable medical equipment (DME) billing code used by some clinics for certain types of neuromuscular stimulation. Coverage depends on the insurer and clinical documentation."
  },
  {
    question: "How quickly are products shipped?",
    answer: "Most orders ship within standard fulfillment timelines depending on inventory and clinic volume. Providers can contact their representative for order-specific updates."
  },
  {
    question: "Can NerveSpa be combined with in-clinic treatments?",
    answer: "Yes. Many clinics layer NerveSpa with chiropractic, PT, neuropathy care, and joint mobility programs to support outcomes between visits."
  },
  {
    question: "What outcomes do patients commonly report?",
    answer: "Patients often report reduced tingling, burning, and numbness; improved circulation; decreased stiffness; and better mobility or sleep depending on the product used. Outcomes vary by individual and consistency."
  },
  {
    question: "Can patients travel with NerveSpa devices?",
    answer: "Most NerveSpa products are compact and travel-friendly. Patients should pack chargers, consumables, and any accessories, and follow provider instructions while away."
  },
  {
    question: "What is the NerveSpa Nerve Bath?",
    answer: "The NerveSpa Nerve Bath (Hand & Foot Neuropathy System) is a touch-screen aquatic electrotherapy device for hands or feet. Patients submerge their hands or feet in warm water with Epsom salt and effervescent tablets so the system can deliver circumferential nerve stimulation that supports circulation and nerve activity."
  },
  {
    question: "How does the NerveSpa Nerve Bath work?",
    answer: "The system delivers comfortable low-frequency stimulation through a warm water bath. Patients place their hands or feet in the basins with Epsom salt and effervescent tablets, then the device runs a pre-programmed waveform to support circulation and nerve health. For a step-by-step overview, see the Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing"
  },
  {
    question: "How should the NerveSpa Nerve Bath be set up?",
    answer: "Connect the lead wires and electrodes, fill both sides with warm water, add 1 tablespoon of Epsom salt and 1 effervescent tablet per side, place hands or feet in the water, power on the unit, select Hands/Feet mode, and gradually increase intensity until you feel a mild, comfortable tingle. For visuals and full instructions, use the Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing and the Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing"
  },
  {
    question: "How long is a typical NerveSpa Nerve Bath session?",
    answer: "The default program runs for 30 minutes and the device will automatically shut off at the end of the session. After treatment, remove hands or feet and dry the skin thoroughly. Session timing is also outlined in the Quick Guide: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing"
  },
  {
    question: "How often should the NerveSpa Nerve Bath be used?",
    answer: "Typical clinic and home protocols use the system once daily, 4\u20136 days per week, for about 90 sessions total. After the initial program, many patients transition to periodic maintenance, often repeating a 90-session cycle once per year as needed. Details are included in the Full User Guide: https://drive.google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing"
  },
  {
    question: "Why water-based therapy for the NerveSpa Nerve Bath?",
    answer: "Warm water allows full circumferential contact around the hands or feet, so current is distributed evenly rather than just through small pad areas. This helps improve comfort, consistency of stimulation, and engagement of more nerve endings compared to pad-only approaches."
  },
  {
    question: "What improvements do patients report with the NerveSpa Nerve Bath?",
    answer: "Many patients report reduced tingling, burning, numbness, coldness, and stiffness in their feet or hands, along with improved circulation, comfort, and sleep over time. Results vary by individual, condition severity, and how consistently the program is followed."
  },
  {
    question: "What consumables does the NerveSpa Nerve Bath use?",
    answer: "Each session uses warm water plus Epsom salt and one effervescent tablet per side. These consumables are replaced as needed. The Quick Guide also lists the required consumables for each session: https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing"
  },
  {
    question: "What are NerveSpa conductive foot pads, socks, and gloves?",
    answer: "NerveSpa conductive foot pads, socks, and gloves are silver-conductive garment systems designed for localized stimulation of the feet and hands. They connect to the NerveSpa controller to deliver targeted electrotherapy as part of a neuropathy or nerve-support program."
  },
  {
    question: "How are the NerveSpa conductive foot pads and gloves used in therapy?",
    answer: "Patients wear the conductive pads or gloves over the targeted area, moisten them slightly, and connect them to the NerveSpa unit. Providers guide placement and settings to help ensure safe and effective stimulation as part of the overall program."
  },
  {
    question: "Who should not use NerveSpa conductive garments?",
    answer: "Patients with pacemakers, other implanted electronics, or severe skin conditions in the treatment area should not use conductive garments. Providers should screen patients for contraindications before recommending use."
  },
  {
    question: "What is the NerveSpa Quake Plate?",
    answer: "The NerveSpa Quake Plate is a vibration therapy platform designed to help regain mobility and ease pain in the feet and lower extremities. It provides deep tissue massage, helps relieve pain and relax irritated nerves, and supports increased circulation and blood flow when used as directed by your clinic."
  },
  {
    question: "How do I set up and use the Quake Plate?",
    answer: "Place the Quake Plate on a flat, stable surface, connect it to a 110V AC outlet, and install the provided battery in the remote as shown in the user manual. Sit or stand as instructed by your clinic, place your feet (or hands) on the platform, and use the remote to start and adjust the session to a comfortable setting. Always follow the Quake Plate User Manual (https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/QuakePlate_Manual_230713.pdf) and your clinic\u2019s instructions, and you can also watch the setup video here: https://youtu.be/GZT58LDOT2o?si=Cik7VKLMSM7uEfLL."
  },
  {
    question: "How long and how often should I use the Quake Plate?",
    answer: "Session length and weekly frequency for the Quake Plate should follow your clinic\u2019s specific protocol and the guidance in the Quake Plate User Manual. Your provider will determine how long each session should last and how often you should use it based on your condition, goals, and overall program. Do not exceed the usage recommended by your clinic."
  },
  {
    question: "Who should not use the Quake Plate?",
    answer: "Patients with circulatory syndromes such as Raynaud\u2019s disease, Buerger\u2019s disease, peripheral vascular disease, vasospastic disorders, sickle cell anemia, hypercoagulable clotting disorders, local tissue infection, or potential wound-healing problems should not use the Quake Plate unless cleared by their provider. It should also not be used if you are pregnant or on a recent injury. Always review the CONTRAINDICATIONS and ELECTRICAL PRECAUTIONS sections in the Quake Plate User Manual and consult your clinic before use."
  },
  {
    question: "What is the NerveBeam LED Light Therapy Wrap?",
    answer: "The NerveBeam LED Wrap is a flexible red and infrared light therapy wrap designed to support circulation, reduce inflammation, and help with nerve and joint discomfort in areas like the knee, shoulder, arm, or leg. It is intended to be used under the guidance of a clinic as part of a structured program. For full details and instructions, please refer to the NerveBeam LED Wrap User Guide: https://cdn.hmsctl.com/media/nervespa/pdf/NerveBeam_UserManual_LED-wrap_v03.pdf"
  },
  {
    question: "How is the NerveBeam LED Wrap used?",
    answer: "Place the NerveBeam LED Wrap around the target area, secure it with the straps so it is snug but comfortable, and connect it to the controller. Turn the system on and follow your clinic\u2019s recommended program for session length and frequency. For step-by-step setup, refer to the NerveBeam LED Wrap User Guide: https://cdn.hmsctl.com/media/nervespa/pdf/NerveBeam_UserManual_LED-wrap_v03.pdf"
  },
  {
    question: "Who should not use the NerveBeam LED Wrap?",
    answer: "Patients with pacemakers or other implanted electronic devices, known light sensitivity or photosensitive conditions, active cancer in the treatment area, or those whose provider has advised against light-based or stimulation therapies should not use the NerveBeam LED Wrap. Always review the safety and contraindication section of the NerveBeam LED Wrap User Guide (https://cdn.hmsctl.com/media/nervespa/pdf/NerveBeam_UserManual_LED-wrap_v03.pdf) and consult your clinic before use."
  },
  {
    question: "What outcomes are expected with LED wrap therapy?",
    answer: "When used consistently as directed by a provider, the NerveBeam LED Wrap is intended to support reduced pain, improved circulation, and better comfort and mobility in the treated area over time. Individual results vary based on the condition being treated and adherence to the prescribed program. For guidance on clinical use, clinics should refer to the NerveBeam LED Wrap User Guide: https://cdn.hmsctl.com/media/nervespa/pdf/NerveBeam_UserManual_LED-wrap_v03.pdf"
  },
  {
    question: "What is the NerveBeam Cold Laser?",
    answer: "The NerveBeam Cold Laser is a handheld low-level laser therapy device that uses red and infrared laser light to support circulation, reduce inflammation, and provide targeted comfort in nerve and joint areas as part of a clinic-directed plan. For detailed setup instructions and safety, see the Cold Laser User Guide: https://drive.google.com/file/d/1pHUIbj5dt7BjVwwqzriCmf5ODdpA5hLQ/view?usp=sharing and for an overview of how red and infrared light support cellular energy, you can watch: https://youtu.be/wrWQvDcjEFA"
  },
  {
    question: "How is the NerveBeam Cold Laser used?",
    answer: "Place the handheld Cold Laser applicator directly over the target area and keep it in place for the session length recommended by your clinic, often around 15\u201320 minutes per site. Do not shine the laser into the eyes and always follow your provider\u2019s protocol. For placement diagrams and step-by-step instructions, refer to the Cold Laser User Guide: https://drive.google.com/file/d/1pHUIbj5dt7BjVwwqzriCmf5ODdpA5hLQ/view?usp=sharing and the educational video on red/infrared light therapy: https://youtu.be/wrWQvDcjEFA"
  },
  {
    question: "Who should not use the NerveBeam Cold Laser?",
    answer: "Patients with pacemakers, epilepsy, or cancerous lesions in the treatment area should not use the Cold Laser. It should also not be used over the eyes or in any area where your provider has advised against light-based therapy. Providers should screen patients for contraindications before recommending use. For full safety guidance, see the Cold Laser User Guide: https://drive.google.com/file/d/1pHUIbj5dt7BjVwwqzriCmf5ODdpA5hLQ/view?usp=sharing"
  },
  {
    question: "What outcomes are expected with Cold Laser therapy?",
    answer: "When used consistently as part of a clinic-directed plan, patients often experience improved circulation, reduced discomfort, and better mobility in the treated area over time. Individual outcomes vary based on the condition and adherence to the program. For more on how red and infrared light support cellular energy pathways, see: https://youtu.be/wrWQvDcjEFA and review the Cold Laser User Guide: https://drive.google.com/file/d/1pHUIbj5dt7BjVwwqzriCmf5ODdpA5hLQ/view?usp=sharing"
  },
  {
    question: "What is the Knee Pro?",
    answer: "The Knee Pro is a clinical-grade knee therapy device designed to support OA/RA comfort, mobility, and cartilage health using targeted stimulation and long-duration sessions. It is used as part of a clinic-directed plan over several months. For setup and placement details, see the Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Quick%20start%20guide-250916-print.pdf and the Knee Pro overview video: https://youtu.be/D3mmA02khW8?si=rUQjdsxa5mfJHXLp"
  },
  {
    question: "How is the Knee Pro used?",
    answer: "The Knee Pro wraps securely around the knee and connects to the controller. Sessions are typically 1 hour and the Knee Pro is meant for long-duration, multi-month use (often 6\u20139 months) as part of a structured joint protocol. Always follow your provider\u2019s instructions. For correct setup and strap placement, refer to the Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Quick%20start%20guide-250916-print.pdf and the How-It-Works demonstration: https://youtu.be/D3mmA02khW8?si=rUQjdsxa5mfJHXLp"
  },
  {
    question: "Who should not use the Knee Pro?",
    answer: "Patients with pacemakers, open wounds near the knee, or uncontrolled medical conditions should not use the Knee Pro. Providers should screen for contraindications before prescribing. Always follow clinic-directed use. For safety guidelines, refer to the Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Quick%20start%20guide-250916-print.pdf"
  },
  {
    question: "What outcomes are expected with the Knee Pro?",
    answer: "Patients commonly report improved mobility, reduced discomfort, and better day-to-day function over consistent multi-month use. Individual outcomes vary, but long-term adherence is key. For an in-clinic perspective on patient results, see Dr. Perkins\u2019 Knee Pro testimonial: https://youtu.be/mUzxul6TRfc?si=Gtv4vV9wVNWR5IHb"
  },
  {
    question: "What is the Shoulder Pro?",
    answer: "The Shoulder Pro is a clinical-grade shoulder therapy device designed to support joint comfort, mobility, and function in the shoulder using targeted stimulation and long-duration sessions. It is used as part of a clinic-directed program over several months. For setup and strap placement, see the Shoulder Pro Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Shoulder-Quick%20start%20guide-250916-lowres-print.pdf"
  },
  {
    question: "How is the Shoulder Pro used?",
    answer: "Place the Shoulder Pro over the shoulder so the treatment area is fully covered, then secure the straps as shown in the Quick Start Guide. Connect it to the controller and follow your clinic\u2019s instructions for session length and frequency, typically longer-duration sessions similar to other joint protocols. For placement diagrams and setup steps, refer to the Shoulder Pro Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Shoulder-Quick%20start%20guide-250916-lowres-print.pdf"
  },
  {
    question: "Who should not use the Shoulder Pro?",
    answer: "Patients with pacemakers, open wounds near the shoulder, or uncontrolled medical conditions should not use the Shoulder Pro. Providers should screen for contraindications before prescribing and patients should follow clinic-directed use only. For safety information, see the Shoulder Pro Quick Start Guide: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/NerveSpa-Shoulder-Quick%20start%20guide-250916-lowres-print.pdf"
  },
  {
    question: "What outcomes are expected with the Shoulder Pro?",
    answer: "When used consistently as directed, patients commonly report reduced shoulder discomfort, improved range of motion, and better day-to-day shoulder function over time. Individual results vary based on the condition and adherence to the program. Your clinic will guide expectations as part of your overall joint and mobility plan."
  },
  {
    question: "What is the PowerWrap?",
    answer: "The PowerWrap is a high-powered LED + laser wrap designed to deliver red and infrared light therapy around a joint or limb to help support circulation, reduce discomfort, and target nerve and joint pain. It contains both LEDs and lasers in a flexible wrap format and is used as part of a clinic-directed program. For full details, see the PowerWrap User Manual: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/NerveBeam-Power-Wrap_UserManual-250703-lowres.pdf and the product demo: https://youtu.be/lj_1L8FRtwM?si=FK7RkRbKwKhTmnyH"
  },
  {
    question: "How is the PowerWrap used?",
    answer: "Place the PowerWrap around the target area (such as a knee, shoulder, or limb), secure it snugly with the straps, and connect it to the controller. Follow your clinic\u2019s instructions for session length and frequency. For step-by-step setup, placement diagrams, and operating instructions, refer to the PowerWrap User Manual: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/NerveBeam-Power-Wrap_UserManual-250703-lowres.pdf and the product demo video: https://youtu.be/lj_1L8FRtwM?si=FK7RkRbKwKhTmnyH"
  },
  {
    question: "Who should not use the PowerWrap?",
    answer: "Patients with pacemakers or other implanted electronic devices, light-sensitive conditions, or cancerous lesions in the treatment area should not use the PowerWrap. It should not be used over the eyes or in any area where your provider has advised against light-based therapy. Providers must screen patients for contraindications before recommending use. For full safety guidance, consult the PowerWrap User Manual: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/NerveBeam-Power-Wrap_UserManual-250703-lowres.pdf"
  },
  {
    question: "What outcomes are expected with PowerWrap therapy?",
    answer: "When used consistently as part of a clinic-directed program, patients often report reduced pain and stiffness and improved comfort and mobility in the treated area over time. Individual results vary based on the condition and adherence to the protocol. For a clinician\u2019s perspective on patient experience, see the doctor testimonial: https://youtube.com/shorts/QRF_zFGeMUI?si=5RPxEfqIQtJ5lxzx and review the PowerWrap User Manual for best-practice use: https://s3.us-east-2.amazonaws.com/cdn.hmsctl.com/media/nervespa/pdf/usermanual/NerveBeam-Power-Wrap_UserManual-250703-lowres.pdf"
  },
  {
    question: "What are the NerveSpa Performance Diabetic Socks?",
    answer: "The NerveSpa Performance Diabetic Socks are comfort-focused, non-binding socks designed to support circulation, reduce irritation, and provide gentle cushioning for neuropathy-related foot discomfort. They are made with soft, moisture-wicking materials and a seamless toe to help minimize friction and pressure points."
  },
  {
    question: "How do I put on the Diabetic Socks correctly?",
    answer: "Slide the socks on smoothly to avoid bunching, making sure the heel and toe areas are aligned. The socks are designed to be non-binding, so they should fit comfortably without squeezing the calf or ankle. Ensure no wrinkles under the foot to prevent pressure points for sensitive neuropathy patients."
  },
  {
    question: "How should the Diabetic Socks be washed or cared for?",
    answer: "Wash the Diabetic Socks in cold or warm water on a gentle cycle and tumble dry low or air dry. Avoid bleach or high-heat drying, as these can damage fibers and reduce softness. Proper care helps maintain the cushioning and comfort needed for neuropathy support."
  },
  {
    question: "Can the Diabetic Socks be worn all day?",
    answer: "Yes. The socks are designed for extended wear, providing gentle comfort and reduced friction throughout the day. Many neuropathy patients wear them during daily activities, at home, and in shoes. Follow your clinic\u2019s guidance if you have circulation-related medical conditions."
  },
  {
    question: "What is the NerveSpa Neuropathy Program?",
    answer: "The NerveSpa Neuropathy Program is a structured, multi-modal protocol designed to support peripheral nerve health, circulation, and comfort. It combines nerve stimulation, light-based therapies, vibration, targeted topicals, and supplementation to support nerve function when used consistently under provider guidance."
  },
  {
    question: "How does the Neuropathy Program work?",
    answer: "The program uses a layered approach that combines electrical stimulation, light therapy, vibration therapy, topical support, and supplements. These modalities are used together to support circulation, nerve signaling, and tissue health as part of a coordinated protocol directed by a provider."
  },
  {
    question: "What devices are used in the Neuropathy Program?",
    answer: "Depending on the provider\u2019s recommendations, the Neuropathy Program may include the NerveSpa Nerve Bath, conductive garments, Quake Plate vibration therapy, NerveBeam LED Light Therapy Wrap, NerveBeam Cold Laser, and related accessories. Not all patients require every modality."
  },
  {
    question: "Do patients need all the devices in the Neuropathy Program?",
    answer: "No. Providers customize the program based on the patient\u2019s symptoms, tolerance, and goals. Some patients may use a full system, while others may use select devices and supplements as part of their personalized protocol."
  },
  {
    question: "How long does the Neuropathy Program take?",
    answer: "The Neuropathy Program is structured around approximately 60\u201390 total uses of each recommended modality. Sessions are typically about 30 minutes and are used consistently as directed by the provider, followed by a maintenance phase if appropriate."
  },
  {
    question: "Why is consistency important in the Neuropathy Program?",
    answer: "The Neuropathy Program is designed to work through repeated, consistent use. Each session builds on prior sessions, supporting cumulative effects over time. Skipping or inconsistent use may reduce the overall effectiveness of the protocol."
  },
  {
    question: "What happens after the initial Neuropathy Program is completed?",
    answer: "After completing the initial series of uses, many providers transition patients into a maintenance routine. Maintenance protocols vary and may include periodic device use, continued supplementation, and lifestyle guidance based on individual needs."
  },
  {
    question: "Can the Neuropathy Program be adjusted over time?",
    answer: "Yes. Providers may adjust device selection, frequency, or supportive products as symptoms change or improve. The program is designed to be flexible and responsive to patient progress under clinical supervision."
  },
  {
    question: "How do supplements fit into the Neuropathy Program?",
    answer: "Supplements are used to support nerve health, circulation, and metabolic processes that influence nerve function. They are typically taken daily as directed by the provider and are intended to complement device-based therapies, not replace them."
  },
  {
    question: "Can supplements be used alone without devices?",
    answer: "Supplements may be used independently in some cases, but many providers recommend combining them with device-based therapies for a more comprehensive approach. The appropriate combination depends on individual clinical assessment."
  },
  {
    question: "How long is a typical Nerve Bath session?",
    answer: "A standard Nerve Bath session lasts approximately 30 minutes. The device includes an automatic shutoff at the end of the session to support consistent and safe use as directed by the provider."
  },
  {
    question: "Can the Nerve Bath be used with other devices the same day?",
    answer: "Yes. Many providers integrate the Nerve Bath with other modalities such as light therapy, vibration therapy, topicals, or supplements on the same day. The specific combination and order are determined by the provider."
  },
  {
    question: "What should patients feel during a Nerve Bath session?",
    answer: "Patients typically feel a mild to moderate tingling sensation in the feet or hands. The intensity should remain comfortable and is adjustable. Strong discomfort or pain is not expected and should be discussed with the provider."
  },
  {
    question: "How often should the Quake Plate be used?",
    answer: "The Quake Plate is commonly used once per session as part of the Neuropathy Program, often on a daily or near-daily basis. Use contributes toward the overall 60\u201390 uses recommended by the provider."
  },
  {
    question: "How long should a Quake Plate session last?",
    answer: "A typical Quake Plate session ranges from 10 to 20 minutes, depending on provider guidance and patient tolerance. Duration may be adjusted as part of the overall protocol."
  },
  {
    question: "Can Quake Plate be used with other neuropathy devices?",
    answer: "Yes. Providers often combine vibration therapy with nerve stimulation, light therapy, and supplements. The order and combination are individualized based on patient needs and clinic protocols."
  },
  {
    question: "What should patients feel during Quake Plate therapy?",
    answer: "Patients typically experience gentle vibration through the feet or hands. Sensations may include warmth or increased circulation. Discomfort should be avoided and settings adjusted as needed."
  },
  {
    question: "How often should the NerveBeam LED Wrap be used?",
    answer: "The NerveBeam LED Wrap is commonly used consistently as part of the Neuropathy Program, often daily or near-daily. Sessions are typically about 30 minutes and contribute toward the recommended 60\u201390 uses."
  },
  {
    question: "How long is an LED Wrap session?",
    answer: "A typical LED Wrap session lasts approximately 20\u201330 minutes, depending on provider guidance. The wrap is positioned over the target area and used comfortably without excessive heat."
  },
  {
    question: "What should patients feel during LED Wrap therapy?",
    answer: "Most patients feel gentle warmth or little to no sensation during LED Wrap sessions. The treatment should remain comfortable. If the wrap feels excessively hot or irritating, stop use and follow your provider\u2019s guidance."
  },
  {
    question: "How should the LED Wrap be positioned for treatment?",
    answer: "Place the LED Wrap over the target area as directed by your provider and secure it so it lies flat against the body without creasing or excessive pressure. Proper positioning supports even coverage and consistent treatment."
  },
  {
    question: "Who should not use the LED Wrap?",
    answer: "Patients with pacemakers or implanted electronic devices, or those with known light sensitivity, should not use the LED Wrap unless cleared by a provider. Providers should screen for contraindications based on individual medical history."
  },
  {
    question: "How often should the NerveBeam Cold Laser be used?",
    answer: "Providers typically recommend consistent Cold Laser use as part of the Neuropathy Program. Sessions are integrated into the overall protocol and contribute toward the recommended 60\u201390 total uses, based on provider direction."
  },
  {
    question: "How long is a Cold Laser session?",
    answer: "A typical Cold Laser session is guided by the provider and is performed per treatment area. Follow your clinic\u2019s instructions for duration, placement, and total coverage for the session."
  },
  {
    question: "How should the Cold Laser be positioned during treatment?",
    answer: "The Cold Laser applicator is placed directly over the target area as instructed by the provider. Maintain steady placement and avoid shining light into the eyes. Your provider will guide site selection and treatment coverage."
  },
  {
    question: "What should patients feel during Cold Laser therapy?",
    answer: "Cold Laser therapy is typically comfortable and may produce little to no sensation. Some patients notice mild warmth or a subtle soothing feeling in the treated area. Discomfort is not expected\u2014pause and consult your provider if it occurs."
  },
  {
    question: "Who should not use the Cold Laser?",
    answer: "Patients with pacemakers or implanted electronic devices, epilepsy, or cancerous lesions should not use Cold Laser therapy unless cleared by a provider. Providers should screen for contraindications and proper use."
  },
  {
    question: "Can Cold Laser be combined with other neuropathy modalities?",
    answer: "Yes. Many providers combine Cold Laser with nerve stimulation, LED therapy, vibration therapy, supplements, and topicals as part of a coordinated protocol. The exact combination and order should follow provider direction."
  },
  {
    question: "What supplements are commonly used in the Neuropathy Program?",
    answer: "Depending on the provider\u2019s plan, neuropathy supplementation may include Nerve Rebuilder, Nerve Regeneration, and Blood Flow Super Formula. These are typically used daily as directed to complement device-based therapies."
  },
  {
    question: "When should Nerve Rebuilder be taken?",
    answer: "Nerve Rebuilder is typically taken daily as directed by the provider. It is intended to support nerve health and metabolic processes as part of the overall Neuropathy Program, alongside device-based therapies."
  },
  {
    question: "When should Nerve Regeneration be taken?",
    answer: "Nerve Regeneration is generally taken daily according to provider guidance. It is designed to complement other neuropathy modalities by supporting nerve-related cellular processes when used consistently."
  },
  {
    question: "When should Blood Flow Super Formula be taken?",
    answer: "Blood Flow Super Formula is typically taken daily as directed by the provider. It is used to support circulation as part of a comprehensive Neuropathy Program and is often paired with stimulation and light-based therapies."
  },
  {
    question: "How do supplements support the Neuropathy Program?",
    answer: "Supplements are used to support nerve health, circulation, and metabolic pathways that influence nerve function. They are intended to work alongside device-based therapies rather than replace them, under provider direction."
  },
  {
    question: "Can supplements be used alone without devices?",
    answer: "Supplements may be used independently in some cases, but many providers recommend combining them with device-based therapies for a more comprehensive approach. The appropriate combination depends on individual clinical assessment."
  },
  {
    question: "What is the NerveSpa Joint & Mobility Program?",
    answer: "The Joint & Mobility Program is a provider-guided protocol designed to support joint comfort, mobility, and function. It combines targeted stimulation devices, light-based therapies, and joint-focused supplements to address joint-related discomfort under clinical direction."
  },
  {
    question: "How does the Joint & Mobility Program work?",
    answer: "The program integrates targeted joint devices with supportive therapies and supplements. Providers customize usage based on joint location, severity, and patient tolerance, focusing on consistent use over time."
  },
  {
    question: "What devices are used in the Joint & Mobility Program?",
    answer: "Depending on the provider\u2019s plan, the Joint & Mobility Program may include Knee Pro, Shoulder Pro, PowerWrap, and related joint-focused modalities. Not all patients require every device."
  },
  {
    question: "How long does the Joint & Mobility Program take?",
    answer: "The Joint & Mobility Program is designed for consistent, long-term use as directed by the provider. Program length varies depending on joint condition, severity, and response to therapy."
  },
  {
    question: "Can the Joint & Mobility Program be adjusted over time?",
    answer: "Yes. Providers may adjust device selection, session frequency, and supportive products based on patient progress, comfort, and clinical goals."
  },
  {
    question: "How often should patients use the Knee Pro?",
    answer: "The Knee Pro is used according to provider guidance as part of the Joint & Mobility Program. It is designed for consistent, repeated use over time to support joint comfort and mobility, with session frequency determined by the clinic."
  },
  {
    question: "How long is a Knee Pro session?",
    answer: "A typical Knee Pro session is a long-duration treatment, often up to one hour, as directed by the provider. The duration is intended to support sustained joint-focused therapy."
  },
  {
    question: "Can Knee Pro be used with other joint therapies?",
    answer: "Yes. Providers may combine Knee Pro with other joint-focused modalities such as LED therapy, vibration therapy, or joint supplements as part of a coordinated Joint & Mobility Program."
  },
  {
    question: "What should patients feel during Knee Pro therapy?",
    answer: "Patients may feel gentle stimulation, warmth, or compression around the knee. Sensations should remain comfortable. Any discomfort should be reported to the provider for adjustment."
  },
  {
    question: "How often should patients use the Shoulder Pro?",
    answer: "The Shoulder Pro is used as directed by the provider as part of the Joint & Mobility Program. Frequency is customized based on shoulder condition, tolerance, and treatment goals."
  },
  {
    question: "How long is a Shoulder Pro session?",
    answer: "Shoulder Pro sessions are performed according to provider direction and are designed for extended use to support shoulder mobility and comfort. Duration may vary based on clinical guidance."
  },
  {
    question: "Can Shoulder Pro be used with other joint therapies?",
    answer: "Yes. Providers may integrate Shoulder Pro with other joint-focused therapies such as PowerWrap, LED therapy, or supplements as part of a coordinated plan."
  },
  {
    question: "What should patients feel during Shoulder Pro therapy?",
    answer: "Patients may feel gentle stimulation or compression around the shoulder. Sensations should be comfortable and adjustable. Pain or discomfort should be discussed with the provider."
  },
  {
    question: "What joint supplements are commonly used in the Joint & Mobility Program?",
    answer: "Depending on provider guidance, joint supplementation may include Super Flex Joint Formula \u2013 Rebuild + Maintain, OA & RA Relief Cream, and Nerve Target Roll-On. These products are used to support joint comfort and mobility alongside device-based therapies."
  },
  {
    question: "When should Super Flex Joint Formula \u2013 Rebuild + Maintain be used?",
    answer: "Super Flex Joint Formula is typically taken daily as directed by the provider. It is intended to support joint structure and comfort as part of the overall Joint & Mobility Program."
  },
  {
    question: "When should OA & RA Relief Cream be used?",
    answer: "OA & RA Relief Cream is generally applied to the affected joint area as directed by the provider. It is often used alongside device-based therapies to support localized comfort."
  },
  {
    question: "When should Nerve Target Roll-On be used?",
    answer: "Nerve Target Roll-On is applied topically to targeted joint or muscle areas as directed by the provider. It is typically used to complement other joint-focused therapies within the program."
  },
  {
    question: "How do joint supplements fit into the Joint & Mobility Program?",
    answer: "Joint supplements and topicals are used to support comfort, mobility, and recovery while patients follow device-based therapies. Providers determine how supplements are integrated based on individual joint needs."
  },
  {
    question: "Can joint supplements be used alone without devices?",
    answer: "In some cases, joint supplements may be used independently. However, many providers recommend combining them with devices such as Knee Pro or Shoulder Pro for a more comprehensive approach."
  },
  {
    question: "What is the PowerWrap used for in the Clinical Program?",
    answer: "PowerWrap is used in the Clinical Program as a wrap-style light therapy modality (red + infrared) to support targeted comfort and recovery as directed by the provider. It includes adjustable power levels and mode options (Constant, Pulse, Alternating) with preset safety timers."
  },
  {
    question: "How long is a PowerWrap session?",
    answer: "PowerWrap session length depends on the mode: the device uses **preset timers**\u2014**Constant mode is preset to 3 minutes**, and **Pulse mode is preset to 6 minutes** (Alternating switches between the two)."
  },
  {
    question: "How often can I use PowerWrap in a day?",
    answer: "Follow provider guidance. The user manual advises **not exceeding 1\u20132 times per treatment area per day**. It also recommends taking **1 rest day for every 2 days of treatment**."
  },
  {
    question: "What power level should I start with on PowerWrap?",
    answer: "The manual recommends starting on **Low or Medium power** for the first uses and adjusting only as tolerated. Power levels shown on the remote are **Low (8,000 mW)**, **Medium (10,000 mW)**, and **High (12,000 mW)**."
  },
  {
    question: "How do I choose Constant vs Pulse mode on PowerWrap?",
    answer: "Use **MODE** on the remote to switch between **Constant**, **Pulse**, and **Alternating**. The manual notes **Constant mode should not exceed 3 minutes per treatment area**, and **Pulse mode should not exceed 6 minutes per treatment area**."
  },
  {
    question: "What are the key safety rules for PowerWrap use?",
    answer: "Key manual guidance includes: **do not overlap** treatment areas; if moving the wrap, place it on a **new, untreated area**; and **inspect skin** during/after use. The manual also cautions to reduce intensity or stop if sensitivity occurs."
  },
  {
    question: "Can PowerWrap be combined with other therapies?",
    answer: "Yes\u2014providers may coordinate PowerWrap with other modalities as part of an overall plan. Always follow provider direction on sequencing and frequency, and keep PowerWrap use within the manual\u2019s timing/frequency guidance."
  },
  {
    question: "What is NerveWave used for in the Clinical Program?",
    answer: "NerveWave is a clinical electrotherapy device with preset programs and adjustable intensity that should always feel **comfortable to mild (never strong)**. It\u2019s used under provider guidance within structured pathways such as regenerative pain control, neuropathy support, restorative recovery, and vagus nerve therapy."
  },
  {
    question: "How do I start a program on NerveWave?",
    answer: "Quick operation steps: **charge the device for 12 hours before first use (or power via wall adapter)**, plug in lead wires by channel, **hold the Power button to turn on**, press **Program** to access programs, select a program/subprogram, then **increase intensity** using the large dial. Each program is **preset with a timer**, and stimulation ends when the program ends."
  },
  {
    question: "What intensity should NerveWave be set to?",
    answer: "The Quick Start Guide states intensity should **always feel comfortable to mild\u2014never strong**."
  },
  {
    question: "What is the recommended schedule for NerveWave regenerative pain control?",
    answer: "The Quick Start Guide lists **Regenerative Pain Control** usage guidance as **4\u20135x/week over the course of 26 weeks**, including use for degenerative joint conditions (such as OA/RA of the knee, hand, shoulder) and intractable back pain, under provider guidance."
  },
  {
    question: "How is NerveWave typically used for neuropathy?",
    answer: "The Quick Start Guide lists **Neuropathy** usage guidance as **5x/week over 60\u201390 days**. It also notes: for the first **60\u201390 uses**, use the **Primary and Secondary phases**, ideally **two treatments per day** (1 primary + 1 secondary). After the initial uses, it notes a **maintenance phase** schedule such as **2\u20133 times/week for 6 weeks**, and repeating consistency **about 1x/year** (per provider guidance)."
  },
  {
    question: "What is the recommended schedule for NerveWave restorative recovery?",
    answer: "The Quick Start Guide lists **Restorative Recovery** usage guidance as **4\u20135x/week over the course of 13\u201320 weeks**, including use for post-surgical or post-injury pain and muscle rehabilitation (Rehabilitative Relief) and for muscular-derived pain conditions (Muscle Activation), under provider guidance."
  },
  {
    question: "How does NerveWave track usage?",
    answer: "The Quick Start Guide notes the \u201c**track usage**\u201d button shows cumulative use\u2014**number of sessions and total minutes used**. It also notes users can record pain scale results post-treatment (manual entry is possible, and there can be an automated pop-up before each program for starting/ending pain scale if enabled)."
  },
  {
    question: "Can NerveWave be used with accessory tools?",
    answer: "Yes. The Quick Start Guide includes accessory guidance such as a **scraper tool (gua sha scraper)**, **earlobe clips** (for vagus nerve stimulation\u2014both clips on the **same ear**, not one on each ear), **pre-gelled electrodes** (keep pads **1\u20136 inches apart**), **carbon rubber pads**, and **foot pads** (sold separately)."
  },
  {
    question: "What is the recommended schedule for NerveWave vagus nerve therapy?",
    answer: "The Quick Start Guide lists **Vagus Nerve Therapy** usage guidance as **10 minutes, 1\u20132x daily as needed**, and notes that longer durations may be used when guided by the timer and provider direction."
  },
  {
    question: "How long should Vibe be used in a typical session?",
    answer: "The Vibe document states the device has an **automatic 10-minute timer** for a session."
  },
  {
    question: "How is Vibe typically used within a clinical plan?",
    answer: "The Vibe document describes Vibe as a **5\u201310 minute add-on session** that can complement a broader plan, depending on provider direction."
  },
  {
    question: "What should I do if my Nerve Bath device is frozen?",
    answer: "1) Confirm the lock/unlock icon at the top of the screen is set to unlocked. 2) Confirm lead wires are plugged in, carbon rubber pads are connected (one in each water bay), and feet are inserted\u2014intensity won\u2019t engage until the user is engaged. 3) Make sure hands are not wet when touching the touch screen. 4) Use a light tap\u2014don\u2019t press the buttons too hard. 5) Confirm the device was not dropped in water. 6) Shut down the device, charge for 24 hours, and restart."
  },
  {
    question: "What if there is no stimulation or weak stimulation in the Nerve Bath?",
    answer: "1) Confirm lead wires are plugged in, carbon rubber pads are connected (one in each water bay), and feet are inserted\u2014intensity won\u2019t engage until the user is engaged. 2) If neuropathy is late stage, you may have reduced sensation\u2014test by inserting your hands into the bays with the intensity up (don\u2019t over-stimulate your feet by turning it up too high). 3) Add more salt to the water. 4) Replace lead wires if the device is over 6 months old."
  },
  {
    question: "What if the Nerve Bath device does not power on?",
    answer: "1) Charge the device for 24 hours. 2) Hold down the power button on the side of the device for 3\u20135 seconds."
  },
  {
    question: "What if stimulation stops or the program ends short of 30 minutes?",
    answer: "Charge the device for 24 hours."
  },
  {
    question: "What should I do if the LED Wrap lights are flickering or powering down early?",
    answer: "Make sure the cord is firmly connected to the wall and into the power brick."
  },
  {
    question: "Which treatment mode should I use on the LED Wrap?",
    answer: "Use the blue mode (second setting), not the green mode (first setting). Blue mode powers both the red lights and the infrared lights. Green mode powers just the red lights."
  },
  {
    question: "What should I avoid doing with the LED Wrap?",
    answer: "IMPORTANT: Never crease the LED wrap by folding it in half and then putting pressure on it."
  },
  {
    question: "How do I power the Knee Pro on/off and change modes?",
    answer: "Hold the power button down to turn on or off. Tap to change modes. The device will automatically cycle from Mode 1 to Mode 2."
  },
  {
    question: "What if I\u2019m having issues with stimulation on Knee Pro?",
    answer: "Charge the device for 24 hours to make sure the battery is fully charged."
  },
  {
    question: "What should I know before using the Quake Plate?",
    answer: "Do not stand on the Quake Plate."
  },
  {
    question: "What if the Quake Plate makes a loud grinding noise?",
    answer: "A loud grinding noise usually indicates a mechanical issue. Stop using the device and contact support for further assistance."
  },
  {
    question: "What if the Quake Plate remote does not work?",
    answer: "Check that the remote has a working battery and that there are no obstructions between the remote and the device. If issues persist, contact support."
  },
  {
    question: "What battery does the Quake Plate remote use?",
    answer: "The Quake Plate remote uses a standard coin-style battery. Replace the battery if the remote becomes unresponsive."
  },
  {
    question: "What should I do if stimulation feels weak with conductive socks or gloves?",
    answer: "Lightly moisten the conductive garments before use and confirm proper leadwire connection. Weak stimulation is often related to dryness or loose connections."
  },
  {
    question: "How do I clean conductive socks, gloves, or garments?",
    answer: "Hand wash with mild soap and water, then air dry completely before reuse. Do not machine wash or dry."
  },
  {
    question: "How often should conductive garments be replaced?",
    answer: "Replacement frequency depends on use and care. If stimulation becomes inconsistent despite proper moistening and connections, replacement may be needed."
  },
  {
    question: "What should I do if the Cold Laser does not turn on?",
    answer: "Confirm the device is fully charged and that the power button is held down for several seconds. If it still does not power on, contact support."
  },
  {
    question: "What if the Cold Laser shuts off during treatment?",
    answer: "Check battery charge and restart the device. If the issue continues, contact support."
  },
  {
    question: "What should I do if the LED Wrap does not turn on?",
    answer: "Confirm the power brick is plugged into a working outlet and securely connected to the wrap. Try a different outlet if needed."
  },
  {
    question: "What if the LED Wrap lights flicker during use?",
    answer: "Check that the power brick and cable connections are secure at both the outlet and the device. Flickering is commonly caused by a loose connection."
  },
  {
    question: "What should I do if the LED Wrap powers down early?",
    answer: "Confirm the power brick is firmly connected and that the outlet is providing consistent power. If the issue continues, discontinue use and contact support."
  },
  {
    question: "How do I clean the LED Wrap?",
    answer: "Disconnect the wrap from power before cleaning. Wipe the surface gently with a soft, dry or lightly damp cloth. Do not submerge in water."
  },
  {
    question: "What should I do if the PowerWrap does not turn on?",
    answer: "Ensure the device is charged and the power button is pressed firmly. If it still does not turn on, discontinue use and contact support."
  },
  {
    question: "What should I do if my skin feels too sensitive after PowerWrap use?",
    answer: "Stop treatment and allow the skin to return to normal before resuming. Reduce power level or frequency as directed by your provider."
  },
  {
    question: "What if the PowerWrap remote does not respond?",
    answer: "Replace the remote battery and confirm there is a clear line of sight to the device. If the issue persists, contact support."
  },
  {
    question: "What should I do if NerveWave does not power on?",
    answer: "Confirm the device is charged or connected to a wall adapter. Hold the power button to turn on. If it still does not start, contact support."
  },
  {
    question: "What if I feel no sensation during NerveWave use?",
    answer: "Increase intensity gradually until a comfortable, mild sensation is felt. Check electrode placement and leadwire connections."
  },
  {
    question: "What should I do if NerveWave stimulation feels too strong?",
    answer: "Reduce the intensity immediately to a comfortable level. Stimulation should always feel mild and never painful."
  },
  {
    question: "What if the electrodes are not sticking properly?",
    answer: "Replace worn electrodes and ensure the skin is clean and dry before placement. Poor adhesion can reduce stimulation effectiveness."
  },
  {
    question: "How do I place electrodes correctly?",
    answer: "Place electrodes on clean, dry skin with pads spaced approximately 1\u20136 inches apart, following provider guidance and the user guide."
  },
  {
    question: "What should I do if NerveWave shuts off during treatment?",
    answer: "Check the battery level and restart the device. If shutdown continues, discontinue use and contact support."
  },
  {
    question: "What should I do if the Vibe device does not turn on?",
    answer: "Confirm the device is charged or properly powered, then press the power button firmly. If it does not turn on, contact support."
  },
  {
    question: "What if the Vibe stops during a session?",
    answer: "Allow the session to complete its automatic timer. If the device stops unexpectedly, recharge and restart."
  },
  {
    question: "What should patients feel during Vibe use?",
    answer: "A gentle vibration is expected. If discomfort occurs, stop use and consult your provider."
  },
  {
    question: "What should I do if Knee Pro does not power on?",
    answer: "Charge the device fully and hold the power button to turn it on. If it does not respond, contact support."
  },
  {
    question: "What if stimulation feels weak on Knee Pro?",
    answer: "Charge the device fully and confirm proper leadwire and garment placement. Weak stimulation is often related to battery level or placement."
  },
  {
    question: "How do I change Knee Pro modes?",
    answer: "Tap the power button to cycle through available modes. The device will automatically progress through its preset modes."
  },
  {
    question: "What should I do if Shoulder Pro does not power on?",
    answer: "Charge the device fully and press the power button to turn it on. If it does not respond, contact support."
  },
  {
    question: "What if stimulation feels weak on Shoulder Pro?",
    answer: "Confirm the device is fully charged and that the conductive garment is properly fitted and snug. Weak stimulation is commonly related to battery level or garment placement."
  },
  {
    question: "How do I change Shoulder Pro modes?",
    answer: "Press the power button to cycle through the preset modes. The device will automatically advance through its programmed sequence."
  },
  {
    question: "What if I feel little or no sensation during a Nerve Bath session?",
    answer: "Check water level, electrode placement, and connection cables. Sensation may vary and should be guided by provider instructions."
  },
  {
    question: "What should I do if the Nerve Bath unit does not turn on?",
    answer: "Confirm the unit is plugged in securely and the power switch is on. If the unit still does not power on, contact support."
  },
  {
    question: "Is tingling or warmth normal during a Nerve Bath session?",
    answer: "Mild tingling or warmth can be normal. If discomfort occurs, stop the session and consult your provider."
  },
  {
    question: "What if the LED wrap does not turn on?",
    answer: "Ensure the controller is charged and properly connected to the wrap. If it still does not power on, contact support."
  },
  {
    question: "What should I feel during LED wrap therapy?",
    answer: "A gentle warmth is typical. If excessive heat or discomfort occurs, stop use and consult your provider."
  },
  {
    question: "What if the Cold Laser does not activate?",
    answer: "Confirm the device is charged and properly powered. Follow the user guide for correct activation steps."
  },
  {
    question: "What should I feel during Cold Laser therapy?",
    answer: "Cold Laser therapy is typically painless. A mild warming sensation may occur, but no discomfort should be felt."
  },
  {
    question: "What if the Quake Plate feels too intense?",
    answer: "Reduce intensity or shorten session time as directed by your provider. Stop use if discomfort occurs."
  },
  {
    question: "What if the Quake Plate does not start vibrating?",
    answer: "Confirm the unit is plugged in, powered on, and that the control settings are properly selected. If the plate does not activate, contact support."
  },
  {
    question: "Is muscle fatigue normal after using the Quake Plate?",
    answer: "Mild muscle fatigue can occur after use. If soreness persists or discomfort increases, pause use and consult your provider."
  },
  {
    question: "What should I do if the PowerWrap does not power on?",
    answer: "Ensure the controller is fully charged and properly connected to the wrap. Refer to the user guide for setup steps before contacting support."
  },
  {
    question: "What if PowerWrap feels uncomfortable during use?",
    answer: "Stop the session and adjust placement or intensity as directed by your provider. Discomfort should not occur during normal use."
  },
  {
    question: "What if I feel little or no sensation during NerveWave use?",
    answer: "Check electrode placement and connections. Sensation levels may vary and should follow provider guidance."
  },
  {
    question: "What should I feel during a NerveWave session?",
    answer: "A mild pulsing or tingling sensation is typical. If discomfort occurs, stop use and consult your provider."
  },
  {
    question: "What if NerveWave does not turn on?",
    answer: "Confirm the device is charged and that electrodes are properly connected. If the issue continues, contact support."
  },
  {
    question: "When should I contact support for device issues?",
    answer: "If a device does not function as expected after following setup and troubleshooting steps, contact support for assistance."
  },
  {
    question: "What if my device will not charge?",
    answer: "Check that the charging cable and power source are working properly. Allow the device to charge fully before use. If it still does not charge, contact support."
  },
  {
    question: "What if my device turns off during use?",
    answer: "If a device powers off unexpectedly, stop the session and ensure it is adequately charged. Restart only after confirming proper power levels."
  },
  {
    question: "What if stimulation feels too strong or uncomfortable?",
    answer: "Stop the session and reduce intensity or adjust placement according to provider guidance. Therapy should remain comfortable at all times."
  },
  {
    question: "Can I continue treatment if I experience skin irritation?",
    answer: "Stop use if irritation occurs and allow skin to recover. Consult your provider before resuming therapy."
  },
  {
    question: "What if my conductive socks or garments do not work properly?",
    answer: "Ensure garments are slightly moistened and properly connected. Replace worn garments as recommended by your provider."
  },
  {
    question: "How do I clean conductive garments?",
    answer: "Follow care instructions provided with the garments. Proper cleaning helps maintain conductivity and performance."
  },
  {
    question: "Where can I find setup guides and manuals?",
    answer: "Setup guides and user manuals are provided by your clinic or can be accessed through official NerveSpa resources as directed by your provider."
  },
  {
    question: "What if I feel no sensation during a Nerve Bath session?",
    answer: "Ensure the unit is powered on, salts/tablets are added as directed, and hands or feet are fully submerged. Gradually increase intensity to a comfortable level per provider guidance."
  },
  {
    question: "What if the water feels too hot or uncomfortable?",
    answer: "Stop the session and allow the water to cool. Sessions should always be comfortable; adjust water temperature before restarting."
  },
  {
    question: "What if the unit does not power on?",
    answer: "Check the power connection and battery charge. If the unit still does not power on, contact support for assistance."
  },
  {
    question: "What if stimulation feels uneven between hands or feet?",
    answer: "Reposition hands or feet evenly in the water and confirm equal setup on both sides. Adjust intensity gradually as needed."
  },
  {
    question: "What if the PowerWrap does not turn on?",
    answer: "Verify the power connection and ensure the device is properly charged before use. Restart only after confirming power."
  },
  {
    question: "What if the wrap feels too warm?",
    answer: "Stop the session and allow the device to cool. PowerWrap therapy should remain comfortable when used as directed by a provider."
  },
  {
    question: "What if I do not feel stimulation with NerveWave?",
    answer: "Check electrode placement and connections. Increase intensity slowly to a comfortable level per provider guidance."
  },
  {
    question: "What if electrodes lose adhesion during use?",
    answer: "Replace or reapply electrodes as directed. Clean, dry skin helps maintain proper adhesion during sessions."
  },
  {
    question: "What if the NerveWave unit will not power on?",
    answer: "Confirm the device is charged and all connections are secure. If the unit still does not power on, contact support for assistance."
  },
  {
    question: "What if the Vibe device does not start?",
    answer: "Ensure the device is properly connected and powered on. Restart the device following the setup steps provided by your clinic or provider."
  },
  {
    question: "What if vibration feels uncomfortable?",
    answer: "Stop the session and restart at a lower setting if recommended by your provider. Vibration therapy should remain comfortable at all times."
  },
  {
    question: "What if the Knee Pro does not deliver sensation?",
    answer: "Check strap placement and ensure the device is powered on. Increase intensity gradually as directed by your provider."
  },
  {
    question: "What if the Knee Pro strap feels too tight or loose?",
    answer: "Readjust the strap so it is secure but comfortable. Proper fit helps ensure effective therapy."
  },
  {
    question: "What if the Shoulder Pro feels uncomfortable during use?",
    answer: "Stop the session and adjust placement. Shoulder Pro should fit securely without causing pain or discomfort."
  },
  {
    question: "What if the Shoulder Pro does not power on?",
    answer: "Check connections and power status. If the issue persists, contact support for further guidance."
  },
  {
    question: "What if I don\u2019t feel stimulation in the water?",
    answer: "Gradually increase the intensity using the control dial until a mild, comfortable sensation is felt. Ensure the water contains the recommended salts and tablets as directed."
  },
  {
    question: "What if stimulation feels uneven between feet or hands?",
    answer: "Ensure both sides are filled with the same amount of warm water and consumables. Adjust positioning so hands or feet are fully submerged and relaxed."
  },
  {
    question: "What if the unit shuts off during a session?",
    answer: "The NerveSpa Nerve Bath includes an automatic shutoff at the end of the programmed session. If it shuts off early, check battery charge and restart if needed."
  },
  {
    question: "What if the Cold Laser does not emit light?",
    answer: "Check that the device is powered on and properly charged. Ensure the applicator is positioned correctly against the skin."
  },
  {
    question: "What if treatment feels ineffective?",
    answer: "Confirm session duration and placement follow provider guidance. Consistent use over time is important for results."
  },
  {
    question: "What if vibration feels too intense?",
    answer: "Stop the session and restart at a lower setting if recommended by your provider. Vibration should remain comfortable."
  },
  {
    question: "What if the Quake Plate does not power on?",
    answer: "Check the power source and ensure the device is properly connected. Contact support if the issue continues."
  },
  {
    question: "What if conductive socks or gloves feel dry during use?",
    answer: "Lightly moisten the conductive garments with water before starting the session. Proper moisture helps ensure consistent stimulation."
  },
  {
    question: "What if stimulation cuts in and out when using conductive garments?",
    answer: "Check lead wire connections and ensure the garments are evenly moistened. Inconsistent stimulation is often related to connection or moisture issues."
  },
  {
    question: "What if the garment no longer conducts stimulation well?",
    answer: "Over time, conductive garments can wear down. If stimulation remains inconsistent despite proper setup, replacement may be needed."
  },
  {
    question: "What if Knee Pro shuts off during a session?",
    answer: "Charge the device fully before restarting. If shutdown continues, discontinue use and contact support."
  },
  {
    question: "What if the Knee Pro feels uncomfortable around the knee?",
    answer: "Stop the session and adjust strap placement so the device is secure but comfortable."
  },
  {
    question: "What if the Shoulder Pro shifts during use?",
    answer: "Readjust the wrap so it fits snugly and remains in place during the session."
  },
  {
    question: "What if the Shoulder Pro shuts off unexpectedly?",
    answer: "Ensure the device is fully charged before use. If the issue continues, contact support."
  },
  {
    question: "What if the screen does not respond or freezes?",
    answer: "Turn the device off and back on. If the issue persists, discontinue use and contact support."
  },
  {
    question: "What if lead wires appear damaged?",
    answer: "Stop using the device and replace damaged lead wires. Using compromised accessories can affect performance."
  },
  {
    question: "When should I stop treatment and contact my provider?",
    answer: "Stop treatment if pain, discomfort, or unexpected reactions occur. Contact your provider for guidance before resuming use."
  },
  {
    question: "What if a device will not power on?",
    answer: "Ensure the device is fully charged or properly connected to power. If it still does not turn on, discontinue use and contact support."
  },
  {
    question: "What if stimulation feels weaker than expected?",
    answer: "Check connections, electrode or garment moisture, and device settings. Weak stimulation is often related to setup issues."
  },
  {
    question: "What if the device becomes warm during use?",
    answer: "Mild warmth can be normal. If the device becomes excessively hot, stop use and allow it to cool before restarting."
  },
  {
    question: "What if an error message appears on the screen?",
    answer: "Power the device off and restart. If the error persists, contact support for further guidance."
  },
  {
    question: "What if the battery drains faster than expected?",
    answer: "Fully charge the device before each use. If battery performance declines significantly, contact support."
  },
  {
    question: "What if accessories are lost or damaged?",
    answer: "Replacement accessories can be ordered through approved channels. Contact support for assistance."
  },
  {
    question: "Can devices be shared between patients?",
    answer: "Devices are assigned per provider guidance. Sharing policies depend on clinical protocols and hygiene standards."
  },
  {
    question: "How should devices be cleaned after use?",
    answer: "Follow the cleaning instructions provided in the user guide. Use gentle cleaning methods and avoid submerging electronic components."
  },
  {
    question: "When should I contact NerveSpa support?",
    answer: "Contact support if troubleshooting steps do not resolve the issue or if the device does not function as expected."
  },
  {
    question: "What if there is no sensation during a NerveSpa Nerve Bath session?",
    answer: "Check that lead wires are connected properly, salts and tablets are added, and intensity is increased gradually until a mild sensation is felt."
  },
  {
    question: "What if the sensation feels uneven between feet or hands?",
    answer: "Uneven sensation can occur due to skin condition or placement. Adjust position and ensure equal contact with the water."
  },
  {
    question: "What if the water feels too warm or too cool?",
    answer: "Use warm, comfortable water. Avoid hot water, as it may affect comfort and session quality."
  },
  {
    question: "What if the session stops",
    answer: "If the session stops before the full programmed time, first check whether the device automatically completed its preset cycle. Many NerveSpa devices are designed to stop once the selected program has finished.\n\nIf the session stopped unexpectedly:\n\n\u2022 Ensure the device is properly connected and powered on\n\u2022 Check that all cables, pads, or wraps are securely attached\n\u2022 Confirm the battery is adequately charged (if applicable)\n\u2022 Restart the device and begin a new session\n\nIf the device continues to stop unexpectedly after these steps, discontinue use and contact NerveSpa customer support or your provider for assistance."
  },
  {
    question: "What if the session stops before 30 minutes?",
    answer: "The NerveSpa Nerve Bath is designed with an automatic 30-minute shutoff. If the session ends early, check battery charge and connections before restarting."
  },
  {
    question: "What if the device will not power on?",
    answer: "Ensure the unit is fully charged and all cables are securely connected. If the device still does not power on, contact support."
  },
  {
    question: "What if stimulation feels too strong?",
    answer: "Reduce intensity using the control buttons until the sensation is mild and comfortable. Sessions should never be painful."
  },
  {
    question: "What if the wrap shuts off during a session?",
    answer: "The wrap may shut off automatically at the end of a programmed session or if battery power is low. Recharge the unit and restart if needed."
  },
  {
    question: "What if I do not feel anything during treatment?",
    answer: "LED therapy may not produce a strong sensation. Consistent use as directed is important even if minimal sensation is felt."
  },
  {
    question: "What if the Cold Laser does not power on?",
    answer: "Ensure the device is fully charged and the power button is pressed firmly. Confirm the applicator is properly connected before starting a session."
  },
  {
    question: "What if the laser shuts off during treatment?",
    answer: "The Cold Laser may shut off automatically at the end of a timed session or if the battery is low. Recharge the device and restart as directed."
  },
  {
    question: "What if I do not feel any sensation from the laser?",
    answer: "Cold laser therapy may not create a noticeable sensation. Follow provider guidance and use consistently even if little or no sensation is felt."
  },
  {
    question: "What should I do if the device overheats?",
    answer: "If the device feels unusually warm, stop the session and allow it to cool. Ensure proper placement and airflow before resuming use."
  },
  {
    question: "What if the wrap does not stay secured?",
    answer: "Adjust the straps to ensure a snug but comfortable fit around the treatment area. Proper positioning helps deliver consistent therapy."
  },
  {
    question: "What if the LEDs appear dim?",
    answer: "Check battery level and ensure the wrap is fully charged. Dim light may indicate low battery power."
  },
  {
    question: "What if the Knee Pro does not power on?",
    answer: "Confirm the controller is charged and all connections are secure. Press the power button firmly to start the session."
  },
  {
    question: "What if the stimulation feels too strong?",
    answer: "Lower the intensity until the sensation is mild and comfortable. Knee Pro sessions should never be painful."
  },
  {
    question: "What if the stimulation feels too weak?",
    answer: "Increase intensity gradually until a comfortable sensation is felt. Check strap fit and skin"
  },
  {
    question: "How do clinics measure patient engagement with NerveSpa?",
    answer: "Clinics can measure engagement through usage consistency, session completion, and patient participation over time. NerveSpa supports clinics by providing non-diagnostic usage insights that help assess adherence and engagement trends."
  },
  {
    question: "What non-diagnostic indicators can providers monitor when using NerveSpa?",
    answer: "Providers may monitor patient-reported comfort, tolerance, functional ease, and overall experience during use. These indicators are observational and experiential, not diagnostic or treatment outcomes."
  },
  {
    question: "How does NerveSpa support patient-reported comfort or function tracking?",
    answer: "NerveSpa supports clinics by enabling consistent use routines and optional documentation of patient feedback related to comfort and daily function, as determined by the provider\u2019s clinical workflow."
  },
  {
    question: "Can clinics document changes in patient experience over time with NerveSpa?",
    answer: "Yes. Clinics may document patient-reported experiences over time using their own clinical notes or systems. NerveSpa does not diagnose or treat conditions but supports structured, repeatable use."
  },
  {
    question: "Does NerveSpa provide usage or adherence data to clinics?",
    answer: "NerveSpa systems may provide usage-related information such as session duration or frequency, depending on configuration. This information is intended for operational insight, not medical evaluation."
  },
  {
    question: "How can providers discuss progress with patients without making medical claims?",
    answer: "Providers should focus on patient-reported experiences, comfort, and engagement rather than outcomes or diagnoses. Discussions should emphasize support, consistency, and overall wellness experience."
  },
  {
    question: "What types of patient feedback are most commonly reported with NerveSpa use?",
    answer: "Feedback often relates to comfort during sessions, ease of use, relaxation, and overall experience. Individual responses vary, and feedback should be documented at the provider\u2019s discretion."
  },
  {
    question: "How should front-desk staff explain NerveSpa to patients in simple terms?",
    answer: "Staff can explain NerveSpa as a clinic-guided wellness technology designed to support nerve-focused comfort and relaxation as part of a broader care plan."
  },
  {
    question: "What should staff say if a patient asks whether NerveSpa replaces medical treatment?",
    answer: "Staff should clarify that NerveSpa does not replace medical treatment and is intended to support wellness alongside provider-directed care."
  },
  {
    question: "How should staff respond if a patient asks whether NerveSpa is FDA approved?",
    answer: "Staff may state that NerveSpa is produced by an FDA-registered manufacturer and used under provider guidance, without making claims about treatment or cure."
  },
  {
    question: "What should staff say if a patient asks about insurance coverage?",
    answer: "Staff should explain that coverage varies by clinic and payer, and patients should consult the clinic directly for billing or reimbursement information."
  },
  {
    question: "How should staff explain home use versus in-clinic guidance?",
    answer: "Staff can explain that some clinics may recommend guided home use, while others focus on in-clinic protocols, based on provider discretion."
  },
  {
    question: "What is the best way for staff to set expectations before a patient begins using NerveSpa?",
    answer: "Staff should emphasize comfort, gradual familiarization, and provider guidance, while avoiding promises of outcomes."
  },
  {
    question: "How should staff handle common patient misconceptions about NerveSpa?",
    answer: "Staff should correct misconceptions by reinforcing that NerveSpa supports wellness and comfort and is not a diagnostic or treatment device."
  },
  {
    question: "How is NerveSpa different from consumer-grade nerve stimulation devices?",
    answer: "NerveSpa is designed for clinical environments, emphasizing provider-guided use, consistency, and integration into care workflows rather than direct-to-consumer self-treatment."
  },
  {
    question: "What makes NerveSpa a clinic-grade system rather than a retail product?",
    answer: "NerveSpa is distributed through professional channels and intended for use under clinical guidance, with systems and support designed for healthcare settings."
  },
  {
    question: "Why do clinics choose NerveSpa over generic home wellness devices?",
    answer: "Clinics choose NerveSpa for its structured approach, professional support, and alignment with clinical workflows and patient education."
  },
  {
    question: "How does NerveSpa integrate into existing clinical workflows?",
    answer: "NerveSpa is designed to complement existing care plans, allowing clinics to incorporate it into evaluations, education, and ongoing support routines."
  },
  {
    question: "What design principles guide the NerveSpa system?",
    answer: "The system emphasizes consistency, ease of use, patient comfort, and provider oversight, supporting repeatable and reliable wellness routines."
  },
  {
    question: "How does NerveSpa support consistency and repeatability in patient use?",
    answer: "NerveSpa supports repeatable use through standardized protocols and clear guidance established by the clinic."
  },
  {
    question: "When should clinics pause or discontinue use of NerveSpa?",
    answer: "Clinics should pause use if a patient reports discomfort, unexpected reactions, or if clinical judgment indicates reassessment is appropriate."
  },
  {
    question: "What should providers do if a patient reports discomfort during use?",
    answer: "Providers should stop the session, assess the situation, and determine next steps based on professional judgment and clinic protocols."
  },
  {
    question: "When should a clinic contact NerveSpa support versus handling an issue internally?",
    answer: "Clinics should contact NerveSpa support for device-related questions or technical issues, while clinical decisions remain the responsibility of the provider."
  },
  {
    question: "What situations require clinical judgment before continuing NerveSpa use?",
    answer: "Any changes in patient tolerance, reported discomfort, or clinical context should prompt provider review before continuing use."
  },
  {
    question: "Are there any patient scenarios where NerveSpa may not be appropriate?",
    answer: "Appropriateness is determined by the provider based on individual patient circumstances and clinical discretion."
  },
  {
    question: "How does NerveSpa support safe use alongside other clinical modalities?",
    answer: "NerveSpa is designed to complement other modalities, with integration determined by provider judgment and clinic protocols."
  },
  {
    question: "Is NerveSpa available outside the United States?",
    answer: "Availability may vary by region. Clinics outside the U.S. may contact NerveSpa to inquire about current options."
  },
  {
    question: "Are international certifications or markets planned for NerveSpa?",
    answer: "NerveSpa evaluates expansion opportunities based on regulatory requirements, clinical demand, and operational readiness."
  },
  {
    question: "Can clinics outside the U.S. request information or express interest?",
    answer: "Yes. Clinics may contact NerveSpa to request information and discuss potential availability in their region."
  },
  {
    question: "How does NerveSpa evaluate expansion into new regions or care settings?",
    answer: "Expansion is evaluated based on regulatory compliance, clinical alignment, and the ability to support providers effectively."
  },
  {
    question: "Show me a demo",
    answer: "Which product would you like a demo for? Options: Footbath \u2022 Conductive Garments \u2022 LED Wrap \u2022 Power Wrap \u2022 QuakePlate \u2022 Knee Pro \u2022 Shoulder Pro. You can also say \u201call\u201d to see demos/manuals for every device."
  },
  {
    question: "Show me demos for all devices",
    answer: "Footbath \u2014 Demos: https://www.youtube.com/@nervespa \u2022 Manuals: Quick Guide https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing | User Guide https://drive. google.com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing | Conductive Garments \u2014 Demos: https://www.youtube.com/@nervespa \u2022 Manual: https://drive.google. com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing | LED Wrap \u2014 Demos: https://www.youtube.com/@nervespa \u2022 Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp- NNsKbOmC/view?usp=sharing | Power Wrap \u2014 Demos: https://www.youtube.com/@nervespa \u2022 Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing | QuakePlate \u2014 Demos: https://www.youtube.com/@nervespa \u2022 Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing | Knee Pro \u2014 Demos: https://www. youtube.com/@nervespa \u2022 Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing | Shoulder Pro \u2014 Demos: https://www.youtube.com/@nervespa \u2022 Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing"
  },
  {
    question: "Show me a demo for Footbath",
    answer: "YouTube demos: https://www.youtube.com/@nervespa \u2022 Manuals: Quick Guide https://drive.google.com/file/d/1ABWl8aU_hrvUSoRkmb3GoHl-rhbhTXIb/view?usp=sharing | User Guide https://drive.google. com/file/d/1IEghxBOy0alvw3U4V9CDd7D4eulpxcgs/view?usp=sharing"
  },
  {
    question: "Show me a demo for Conductive Garments",
    answer: "YouTube demos: https://www.youtube.com/@nervespa \u2022 Manual: https://drive.google.com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing"
  },
  {
    question: "Show me a demo for LED Wrap",
    answer: "YouTube demos: https://www.youtube.com/@nervespa \u2022 Manual: https://drive.google.com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing"
  },
  {
    question: "Show me a demo for Power Wrap",
    answer: "YouTube demos: https://www.youtube.com/@nervespa \u2022 Manual: https://drive.google.com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing"
  },
  {
    question: "Show me a demo for QuakePlate",
    answer: "YouTube demos: https://www.youtube.com/@nervespa \u2022 Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing"
  },
  {
    question: "Show me a demo for Knee Pro",
    answer: "YouTube demos: https://www.youtube.com/@nervespa \u2022 Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing"
  },
  {
    question: "Show me a demo for Shoulder Pro",
    answer: "YouTube demos: https://www.youtube.com/@nervespa \u2022 Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing"
  },
  {
    question: "Troubleshoot Knee Pro",
    answer: "Charge fully (first use 12+ hrs). Hold power 2s. Check lead connections (red\u2192patella), confirm Mode (green=30 min, blue=2 hrs). Ensure gel electrodes adhere; replace after ~10\u201312 uses. Increase intensity gradually; hydrate skin. Auto shut-off at ~2.5 hrs is normal. Quick Start: https://drive.google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing"
  },
  {
    question: "Troubleshoot Shoulder Pro",
    answer: "Charge fully (first use 12+ hrs). Hold power 2s. Check leads (red\u2192top electrode). Verify Mode (green=30 min, blue=2 hrs). Ensure gel electrodes adhere; replace after ~10\u201312 uses. Adjust intensity to mild, comfortable tingle. Auto shut-off at ~2.5 hrs is normal. Quick Start: https://drive.google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing"
  },
  {
    question: "How do I clean and store Knee Pro?",
    answer: "Wipe wrap with a lightly damp cloth; do not soak. Keep ports dry. Reseal gel electrodes on protective film; replace after ~10\u201312 uses. Store cool/dry; unplug pigtails if desired. Quick Start: https://drive. google.com/file/d/17lhLon5mvNzZxvJvtuPJw-bgQ5BptylB/view?usp=sharing"
  },
  {
    question: "How do I clean and store Shoulder Pro?",
    answer: "Wipe wrap with a lightly damp cloth; do not soak. Keep ports dry. Reseal gel electrodes on protective film; replace after ~10\u201312 uses. Store cool/dry; unplug pigtails if desired. Quick Start: https://drive. google.com/file/d/1QwjkbWJhezrzXTys7ha8bHr52qRlPJcF/view?usp=sharing"
  },
  {
    question: "How long is a QuakePlate session?",
    answer: "Start with 10 minutes and increase up to ~20 minutes as tolerated. Monitor comfort; stop if discomfort occurs. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view? usp=sharing"
  },
  {
    question: "How often should QuakePlate be used?",
    answer: "Use 1\u20132\u00d7 daily or per clinic protocol on non-irritated skin. Do not combine with water/electrotherapy sessions. Manual: https://drive.google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view? usp=sharing"
  },
  {
    question: "How do I clean and maintain the conductive garments?",
    answer: "Hand-wash gloves/socks gently with mild soap; do not wring; air-dry completely before reuse. Spray inside/outside with conductive solution before each session. Store cool/dry. Manual: https://drive.google. com/file/d/18q1b0FWvLZuBscJmdrwuefhv3oEnUSlc/view?usp=sharing"
  },
  {
    question: "How often should the LED Wrap be used?",
    answer: "Use once or twice daily on intact skin as tolerated; stop if irritation occurs. One session is ~20 minutes (auto-shutoff). Follow clinic protocol. Manual: https://drive.google. com/file/d/11FfLZ7E1O8iyxb4SdKSlBHp-NNsKbOmC/view?usp=sharing"
  },
  {
    question: "How often should the Power Wrap be used?",
    answer: "Use once or twice daily on intact skin as tolerated; stop if irritation occurs. One session is ~20 minutes (auto-shutoff). Follow clinic protocol. Manual: https://drive.google. com/file/d/1wWDJ7dD9kanGU925nk0Kp-T7o9faupF5/view?usp=sharing"
  },
  {
    question: "Troubleshoot QuakePlate",
    answer: "Check power is connected to 110V AC, switch is ON, and connections are dry. If remote is unresponsive, replace batteries and re-pair per manual. Stop use with any adverse reaction. Manual: https://drive. google.com/file/d/1BNgb7jAoSEezTWMbTTh5R7rr5xXs1b_n/view?usp=sharing"
  },
  {
    question: "contact info",
    answer: "Providers can reach out for support in the following ways: \u2022 Chatbot \u2013 Use the \u201cContact Support\u201d option directly in the chatbot. \u2022 Email \u2013 support@nervespa.com \u2022 Phone \u2013 1-800-239-7880 (available during business hours) \u2022 Provider Portal \u2013 coming soon"
  },
  {
    question: "phone number",
    answer: "Phone \u2013 1-800-239-7880 (available during business hours)"
  },
  {
    question: "email id",
    answer: "Email \u2013 support@nervespa.com"
  },
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
  clinics: "clinic",
  providers: "clinic",
  provider: "clinic",
  practice: "clinic",
  medical: "clinic",
  offering: "start",
  begin: "start",
  setup: "set",
  starting: "start",
  ordering: "order",
  usa: "us",
  america: "us",
  united: "us",
  states: "us",
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

// Injecting new products dynamically
qaPairs.push(
  ...[
    {
      question: "What is (1pk) Effervescent Tablets?",
      answer:
        "These effervescent tablets are designed to provide support for nerve and neuropathy issues. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/(1pk)-effervescent-tablets-19037?pa=1",
    },
    {
      question: "What is Carbon Rubber Electrodes?",
      answer:
        "Clinical-grade carbon rubber electrodes used for TENS or similar electrotherapy devices. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/carbon-rubber-electrodes-19030?pa=1",
    },
    {
      question: "What is Epsom Salt - 8oz jar?",
      answer:
        "A jar of traditional Epsom salt, often used for foot soaks to help soothe discomfort. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/epsom-salt-8oz-jar-19038?pa=1",
    },
    {
      question: "What is LAVENDER SCENTED EPSOM SALT - 8OZ JAR?",
      answer:
        "Epsom salt infused with a relaxing lavender scent for an enhanced foot bath experience. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/lavender-scented-epsom-salt-8oz-jar-19435?pa=1",
    },
    {
      question: "What is N1-Nerve+ Neuropathy Support?",
      answer:
        "A dedicated supplement designed to provide specialized support for nerve and neuropathy health. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/n1-nerve+-neuropathy-support-19489?pa=1",
    },
    {
      question:
        "What is NERVESPA SILVER CONDUCTIVE GLOVE - HAND GARMENT SYSTEM?",
      answer:
        "A conductive glove system designed to deliver electrotherapy relief to the hands. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-silver-conductive-glove-hand-garment-system-19476?pa=1",
    },
    {
      question:
        "What is NERVESPA SILVER CONDUCTIVE SOCK - FOOT GARMENT SYSTEM?",
      answer:
        "A conductive sock system designed to deliver electrotherapy relief to the feet. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-silver-conductive-sock-foot-garment-system-19487?pa=1",
    },
    {
      question: "What is NERVESPA PRO - 60 DAY SUPPLY PROGRAM?",
      answer:
        "A comprehensive 60-day supply program for the NerveSpa Pro system. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-pro-60-day-supply-program-19459?pa=1",
    },
    {
      question: "What is NERVESPA PRO - 90 DAY SUPPLY PROGRAM?",
      answer:
        "A comprehensive 90-day supply program for the NerveSpa Pro system. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-pro-90-day-supply-program-18936?pa=1",
    },
    {
      question:
        "What is NERVESPA PRO, HAND AND FOOT NEUROPATHY SYSTEM - 90 DAY SUPPLY PROGRAM - DUAL CHANNEL DEVICE?",
      answer:
        "A complete dual-channel system for hand and foot neuropathy treatment, including a 90-day supply. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-pro-hand-and-foot-neuropathy-system-90-day-supply-program-dual-channel-device-19671?pa=1",
    },
    {
      question:
        "What is Nerve & Neuropathy Cream by NerveSpa - Maximum Strength Relief..?",
      answer:
        "A maximum strength topical cream with L-Arginine, B6, and Menthol for pain relief and improved circulation in feet, hands, and legs. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-&-neuropathy-cream-by-nervespa-maximum-strength-relief-for-foot-hands-legs-toes-includes-7grams-of-larginine-vitamin-b6-menthol-aloe-scientifically-developed-to-improve-blood-circulation-and-relieve-pain-2.82oz-19194?pa=1",
    },
    {
      question:
        "What is Nerve & Neuropathy Support Kit (Includes: Blood Flow Drink powder, Neuropathy Capsules, Nerve ODF, Nerve Cream)?",
      answer:
        "A complete kit combining supplements and cream for comprehensive nerve and neuropathy support. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-&-neuropathy-support-kit-(includes:-blood-flow-drink-powder-neuropathy-capsules-nerve-odf-nerve-cream)-19635?pa=1",
    },
    {
      question: "What is Nerve Spa Foot bath Supply Kit?",
      answer:
        "A convenient supply kit for use with the Nerve Spa foot bath system. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-spa-foot-bath-supply-kit-18934?pa=1",
    },
    {
      question: "What is Nerve Spa Performance diabetic Socks?",
      answer:
        "Specialized diabetic socks designed for comfort and performance (available in Small and Large). You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-spa-performance-diabetic-socks-18935?pa=1",
    },
    {
      question: "What is Nerve Spa performance Supplement?",
      answer:
        "A performance-focused dietary supplement to support nerve function. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nerve-spa-performance-supplement-18933?pa=1",
    },
    {
      question:
        "What is NerveSpa Classic, Hand and Foot Pain Relief System - 10 DAY SUPPLY PROGRAM?",
      answer:
        "A 10-day supply program for the NerveSpa Classic hand and foot pain relief system. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/nervespa-classic-hand-and-foot-pain-relief-system-10-day-supply-program-18883?pa=1",
    },
    {
      question:
        "What is Replacement Charger cord for The NerveBeam cold laser?",
      answer:
        "A replacement charging cord for the NerveBeam Cold Laser device. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-charger-cord-for-the-nervebeam-cold-laser-19903?pa=1",
    },
    {
      question: "What is Replacement Charger cord for The Quake Plate?",
      answer:
        "The NerveSpa Quake Plate is a vibration therapy platform designed to help regain mobility and ease pain in the feet and lower extremities. It provides deep tissue massage, helps relieve pain and relax irritated nerves, and supports increased circulation and blood flow when used as directed by your clinic.",
    },
    {
      question:
        "What is Replacement Charger for The NerveBeam LED Light Therapy Wrap?",
      answer:
        "A replacement charger for the NerveBeam LED Light Therapy Wrap device. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-charger-for-the-nervebeam-led-light-therapy-wrap-19887?pa=1",
    },
    {
      question:
        "What is Replacement Charger for the Nerve Spa Nerve Bath System?",
      answer:
        "A replacement charger for the Nerve Spa Nerve Bath System. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-charger-for-the-nerve-spa-nerve-bath-system.-19460?pa=1",
    },
    {
      question: "What is Replacement lead wires for Nerve Spa?",
      answer:
        "Replacement wires for connecting electrodes to the Nerve Spa devices. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/replacement-lead-wires-for-nerve-spa-19562?pa=1",
    },
    {
      question: "What is The 90-Day Neuropathy Program?",
      answer:
        "A complete 90-day program designed to manage and support neuropathy. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-90-day-neuropathy-program-19044?pa=1",
    },
    {
      question:
        "What is The Blood Flow Super formula Drink Powder by Nerve Spa?",
      answer:
        "A drink powder formulated to support and improve healthy blood flow. You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-blood-flow-super-formula-drink-powder-by-nerve-spa-19483?pa=1",
    },
    {
      question: "What is The NerveBeam Cold Laser?",
      answer:
        "A cold laser device intended for therapeutic use in relieving pain (available in White). You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-nervebeam-cold-laser-18986?pa=1",
    },
    {
      question:
        "What is The NerveBeam LED Light Therapy Wrap - Red & Infrared light therapy?",
      answer:
        "An LED light therapy wrap utilizing red and infrared light for therapeutic relief (available in single and pair options). You can find it here: https://nervespa.com/products/nerve-&-neuropathy/the-nervebeam-led-light-therapy-wrap-red-&-infrared-light-therapy-18990?pa=1",
    },
    {
      question: "What is The Quake Plate Vibrational Massage Therapy?",
      answer:
        "The NerveSpa Quake Plate is a vibration therapy platform designed to help regain mobility and ease pain in the feet and lower extremities. It provides deep tissue massage, helps relieve pain and relax irritated nerves, and supports increased circulation and blood flow when used as directed by your clinic.",
    },
    {
      question:
        "What is Joint Heath Support Kit (Includes: Joint Drink Powder, OA Cream)?",
      answer:
        "A kit that combines a joint drink powder and an Osteoarthritis (OA) cream for comprehensive joint support. You can find it here: https://nervespa.com/products/joint-&-mobility/joint-heath-support-kit-(includes:-joint-drink-powder-oa-cream)-19636?pa=1",
    },
    {
      question:
        "What is Nerve Spa Knee Pro - Advanced OA/RA treatment Device - Size: Fits Small to Large?",
      answer:
        "An advanced device for the treatment of Osteoarthritis (OA) and Rheumatoid Arthritis (RA) in the knee (also available in a 90-day supply kit). You can find it here: https://nervespa.com/products/joint-&-mobility/nerve-spa-knee-pro-advanced-oara-treatment-device-size:-fits-small-to-large-19728?pa=1",
    },
    {
      question:
        "What is Nerve Spa Knee Pro - Replacement Pads - 3 x VB35 and 3 x VBKnee?",
      answer:
        "Replacement electrode pads for the Nerve Spa Knee Pro device. You can find it here: https://nervespa.com/products/joint-&-mobility/nerve-spa-knee-pro-replacement-pads-3-x-vb35-and-3-x-vbknee-19647?pa=1",
    },
    {
      question: "What is Nerve Spa Shoulder Pro?",
      answer:
        "A device designed for therapeutic support and treatment for the shoulder joint. You can find it here: https://nervespa.com/products/joint-&-mobility/nerve-spa-shoulder-pro-19760?pa=1",
    },
    {
      question: "What is NerveSpa Knee Pro - 180 day supply kit?",
      answer:
        "A comprehensive 180-day supply kit for the NerveSpa Knee Pro system. You can find it here: https://nervespa.com/products/joint-&-mobility/nervespa-knee-pro-180-day-supply-kit-19729?pa=1",
    },
    {
      question:
        "What is NerveSpa Knee Pro Size Extender Straps (1 pair) _ XL-XXL?",
      answer:
        "Extender straps to help fit the NerveSpa Knee Pro device on larger sizes. You can find it here: https://nervespa.com/products/joint-&-mobility/nervespa-knee-pro-size-extender-straps-(1-pair)-_-xl-xxl-19731?pa=1",
    },
    {
      question: "What is Osteoarthritis and Rheumatoid Arthritis Cream?",
      answer:
        "A topical cream formulated to help relieve discomfort associated with Osteoarthritis and Rheumatoid Arthritis. You can find it here: https://nervespa.com/products/joint-&-mobility/osteoarthritis-and-rheumatoid-arthritis-cream-19378?pa=1",
    },
    {
      question:
        "What is Roll On Pain Relief by Nerve Target - Roll On Muscle Pain Reliever, Back Pain, Arthritis..?",
      answer:
        "A roll-on topical muscle and joint pain reliever containing Arnica, Menthol, and Camphor. You can find it here: https://nervespa.com/products/joint-&-mobility/roll-on-pain-relief-by-nerve-target-roll-on-muscle-pain-reliever-back-pain-arthritis-with-arnica-menthol-&-camphor-19908?pa=1",
    },
    {
      question:
        "What is Super Flex Joint Formula Drink Powder by NerveSpa - Joint Support Supplement..?",
      answer:
        "A powdered drink supplement containing Glucosamine, Chondroitin, and Turmeric to support and restore joint health. You can find it here: https://nervespa.com/products/joint-&-mobility/super-flex-joint-formula-drink-powder-by-nervespa-joint-support-supplement-help-repairrestore-with-glucosamine-chondroitin-turmeric-ginger-msm-boswellia-30-servings-19503?pa=1",
    },
    {
      question:
        "What is ImmunoGut Super Formula: Essential Immunity & Gut Support | Vitamin D, Zinc, Beta Glucan | Detox & Stress Relief | 480g Powder, 60 Servings?",
      answer:
        "A powdered super formula designed for comprehensive immune and gut health, containing Vitamin D, Zinc, and Beta Glucan. You can find it here: https://nervespa.com/products/metabolic-gut-&-immunity/immunogut-super-formula:-essential-immunity-&-gut-support-vitamin-d-zinc-beta-glucan-detox-&-stress-relief-480g-powder-60-servings.-19711?pa=1",
    },
    {
      question: "What is N1 - Gut Support with probiotics?",
      answer:
        "A supplement formulated for gut health and digestive support, fortified with probiotics. You can find it here: https://nervespa.com/products/metabolic-gut-&-immunity/n1-gut-support-with-probiotics-19490?pa=1",
    },
    {
      question: "What is N1 - Skinny Blend?",
      answer:
        "A blend supplement intended to support weight control and metabolic health. You can find it here: https://nervespa.com/products/metabolic-gut-&-immunity/n1-skinny-blend-19488?pa=1",
    },
    {
      question:
        "What is Nerve Spa Vibe | Deep Tissue Vibrational Massager with Attachement Heads..?",
      answer:
        "A powerful, cordless deep tissue vibrational massager with interchangeable heads for relief from sciatica, neuropathy, and muscle pain. You can find it here: https://nervespa.com/products/clinical-devices/nerve-spa-vibe-deep-tissue-vibrational-massager-with-attachement-heads-7500-rpm-vibration-therapy-for-deep-tissue-sciatica-neuropathy, joint-&-muscle-relief-cordless-compact-&-powerful.-19915?pa=1",
    },
    {
      question: "What is Nerve Wave 2.5 Rd Clinical Grade Electrode?",
      answer:
        "Clinical-grade, 2.5-inch round electrodes for use with electrotherapy devices. You can find it here: https://nervespa.com/products/clinical-devices/nerve-wave-2.5-rd-clinical-grade-electrode-19901?pa=1",
    },
    {
      question:
        "What is Nerve Wave by Nerve Spa - Clinical Nerve Spa Multi-Modality Treatment Device?",
      answer:
        "A clinical, multi-modality treatment device for comprehensive nerve spa therapy. You can find it here: https://nervespa.com/products/clinical-devices/nerve-wave-by-nerve-spa-clinical-nerve-spa-multi-modality-treatment-device-19868?pa=1",
    },
    {
      question: "What is The Power Wrap - Ultra-High Powered LED COLD LASER..?",
      answer:
        "An ultra-high-powered LED cold laser wrap using infrared and red light for intense relief therapy. You can find it here: https://nervespa.com/products/clinical-devices/the-power-wrap-ultra-high-powered-led-cold-laser-infrared-and-red-light-relief-12-000mw-650nm-red-light-808nm-infrared-diodes-78-lasers-+-192-leds-19721?pa=1",
    },
  ],
);

// PRE-CALCULATE IDF WEIGHTS
const docCount = qaPairs.length;
const freqMap = {};
qaPairs.forEach((pair) => {
  const tokens = new Set(getTokens(pair.question));
  tokens.forEach((t) => {
    freqMap[t] = (freqMap[t] || 0) + 1;
  });
});

// IDF = log(N / df)
const idfWeights = {};
Object.keys(freqMap).forEach((t) => {
  idfWeights[t] = Math.log(docCount / freqMap[t]) + 1.0;
});

function getSemanticScore(input, target) {
  const tokens1 = getTokens(input);
  const tokens2 = getTokens(target);

  if (tokens1.length === 0 || tokens2.length === 0) return 0;

  let weightedIntersection = 0;
  let totalInputWeight = 0;
  let totalTargetWeight = 0;

  // Calculate total weights for normalization
  tokens1.forEach((t) => (totalInputWeight += idfWeights[t] || 1.0));
  tokens2.forEach((t) => (totalTargetWeight += idfWeights[t] || 1.0));

  const matched2 = new Set();

  for (let i = 0; i < tokens1.length; i++) {
    let bestMatchScore = 0;
    let bestMatchIdx = -1;
    let w1 = tokens1[i];
    let w1Weight = idfWeights[w1] || 1.0;

    for (let j = 0; j < tokens2.length; j++) {
      if (matched2.has(j)) continue;

      let w2 = tokens2[j];

      if (w1 === w2) {
        bestMatchScore = 1;
        bestMatchIdx = j;
        break;
      } else if (w1.length >= 4 && w2.length >= 4) {
        let dist = levenshteinDistance(w1, w2);
        let maxLen = Math.max(w1.length, w2.length);
        let similarity = 1 - dist / maxLen;

        if (similarity >= 0.75) {
          bestMatchScore = Math.max(bestMatchScore, similarity);
          bestMatchIdx = j;
        } else if (w1.includes(w2) || w2.includes(w1)) {
          bestMatchScore = Math.max(bestMatchScore, 0.6);
          bestMatchIdx = j;
        }
      }
    }

    if (bestMatchIdx !== -1) {
      weightedIntersection += bestMatchScore * w1Weight;
      matched2.add(bestMatchIdx);
    }
  }

  let inputCoverage = weightedIntersection / totalInputWeight;
  let targetCoverage = weightedIntersection / totalTargetWeight;

  let finalScore = inputCoverage * 0.7 + targetCoverage * 0.3;

  // Penalize weak matches on generic queries
  if (tokens1.length >= 4 && weightedIntersection < 2.5) {
    finalScore *= 0.5;
  }

  return finalScore;
}

// Normalize the incoming question once
const cleanIncoming = normalize(incomingQuestion);
const thresholdLev = Math.max(3, Math.floor(cleanIncoming.length * 0.15));

let bestMatch = null;
let bestScore = -1;

// Loop through Q&A and find the closest match
for (let i = 0; i < qaPairs.length; i++) {
  const pair = qaPairs[i];
  if (!pair || !pair.question) {
    console.log(
      "UNDEFINED PAIR AT INDEX:",
      i,
      qaPairs[i - 1],
      qaPairs[i],
      qaPairs[i + 1],
    );
    continue;
  }
  const qNorm = normalize(pair.question);

  const dist = levenshteinDistance(cleanIncoming, qNorm);
  const semanticScore = getSemanticScore(incomingQuestion, pair.question);

  // Calculate a combined heuristic score for sorting:
  // We want to pick the absolute best match if multiple exceed the thresholds
  const matchScore = (dist <= thresholdLev ? 1.0 : 0) + semanticScore;

  if (
    (dist <= thresholdLev || semanticScore >= 0.6) &&
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
