import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/adminLayout';
import { ArrowLeft, Search, Filter } from 'lucide-react';

const AdminAllLogs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Expanded Mock Data for the full list
  const allLogs = [
    { id: 1, query: "Can I appeal for a grade change after the 1-week deadline?", status: "Escalated", confidence: "42%", time: "10 mins ago" },
    { id: 2, query: "What are the specific requirements for the BSET program in Visayas?", status: "Pending", confidence: "58%", time: "1 hr ago" },
    { id: 3, query: "How many units can a student under probation take?", status: "Solved", confidence: "94%", time: "3 hrs ago" },
    { id: 4, query: "Where do I submit my medical certificate for absence?", status: "Solved", confidence: "98%", time: "5 hrs ago" },
    { id: 5, query: "Is the IT Center open on weekends for thesis rendering?", status: "Pending", confidence: "61%", time: "1 day ago" },
    { id: 6, query: "I lost my ID, what is the exact step-by-step process?", status: "Solved", confidence: "89%", time: "1 day ago" },
    { id: 7, query: "Can I wear civilian clothes during laboratory days?", status: "Escalated", confidence: "35%", time: "2 days ago" },
  ];

  // Logic to filter the logs based on search text and status dropdown
  const filteredLogs = allLogs.filter(log => {
    const matchesSearch = log.query.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || log.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout activePage="logs">
      <div className="max-w-5xl mx-auto pb-12">
        
        {/* Header with Back Button */}
        <header className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2.5 bg-white border border-slate-200 text-slate-500 hover:text-handy-dark-red hover:bg-red-50 rounded-xl transition-all shadow-sm"
            title="Go Back"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Full Query Queue</h1>
            <p className="text-slate-500 mt-1">Review all user inquiries and AI confidence levels.</p>
          </div>
        </header>

        {/* Controls: Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search user queries..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-handy-dark-red outline-none shadow-sm transition-all"
            />
          </div>
          <div className="relative w-full sm:w-48">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-700 focus:ring-2 focus:ring-handy-dark-red outline-none shadow-sm appearance-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Escalated">Escalated</option>
              <option value="Pending">Pending</option>
              <option value="Solved">Solved</option>
            </select>
          </div>
        </div>

        {/* The Logs List */}
        <div className="bg-[#FCF8F8] rounded-3xl shadow-sm border border-red-50 overflow-hidden">
          <div className="divide-y divide-red-50/60">
            {filteredLogs.length === 0 ? (
              <div className="p-12 text-center text-slate-400 font-medium">
                No logs found matching your criteria.
              </div>
            ) : (
              filteredLogs.map((log) => (
                <div key={log.id} className="p-6 flex items-center justify-between bg-white/50 hover:bg-white transition-colors">
                  <div className="pr-8 flex-1">
                    <p className="text-base font-medium text-slate-900 mb-2 leading-relaxed">
                      "{log.query}"
                    </p>
                    <p className="text-sm text-slate-500">
                      Confidence: <span className={parseInt(log.confidence) < 50 ? 'text-red-500 font-bold' : 'text-slate-500 font-bold'}>{log.confidence}</span> 
                      <span className="mx-2 text-slate-300">|</span> {log.time}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <span className={`px-4 py-1.5 text-[11px] font-black rounded-full uppercase tracking-widest shadow-sm ${
                      log.status === 'Solved' ? 'bg-green-100 text-green-700' :
                      log.status === 'Escalated' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {log.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Pagination Footer */}
          {filteredLogs.length > 0 && (
            <div className="p-4 border-t border-red-50 bg-white flex justify-center">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">Showing {filteredLogs.length} of {allLogs.length} Logs</p>
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminAllLogs;