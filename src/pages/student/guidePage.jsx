import React from 'react';
import StudentLayout from '../../layouts/studentLayout';

const GuidePage = () => {
  return (
    <StudentLayout activePage="guide">
      {/* BEGIN: Hero Search Section */}
      <section className="bg-white px-8 py-16 text-center border-b border-gray-100 rounded-t-3xl" data-purpose="hero-search">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">How can we help you today?</h1>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Access everything you need to know about university policies, academic requirements, and student procedures in one place.
          </p>

          <div className="relative flex items-center mb-6" data-purpose="search-input-group">
            <div className="absolute left-4 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <input 
              className="w-full pl-12 pr-32 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-handy-dark-red shadow-inner" 
              placeholder="Search for policies, programs, or requirements..." 
              type="text"
            />
            <button className="absolute right-2 bg-handy-dark-red text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-red-900 transition-colors">
              Search
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-wider text-gray-400 flex-wrap">
            <span>Popular:</span>
            <a className="px-3 py-1 bg-red-50 text-handy-dark-red rounded-full border border-red-100 hover:bg-red-100 transition-colors" href="#">Graduation Requirements</a>
            <a className="px-3 py-1 bg-red-50 text-handy-dark-red rounded-full border border-red-100 hover:bg-red-100 transition-colors" href="#">Leave of Absence</a>
            <a className="px-3 py-1 bg-red-50 text-handy-dark-red rounded-full border border-red-100 hover:bg-red-100 transition-colors" href="#">Scholarships</a>
          </div>
        </div>
      </section>
      {/* END: Hero Search Section */}

      {/* BEGIN: Handbook Topics Grid */}
      <section className="py-10" data-purpose="handbook-topics">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900">Handbook Topics</h2>
            <a className="text-sm font-bold text-handy-dark-red flex items-center gap-1 hover:underline cursor-pointer">
              View all Topics 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </a>
          </div>
          <p className="text-gray-500 mb-10">Select a category to view detailed guidelines and procedures.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card: Academic Programs */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Academic Programs</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Overview of undergraduate and graduate degrees, majors, and specializations.
              </p>
            </div>

            {/* Card: Academic Policies */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Academic Policies</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Rules on attendance, course credits, integrity, and student conduct codes.
              </p>
            </div>

            {/* Card: Admission */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Admission</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Entry requirements, application deadlines, and enrollment procedures for new students.
              </p>
            </div>

            {/* Card: Transfer Credit */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 11l5-5m0 0l5 5m-5-5v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Transfer Credit</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Guidelines for credit transfers from other institutions and internal shifts.
              </p>
            </div>

            {/* Card: Grading System */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Grading System</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                GPA calculation, grade scales, and honor roll criteria details.
              </p>
            </div>

            {/* Card: Scholarships */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Scholarships</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Available financial aid, merit-based grants, and application eligibility.
              </p>
            </div>

            {/* Card: Leave of Absence */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Leave of Absence</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Procedures for temporary withdrawal and returning student policies.
              </p>
            </div>

            {/* Card: Graduation */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-50 hover:-translate-y-1 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-handy-dark-red rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 0V3m0 0l6.232 6.232l-3.536 3.536m-2.696-2.696a2.5 2.5 0 10-3.536 3.536" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Graduation</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Final requirements, application forms, and ceremony participation info.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* END: Handbook Topics Grid */}

      {/* BEGIN: Support CTA Section */}
      <section className="py-10 mb-10" data-purpose="support-cta">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F8F1F1] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-red-50">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Still can't find what you're looking for?</h2>
              <p className="text-gray-600">
                Contact our Student Affairs office or visit our physical desk at TUP Manila.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button className="px-8 py-3 bg-white border border-handy-dark-red text-handy-dark-red font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                Contact Support
              </button>
              <button className="px-8 py-3 bg-handy-dark-red text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg">
                Ask a Question
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* END: Support CTA Section */}

    </StudentLayout>
  );
};

export default GuidePage;