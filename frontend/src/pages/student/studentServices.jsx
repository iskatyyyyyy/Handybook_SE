import React from 'react';
import StudentLayout from '../../layouts/studentLayout';

const StudentServices = () => {
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
            <h3 className="text-3xl font-bold mb-2">Graduation Application Process</h3>
            <p className="text-gray-500 text-sm">Follow these steps to complete your application for graduation.</p>
          </div>
          
          {/* Timeline Body */}
          <div className="p-10 relative">
            <div className="timeline-line hidden sm:block"></div>
            <div className="space-y-12 relative">
              
              {/* Step 1 */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 relative">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 step-active shadow-md">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd"></path></svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3">1. Pre-Registration</h4>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    Log in to the student portal and complete the necessary preliminary forms and data updates.
                  </p>
                  <button className="px-6 py-2 bg-red-50 text-handy-dark-red text-sm font-bold rounded-lg hover:bg-red-100 transition-colors">
                    Go to Portal
                  </button>
                </div>
              </div>

              {/* Step 2 (Selected State) */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 relative">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 bg-handy-dark-red text-white font-bold text-xs shadow-md">2</div>
                <div className="flex-1 p-6 bg-red-50/50 rounded-2xl border border-red-100 sm:-mt-6">
                  <h4 className="text-xl font-bold mb-3">2. Physical Document Verification</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Present your original documents, 2x2 pictures, and completed forms to the Office of the Registrar.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 relative">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 step-inactive font-bold text-xs">3</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-400 mb-2">3. Assessment of Fees</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Wait for your total fees to be calculated by the accounting office based on your records.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 relative">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 step-inactive font-bold text-xs">4</div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-400 mb-2">4. Final Application Completion</h4>
                  <p className="text-gray-400 text-sm">
                    Submit the final payment receipt to claim your graduation stub.
                  </p>
                </div>
              </div>

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