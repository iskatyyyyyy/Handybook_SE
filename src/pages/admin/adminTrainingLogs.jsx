import React from 'react';
import AdminLayout from '../../layouts/adminLayout';

const AdminTrainingLogs = () => {
  // Original mock data from your group's code
  const logs = [
    { id: 1, query: "Can I appeal for a grade change after the 1-week deadline?", status: "Escalated", confidence: "42%", time: "10 mins ago" },
    { id: 2, query: "What are the specific requirements for the BSET program in Visayas?", status: "Pending", confidence: "58%", time: "1 hr ago" },
    { id: 3, query: "How many units can a student under probation take?", status: "Solved", confidence: "94%", time: "3 hrs ago" },
  ];

  return (
    <AdminLayout activePage="logs">
      {/* BEGIN: Header Section */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">AI Training & Logs</h2>
          <p className="text-slate-500 mt-1 text-lg">Monitor and refine university AI responses.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-xl bg-white text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors text-slate-700">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Export Report
        </button>
      </div>
      {/* END: Header Section */}

      {/* BEGIN: Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* AI Accuracy */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-sm font-bold mb-2">Overall Accuracy</p>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-4xl font-black text-slate-900">94.4%</span>
            <span className="text-sm font-bold text-green-500 flex items-center">
              Optimal
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '94.4%' }}></div>
          </div>
        </div>

        {/* Low Confidence Rate */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-sm font-bold mb-2">Low Confidence Rate</p>
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-4xl font-black text-slate-900">5.9%</span>
            <span className="text-sm font-bold text-orange-400 flex items-center">
              Improving
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-1.5">
            <div className="bg-red-600 h-1.5 rounded-full" style={{ width: '5.9%' }}></div>
          </div>
        </div>

        {/* Most Viewed Section */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <p className="text-slate-400 text-sm font-bold mb-2 leading-tight">Overall Most Viewed<br/>Section</p>
          <p className="text-2xl font-black text-slate-900 truncate mt-auto">Rules of Co...</p>
        </div>

        {/* Total Queries */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-sm font-bold mb-2">Total Queries</p>
          <div className="flex items-end justify-between gap-2 mt-4">
            <span className="text-4xl font-black text-slate-900 leading-none">789</span>
            <span className="text-sm font-bold text-slate-400">+12 today</span>
          </div>
        </div>

      </div>
      {/* END: Metrics Grid */}

      {/* BEGIN: Unanswered Queries List */}
      <div className="bg-[#FCF8F8] rounded-3xl shadow-sm border border-red-50 overflow-hidden mb-10">
        
        {/* Table Header */}
        <div className="p-6 border-b border-red-100/50 flex justify-between items-center bg-white/50">
          <div className="flex items-center gap-3 text-slate-900">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <h3 className="text-xl font-extrabold">Query Resolution Queue</h3>
          </div>
          <span className="text-sm font-bold text-handy-dark-red hover:underline cursor-pointer pr-4">View All Logs</span>
        </div>

        {/* Dynamic Queries List */}
        <div className="divide-y divide-red-50/60">
          
          {logs.map((log) => (
            <div key={log.id} className="p-6 flex items-center justify-between hover:bg-white/40 transition-colors">
              <div className="pr-8">
                <p className="text-base font-medium text-slate-900 mb-2">
                  "{log.query}"
                </p>
                <p className="text-sm text-slate-500">
                  Confidence: <span className={parseInt(log.confidence) < 50 ? 'text-red-500 font-bold' : 'text-slate-500'}>{log.confidence}</span> 
                  <span className="mx-2 text-slate-300">|</span> {log.time}
                </p>
              </div>
              
              {/* Dynamic Status Badge */}
              <span className={`px-4 py-1.5 text-[11px] font-black rounded-full uppercase tracking-widest shadow-sm ${
                log.status === 'Solved' ? 'bg-green-100 text-green-700' :
                log.status === 'Escalated' ? 'bg-red-100 text-red-700' :
                'bg-amber-100 text-amber-700'
              }`}>
                {log.status}
              </span>
            </div>
          ))}

        </div>
      </div>
      {/* END: Unanswered Queries List */}

      {/* BEGIN: Common Keywords */}
      <div className="bg-[#FCF8F8] rounded-3xl shadow-sm border border-red-50 overflow-hidden mb-10">
        <div className="p-6 border-b border-red-100/50 flex justify-between items-center bg-white/50">
          <h3 className="text-xl font-extrabold text-slate-900">Common Key Words</h3>
          <span className="text-sm font-bold text-handy-dark-red hover:underline cursor-pointer">View All Logs</span>
        </div>
        <div className="flex bg-red-900/5 py-4 px-6">
          <div className="flex-1 text-sm font-bold text-slate-600">Word/Phrase</div>
          <div className="flex-1 text-sm font-bold text-slate-600">Relevance</div>
        </div>
        <div className="p-6 bg-white h-32 flex items-center justify-center text-slate-400 font-medium">
           No active keywords to display yet.
        </div>
      </div>
      {/* END: Common Keywords */}

    </AdminLayout>
  );
};

export default AdminTrainingLogs;