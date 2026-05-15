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
  Award,
  Timer
} from 'lucide-react';

import Courses from '../../assets/stock/courses.svg';
import Grading from '../../assets/stock/grading.svg';
import Graduate from '../../assets/stock/graduate-image.svg';
import Registration from '../../assets/stock/registration.svg';

const Home = () => {
  const navigate = useNavigate();
  
  // State to handle the open/close of the FAQ accordion
  const [openFaq, setOpenFaq] = useState(null); 

  const faqs = [
    { 
      id: 0, 
      question: "How do I add, drop, or change a subject?", 
      answer: "This is commonly done during the first two weeks of the semester. Secure the form from the Registrar, get it validated by your Department Head, signed by your Dean, and submit it back to the Registrar's Office." 
    },
    { 
      id: 1, 
      question: "How do I apply for a Leave of Absence (LOA)?", 
      answer: "Write a formal letter to the University Registrar, endorsed by your guardian and department head. Secure the Dean's approval and a university clearance, then submit it before midterm exams." 
    },
    { 
      id: 2, 
      question: "How can I fix a locked TUP portal or email account?", 
      answer: "Email uitc@tup.edu.ph using your backup email with the subject 'ACCOUNT REQUEST - [Your Student Number]'. Include your full name, course, section, and attach a screenshot of the error along with your TUP ID." 
    },
    { 
      id: 3, 
      question: "What is the process for replacing a lost rating slip?", 
      answer: "First, secure an Affidavit of Loss from the Manila City Hall. Get an assessment at Registrar Window 1, pay the fee at the cashier, and return to Window 1 with your receipt and notarized affidavit." 
    },
    { 
      id: 4, 
      question: "How can I access the library's special collections?", 
      answer: "Onsite: Go to the 3rd floor, fill out a request slip, and surrender your ID. Online: Visit the TUP Library Web Portal and log in via OpenAthens using your TUP email." 
    },
    { 
      id: 5, 
      question: "How do I request a medical or dental consultation?", 
      answer: "Visit the clinic on the ground floor of the main building (no transactions on Fridays). Present your TUP ID, log your symptoms, get your vitals checked, and wait for the university doctor or dentist." 
    },
  ];

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
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate('/guide?topicId=9')}>
              <div className="h-28 overflow-hidden bg-slate-100">
                <img src={Graduate} alt="Graduation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white border-t border-slate-50">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Academic Honors</h3>
                <p className="text-[11px] font-medium text-slate-500">Honors & Awards</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate('/guide?topicId=8')}>
              <div className="h-28 overflow-hidden bg-slate-100">
                <img src={Grading} alt="Checklist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white border-t border-slate-50">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Grading System</h3>
                <p className="text-[11px] font-medium text-slate-500">Evaluation Criteria</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate('/services')}>
              <div className="h-28 overflow-hidden bg-slate-100">
                <img src={Registration} alt="Writing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-white border-t border-slate-50">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Registration</h3>
                <p className="text-[11px] font-medium text-slate-500">Registration Process & Policy</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group" onClick={() => navigate('/guide?topicId=2')}>
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
              <div onClick={() => navigate('/rules')} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-slate-50/50 hover:bg-white">
                <div className="bg-handy-dark-red text-white p-2.5 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                  <Shirt size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5 group-hover:text-handy-dark-red transition-colors">Dress Code Policy</h4>
                  <p className="text-[11px] font-medium text-slate-500">Guidelines and policy for proper attire</p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div onClick={() => navigate('/services')} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-slate-50/50 hover:bg-white">
                <div className="bg-handy-dark-red text-white p-2.5 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                  <Monitor size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5 group-hover:text-handy-dark-red transition-colors">IT Resources</h4>
                  <p className="text-[11px] font-medium text-slate-500">How to access and use IT resources</p>
                </div>
              </div>

              {/* Item 3 */}
              <div onClick={() => navigate('/services')} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-slate-50/50 hover:bg-white">
                <div className="bg-handy-dark-red text-white p-2.5 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5 group-hover:text-handy-dark-red transition-colors">Latin Honors Application</h4>
                  <p className="text-[11px] font-medium text-slate-500">Apply for academic distinction upon graduation</p>
                </div>
              </div>

              {/* Item 4 */}
              <div onClick={() => navigate('/guide?topicId=4')} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-slate-50/50 hover:bg-white">
                <div className="bg-handy-dark-red text-white p-2.5 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                  <Timer size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5 group-hover:text-handy-dark-red transition-colors">Maximum Residency Rule</h4>
                  <p className="text-[11px] font-medium text-slate-500">Time limits for degree completion</p>
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
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-slate-100 last:border-0">
                  <button 
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full py-4 flex items-center gap-3 text-left group outline-none"
                  >
                    <div className="text-handy-dark-red shrink-0 transition-transform duration-200">
                      {openFaq === faq.id ? <ChevronDown size={18} strokeWidth={2.5} /> : <ChevronRight size={18} strokeWidth={2.5} />}
                    </div>
                    <span className="text-[13px] font-bold text-slate-900 group-hover:text-handy-dark-red transition-colors pr-4 leading-snug">
                      {faq.question}
                    </span>
                  </button>
                  
                  {/* Expanded Content */}
                  {openFaq === faq.id && (
                    <div className="pb-5 pl-8 pr-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      <p className="text-[12px] leading-relaxed text-slate-600 font-medium">
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