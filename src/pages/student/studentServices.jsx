import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { Check, Building2, ConciergeBell } from 'lucide-react';

const StudentServices = () => {
  // Tracks the current active step. Set to 1 to match the Figma mockup (Step 2 is active)
  const [currentStep, setCurrentStep] = useState(1);
  const [activeOffice, setActiveOffice] = useState('Registrar');
  const [activeService, setActiveService] = useState('Graduation Application Checklist');

  const graduationSteps = [
    {
      title: "Pre-Registration",
      desc: "Log in to the student portal and complete the necessary preliminary forms and data updates.",
      action: "Login to portal"
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
    // If clicking the current available step, mark it as done (move forward)
    if (index === currentStep) {
      setCurrentStep(prev => prev + 1);
    } 
    // If clicking the most recently completed step, undo it (move backward)
    else if (index === currentStep - 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <StudentLayout activePage="services">
      <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
        
        {/* BEGIN: Available Offices Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-50 text-handy-dark-red p-3 rounded-xl shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Available Offices</h2>
              <p className="text-[13px] font-medium text-slate-500 mt-0.5">Select the available office to check what student services it offers.</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 justify-center sm:justify-center border-t border-slate-50 pt-6">
             {['Registrar', 'Clinic', 'UITC Office', 'Library', 'OSA'].map(office => (
                <button
                  key={office}
                  onClick={() => setActiveOffice(office)}
                  className={`px-8 py-2 rounded-lg text-[13px] font-bold transition-all ${
                    activeOffice === office 
                    ? 'bg-handy-dark-red text-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {office}
                </button>
             ))}
          </div>
        </section>
        {/* END: Available Offices Section */}

        {/* BEGIN: Content Grid (Timeline + List) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start pb-6">
          
          {/* BEGIN: Graduation Process Card (Left & Middle Columns) */}
          <article className="col-span-1 xl:col-span-2 bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            
            {/* Header Block */}
            <div className="bg-handy-dark-red p-8 sm:p-10 text-center text-white">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">Graduation Application Checklist</h3>
              <p className="text-[13px] font-medium text-white/90">Keep track of your personal progress. Click a step to mark it as complete.</p>
            </div>
            
            {/* Timeline Body */}
            <div className="p-8 sm:p-12 relative">
              {/* Continuous Vertical Line */}
              <div className="absolute left-8 sm:left-12 top-14 bottom-14 w-0.5 bg-slate-200 -z-10 ml-[15px] hidden sm:block"></div>
              
              <div className="space-y-10 relative z-0">
                {graduationSteps.map((step, index) => {
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
                            : isCurrent ? 'bg-handy-dark-red text-white ring-4 ring-red-50' 
                            : 'bg-slate-300 text-white'}`}
                        >
                          {isCompleted ? <Check size={16} strokeWidth={3} /> : index + 1}
                        </div>
                      </div>
                      
                      {/* Content Box */}
                      <div className="flex-1 pt-0.5">
                        <h4 className={`text-lg font-bold mb-1.5 tracking-tight transition-colors duration-300 ${
                          isCompleted ? 'text-slate-900' : 
                          isCurrent ? 'text-handy-dark-red' : 
                          'text-slate-300'
                        }`}>
                          {index + 1}. {step.title}
                        </h4>
                        
                        <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${
                          isLocked ? 'text-slate-300' : 'text-slate-700 font-medium'
                        }`}>
                          {step.desc}
                        </p>
                        
                        {/* Action Button (e.g., Login to portal) */}
                        {step.action && !isLocked && (
                          <button className={`mt-3 px-4 py-1.5 text-[11px] font-bold rounded-md transition-colors shadow-sm ${
                            isCompleted ? 'bg-handy-dark-red text-white hover:bg-red-900' : 'bg-handy-dark-red text-white hover:bg-red-900'
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
          </article>
          {/* END: Graduation Process Card */}

          {/* BEGIN: Available Services List (Right Column) */}
          <aside className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-red-50 text-handy-dark-red p-3 rounded-xl shrink-0 h-fit">
                <ConciergeBell size={24} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">Available Services</h2>
                <p className="text-[12px] font-medium text-slate-500">Services for the office selected</p>
              </div>
            </div>

            <div className="space-y-1.5">
              {[
                'Graduation Application Checklist', 
                'Request Transcript', 
                'Apply for Clearance', 
                'Add/Drop Subject', 
                'Request Certification'
              ].map(service => (
                <div 
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`p-4 rounded-xl font-bold text-[13px] cursor-pointer transition-all ${
                    activeService === service 
                    ? 'bg-handy-dark-red text-white shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
          </aside>
          {/* END: Available Services List */}
          
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentServices;