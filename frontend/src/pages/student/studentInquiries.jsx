import React from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { Mail, Search, Plus, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const studentInquiries = () => {
  // Dummy data for the table
  const inquiries = [
    { id: "INQ-2026-089", subject: "Clarification on LOA timeline", date: "May 14, 2026", status: "In Review" },
    { id: "INQ-2026-042", subject: "Request for shifting form", date: "May 10, 2026", status: "Resolved" },
    { id: "INQ-2026-105", subject: "Disputing a minor offense record", date: "May 16, 2026", status: "Pending" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Resolved":
        return <span className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest"><CheckCircle2 size={12} /> Resolved</span>;
      case "In Review":
        return <span className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest"><Clock size={12} /> In Review</span>;
      default:
        return <span className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest"><AlertCircle size={12} /> Pending</span>;
    }
  };

  return (
    <StudentLayout activePage="inquiries">
      <div className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-10">
        
        {/* HEADER SECTION */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 text-handy-dark-red p-3 rounded-xl shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">My Inquiries</h2>
                <p className="text-[13px] font-medium text-slate-500 max-w-2xl leading-relaxed">
                  Track and manage your official requests, questions, and concerns sent to the administration.
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-handy-dark-red hover:bg-red-900 text-white px-6 py-3 rounded-xl font-bold text-[13px] shadow-md transition-all active:scale-95 shrink-0 h-fit">
              <Plus size={16} />
              New Inquiry
            </button>
          </div>
        </section>

        {/* INQUIRIES TABLE */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          {/* Controls Bar */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search ticket ID or subject..." 
                className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-[12px] font-medium text-slate-700 outline-none focus:border-handy-dark-red focus:ring-1 focus:ring-handy-dark-red transition-all"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest">
                  <th className="p-4 pl-6">Ticket ID</th>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Date Submitted</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 pr-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[13px]">
                {inquiries.map((inq, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-4 pl-6 font-bold text-slate-700">{inq.id}</td>
                    <td className="p-4 font-semibold text-slate-900 group-hover:text-handy-dark-red transition-colors">{inq.subject}</td>
                    <td className="p-4 text-slate-500 font-medium">{inq.date}</td>
                    <td className="p-4">{getStatusBadge(inq.status)}</td>
                    <td className="p-4 pr-6 text-right">
                      <button className="text-[12px] font-bold text-handy-dark-red hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </StudentLayout>
  );
};

export default studentInquiries;