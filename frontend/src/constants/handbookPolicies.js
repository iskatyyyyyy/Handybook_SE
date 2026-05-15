/**
 * ACADEMIC RULES & REQUIREMENTS
 */

export const UndergraduateGrading = [
  { grade: "1.0", rating: "Excellent", percentage: "99-100" },
  { grade: "2.0", rating: "Average", percentage: "87-89" },
  { grade: "3.0", rating: "Passed", percentage: "75-77" },
  { grade: "5.0", rating: "Failed", percentage: "74 and Below" }
];

export const HonorsCriteria = [
  { title: "Summa Cum Laude", gpa: "1.00 - 1.20" },
  { title: "Magna Cum Laude", gpa: "1.21 - 1.45" },
  { title: "Cum Laude", gpa: "1.46 - 1.75" },
  { requirement: "No grade lower than 2.75 in any subject." }
];

export const ResidencyRules = [
  { course: "3-year course", maxResidency: "5 years" },
  { course: "4-year course", maxResidency: "6 years" },
  { course: "5-year course", maxResidency: "7 years" }
];

export const GeneralPolicies = {
  attendanceLimit: "20% absence threshold leads to being dropped from subject",
  washDay: "Wednesday (Civilian clothes befitting a student)",
  probationStatus: "Triggered by obtaining a 5.0 in two subjects in one term"
};

/**
 * DISCIPLINARY OFFENSES & SANCTIONS
 * Source: TUP Student Handbook
 */
export const DisciplinaryOffenses = [
  // --- MAJOR OFFENSES ---
  { id: "M1", category: "Major", type: "Substance Abuse", title: "Entering under the influence of liquor", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M2", category: "Major", type: "Substance Abuse", title: "Possessing, using, or selling intoxicating liquor", sanctions: ["Suspension up to 30 days", "Suspension for 1 semester", "Dismissal"] },
  { id: "M3", category: "Major", type: "Substance Abuse", title: "Possessing or using prohibited drugs/chemicals", sanctions: ["Dismissal", "None", "None"] },
  { id: "M4", category: "Major", type: "Substance Abuse", title: "Selling of prohibited drugs/chemicals", sanctions: ["Expulsion", "None", "None"] },
  { id: "M5", category: "Major", type: "Public Order & Security", title: "Organizing/Joining Illegal Assemblies & Rallies", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M6", category: "Major", type: "Public Order & Security", title: "Posting/circulating seditious or rebellious info", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M7", category: "Major", type: "Violence & Weapons", title: "Hazing or unauthorized fraternity initiations", sanctions: ["Dismissal", "None", "None"] },
  { id: "M8", category: "Major", type: "Violence & Weapons", title: "Possessing guns, explosives, or detonation agents", sanctions: ["Suspension for 1 semester", "Dismissal / Expulsion", "None"] },
  { id: "M9", category: "Major", type: "Violence & Weapons", title: "Possessing sharp, bladed, or blunt weapons", sanctions: ["Suspension up to 30 days", "Suspension for 1 semester", "Dismissal"] },
  { id: "M10", category: "Major", type: "Property & Finance", title: "Threats, Coercion, or Swindling (Fraud)", sanctions: ["Suspension up to 30 days + restitution", "Suspension 1 sem + restitution", "Dismissal + restitution"] },
  { id: "M11", category: "Major", type: "Property & Finance", title: "Misuse or Failure to Account for Funds", sanctions: ["Suspension up to 30 days + restitution", "Suspension 1 sem + restitution", "Dismissal + restitution"] },
  { id: "M12", category: "Major", type: "Violence & Weapons", title: "Violence and Physical Assault/Injury", sanctions: ["Suspension for 1 semester", "Dismissal", "None"] },
  { id: "M13", category: "Major", type: "Violence & Weapons", title: "Acts of violence resulting in permanent disability/death", sanctions: ["Expulsion", "None", "None"] },
  { id: "M14", category: "Major", type: "Property & Finance", title: "Robbery/Theft", sanctions: ["Suspension up to 30 days + replace", "Suspension 1 sem + replace", "Dismissal + replace"] },
  { id: "M15", category: "Major", type: "Property & Finance", title: "Damage to Property (Vandalism)", sanctions: ["Suspension up to 30 days + repair", "Suspension 1 sem + repair", "Dismissal"] },
  { id: "M16", category: "Major", type: "Public Order & Security", title: "Forcible or unauthorized entry into premises", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M17", category: "Major", type: "Public Order & Security", title: "Commission of Cyber Crimes (RA 10175)", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M18", category: "Major", type: "Conduct & Decency", title: "Slander, Libel, Gossip, or Oral Defamation", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M19", category: "Major", type: "Academic Dishonesty", title: "Falsification of documents, records, credentials", sanctions: ["Suspension for 1 semester", "Dismissal", "None"] },
  { id: "M20", category: "Major", type: "Academic Dishonesty", title: "Academic Dishonesty (Cheating / Selling Exams)", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M21", category: "Major", type: "Academic Dishonesty", title: "Plagiarism", sanctions: ["Suspension for 1 semester", "Dismissal", "None"] },
  { id: "M22", category: "Major", type: "Conduct & Decency", title: "Immoral Acts (Pornography / Scandalous Conduct)", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M23", category: "Major", type: "Conduct & Decency", title: "Sexual Harassment", sanctions: ["Suspension up to 30 days", "Suspension for 1 semester", "Dismissal"] },
  { id: "M24", category: "Major", type: "Conduct & Decency", title: "Gambling within premises", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M25", category: "Major", type: "Conduct & Decency", title: "Acts of Disrespect (To flag, officials, faculty)", sanctions: ["Suspension up to 15 days", "Suspension up to 30 days", "Suspension for 1 semester"] },
  { id: "M26", category: "Major", type: "Property & Finance", title: "Offering or Giving Bribes", sanctions: ["Suspension up to 30 days", "Suspension for 1 semester", "Dismissal"] },

  // --- MINOR OFFENSES ---
  { id: "m1", category: "Minor", type: "Public Order & Security", title: "Loitering or causing disturbance during classes", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m2", category: "Minor", type: "Uniform & Dress Code", title: "Not wearing prescribed uniform / ID", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m3", category: "Minor", type: "Uniform & Dress Code", title: "Cross dressing or dress code violation on wash days", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m4", category: "Minor", type: "Uniform & Dress Code", title: "Inappropriate facial hair or earrings (males)", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m5", category: "Minor", type: "Uniform & Dress Code", title: "Wearing caps/hats inside classrooms", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m6", category: "Minor", type: "Public Order & Security", title: "Entering or leaving classes without permission (Cutting)", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m7", category: "Minor", type: "Public Order & Security", title: "Attempting to join unaccredited organizations", sanctions: ["Warning + Agreement to stop", "None", "None"] },
  { id: "m8", category: "Minor", type: "Public Order & Security", title: "Posting materials or using facilities without approval", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m9", category: "Minor", type: "Conduct & Decency", title: "Possession of gambling paraphernalia", sanctions: ["Warning & Apology + Forfeit", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m10", category: "Minor", type: "Public Order & Security", title: "Unauthorized use of gadgets during classes", sanctions: ["Warning & Apology + Confiscate", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m11", category: "Minor", type: "Property & Finance", title: "Irresponsible use of water/electricity", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m12", category: "Minor", type: "Property & Finance", title: "Accidental damage to property", sanctions: ["Warning & Apology + Repair", "10-20 hrs CS + Repair", "30-50 hrs CS + Repair"] },
  { id: "m13", category: "Minor", type: "Conduct & Decency", title: "Public/indecent display of intimacy", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] },
  { id: "m14", category: "Minor", type: "Substance Abuse", title: "Possession of cigarettes / tobacco", sanctions: ["Warning & Apology", "10-20 hrs Community Service", "30-50 hrs Community Service"] }
];