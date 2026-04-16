import React from 'react';
import StudentLayout from '../../layouts/studentLayout';

const Home = () => {
  return (
    <StudentLayout activePage="home">
      {/* Hero Banner from Figma */}
      <section className="relative bg-handy-dark-red rounded-[32px] p-12 text-white shadow-2xl mb-12 overflow-hidden">
        <div className="max-w-2xl relative z-10">
          {/* Maintained the group's dummy data name */}
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Good morning, Andrea!</h1>
          <p className="text-white/80 font-medium mb-10">2013 Handbook Version | Last Updated: Today</p>
          <button className="bg-white text-handy-dark-red px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-sm">
            View Handbook
          </button>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-white to-transparent"></div>
      </section>

      <div className="flex gap-8">
        {/* Left Column (Most Viewed & Trending) */}
        <div className="flex-1 space-y-12">
          
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Most Viewed</h2>
              <span className="text-handy-dark-red font-bold hover:underline cursor-pointer">View all</span>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <div className="bg-[#F8F8F8] h-32 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-handy-dark-red flex items-center justify-center">
                    <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                </div>
                <div className="px-2 pb-4 text-center sm:text-left">
                  <h3 className="font-bold text-gray-900">Academic Honors</h3>
                  <p className="text-xs text-gray-500 mt-1">Honors & Awards</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <div className="bg-[#F8F8F8] h-32 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-10 h-10 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                </div>
                <div className="px-2 pb-4 text-center sm:text-left">
                  <h3 className="font-bold text-gray-900">Grading System</h3>
                  <p className="text-xs text-gray-500 mt-1">Evaluation Criteria</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <div className="bg-[#F8F8F8] h-32 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-10 h-10 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                </div>
                <div className="px-2 pb-4 text-center sm:text-left">
                  <h3 className="font-bold text-gray-900">Registration</h3>
                  <p className="text-xs text-gray-500 mt-1">Registration</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              <h2 className="text-2xl font-bold text-gray-800">Trending Suggestions</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4 min-w-[320px] cursor-pointer">
                <div className="bg-[#FEEBEB] p-4 rounded-xl text-handy-dark-red">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" fillRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Dress Code Policy</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Updated guidelines for laboratory sessions and formal events.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4 min-w-[320px] cursor-pointer">
                <div className="bg-[#EBF1FE] p-4 rounded-xl text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" fillRule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">IT Resources</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">How to access campus-wide high speed Wi-Fi networks?</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar (FAQ) */}
        <aside className="w-80 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 rounded-full border-2 border-handy-dark-red flex items-center justify-center">
                <svg className="w-4 h-4 text-handy-dark-red" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" fillRule="evenodd"></path></svg>
              </div>
              <h3 className="text-lg font-extrabold text-gray-900">Frequently Asked</h3>
            </div>
            
            <div className="space-y-1 mb-8">
              {['How to drop a subject?', 'Where is the UITC office?', 'Lost ID replacement', 'Lost COR', 'How to apply for a LOA?'].map((q, i) => (
                <button key={i} className="w-full flex items-center justify-between py-4 text-left border-b border-gray-50 hover:bg-gray-50 transition-colors px-2 rounded-lg group">
                  <span className="text-sm font-semibold text-gray-700">{q}</span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-handy-dark-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </button>
              ))}
            </div>
            
            <button className="mt-auto w-full border-2 border-handy-dark-red text-handy-dark-red py-3 rounded-xl font-bold hover:bg-handy-dark-red hover:text-white transition-all">
              Explore all FAQs
            </button>
          </div>
        </aside>
      </div>
    </StudentLayout>
  );
};

export default Home;