import React, { useState, useEffect } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import HelpBanner from '../../components/common/helpBanner';
import { Check, Building2, ConciergeBell, FileText, AlertCircle } from 'lucide-react';
import SubmitInquiryModal from '../../components/inquiry/submitInquiryModal';

// --- DATA DICTIONARY (Transcribed from Handbook Screenshots) ---
const servicesData = {
  'Office of the University Registrar': [
    {
      id: 'grad-clearance',
      title: "Graduation and Clearance Application",
      desc: "Complete your final steps before leaving the university.",
      requirements: [
        "Signed Application for Graduation",
        "College Clearance Forms",
        "1 pc. ID Picture: 1.5” x 1.5” with name tag, white background, corporate attire",
        "PSA Birth Certificate",
        "Alumni Fee Receipt worth PHP 100",
        "PHP 250 (If RA 11261 requirements cannot be provided)",
        "PHP 550 (For paying students)"
      ],
      steps: [
        { title: "Generate Form", desc: "Log in to your ERS account to generate and print your Application for Graduation form.", action: "Login to ERS Portal" },
        { title: "College Clearance", desc: "Obtain the College Clearance Form (this will be forwarded by your Department Head)." },
        { title: "Secure Signatures", desc: "Fill out both forms and have them signed by your current professors and other required signatories." },
        { title: "Submission", desc: "Submit the completed forms along with your Official Receipt to your College Evaluator." },
        { title: "Evaluation Checklist", desc: "The evaluator will issue a signed Evaluation Checklist remarking you as a 'Candidate for Graduation' for the 2nd Semester." },
        { title: "Record Keeping", desc: "Photocopy the forms (2 copies) for your own records and for your Department Head." }
      ]
    },
    {
      id: 'latin-honors',
      title: "Latin Honors Application",
      desc: "Apply for academic distinction upon graduation.",
      steps: [
        { title: "Secure Form", desc: "Obtain the Latin Honors Application form at Window 6." },
        { title: "Submit Rating Slips", desc: "Submit a printed copy of your rating slips (from 1st Year, 1st Semester to the present) OR a Checklist signed by your evaluator." },
        { title: "Graduation Form", desc: "Present a copy of your Application for Graduation form (must be signed by the evaluator)." },
        { title: "GWA Verification", desc: "Ensure your General Weighted Average (GWA) falls within the specific brackets:", subItems: [
          "Summa Cum Laude: 1.00 – 1.20",
          "Magna Cum Laude: 1.21 – 1.45",
          "Cum Laude: 1.46 – 1.75"
        ]}
      ]
    },
    {
      id: 'add-drop',
      title: "How to Add/Drop Subjects",
      desc: "Official procedure for modifying your enrolled subjects.",
      steps: [
        { title: "Timing & Schedule", desc: "Commonly done during the first two weeks of the semester." },
        { title: "Secure Form", desc: "Go to the Registrar’s Office to get the Adding/Changing/Dropping Form." },
        { title: "Department Validation", desc: "Present the form to your department head to ensure the changes align with your curriculum and credit limits." },
        { title: "Secure Signatures", desc: "Have the form signed by your Department Head or the Dean of your college." },
        { title: "Final Submission", desc: "Submit the form to the Registrar’s Office to officially update your enrollment record in the system." }
      ]
    },
    {
      id: 'transfer-internal',
      title: "Transfer Procedures (Internal)",
      desc: "For students transferring between courses or departments within the university.",
      steps: [
        { title: "Letter of Intent", desc: "Submit a letter to your current department head and dean expressing your intent to transfer." },
        { title: "Clearance", desc: "Process your university clearance." },
        { title: "Endorsement", desc: "Secure an endorsement from the Admissions Office of the receiving university/college." },
        { title: "Final Submission", desc: "Submit the endorsement and your latest rating slip to the registrar of the new university/college." }
      ]
    },
    {
      id: 'transfer-external',
      title: "Transfer Procedures (External)",
      desc: "For students transferring in from a different institution.",
      steps: [
        { title: "Grade Verification", desc: "Ensure you have no failing grades and meet the GWA requirement for your desired course." },
        { title: "Secure Documents", desc: "Obtain an Honorable Dismissal and Transcript of Records from your previous school." },
        { title: "Examination", desc: "Take the TUPSTAT (Required for most transferees)." }
      ]
    },
    {
      id: 'lost-rating-slip',
      title: "Replace a Lost Rating Slip",
      desc: "Process to retrieve official grade slips.",
      steps: [
        { title: "Affidavit of Loss", desc: "Go to the Public Assistance or Legal Office at Manila City Hall. Inform the staff that you need an Affidavit of Loss specifically for a TUP rating slip." },
        { title: "Assessment", desc: "Proceed to Window 1; they will give you a slip indicating the total amount you need to pay." },
        { title: "Payment", desc: "Ensure you receive an official receipt from the cashier." },
        { title: "Submission", desc: "Go to the Office of the Registrar. Present your notarized affidavit of loss, official receipt, and your ID to Window 1." }
      ]
    },
    {
      id: 'suspensions',
      title: "Process for Suspensions",
      desc: "Disciplinary timeline and reinstatement protocols.",
      steps: [
        { title: "Formal Notice", desc: "You will receive a formal notice detailing the alleged violation of the Student Handbook." },
        { title: "Tribunal Hearing", desc: "You will be called to the OSA to present your side of the case before the Tribunal." },
        { title: "Verdict Issuance", desc: "If found guilty of a minor or major offense, a notice of suspension will be issued, stating the specific start and end dates." },
        { title: "During Suspension", desc: "Enforcement protocols while suspended:", subItems: [
          "Your ID is usually surrendered to the OSA.",
          "You cannot enter the campus.",
          "You are marked as 'Excused' or 'Unexcused' for missed classes and exams, depending on the offense."
        ]},
        { title: "Reinstatement", desc: "Steps to return after serving the suspension:", subItems: [
          "Go to the OSA to secure a readmission slip.",
          "Present this slip to the registrar to reactivate your record.",
          "Show the slip to your instructors to be allowed back into your classes."
        ]}
      ]
    },
    {
      id: 'dismissals',
      title: "Process for Dismissals",
      desc: "Appeals and final clearance procedures for academic dismissal.",
      steps: [
        { title: "Letter of Reconsideration", desc: "Draft a letter of reconsideration addressed to the dean." },
        { title: "State Justification", desc: "State the reasons for the academic struggle clearly." },
        { title: "Meeting", desc: "Meet with the department head or dean to discuss your appeal." },
        { title: "If Appeal is Granted", desc: "You will be allowed to enroll in a limited number of units for the next semester." },
        { title: "If Appeal is Denied", desc: "You must complete exit procedures:", subItems: [
          "Complete the University Clearance process.",
          "Request an honorable dismissal and your transcript of records from the registrar to transfer to another university."
        ]}
      ]
    }
  ],
  'Medical and Dental Clinic': [
    {
      id: 'medical-assistance',
      title: "How to Avail of Medical Assistance",
      desc: "Standard procedure for medical check-ups and consultations.",
      steps: [
        { title: "Visit Clinic", desc: "Go to the clinic on the ground floor of the main building during operating hours (no transactions on Fridays)." },
        { title: "ID Verification", desc: "Hand over your TUP ID to the nurse." },
        { title: "Logbook Entry", desc: "Record your name, student number, course, and your current health symptoms or complaints in the patient logbook." },
        { title: "Vitals Check", desc: "Let the nurse check and record your temperature, blood pressure, and pulse rate." },
        { title: "Doctor's Consultation", desc: "Step into the consultation room to be evaluated by the duty university doctor." }
      ]
    },
    {
      id: 'request-medicine',
      title: "Process for Requesting Medicine",
      desc: "How to obtain prescribed or over-the-counter medication.",
      steps: [
        { title: "Log Details", desc: "Write your details in the logbook to track the university's inventory." },
        { title: "In-Stock Medicine", desc: "If available in the clinic's stock, the nurse will give basic over-the-counter medicines free of charge." },
        { title: "Out-of-Stock/Prescriptions", desc: "If the required maintenance drugs or antibiotics are out of stock, the doctor will hand you an official prescription to purchase at an outside pharmacy." }
      ]
    },
    {
      id: 'dental-consultation',
      title: "Dental Consultation Request",
      desc: "Procedures for dental check-ups, cleaning, and extraction.",
      steps: [
        { title: "Visit Dental Office", desc: "Proceed directly to the dental office and present your TUP ID." },
        { title: "Record Management", desc: "Record handling based on patient status:", subItems: [
          "New patients must fill out a permanent dental health history sheet.",
          "Returning patients must request their existing folder."
        ]},
        { title: "Consultation", desc: "Sit with the university dentist for a dental check-up, oral evaluation, or consultation." },
        { title: "Procedure Scheduling", desc: "If eligible, you can directly schedule or immediately undergo your one free tooth extraction or standard dental cleaning allowed per sem." }
      ]
    }
  ],
  'University Information Technology Center': [
    {
      id: 'uitc-account',
      title: "Resolving TUP Account and Email Concerns",
      desc: "Steps to recover or fix issues with your official university portal and email.",
      steps: [
        { title: "Use Backup Email", desc: "Open your personal backup email." },
        { title: "Compose Message", desc: "Create a new message addressed to uitc@tup.edu.ph." },
        { title: "Subject Line", desc: "Use the exact subject line: ACCOUNT (specify) REQUEST - [YOUR STUDENT NUMBER]." },
        { title: "Email Body", desc: "Inside the email body, you must include your Full Name, Course, Year, and Section." },
        { title: "Attachments", desc: "Attach a clear screenshot of your portal error screen along with a digital scan of your TUP ID or registration slip." },
        { title: "Submission", desc: "Click 'send' and wait 1 to 3 working days for manual database restoration." }
      ]
    }
  ],
  'University Library': [
    {
      id: 'lib-borrow',
      title: "Borrowing Books and Resources",
      desc: "Standard procedure for borrowing physical books from the library.",
      steps: [
        { title: "Online Search", desc: "Search for the textbook title, topic, or call number online using the official TUP Manila Koha OPAC Catalog Platform." },
        { title: "Locate Volume", desc: "Locate the volume on the shelves according to its floor assignment." },
        { title: "Present to Desk", desc: "Bring the book to the Desk and hand over your validated TUP ID." },
        { title: "Transaction Checkout", desc: "The duty librarian will scan the book's bar code and associate the transaction directly with your student database file." }
      ]
    },
    {
      id: 'lib-special',
      title: "Accessing Special Collections",
      desc: "How to access special collections for academic study (Onsite and Online).",
      steps: [
        { title: "Onsite: Proceed to 3rd Floor", desc: "Proceed to the Third Floor of the library with your validated TUP ID." },
        { title: "Onsite: Material Request", desc: "Fill out a material request slip at the service counter and surrender your ID to the duty librarian." },
        { title: "Onsite: Reading Area", desc: "Use the non-circulating manuscripts strictly within the designated third-floor reading areas, then return the materials to retrieve your ID." },
        { title: "Online: Web Portal", desc: "Visit the TUP University Library Web Portal, select an e-resource, and log in via OpenAthens using your TUP email.", action: "Access Library Portal" }
      ]
    }
  ],
  'Office of Student Affairs (OSA)': [
    {
      id: 'osa-counseling',
      title: "Counseling Request Process",
      desc: "Procedure for requesting guidance and counseling sessions.",
      steps: [
        { title: "Visit Office", desc: "Proceed directly to the Office of Student Affairs to inquire about available counseling schedules." },
        { title: "Fill Out Request", desc: "Complete the official counseling request form or logbook provided by the OSA staff." }
      ]
    },
    {
      id: 'osa-loa',
      title: "Leave of Absence (LOA) Application",
      desc: "Official procedure for applying for a Leave of Absence.",
      steps: [
        { title: "Formal Letter", desc: "Write a formal letter addressed to the University Registrar stating the reason for the leave and the duration." },
        { title: "Endorsements", desc: "Have the letter signed and endorsed by your guardian and your department head." },
        { title: "College Approval", desc: "Present the endorsed letter to the Office of the Dean for final college-level approval." },
        { title: "Clearance", desc: "Secure and accomplish a university clearance." },
        { title: "Submission", desc: "Submit the approved letter and accomplished clearance to the Office of the University Registrar." },
        { title: "Deadline check", desc: "Ensure the application is filed before the midterm examinations of the current semester." }
      ]
    },
    {
      id: 'osa-artisan',
      title: "Student Publication (ARTISAN) Application",
      desc: "Steps to apply for the official student publication staff.",
      steps: [
        { title: "Application Form", desc: "Fill out the application form via the link provided on the Facebook page." },
        { title: "Upload Documents", desc: "Upload your Certificate of Registration (COR) and a valid Student ID." },
        { title: "Choose a Desk", desc: "Choose a specific desk (news, literary, features, graphics, photojournalism, etc.)." },
        { title: "Submit Portfolio", desc: "Submit your previous works or samples relevant to your chosen section." },
        { title: "Review Period", desc: "Wait for the editorial board to review your portfolio and application requirements." },
        { title: "Technical Exam", desc: "Attend the scheduled technical exam." },
        { title: "Interview", desc: "Undergo an interview with the editorial board to discuss commitment and journalistic stance." },
        { title: "Results", desc: "Wait for the list of successful applicants to be posted." },
        { title: "Internship", desc: "Complete the required internship or training phase." }
      ]
    },
    {
      id: 'osa-assistance',
      title: "Student Assistance Program Application",
      desc: "Procedure to apply for the student assistantship program.",
      steps: [
        { title: "Prepare Documents", desc: "Prepare two (2) sets of the Application Form (with 1x1 photo), Plotted Schedule, and Certificate of Registration (COR) on A4 paper." },
        { title: "Recommendation Letter", desc: "Secure a recommendation letter from the specific office where you intend to work." },
        { title: "Initial Review", desc: "Present your compiled documents to the OSA for initial review." },
        { title: "Secure Signature", desc: "Request the signature of the Office Head or authorized personnel on your plotted schedule." },
        { title: "Final Submission", desc: "Proceed to the OSA once your schedule is officially signed." },
        { title: "Await Instructions", desc: "Wait for further instructions from the OSA or your host office regarding duty start dates." }
      ]
    },
    {
      id: 'osa-accreditation',
      title: "Clubs and Organizations Accreditation",
      desc: "Official process for accrediting student clubs and organizations.",
      steps: [
        { title: "Compile Documents", desc: "Compile the following mandatory documents:", subItems: [
            "Letter of Request for Accreditation",
            "Letter of Acceptance of Adviser",
            "List of Members (including their signatures)",
            "Proposed Plan for the current school year",
            "Constitution and By-Laws (CBL)",
            "List of Officers",
            "Secure and include your Clearance Form from the previous school year (for existing organizations)"
        ]},
        { title: "Online Verification", desc: "Ensure all files are uploaded correctly through the official LSO Google Forms for evaluation." },
        { title: "Confirmation", desc: "Wait for an official confirmation or notice of accreditation from the League of Student Organizations." }
      ]
    },
    {
      id: 'osa-misconduct',
      title: "Filing a Misconduct Complaint",
      desc: "Procedure for reporting a violation by a student or staff member.",
      steps: [
        { title: "Detailed Account", desc: "Write a detailed account of the misconduct, including the date, time, location, and specific names of the individuals involved." },
        { title: "Collect Evidence", desc: "Collect screenshots, photos, recordings, or witness statements that support your claim." },
        { title: "Identify Violation", desc: "Refer to the TUP Student Handbook (Rules on Conduct and Discipline) to identify which specific rule was violated." },
        { title: "Contact Representative", desc: "Message the official Facebook page of your College Student Council or the University Student Government and ask to be put in touch with the senator for students' rights and welfare." },
        { title: "Consultation", desc: "Meet with the senator (virtually or in person) to discuss the merits of your case." },
        { title: "Refine Letter", desc: "The senator will help you refine your formal letter to ensure it follows the university's standard terminology and protocols." },
        { title: "Submission", desc: "Submit your letter and evidence to the OSA." },
        { title: "Review", desc: "The OSA or the Student Disciplinary Tribunal (SDT) will review the complaint to determine if there is enough evidence for a formal investigation." },
        { title: "Mediation (Minor Offense)", desc: "For minor offenses, the OSA may call for a mediation meeting to settle the issue amicably." },
        { title: "Hearing (Major Offense)", desc: "For major misconduct, the SDT will convene a hearing." }
      ]
    }
  ]
};

const StudentServices = () => {
  const [activeOffice, setActiveOffice] = useState('Office of the University Registrar');
  const [activeServiceId, setActiveServiceId] = useState('grad-clearance');
  const [currentStep, setCurrentStep] = useState(1);

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Get available services for current office
  const availableServices = servicesData[activeOffice] || [];
  
  // Get active service details
  const activeService = availableServices.find(s => s.id === activeServiceId) || availableServices[0];

  // Reset timeline progress when switching services
  useEffect(() => {
    setCurrentStep(1);
  }, [activeServiceId, activeOffice]);

  const handleOfficeSwitch = (office) => {
    setActiveOffice(office);
    const firstService = servicesData[office]?.[0];
    if (firstService) {
      setActiveServiceId(firstService.id);
    } else {
      setActiveServiceId(null);
    }
  };

  const handleStepClick = (index) => {
    if (index === currentStep) {
      setCurrentStep(prev => prev + 1);
    } else if (index === currentStep - 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <>
    <StudentLayout activePage="services">
      <div className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-10">
        
        {/* BEGIN: Available Offices Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-50 text-handy-dark-red p-3 rounded-xl shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Available Offices</h2>
              <p className="text-[13px] font-medium text-slate-500 mt-0.5">Select an office to view its standard operating procedures.</p>
            </div>
          </div>
          
          {/* Centered Button Container */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 justify-center border-t border-slate-50 pt-6">
             {Object.keys(servicesData).map(office => {
                const hasServices = servicesData[office].length > 0;
                return (
                  <button
                    key={office}
                    onClick={() => hasServices && handleOfficeSwitch(office)}
                    className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${
                      activeOffice === office 
                      ? 'bg-handy-dark-red text-white shadow-md' 
                      : hasServices 
                        ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100' 
                        : 'text-slate-300 cursor-not-allowed border border-slate-100'
                    }`}
                    disabled={!hasServices}
                  >
                    {office}
                  </button>
                )
             })}
          </div>
        </section>
        {/* END: Available Offices Section */}

        {/* BEGIN: Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start mb-8">
          
          {/* BEGIN: Dynamic Process Card (Left & Middle Columns) */}
          <article className="col-span-1 xl:col-span-2 bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex flex-col">
            
            {activeService ? (
              <>
                {/* Header Block */}
                <div className="bg-handy-dark-red p-8 sm:p-10 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">{activeService.title}</h3>
                    <p className="text-[13px] font-medium text-white/90">{activeService.desc}</p>
                    <p className="text-[11px] font-bold text-red-200 mt-4 uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full w-fit mx-auto border border-white/10">Interactive Timeline</p>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
                </div>

                {/* Optional Requirements Block */}
                {activeService.requirements && (
                  <div className="bg-slate-50 border-b border-slate-100 p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText size={18} className="text-handy-dark-red" />
                      <h4 className="text-[14px] font-extrabold text-slate-900 tracking-tight uppercase">Required Documents & Fees</h4>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.requirements.map((req, idx) => (
                        <li key={idx} className="flex gap-3 text-[12px] text-slate-700 font-medium leading-snug items-start bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Timeline Body */}
                <div className="p-8 sm:p-10 relative flex-1 bg-white">
                  {/* Continuous Vertical Line */}
                  <div className="absolute left-8 sm:left-10 top-14 bottom-14 w-0.5 bg-slate-200 -z-10 ml-[15px] hidden sm:block"></div>
                  
                  <div className="space-y-8 relative z-0">
                    {activeService.steps.map((step, index) => {
                      const isCompleted = index < currentStep;
                      const isCurrent = index === currentStep;
                      const isLocked = index > currentStep;
                      
                      // Determine if this specific item is interactable
                      const isClickable = isCurrent || index === currentStep - 1;

                      return (
                        <div 
                          key={index} 
                          onClick={() => handleStepClick(index)}
                          className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 relative group ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                        >
                          {/* Status Circle */}
                          <div className="flex-shrink-0 relative">
                            <div 
                              className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300 font-bold text-sm
                                ${isCompleted ? 'bg-handy-dark-red text-white shadow-sm group-hover:bg-red-900' 
                                : isCurrent ? 'bg-handy-dark-red text-white ring-4 ring-red-50 shadow-md' 
                                : 'bg-slate-200 text-slate-500'}`}
                            >
                              {isCompleted ? <Check size={16} strokeWidth={3} /> : index + 1}
                            </div>
                          </div>
                          
                          {/* Content Box */}
                          <div className={`flex-1 pt-0.5 pb-6 border-b border-slate-50 last:border-0 ${isLocked ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
                            <h4 className={`text-base font-extrabold mb-1.5 tracking-tight transition-colors duration-300 ${
                              isCompleted ? 'text-slate-900' : 
                              isCurrent ? 'text-handy-dark-red' : 
                              'text-slate-400'
                            }`}>
                              {step.title}
                            </h4>
                            
                            <p className="text-[13px] leading-relaxed text-slate-600 font-medium">
                              {step.desc}
                            </p>

                            {/* Sub Items (if any) */}
                            {step.subItems && (
                              <ul className="mt-3 space-y-2">
                                {step.subItems.map((sub, sIdx) => (
                                  <li key={sIdx} className="flex gap-2 text-[12px] text-slate-500 leading-snug">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                    {sub}
                                  </li>
                                ))}
                              </ul>
                            )}
                            
                            {/* Action Button */}
                            {step.action && !isLocked && (
                              <button className={`mt-4 px-5 py-2 text-[11px] font-bold rounded-lg transition-colors shadow-sm ${
                                isCompleted ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-handy-dark-red text-white hover:bg-red-900'
                              }`}>
                                {step.action}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-20 text-center text-slate-500">
                <AlertCircle size={32} className="mb-4 text-slate-300" />
                <p className="font-bold text-slate-700">No procedures available.</p>
                <p className="text-[13px]">Select a different office to view its services.</p>
              </div>
            )}
          </article>
          {/* END: Dynamic Process Card */}

          {/* BEGIN: Available Services List (Right Column) */}
          <aside className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col sticky top-6">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-red-50 text-handy-dark-red p-3 rounded-xl shrink-0 h-fit">
                <ConciergeBell size={24} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">Office Services</h2>
                <p className="text-[12px] font-medium text-slate-500">Procedures for {activeOffice}</p>
              </div>
            </div>

            <div className="space-y-2">
              {availableServices.length > 0 ? (
                availableServices.map(service => (
                  <div 
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`p-4 rounded-xl font-bold text-[12.5px] cursor-pointer transition-all border ${
                      activeServiceId === service.id 
                      ? 'bg-handy-dark-red text-white border-handy-dark-red shadow-md' 
                      : 'text-slate-600 bg-slate-50 border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    {service.title}
                  </div>
                ))
              ) : (
                <div className="text-center p-4 text-[12px] text-slate-400 bg-slate-50 rounded-xl border border-slate-100">
                  No services documented for this office yet.
                </div>
              )}
            </div>
          </aside>
          {/* END: Available Services List */}
          
        </div>

        {/* HELP BANNER */}
        <HelpBanner onOpenInquiry={() => setIsInquiryModalOpen(true)} />
        
      </div>
    </StudentLayout>
      {/* The Reusable Modal! */}
          <SubmitInquiryModal 
            isOpen={isInquiryModalOpen}
            onClose={() => setIsInquiryModalOpen(false)}
            source="Student Services"
      />
    </>
  );
};

export default StudentServices;