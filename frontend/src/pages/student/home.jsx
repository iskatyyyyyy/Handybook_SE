import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  HelpCircle, 
  TrendingUp, 
  Shirt, 
  Monitor, 
  Copy 
} from 'lucide-react';

import Courses from '../../assets/stock/courses.svg';
import Grading from '../../assets/stock/grading.svg';
import Graduate from '../../assets/stock/graduate-image.svg';
import Registration from '../../assets/stock/registration.svg';

const Home = () => {
  const navigate = useNavigate();
  
  // State to handle the open/close of the FAQ accordion
  const [openFaq, setOpenFaq] = useState(3); // Defaulting the 4th item to open to match Figma design

  return (
    <StudentLayout activePage="home">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-500">
        
        {/* 1. HERO SECTION */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 flex items-center gap-2 tracking-tight">
              Hello there, Andrea <span className="text-2xl sm:text-3xl">👋</span>
            </h1>
            <p className="text-sm font-medium text-slate-500">Let's find what you are looking for today!</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => navigate('/preview-handbook')}
              className="px-5 py-2.5 bg-white border-2 border-handy-dark-red text-handy-dark-red text-sm font-bold rounded-lg hover:bg-red-50 transition-colors shadow-sm"
            >
              View Handbook
            </button>
            <button 
              onClick={() => navigate('/chat')}
              className="px-5 py-2.5 bg-handy-dark-red text-white text-sm font-bold rounded-lg hover:bg-red-900 transition-colors shadow-sm flex items-center gap-2"
            >
              <Sparkles size={16} />
              Ask Hance
            </button>
          </div>
        </section>

        {/* 2. MOST VIEWED SECTION */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          <h2 className="text-base font-extrabold text-slate-900 mb-5 tracking-tight">Most Viewed</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="h-28 overflow-hidden bg-slate-100">
                <img src={Graduate} alt="Graduation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white border-t border-slate-50">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Academic Honors</h3>
                <p className="text-[11px] font-medium text-slate-500">Honors & Awards</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="h-28 overflow-hidden bg-slate-100">
                <img src={Grading} alt="Checklist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white border-t border-slate-50">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Grading System</h3>
                <p className="text-[11px] font-medium text-slate-500">Evaluation Criteria</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="h-28 overflow-hidden bg-slate-100">
                <img src={Registration} alt="Writing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white border-t border-slate-50">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Registration</h3>
                <p className="text-[11px] font-medium text-slate-500">Registration Process & Policy</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <div className="h-28 overflow-hidden bg-slate-100">
                <img src={Courses} alt="Lecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white border-t border-slate-50">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Academic Programs</h3>
                <p className="text-[11px] font-medium text-slate-500">Different courses and programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BOTTOM GRID (Trending & FAQs) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 pb-6">
          
          {/* Trending Suggestions */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-50 text-handy-dark-red p-2 rounded-lg">
                <TrendingUp size={18} />
              </div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Trending Suggestions</h2>
            </div>
            
            <div className="space-y-3">
              {/* Item 1 */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-slate-50/50 hover:bg-white">
                <div className="bg-handy-dark-red text-white p-2.5 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                  <Shirt size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">Dress Code Policy</h4>
                  <p className="text-[11px] font-medium text-slate-500">Guidelines and policy for proper attire</p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-slate-50/50 hover:bg-white">
                <div className="bg-handy-dark-red text-white p-2.5 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                  <Monitor size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">IT Resources</h4>
                  <p className="text-[11px] font-medium text-slate-500">How to access and use IT resources</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-slate-50/50 hover:bg-white">
                <div className="bg-handy-dark-red text-white p-2.5 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                  <Copy size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">Sample Header</h4>
                  <p className="text-[11px] font-medium text-slate-500">Sample description text</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-slate-50/50 hover:bg-white">
                <div className="bg-handy-dark-red text-white p-2.5 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                  <Copy size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">Sample Header</h4>
                  <p className="text-[11px] font-medium text-slate-500">Sample description text</p>
                </div>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-handy-dark-red text-white p-1.5 rounded-full shadow-sm">
                <HelpCircle size={16} />
              </div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            </div>
            
            <div className="flex-1 flex flex-col justify-start">
              {[
                { id: 0, question: "How to drop a subject?" },
                { id: 1, question: "Where is the UITC Office?" },
                { id: 2, question: "How can I replace my lost ID?" },
                { id: 3, question: "How can I get a replacement for my lost COR?", answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque." },
                { id: 4, question: "How to apply for LOA?" },
                { id: 5, question: "Sample question here" },
              ].map((faq) => (
                <div key={faq.id} className="border-b border-slate-100 last:border-0">
                  <button 
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full py-4 flex items-center gap-3 text-left group outline-none"
                  >
                    <div className="text-handy-dark-red shrink-0 transition-transform duration-200">
                      {openFaq === faq.id ? <ChevronDown size={18} strokeWidth={2.5} /> : <ChevronRight size={18} strokeWidth={2.5} />}
                    </div>
                    <span className="text-[13px] font-bold text-slate-900 group-hover:text-handy-dark-red transition-colors">
                      {faq.question}
                    </span>
                  </button>
                  
                  {/* Expanded Content */}
                  {openFaq === faq.id && faq.answer && (
                    <div className="pb-5 pl-8 pr-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </StudentLayout>
  );
};

export default Home;