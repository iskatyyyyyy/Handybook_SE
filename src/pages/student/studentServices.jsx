import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { Check } from 'lucide-react'; // Added Check icon for completed steps

const StudentServices = () => {
  // Tracks the current active step in the linear process (0 to 4)
  const [currentStep, setCurrentStep] = useState(0);

  const graduationSteps = [
    {
      title: "Pre-Registration",
      desc: "Log in to the student portal and complete the necessary preliminary forms and data updates.",
      action: "Go to Portal"
    },
    {
      title: "Physical Document Verification",
      desc: "Present your original documents, 2x2 pictures, and completed forms to the Office of the Registrar."
    },
    {
      title: "Assessment of Fees",
      desc: "Wait for your total fees to be calculated by the accounting office based on your records."
    },
    {
      title: "Final Application Completion",
      desc: "Submit the final payment receipt to claim your graduation stub."
    }
  ];

  const handleStepClick = (index) => {
    // Rule 1: If clicking the *current* available step, mark it as done (move forward)
    if (index === currentStep) {
      setCurrentStep(prev => prev + 1);
    } 
    // Rule 2: If clicking the *most recently completed* step, undo it (move backward)
    else if (index === currentStep - 1) {
      setCurrentStep(prev => prev - 1);
    }
    // All other clicks are ignored to enforce strict linear progression
  };

  return (
    <StudentLayout activePage="services">
      {/* BEGIN: Available Offices Section */}
      <section className="mb-10" data-purpose="available-offices">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Available Offices</h2>
          <span className="text-sm font-bold text-handy-dark-red hover:underline cursor-pointer">View all Offices</span>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 custom-scrollbar">
          {/* Office Card: Registrar (Active State) */}
          <div className="flex-shrink-0 w-32 h-44 bg-white border-2 border-handy-dark-red rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-sm cursor-pointer">
            <div className="bg-handy-dark-red w-12 h-10 rounded-lg flex items-center justify-center text-white mb-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
            </div>
            <p className="text-sm font-bold mb-1">Registrar</p>
            <p className="text-[10px] text-gray-400">Records & Enrollment</p>
          </div>

          {/* Office Card: Clinic */}
          <div className="flex-shrink-0 w-32 h-44 bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-sm hover:border-red-300 transition-colors cursor-pointer">
            <div className="bg-gray-100 w-12 h-10 rounded-lg flex items-center justify-center text-gray-400 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <p className="text-sm font-bold mb-1">Clinic</p>
            <p className="text-[10px] text-gray-400">Health & Wellness</p>
          </div>

          {/* Office Card: UITC */}
          <div className="flex-shrink-0 w-32 h-44 bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-sm hover:border-red-300 transition-colors cursor-pointer">
            <div className="bg-gray-100 w-12 h-10 rounded-lg flex items-center justify-center text-gray-400 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <p className="text-sm font-bold mb-1">UITC Office</p>
            <p className="text-[10px] text-gray-400">Tech Support</p>
          </div>

          {/* Office Card: Library */}
          <div className="flex-shrink-0 w-32 h-44 bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-sm hover:border-red-300 transition-colors cursor-pointer">
            <div className="bg-gray-100 w-12 h-10 rounded-lg flex items-center justify-center text-gray-400 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <p className="text-sm font-bold mb-1">Library</p>
            <p className="text-[10px] text-gray-400">Research Resources</p>
          </div>

          {/* Office Card: Accounting */}
          <div className="flex-shrink-0 w-32 h-44 bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-sm hover:border-red-300 transition-colors cursor-pointer">
            <div className="bg-gray-100 w-12 h-10 rounded-lg flex items-center justify-center text-gray-400 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <p className="text-sm font-bold mb-1">Accounting</p>
            <p className="text-[10px] text-gray-400">Office</p>
          </div>

          {/* Office Card: Student Affairs */}
          <div className="flex-shrink-0 w-32 h-44 bg-white border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-sm hover:border-red-300 transition-colors cursor-pointer">
            <div className="bg-gray-100 w-12 h-10 rounded-lg flex items-center justify-center text-gray-400 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <p className="text-sm font-bold mb-1 leading-tight">Office of Student Affairs</p>
          </div>
        </div>
      </section>
      {/* END: Available Offices Section */}

      {/* BEGIN: Content Grid (Timeline + List) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        
        {/* BEGIN: Graduation Process Card (Left & Middle Columns) */}
        <article className="col-span-1 xl:col-span-2 bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Header with Gradient */}
          <div className="p-8 bg-gradient-to-r from-red-50 to-white border-b border-gray-100">
            <div className="flex items-center space-x-2 text-handy-dark-red mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              <span className="text-[10px] font-bold uppercase tracking-widest">Office of the Registrar</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">Graduation Application Checklist</h3>
            <p className="text-gray-500 text-sm">Keep track of your personal progress. Click a step to mark it as complete.</p>
          </div>
          
          {/* Timeline Body */}
          <div className="p-10 relative">
            <div className="timeline-line hidden sm:block absolute left-[56px] top-10 bottom-10 w-0.5 bg-gray-100 -z-10"></div>
            <div className="space-y-12 relative z-0">
              
              {graduationSteps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isCurrent = index === currentStep;
                const isLocked = index > currentStep;
                
                // Determine if this specific item is interactable based on your rules
                const isClickable = isCurrent || index === currentStep - 1;

                return (
                  <div 
                    key={index} 
                    onClick={() => handleStepClick(index)}
                    className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 relative group ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
                  >
                    {/* Status Circle */}
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-md transition-all duration-300 
                        ${isCompleted ? 'bg-green-500 text-white hover:bg-red-500' // Hovering a completed step shows red to imply 'undo'
                        : isCurrent ? 'bg-handy-dark-red text-white ring-4 ring-red-50' 
                        : 'bg-gray-100 text-gray-400 border border-gray-200'}`}
                    >
                      {isCompleted ? <Check size={16} /> : <span className="font-bold text-xs">{index + 1}</span>}
                    </div>
                    
                    {/* Content Box */}
                    <div className={`flex-1 transition-all duration-300 ${isCurrent ? 'p-6 bg-red-50/50 rounded-2xl border border-red-100 sm:-mt-6' : ''}`}>
                      <h4 className={`text-xl font-bold mb-2 ${isCompleted ? 'text-gray-900 line-through decoration-gray-300' : isLocked ? 'text-gray-400' : 'text-slate-900'}`}>
                        {index + 1}. {step.title}
                      </h4>
                      <p className={`text-sm leading-relaxed ${isLocked ? 'text-gray-400' : 'text-gray-500'}`}>
                        {step.desc}
                      </p>
                      
                      {/* Action Button (Only on Step 1 if it has an action and isn't locked) */}
                      {step.action && !isLocked && (
                        <button className="mt-4 px-6 py-2 bg-red-50 text-handy-dark-red text-sm font-bold rounded-lg hover:bg-red-100 transition-colors">
                          {step.action}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </article>
        {/* END: Graduation Process Card */}

        {/* BEGIN: Available Services List (Right Column) */}
        <aside className="space-y-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Available Services</h2>
          <ul className="space-y-4">
            {/* Service Item 1 */}
            <li className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-handy-dark-red transition-all group cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold mb-1">Request Transcript</h4>
                  <p className="text-xs text-gray-500 leading-normal">Official academic records for transfer or employment.</p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
            </li>
            
            {/* Service Item 2 */}
            <li className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-handy-dark-red transition-all group cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold mb-1">Apply for Clearance</h4>
                  <p className="text-xs text-gray-500 leading-normal">End-of-semester or graduation clearance processing.</p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
            </li>
            
            {/* Service Item 3 */}
            <li className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-handy-dark-red transition-all group cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold mb-1">Add/Drop Subject</h4>
                  <p className="text-xs text-gray-500 leading-normal">Modify your current semester course load.</p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
            </li>
            
            {/* Service Item 4 */}
            <li className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-handy-dark-red transition-all group cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold mb-1">Request Certification</h4>
                  <p className="text-xs text-gray-500 leading-normal">Enrollment, graduation, or level certifications.</p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
            </li>
          </ul>
        </aside>
        {/* END: Available Services List */}
        
      </div>
    </StudentLayout>
  );
};

export default StudentServices;