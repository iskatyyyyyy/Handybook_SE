/**
 * HANDYBOOK OFFICIAL INSTITUTIONAL DATA
 * Source: TUP 2013 Revised Student Handbook
 * * NOTE: This file is a standard .js file. Do not include JSX <tags> here.
 * Icons are mapped in the component using the iconName string.
 */

// 1. GENERAL INFORMATION TOPICS (The 10-Widget Grid Data) [cite: 550]
export const GeneralInfoTopics = [
  { 
    id: 1, 
    title: "University History", 
    desc: "TUP’s evolution from 1901 to the present", 
    iconName: "History",
    content: {
      title: "Historical Eras & Evolution",
      eras: [
        { era: "1901-1910", name: "Manila Trade School (MTS)", milestone: "Established via Act No. 74; offered primary-level industrial and English courses." },
        { era: "1910-1959", name: "Philippine School of Arts and Trades (PSAT)", milestone: "Relocated to the current Ermita campus (1916); transitioned into secondary and junior college levels; launched first 4-year BSIE in 1951." },
        { era: "1959-1978", name: "Philippine College of Arts and Trades (PCAT)", milestone: "Converted via RA No. 2237; mandated to offer baccalaureate and graduate degrees; pioneered 'tatak PCAT'." },
        { era: "1978-Present", name: "Technological University of the Philippines (TUP)", milestone: "Converted via PD No. 1518; established as the apex of the National Polytechnic System." }
      ],
      milestones: [
        { date: "December 1978", desc: "Former President Ferdinand E. Marcos issued LOI No. 79, establishing a National Polytechnic System with TUP as the apex institution." },
        { date: "1985", desc: "The Manila Technician Institute (MTI) and Visayas Technician Institute (VTI) were integrated and renamed as TUP Taguig and TUP Visayas." },
        { date: "1981–1982", desc: "The Board of Regents established the TUP Cavite Campus in Dasmarinas to serve the CALABARZON area." }
      ],
      leadership: [
        { name: "Ronald P. Gleason", role: "1st Principal", term: "1901–1904" },
        { name: "J.J. Eaton", role: "1st Superintendent", term: "1905–1906" },
        { name: "Gregorio J. Sevilla", role: "1st Filipino Superintendent", term: "1936–1939" },
        { name: "Prof. Jose S. Roldan", role: "1st President, PCAT", term: "1959–1961" },
        { name: "Prof. Apolinario G. Apilado", role: "2nd President, PCAT", term: "1962–1967" },
        { name: "Dr. Jose R. Vergara", role: "3rd President PCAT / 1st President TUP", term: "1968–1988" },
        { name: "Dr. Frederick So. Pada", role: "2nd President, TUP", term: "1988–2000" },
        { name: "Dr. Bernardo F. Adiviso", role: "3rd President, TUP", term: "Aug 1–16, 2000" },
        { name: "Dr. Fedeserio C. Camarao", role: "4th & Centennial President, TUP", term: "2001–2005" },
        { name: "Dr. Godofredo E. Gallega", role: "5th President, TUP", term: "2005–2009" },
        { name: "Dr. Olympio V. Caparas", role: "6th President & OIC, TUP", term: "2009–2014" }
      ],
      seal: {
        registration: "Certificate No: 4-2012-007718 (Reg: Nov 22, 2012)",
        colors: "Cardinal Red (Bravery/Purity), Gray (Work), and Black",
        symbolism: [
          { element: "16-Cog Gear", meaning: "Represents the 16 areas of specialized skill training courses." },
          { element: "Cardinal Red", meaning: "Symbolizes bravery and purity." },
          { element: "Gray", meaning: "Symbolizes work." },
          { element: "1901", meaning: "The year the institution was established." },
          { element: "Pythagorean Theorem", meaning: "Emphasizes the importance of math, science, and arts in creating quality graduates." },
          { element: "9-Square Box", meaning: "Represents the Graduate programs." },
          { element: "16-Square Box", meaning: "Represents the major technology areas." },
          { element: "25-Square Box", meaning: "Represents the Bachelor programs." }
        ],
        ipoClasses: [
          { class: "Class 16 (Physical Materials)", desc: "Printed matter, paper goods, stationery, and teaching materials." },
          { class: "Class 41 (Events & Learning)", desc: "Education, training, sporting, and cultural activities." },
          { class: "Class 42 (Professional Services)", desc: "Scientific/technological research, industrial analysis, and software development." }
        ]
      }
    }
  },
  { 
    id: 2, 
    title: "Academic Framework", 
    desc: "Degrees and programs across all campuses", 
    iconName: "BookOpen", 
    content: {
      campuses: [
        {
          name: "MANILA CAMPUS",
          colleges: [
            {
              name: "College of Architecture and Fine Arts (CAFA)",
              programs: [
                { level: "Master's Degrees", list: ["Architecture", "Graphics Technology"] },
                { level: "Bachelor's Degrees", list: ["Architecture", "Fine Arts (Advertising)", "Graphics Technology (Majors: Architecture Technology, Industrial Design, Mechanical Drafting Technology)"] },
                { level: "3-Year Diplomas", list: ["Graphics Technology", "Product Design & Development Technology"] }
              ]
            },
            {
              name: "College of Industrial Education (CIE)",
              programs: [
                { level: "Doctoral Degrees", list: ["Education (Majors: Career Guidance, Industrial Education Management)"] },
                { level: "Master's Degrees", list: ["Industrial Education (Majors: Admin & Supervision, Curriculum & Instruction, Educational Tech, Guidance & Counseling)", "Technology Education", "Teaching (Major: Tech & Home Economics)"] },
                { level: "Bachelor's Degrees", list: ["Technical Teacher Education", "Industrial Education (Majors: Art, Computer, Electrical, Electronics, Home Economics, Industrial Arts)"] }
              ]
            },
            {
              name: "College of Liberal Arts (CLA)",
              programs: [
                { level: "Doctoral Degrees", list: ["Management Science"] },
                { level: "Master's Degrees", list: ["Management"] },
                { level: "Bachelor's Degrees", list: ["Management (Major: Industrial Management)", "Entrepreneurial Management"] }
              ]
            },
            {
              name: "College of Engineering (COE)",
              programs: [
                { level: "Master's Degrees", list: ["Engineering Program", "Civil Engineering", "Electrical Engineering", "Mechanical Engineering"] },
                { level: "Bachelor's Degrees", list: ["Civil Engineering", "Electrical Engineering", "Electronics Engineering", "Mechanical Engineering"] }
              ]
            },
            {
              name: "College of Science (COS)",
              programs: [
                { level: "Master's Degrees", list: ["Teaching (Majors: Chemistry, General Science, Mathematics, Physics)"] },
                { level: "Bachelor's Degrees", list: ["Applied Science (Major: Laboratory Tech)", "Computer Science", "Environmental Science", "Information Technology", "Information Systems"] }
              ]
            },
            {
              name: "College of Industrial Technology (CIT)",
              programs: [
                { level: "Doctoral Degrees", list: ["Technology Management", "Technology"] },
                { level: "Master's Degrees", list: ["Information Technology", "Technology"] },
                { level: "Bachelor's Degrees", list: ["Food Technology", "Hotel & Restaurant Management", "Technology (General & IT Major)"] },
                { level: "3-Year Engineering Technology Diplomas", list: ["Apparel & Fashion", "Automotive", "Civil", "Computer", "Electrical", "Electronic Communications", "Electronics", "Foundry", "Graphic Arts & Printing", "Instrumentation & Control", "Mechanical", "Nutrition & Food", "Power", "Railway", "Refrigeration & Airconditioning", "Tool & Die", "Welding"] }
              ],
              note: "Effective First Semester SY 2014-2015, all 3-Year Engineering Technology Diploma Courses in CIT transitioned into 4-Year Bachelor of Technology Programs."
            }
          ]
        },
        {
          name: "REGIONAL CAMPUSES",
          sites: [
            {
              name: "TUP Cavite",
              details: [
                { level: "Graduate Programs", list: ["Serves as an off-campus site for Manila's Graduate programs."] },
                { level: "Bachelor's Degrees", list: ["Industrial Education", "Technical Teacher Education", "Technology", "Civil Engineering*", "Electrical Engineering*", "Mechanical Engineering* (*Off-campus site for Manila's Engineering programs)"] },
                { level: "3-Year Engineering Technology Diplomas", list: ["Architecture", "Automotive", "Civil", "Computer", "Electrical", "Electronics", "Mechanical", "Power Plant"] }
              ]
            },
            {
              name: "TUP Taguig",
              details: [
                { level: "Graduate Programs", list: ["Serves as an off-campus site for Manila's Graduate programs."] },
                { level: "Bachelor's Degrees", list: ["Engineering", "Civil Engineering", "Electrical Engineering", "Electronics Engineering", "Mechanical Engineering", "Technology", "Technology in Information Technology", "Technical Teacher Education"] },
                { level: "3-Year Engineering Technology Diplomas", list: ["Architectural", "Automotive", "Biochemical", "Chemical", "Civil", "Computer", "Electrical", "Electronics", "Electromechanical", "Instrumentation & Control", "Mechanical", "Non-Destructive Testing", "Heating/Ventilating/Airconditioning/Refrigeration (formerly RAC)", "Tool"] }
              ]
            },
            {
              name: "TUP Visayas",
              details: [
                { level: "Graduate Programs", list: ["Serves as an off-campus site for Manila's Graduate programs."] },
                { level: "Bachelor's Degrees", list: ["Electronics Engineering", "Mechanical Engineering", "Engineering Technology (BSET)", "Technology (Major: Mechatronics)"] },
                { level: "3-Year Diplomas (Leading to BSET)", list: ["Automotive", "Chemical", "Computer", "Electrical", "Electro-Mechanical", "Electronics", "Mechanical", "Refrigeration & Air-conditioning"] }
              ]
            }
          ]
        }
      ]
    }
  },
  { 
    id: 3, 
    title: "Entry and Integration", 
    desc: "Admission requirements for all student types", 
    iconName: "UserCheck", 
    content: {
      admission: [
        {
          category: "New Applicants (Freshmen & Transferees)",
          requirements: [
            { label: "Examinations", detail: "Must pass both oral and written admission tests." },
            { label: "Grades", detail: "Must have a grade of 80% or better in Math, Science, and English. Must also meet specific grade requirements for chosen programs (Engineering, Architecture, Sciences)." },
            { label: "Academic Status", detail: "Must be a high school graduate. Transferee Note: Must have no failing grades and may only apply for engineering technology courses." },
            { label: "Personal Qualifications", detail: "Must possess good moral character and be physically and mentally fit." },
            { label: "Agreement", detail: "Must sign and comply with the Student Pledge." }
          ]
        },
        {
          category: "Continuum / Ladderized Program Applicants",
          requirements: [
            { label: "Academic Status", detail: "Must already be a graduate of a diploma course." },
            { label: "Examinations", detail: "Must pass the interview, as well as written and oral exams." },
            { label: "Grades", detail: "Must meet the specific grade requirements of the target course." },
            { label: "Personal Qualifications", detail: "Must possess good moral character and be physically and mentally fit." },
            { label: "Agreement", detail: "Must sign and comply with the Student Pledge." }
          ]
        },
        {
          category: "Master's & Doctorate Program Applicants",
          requirements: [
            { label: "Academic Status", detail: "Must be a graduate of a relevant Bachelor's or Master's degree." },
            { label: "Examinations", detail: "Must pass the oral and written tests." },
            { label: "Program Specifics", detail: "Must meet any additional entry requirements specific to the chosen program." },
            { label: "Personal Qualifications", detail: "Must possess good moral character and be physically and mentally fit." }
          ]
        },
        {
          category: "Foreign Student Applicants",
          requirements: [
            { label: "Examinations", detail: "Must pass the Admission Test." },
            { label: "Proficiency", detail: "Must provide proof of English proficiency." },
            { label: "Fitness", detail: "Must provide proof of psychological and physical fitness." },
            { label: "Agreement", detail: "Must sign and comply with the Student Pledge." },
            { 
              label: "Required Documents", 
              isList: true,
              items: [
                "Visa Details: Student Visa or Visa Conversion documents.",
                "Academic Records: Authenticated Transcript of Records/Scholastic Records.",
                "Proof of Identity: Authenticated Passport photocopy and Birth Certificate.",
                "Financial Proof: Notarized Affidavit of Support with bank statements or scholarship grant.",
                "Clearances: NICA Clearance and Bureau of Quarantine Clearance."
              ]
            }
          ]
        }
      ],
      transferPolicies: [
        {
          type: "Inter-Campus Transfers (Within TUP)",
          policy: "Students can transfer from one TUP campus to another.",
          requirement: "Must satisfy the specific admission requirements of the target program and college."
        },
        {
          type: "Incoming Transfers from SUCs",
          policy: "Students from other state schools may be admitted to TUP.",
          requirement: "Must have no failed or dropped marks on their record. Must satisfy specific program requirements."
        },
        {
          type: "Incoming Transfers from Private Institutions",
          policy: "Students from private schools may transfer but are restricted to 3-year programs only.",
          requirement: "Must have no failed or dropped marks. Must satisfy specific program requirements."
        },
        {
          type: "Outgoing Transfers (Leaving TUP)",
          policy: "Students intending to leave TUP for another school must settle all obligations first.",
          requirement: "Must be completely cleared of all administrative, academic, and financial liabilities.",
          action: "Transfer documents can be secured from the Registrar once cleared."
        }
      ]
    }
  },
  { 
    id: 4, 
    title: "Student Status and Tenure", 
    desc: "Classification and Maximum Residency Rules", 
    iconName: "Timer", 
    content: {
      classifications: [
        {
          group: "Undergraduate Students",
          description: "Students enrolled in foundational tertiary education.",
          types: ["3-Year Technology courses (non-degree)", "4-Year Degree courses", "5-Year Degree courses", "Expanded Tertiary Education Equivalency and Accreditation Program (ETEEAP)", "Industry-Based Programs", "External Studies programs"]
        },
        {
          group: "Graduate Students",
          description: "Students pursuing advanced, post-baccalaureate education.",
          types: ["Master's degrees", "Doctorate degrees", "Graduate-level External Studies programs"]
        },
        {
          group: "Non-Regular Students",
          description: "Students taking classes outside the standard degree-seeking tracks.",
          types: ["Non-degree programs (with academic credits)", "Cross-registrants from other schools (with academic credits)", "Special students (taking classes without academic credit)"]
        }
      ],
      residency: {
        definition: "The absolute maximum amount of time a student is allowed to stay in the University to complete their respective program.",
        rules: [
          { level: "3-Year Course", max: "5 Years" },
          { level: "4-Year Course", max: "6 Years" },
          { level: "5-Year Course", max: "7 Years" },
          { level: "Master's Degree", max: "5 Years" },
          { level: "Doctorate Degree", max: "7 Years" }
        ],
        specialCases: "Any situations or requests for extension that fall outside of this standard rule must be evaluated and resolved by the Vice President for Academic Affairs or the respective Campus Director."
      }
    }
  },
  { 
    id: 5, 
    title: "Enrollment Planning", 
    desc: "Academic load and unit limits per status", 
    iconName: "Layout", 
    content: {
      creditUnits: {
        standard: "1 unit of credit equals 18 full hours of instruction (lecture, discussion, recitation, etc.) or equivalent laboratory hours per term.",
        total: "This typically amounts to 54 full hours per semester/term."
      },
      undergraduateLoad: [
        { status: "Regular Semester", limit: "Maximum load is strictly the prescribed number of units specified in the student's curriculum for their current year level." },
        { status: "Summer Term", limit: "Maximum of 9 units." },
        { status: "Probationary Status", limit: "Students on probation are restricted to a maximum of 14 units." },
        { 
          status: "Graduating Irregular Students", 
          limit: "Allowed a maximum overload of 6 units, provided all prerequisites are met.",
          specialNote: "If the student has a \"better than average\" academic record, they may carry more than the prescribed units during their final year, provided they take a maximum of 3 laboratory subjects and meet all prerequisites."
        }
      ],
      graduateLoad: [
        { category: "Full-Time Students (Regular Semester)", limit: "Maximum of 12 units." },
        { category: "Part-Time Students (Regular Semester)", limit: "Maximum of 9 units." },
        { category: "Summer Term", limit: "Maximum of 6 units." }
      ],
      workingStudents: {
        generalRule: "The Dean has the authority to limit the academic load of any student (undergraduate or graduate) who is employed part-time or full-time.",
        fullTimeEmployedGraduate: [
          { level: "Master's", limit: "Maximum of 9 units (including thesis writing) per semester/term." },
          { level: "Doctorate", limit: "Maximum of 12 units (including dissertation writing) per semester/term." }
        ]
      },
      prerequisites: "Approved pre-requisite subjects must be enforced strictly, and may be waived on meritorious cases subject to the approval of the Dean."
    }
  },
  { 
    id: 6, 
    title: "Course and Subject Adjustments", 
    desc: "Adding, dropping, and special classes", 
    iconName: "Settings", 
    content: {
      sections: [
        {
          title: "Special Class",
          description: "An off-term subject offered upon the request of a student and approved by the President, Chancellor, or Campus Director.",
          eligibility: [
            "General Rule: Strictly offered to graduating or irregular students.",
            "Exception: Non-graduating students may be allowed to enroll if missing the prerequisite subject would delay their graduation by at least one full year."
          ],
          details: [
            { label: "Scheduling", value: "Held on a flexible time schedule." },
            { label: "Requirements", value: "Must strictly comply with all standard academic requirements of the course." },
            { label: "Financial", value: "The student(s) enrolled in the special class must shoulder all pertinent costs for holding the class." }
          ]
        },
        {
          title: "Changing or Substitution of Subjects",
          subsections: [
            {
              name: "Changing of Subjects (Student-Initiated)",
              timeline: "Within one week after the enrollment period.",
              process: ["Noted by the subject teacher", "Recommended by the Department Head", "Approved by the Dean"]
            },
            {
              name: "Subject Substitution",
              condition: "Allowed specifically when a new curriculum supersedes an old one, serving to align the student's old curriculum requirements with the new system.",
              approval: "Requires prior recommendation or approval from the Department Head, the Dean, or the Assistant Director for Academic Affairs (ADAA)."
            }
          ]
        },
        {
          title: "Adding of Subject",
          approval: "To add a subject, a student must secure a recommendation from the Department Head and the final approval of the Dean.",
          conditions: [
            "Below Maximum Load: The student is currently enrolled in fewer units than the maximum load prescribed in their curriculum for the semester/term.",
            "Probationary Limit: The student is on probation but has not yet reached the maximum authorized unit load for probationary students (which is 14 units).",
            "Graduating Status: A graduating undergraduate student may add up to 6 extra units on top of their prescribed semester/term load."
          ]
        },
        {
          title: "Dropping of Subject",
          timeline: "Allowed at any time before the midterm period.",
          procedure: [
            { step: "Write a Request Letter", detail: "Draft a letter stating your reason(s) for dropping. Must be noted by parent/guardian (if applicable) and explicitly approved by the Dean." },
            { step: "Secure the Form", detail: "Present your approved request letter to the Guidance Personnel to obtain an official dropping form." },
            { step: "Complete the Form", detail: "Fill out the form and secure necessary signatures from your Subject Professor and the Dean of the College." },
            { step: "Submit Copies", detail: "Provide copies of the fully accomplished dropping form to all relevant and concerned offices." }
          ]
        }
      ]
    }
  },
  { 
    id: 7, 
    title: "Attendance and External Credits", 
    desc: "The 20% rule and cross-registration", 
    iconName: "Clock", 
    content: {
      attendance: {
        rules: [
          { title: "Regular Attendance", detail: "Students are strictly expected to attend classes on a regular basis." },
          { title: "Excused Absences", detail: "In the event of an unavoidable absence, the student must secure an excuse letter signed by a parent or guardian and present it directly to the instructor." }
        ],
        criticalRule: {
          title: "The 20% Rule (Maximum Absences)",
          detail: "If a student's total absences reach 20% of the total required hours for a specific subject, they will be automatically dropped from that class.",
          consideration: "At the instructor's discretion, a student may be given a chance to make up for their absences to avoid being dropped."
        }
      },
      crossRegistration: [
        {
          type: "Outbound Cross-Enrollment (TUP Students at other schools)",
          eligibility: "Allowed for graduating students who need a required curriculum subject that is currently not offered at TUP, or when there are no other subjects they can enroll in.",
          process: [
            { step: "Internal Approval", detail: "Obtain approval from the Department Head, Dean, or Assistant Director for Academic Affairs (ADAA)." },
            { step: "Secure Permit", detail: "Secure an official permit from the TUP Registrar indicating exact subjects and units authorized." },
            { step: "Credit Validation", detail: "Any subjects taken outside TUP must undergo proper validation before academic credits are officially recorded." }
          ]
        },
        {
          type: "Inter-Campus & Consortium Enrollment",
          policy: "TUP students can cross-enroll in a different College/Campus within TUP, or at an institution that is part of a consortium with TUP.",
          requirement: "Requires permission from the student's primary Department Head, Dean, or ADAA."
        },
        {
          type: "Inbound Cross-Enrollment (Non-TUP Students at TUP)",
          requirements: [
            { label: "Permit Requirement", detail: "Students from other institutions must present a written permit from their home Registrar explicitly stating authorized subjects and units." },
            { label: "Financials", detail: "Payment for cross-registration is based on the tuition and miscellaneous fee rates of the institution." }
          ],
          limit: "Cross-registrants or enrollees in the University are limited to a maximum of two (2) subjects per semester."
        }
      ]
    }
  },
{ 
    id: 8, 
    title: "Scholastic Standing and Evaluation", 
    desc: "Official grading system and delinquency rules", 
    iconName: "BarChart", 
    content: {
      gradingSystem: {
        undergrad: [
          { grade: "1.0", percentage: "99-100", rating: "Excellent" },
          { grade: "1.25", percentage: "96-98", rating: "Very Superior" },
          { grade: "1.50", percentage: "93-95", rating: "Superior" },
          { grade: "1.75", percentage: "90-92", rating: "High Average" },
          { grade: "2.00", percentage: "87-89", rating: "Average" },
          { grade: "2.25", percentage: "84-86", rating: "Low Average" },
          { grade: "2.50", percentage: "81-83", rating: "Satisfactory" },
          { grade: "2.75", percentage: "78-80", rating: "Fair" },
          { grade: "3.00", percentage: "75-77", rating: "Passed" },
          { grade: "5.00", percentage: "74 and Below", rating: "Failed" }
        ],
        graduate: [
          { grade: "1.0", masters: "Excellent", doctorate: "Excellent" },
          { grade: "1.25", masters: "Very Good", doctorate: "Very Good" },
          { grade: "1.50", masters: "Good", doctorate: "Good" },
          { grade: "1.75", masters: "Fair", doctorate: "Passed" },
          { grade: "2.00", masters: "Passed", doctorate: "Failed (Anything below 1.75)" },
          { grade: "Below 2.00", masters: "Failed", doctorate: "Failed" }
        ],
        remarks: [
          { mark: "Drp", meaning: "Dropped", note: null },
          { mark: "Inc.", meaning: "Incomplete", note: "Specifically listed for Graduate students" },
          { mark: "W*", meaning: "Withdrawn", note: "Applies only to the TUP - Visayas campus" }
        ]
      },
      delinquency: {
        probation: {
          title: "Probationary Status (Warning Level)",
          description: "A student will be placed on academic probation if they meet any of the following conditions during a semester/term:",
          conditions: [
            { label: "Failed Subjects", detail: "Obtains a failing grade (5.0) in two (2) subjects." },
            { label: "Low Passing Rate", detail: "Fails to pass at least 75% of their total enrolled unit load for the term." },
            { label: "Unofficial Dropping", detail: "Unofficially drops three (3) or more subjects (or all subjects) without written consent from their parents/guardians." }
          ]
        },
        dismissal: {
          title: "Dismissal (Removal from the University)",
          description: "A student will be officially dismissed and removed from the university roll if they meet any of the dismissal conditions below.",
          exemption: "The dismissal rule does NOT apply to students who are currently in: The last two years of a 5-year course, OR The last year of a 4-year or 3-year course.",
          conditions: [
            { label: "Multiple Failures", detail: "Obtains a failing grade (5.0) in three (3) subjects." },
            { label: "Failure While on Probation", detail: "Obtains a dropped or failing grade in even one (1) subject while already under probationary status." }
          ]
        }
      }
    } 
  },
  { 
    id: 9, 
    title: "Merits and Recognitions", 
    desc: "Scholarships and Latin Honor requirements", 
    iconName: "Award", 
    content: {
      honorificScholarship: {
        description: "Students who achieve exceptional academic performance may qualify for honorific scholarships during a given semester or term.",
        table: [
          { type: "University Scholar", gpa: "1.45 or better", minGrade: "No grade lower than 2.50", recognition: "President's List" },
          { type: "College Scholar", gpa: "1.75 or better", minGrade: "No grade lower than 2.50", recognition: "Dean's List" }
        ]
      },
      academicHonors: {
        description: "Graduating students who complete their curriculum requirements may be awarded academic honors upon graduation, provided they meet specific academic and disciplinary standards.",
        qualifications: [
          { label: "Academic Minimum", detail: "Must have no grade lower than 2.75 in any subject throughout their entire stay." },
          { label: "Good Conduct", detail: "Must not have been found guilty of any major disciplinary offense." },
          { label: "For Transferees", detail: "Must have completed at least 75% of the total required academic units of their curriculum at TUP." }
        ],
        classificationsDesc: "Depending on whether a student is graduating from a Degree (Baccalaureate) or a Diploma (Pre-Baccalaureate) program, the honor titles differ but follow the same General Point Average (GPA) requirements.",
        classifications: [
          { gpa: "1.00 - 1.20", baccalaureate: "Summa cum laude", preBaccalaureate: "With Highest Honors" },
          { gpa: "1.21 - 1.45", baccalaureate: "Magna cum laude", preBaccalaureate: "With High Honors" },
          { gpa: "1.46 - 1.75", baccalaureate: "Cum laude", preBaccalaureate: "With Honors" }
        ]
      }
    } 
  },
  { 
    id: 10, 
    title: "Administrative Exit and Re-entry", 
    desc: "LOA, Readmission, and Graduation steps", 
    iconName: "LogOut", 
    content: {
      loa: {
        title: "Leave of Absence (LOA)",
        processDuration: [
          { label: "Maximum Duration", detail: "An approved leave cannot exceed one (1) academic year (equivalent to 2 semesters or 3 terms)." },
          { label: "How to Apply", detail: "You must submit a written request stating your reason(s) and the exact duration of your planned leave." }
        ],
        routing: ["Present intent to Faculty Adviser or Dept Head", "Secure final approval from Dean or ADAA"],
        constraints: {
          blackout: "An LOA will not be granted if requested within the last two weeks of classes for the semester/term.",
          emergency: "If unable to attend during the blackout period due to health/justifiable causes, it is an 'excused absence', not an LOA. Must present an excuse letter and make up missed work."
        },
        awol: {
          policy: "If you stop attending classes for more than the allowable one-year period without filing an official LOA, you can still return.",
          condition: "You will be readmitted strictly on a probationary basis, and your time away will still be counted against your Maximum Residency time limit."
        }
      },
      readmission: {
        title: "Readmission/Returning Policy",
        general: "A returning student may be readmitted to their college provided they have not exceeded the Maximum Residency Period prescribed for their program.",
        evaluation: [
          "Before any formal approval is given, the student must undergo an evaluation.",
          "The respective College, in coordination with the Guidance Office, will review the returning student's past scholastic records and deportment (overall behavior and conduct)."
        ],
        specialCases: "Any readmission requests or situations that fall outside of this standard rule will be reviewed and resolved by the Vice President for Academic Affairs (VPAA) or the respective Campus Director."
      },
      graduation: {
        title: "Application for Graduation",
        requirements: [
          "Must have completed all academic requirements for their program by the last day of the current term or semester.",
          "Must have no pending cases (disciplinary or administrative) within the University."
        ],
        timeline: "The specific period for filing is based on the approved University Calendar. Students should wait for the official announcement from the University Registrar."
      },
      clearance: {
        title: "Application for Clearance",
        whoNeeds: [
          "You have completed all academic requirements and have no pending cases.",
          "You have already graduated.",
          "You wish to transfer to another school."
        ],
        purpose: "A duly accomplished clearance form is strictly required before you can request official documents such as: Transcript of Records (TOR), Official Certifications, and Certificate of Transfer Credential.",
        process: [
          { step: "Secure Form", detail: "Secure the official clearance form from the Registrar's Office." },
          { step: "Settle Liabilities", detail: "Accomplish the form by settling all liabilities and obtaining necessary signatures from various university offices." },
          { step: "Surrender ID", detail: "Before requested credentials can be officially released, you must surrender your University ID to the Office of Student Affairs (OSA)." }
        ]
      },
      feesAndRefunds: {
        title: "Fees and Refunds",
        fees: {
          authorized: "The University can only assess and collect fees that have been strictly fixed and officially authorized by the Board of Regents.",
          matriculation: "These are the standard fees paid in connection with a student's enrollment. They typically include tuition, laboratory, library, medical, development, and other related fees."
        },
        refundPolicy: {
          general: "If a student officially withdraws their registration (either through an honorable dismissal or a leave of absence), they may be granted a refund.",
          note: "Under normal circumstances, only the tuition fee is subject to a refund. Miscellaneous and other fees are non-refundable."
        },
        refundSchedules: {
          regular: [
            { time: "Before the opening of classes", refund: "100%" },
            { time: "Within 1 week after the opening of classes", refund: "70%" },
            { time: "Within 2 weeks after the opening of classes", refund: "50%" },
            { time: "Within 3 weeks after the opening of classes", refund: "30%" },
            { time: "Within 4 weeks after the opening of classes", refund: "No Refund" }
          ],
          summer: [
            { time: "Before the opening of classes", refund: "100%" },
            { time: "Within the 1st day after the opening of classes", refund: "70%" },
            { time: "Within the 2nd day after the opening of classes", refund: "50%" },
            { time: "Within the 3rd day after the opening of classes", refund: "30%" },
            { time: "Within the 4th day after the opening of classes", refund: "No Refund" }
          ]
        }
      }
    } 
  }
];

// 2. UNDERGRADUATE GRADING SYSTEM [cite: 777]
export const UndergradGradingSystem = [
  { grade: "1.0", percentage: "99-100", rating: "Excellent" },
  { grade: "1.25", percentage: "96-98", rating: "Very Superior" },
  { grade: "1.50", percentage: "93-95", rating: "Superior" },
  { grade: "1.75", percentage: "90-92", rating: "High Average" },
  { grade: "2.00", percentage: "87-89", rating: "Average" },
  { grade: "2.25", percentage: "84-86", rating: "Low Average" },
  { grade: "2.50", percentage: "81-83", rating: "Satisfactory" },
  { grade: "2.75", percentage: "78-80", rating: "Fair" },
  { grade: "3.0", percentage: "75-77", rating: "Passed" },
  { grade: "5.0", percentage: "74 & below", rating: "Failed" }
];

// 3. MAX RESIDENCY RULES [cite: 691]
export const MaximumResidency = [
  { courseLevel: "3-Year Course", maxYears: "5 Years" },
  { courseLevel: "4-Year Course", maxYears: "6 Years" },
  { courseLevel: "5-Year Course", maxYears: "7 Years" },
  { courseLevel: "Master's Degree", maxYears: "5 Years" },
  { courseLevel: "Doctorate Degree", maxYears: "7 Years" }
];

// 4. FREQUENTLY ASKED QUESTIONS [cite: 57, 555]
export const FrequentlyAskedQuestions = [
  { 
    question: "When should I wear my uniform?", 
    answer: "Official TUP uniforms must be worn on Mon, Tue, Thu, and Fri. Wednesday is wash day.", // [cite: 1013]
    source: "Handbook Page 26"
  },
  { 
    question: "What is the 20% attendance rule?", 
    answer: "If total absences reach 20% of required hours for a subject, the student is automatically dropped.", // [cite: 757]
    source: "Handbook Page 14"
  }
];