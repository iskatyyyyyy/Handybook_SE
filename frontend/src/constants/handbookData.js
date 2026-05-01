/**
 * HANDYBOOK OFFICIAL INSTITUTIONAL DATA
 * Source: TUP 2013 Revised Student Handbook
 */

// 1. UNIVERSITY HISTORY & IDENTITY
export const AcademicData = {
  history: {
    id: "tup-history",
    established: 1901, // [cite: 823]
    origin: "Established as Manila Trade School (MTS) via Act No. 74.", // [cite: 823]
    pcatTransition: "Converted to Philippine College of Arts and Trades in 1959.", // [cite: 844]
    tupTransition: "Converted to TUP in 1978 via Presidential Decree No. 1518." // [cite: 848]
  },
  colleges: [
    { id: "cafa", name: "Architecture and Fine Arts (CAFA)" }, // [cite: 910]
    { id: "cie", name: "Industrial Education (CIE)" }, // [cite: 922]
    { id: "cla", name: "Liberal Arts (CLA)" }, // [cite: 945]
    { id: "coe", name: "Engineering (COE)" }, // [cite: 951]
    { id: "cos", name: "Science (COS)" }, // [cite: 954]
    { id: "cit", name: "Industrial Technology (CIT)" } // [cite: 962]
  ]
};

// 2. UNDERGRADUATE GRADING SYSTEM
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
  { grade: "5.0", percentage: "74 & below", rating: "Failed" },
  { grade: "Drp", percentage: "-", rating: "Dropped" }
]; // [cite: 1223]

// 3. HONORIFIC SCHOLARSHIPS
export const HonorificScholarships = [
  { 
    id: "univ-scholar",
    type: "University Scholar", 
    gpaRequirement: "1.45 or better", 
    limitations: "No grade lower than 2.50", 
    benefits: "Free tuition and miscellaneous fees" 
  }, // [cite: 1233, 1234]
  { 
    id: "college-scholar",
    type: "College Scholar", 
    gpaRequirement: "1.75 or better", 
    limitations: "No grade lower than 2.50", 
    benefits: "Free tuition only" 
  } // [cite: 1235, 1236]
];

// 4. ACADEMIC HONORS (BACCALAUREATE)
export const AcademicHonors = [
  { title: "Summa Cum Laude", range: "1.00 - 1.20" }, // [cite: 1287, 1288]
  { title: "Magna Cum Laude", range: "1.21 - 1.45" }, // [cite: 1289, 1290]
  { title: "Cum Laude", range: "1.46 - 1.75" }, // [cite: 1291, 1292]
  { note: "Candidates must have no grade lower than 2.75 and no major offenses." } // [cite: 1285]
];

// 5. DRESS CODE & UNIFORM POLICY
export const AttendancePolicies = {
  id: "attendance-policies",
  uniformDays: ["Monday", "Tuesday", "Thursday", "Friday"], // [cite: 1476, 1568]
  washDay: "Wednesday", // [cite: 1479]
  absenteeLimit: "20% of total hours (leads to being dropped)", // [cite: 1199, 1582]
  maleHaircut: "Clean and decent haircut required regardless of NSTP status." // [cite: 1480, 1579]
};

// 6. MAX RESIDENCY RULES
export const MaximumResidency = [
  { courseLevel: "3-year course", maxYears: "5 years" }, // [cite: 1256, 1257]
  { courseLevel: "4-year course", maxYears: "6 years" }, // [cite: 1258, 1259]
  { courseLevel: "5-year course", maxYears: "7 years" } // [cite: 1260, 1261]
];

// 7. FREQUENTLY ASKED QUESTIONS (With Deep Linking IDs)
export const FrequentlyAskedQuestions = [
  { 
    question: "When should I wear my uniform?", 
    answer: "Prescribed uniforms must be worn on Mon, Tue, Thu, and Fri. Wednesday is wash day.",
    source: "Handbook Page 26",
    sectionId: "attendance-policies" // Points to section #5
  },
  { 
    question: "What is the passing grade at TUP?", 
    answer: "The passing grade for undergraduate students is 3.0 (75-77%).",
    source: "Handbook Page 16",
    sectionId: "grading-system" // Points to section #2
  },
  { 
    question: "How many absences are allowed?", 
    answer: "Incurring absences equivalent to 20% of required hours results in being dropped.",
    source: "Handbook Page 15",
    sectionId: "attendance-policies" // Points to section #5
  }
];