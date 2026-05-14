import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import { 
  Book, 
  History, 
  Calendar, 
  GraduationCap, 
  ScrollText, 
  UserPlus, 
  ArrowRightLeft, 
  ListOrdered, 
  Award, 
  UserMinus,
  Sparkles
} from 'lucide-react';

const GuidePage = () => {
  const navigate = useNavigate();

  // Mock Data for Topics to keep the JSX clean
  const topics = [
    { id: 1, title: "Academic Programs", desc: "Undergraduate and graduate degrees, majors, and specializations", icon: <Book size={20} /> },
    { id: 2, title: "Graduation", desc: "Final requirements, application forms, and ceremony participation", icon: <GraduationCap size={20} /> },
    { id: 3, title: "Academic Policies", desc: "Attendance, course credits, integrity, and student conduct codes", icon: <ScrollText size={20} /> },
    { id: 4, title: "Sample", desc: "Final requirements, application forms, and ceremony participation", icon: <GraduationCap size={20} /> },
    { id: 5, title: "Admission", desc: "Attendance, course credits, integrity, and student conduct codes", icon: <UserPlus size={20} /> },
    { id: 6, title: "Graduation", desc: "Final requirements, application forms, and ceremony participation", icon: <GraduationCap size={20} /> },
    { id: 7, title: "Transfer Credits", desc: "Policy for credit transfers from other institutions and internal shifts.", icon: <ArrowRightLeft size={20} /> },
    { id: 8, title: "Graduation", desc: "Final requirements, application forms, and ceremony participation", icon: <GraduationCap size={20} /> },
    { id: 9, title: "Grading System", desc: "GPA calculation, grade scales, and honor roll criteria details.", icon: <ListOrdered size={20} /> },
    { id: 10, title: "Graduation", desc: "Final requirements, application forms, and ceremony participation", icon: <GraduationCap size={20} /> },
    { id: 11, title: "Scholarships", desc: "Available financial aid, merit-based grants, and eligibility.", icon: <Award size={20} /> },
    { id: 12, title: "Graduation", desc: "Final requirements, application forms, and ceremony participation", icon: <GraduationCap size={20} /> },
    { id: 13, title: "Leave of Absence", desc: "Policies for temporary withdrawal and returning student.", icon: <UserMinus size={20} /> },
    { id: 14, title: "Graduation", desc: "Final requirements, application forms, and ceremony participation", icon: <GraduationCap size={20} /> },
  ];

  return (
    <StudentLayout activePage="guide">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-500">
        
        {/* MAIN TOPICS CARD */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <div className="flex gap-4">
              <div className="bg-red-50 text-handy-dark-red p-2.5 rounded-xl shrink-0 h-fit">
                <Book size={24} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">Handbook Topics</h1>
                <p className="text-[13px] font-medium text-slate-500 max-w-2xl leading-relaxed">
                  Access everything you need to know about university policies, academic requirements, and student procedures in one place
                </p>
              </div>
            </div>
            
            {/* Version Metadata */}
            <div className="flex flex-col gap-1.5 shrink-0 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-700">
                <History size={12} className="text-handy-dark-red" />
                <span>Version: <span className="text-slate-500">2013 Handbook</span></span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-700">
                <Calendar size={12} className="text-handy-dark-red" />
                <span>Last Update: <span className="text-slate-500">10/10/2013</span></span>
              </div>
            </div>
          </div>

          {/* Scrollable Topics Grid */}
          <div className="max-h-[500px] overflow-y-auto custom-scrollbar pr-3">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
              {topics.map((topic) => (
                <div 
                  key={topic.id} 
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-red-100 hover:shadow-sm transition-all cursor-pointer group bg-white hover:bg-slate-50/50"
                >
                  <div className="bg-handy-dark-red text-white p-3 rounded-lg shrink-0 group-hover:bg-red-900 transition-colors shadow-sm">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-slate-900 mb-0.5">{topic.title}</h3>
                    <p className="text-[11px] font-medium text-slate-500 leading-snug">{topic.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA CARD */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1 tracking-tight">
              Still can't find what you're looking for?
            </h2>
            <p className="text-[13px] font-medium text-slate-500">
              Try contacting our Student Affairs Office or use our AI for assistance
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button className="px-5 py-2.5 bg-white border-2 border-handy-dark-red text-handy-dark-red text-sm font-bold rounded-lg hover:bg-red-50 transition-colors shadow-sm">
              Contact Support
            </button>
            <button 
              onClick={() => navigate('/chat')}
              className="px-5 py-2.5 bg-handy-dark-red text-white text-sm font-bold rounded-lg hover:bg-red-900 transition-colors shadow-sm flex items-center gap-2"
            >
              <Sparkles size={16} />
              Ask Handybook AI
            </button>
          </div>
        </section>

      </div>
    </StudentLayout>
  );
};

export default GuidePage;