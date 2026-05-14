import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/adminLayout';
import { 
  Download, 
  Bot, 
  Activity, 
  LayoutGrid, 
  MessageSquare,
  EyeOff,
  Search
} from 'lucide-react';

const AdminTrainingLogs = () => {
  const navigate = useNavigate();
  
  // Mock data updated to match the Figma mockup
  const logs = [
    { id: 1, query: "What are the specific requirements for the BSET program in Visayas?", status: "ESCALATED", confidence: "56%", time: "10 mins ago" },
    { id: 2, query: "What are the specific requirements for the BSET program in Visayas?", status: "ESCALATED", confidence: "56%", time: "23 mins ago" },
    { id: 3, query: "How many units can a student under probation take?", status: "PENDINGS", confidence: "56%", time: "10 mins ago" },
    { id: 4, query: "Is the 2013 Student Handbook still valid for graduation requirements of 2026 cohort?", status: "PENDINGS", confidence: "56%", time: "10 mins ago" },
    { id: 5, query: "Is the 2013 Student Handbook still valid for graduation requirements of 2026 cohort?", status: "SOLVED", confidence: "56%", time: "10 mins ago" },
    { id: 6, query: "Is the 2013 Student Handbook still valid for graduation requirements of 2026 cohort?", status: "SOLVED", confidence: "56%", time: "10 mins ago" },
  ];

  return (
    <AdminLayout activePage="logs">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-500">
        
        {/* BEGIN: Hero Header Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">
              AI Training and Logs
            </h1>
            <p className="text-[13px] font-medium text-slate-500">Monitor and refine university AI responses.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-5 py-2.5 bg-white border-2 border-handy-dark-red text-handy-dark-red text-[13px] font-bold rounded-lg hover:bg-red-50 transition-colors shadow-sm flex items-center gap-2">
              <Download size={16} />
              Export Report
            </button>
          </div>
        </section>
        {/* END: Hero Header Card */}

        {/* BEGIN: Metrics Grid (Solid Colored Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: AI Accuracy */}
          <div className="bg-[#3B82F6] p-6 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#3B82F6] shrink-0">
              <Bot size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-1">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">98.7%</p>
              <p className="text-[11px] font-semibold opacity-90">AI Accuracy</p>
            </div>
          </div>

          {/* Card 2: Confidence Rate */}
          <div className="bg-[#F59E0B] p-6 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#F59E0B] shrink-0">
              <Activity size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-1">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">5.8%</p>
              <p className="text-[11px] font-semibold opacity-90">Confidence Rate</p>
            </div>
          </div>

          {/* Card 3: Most Viewed */}
          <div className="bg-[#A855F7] p-6 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A855F7] shrink-0">
              <LayoutGrid size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-1">
              <p className="text-base font-extrabold leading-tight tracking-tight mb-0.5">Rules of Conduct</p>
              <p className="text-[11px] font-semibold opacity-90">Most Viewed</p>
            </div>
          </div>

          {/* Card 4: Total AI Answered */}
          <div className="bg-handy-dark-red p-6 rounded-2xl shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-handy-dark-red shrink-0">
              <MessageSquare size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-1">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">1,567</p>
              <p className="text-[11px] font-semibold opacity-90">Total AI Answered</p>
            </div>
          </div>

        </div>
        {/* END: Metrics Grid */}

        {/* BEGIN: Bottom Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pb-6">
          
          {/* Left Column: Unanswered / Low Confidence Queries */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden">
            
            <div className="p-6 border-b border-slate-50 flex items-center gap-3">
              <div className="bg-red-50 text-handy-dark-red p-1.5 rounded-md">
                <EyeOff size={18} />
              </div>
              <h3 className="font-extrabold text-[15px] text-slate-900 tracking-tight">Unanswered / Low Confidence Queries</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto max-h-[500px] p-5 space-y-3 custom-scrollbar">
              {logs.map((log) => (
                <div key={log.id} className="border border-slate-100 rounded-xl p-4 sm:p-5 flex justify-between items-start gap-4 hover:border-slate-200 transition-colors bg-white">
                  <div>
                    <p className="text-[13px] font-bold text-slate-900 mb-2.5 leading-snug">{log.query}</p>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
                      <span>Confidence: <span className="font-bold text-slate-700">{log.confidence}</span></span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>{log.time}</span>
                    </div>
                  </div>
                  
                  {/* Dynamic Status Pill */}
                  <div className={`px-2.5 py-1 rounded-md text-[9px] font-extrabold uppercase tracking-widest shrink-0 mt-1 ${
                    log.status === 'SOLVED' ? 'bg-[#EBFBF0] text-[#16A34A]' :
                    log.status === 'ESCALATED' ? 'bg-[#FEEBEB] text-handy-dark-red' :
                    'bg-[#FEF3C7] text-[#D97706]' // PENDINGS
                  }`}>
                    {log.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Common Keywords */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden">
            
            <div className="p-6 border-b border-slate-50 flex items-center gap-3">
              <div className="bg-red-50 text-handy-dark-red p-1.5 rounded-md">
                <Search size={18} />
              </div>
              <h3 className="font-extrabold text-[15px] text-slate-900 tracking-tight">Common Keywords</h3>
            </div>
            
            <div className="flex justify-between px-6 py-4 border-b border-slate-50">
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Word/Phrase</span>
              <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Relevance</span>
            </div>
            
            {/* Empty State */}
            <div className="flex-1 flex items-center justify-center p-8 min-h-[300px]">
              <p className="text-[12px] font-bold text-slate-400">No active keywords to display yet</p>
            </div>
            
          </div>
          
        </div>
        {/* END: Bottom Content Row */}

      </div>
    </AdminLayout>
  );
};

export default AdminTrainingLogs;