import React, { useState } from 'react';
import AdminLayout from '../../layouts/adminLayout';
import { 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  User, 
  Sparkles,
  Send,
  MoreVertical,
  MapPin // Imported MapPin for the Source indicator
} from 'lucide-react';

const AdminInquiries = () => {
  // 1. Mock Data Setup (Including Source & AI Chat Context)
  const initialInquiries = [
    {
      id: "INQ-2026-089",
      studentName: "Andrea Gomez",
      studentId: "TUPM-24-1029",
      time: "10 mins ago",
      status: "Pending",
      severity: "Critical",
      subject: "Grade modification appeal missing deadline",
      source: "Handybook AI", // Source tracking
      aiContext: [
        { sender: "user", text: "How do I appeal a failing grade?" },
        { sender: "ai", text: "According to the 2013 Handbook, grade appeals must be submitted to the Dean's Office within 1 week of the grade posting." },
        { sender: "user", text: "But my professor was on leave and just posted it today, which is exactly 8 days late! Can I still appeal?" },
        { sender: "ai", text: "The handbook strictly states a 1-week deadline. For exceptions regarding professor leave, I recommend speaking to the Registrar." }
      ],
      escalationMessage: "I need human assistance. The AI says the deadline passed but it wasn't my fault the grade was posted late. Who do I talk to?",
    },
    {
      id: "INQ-2026-088",
      studentName: "Juno Assidons",
      studentId: "TUPM-23-0411",
      time: "1 hr ago",
      status: "Pending",
      severity: "Medium",
      subject: "Shifting requirements for BSET",
      source: "Handybook AI",
      aiContext: [
        { sender: "user", text: "What are the requirements to shift to BSET?" },
        { sender: "ai", text: "To shift to the Bachelor of Science in Engineering Technology (BSET) program, you must have a minimum GPA of 2.0 and no failing grades in math courses." }
      ],
      escalationMessage: "I have a 2.1 GPA but I dropped a math class last year. Does a 'Dropped' status count as a failing grade for shifting?",
    },
    {
      id: "INQ-2026-085",
      studentName: "Marcus Reyes",
      studentId: "TUPM-25-8821",
      time: "2 hrs ago",
      status: "Resolved",
      severity: "Low",
      subject: "Lost ID Replacement form",
      source: "Student Services Page", // Direct page source
      aiContext: [], // Empty context because it bypassed the AI!
      escalationMessage: "Where can I download the exact PDF form for a lost ID replacement? The link on the website is broken.",
    }
  ];

  // 2. State Management
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [activeId, setActiveId] = useState("INQ-2026-089"); // Default active
  const [statusFilter, setStatusFilter] = useState("Pending");
  const [severityFilter, setSeverityFilter] = useState("All");
  const [replyText, setReplyText] = useState("");

  // 3. Derived State & Helpers
  const activeInquiry = inquiries.find(inq => inq.id === activeId);

  const filteredInquiries = inquiries.filter(inq => {
    const matchStatus = statusFilter === "All" || inq.status === statusFilter;
    const matchSeverity = severityFilter === "All" || inq.severity === severityFilter;
    return matchStatus && matchSeverity;
  });

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Medium': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Low': return 'bg-slate-100 text-slate-700 border-slate-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const handleResolve = () => {
    setInquiries(inquiries.map(inq => 
      inq.id === activeId ? { ...inq, status: "Resolved" } : inq
    ));
    setReplyText("");
  };

  const handleSeverityChange = (newSeverity) => {
    setInquiries(inquiries.map(inq => 
      inq.id === activeId ? { ...inq, severity: newSeverity } : inq
    ));
  };

  return (
    <AdminLayout activePage="inquiries">
      <div className="h-full flex gap-4 sm:gap-6 w-full mx-auto animate-in fade-in duration-500 overflow-hidden pb-4">
        
        {/* =========================================
            LEFT PANE: INBOX LIST
        ========================================= */}
        <aside className="w-full md:w-80 lg:w-96 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col shrink-0 overflow-hidden">
          
          {/* Inbox Header & Filters */}
          <div className="p-5 border-b border-slate-100 shrink-0 bg-slate-50/50">
            <h2 className="text-[16px] font-extrabold text-slate-900 tracking-tight mb-4">Inquiries Queue</h2>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                <input 
                  type="text" 
                  placeholder="Search students or IDs..." 
                  className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-[12px] font-medium text-slate-700 focus:ring-2 focus:ring-handy-dark-red/20 focus:border-handy-dark-red outline-none transition-all placeholder:font-normal placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 bg-white border border-slate-200 text-slate-700 text-[11px] font-bold rounded-lg py-2 px-2 outline-none cursor-pointer focus:border-handy-dark-red focus:ring-1 focus:ring-handy-dark-red transition-all"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
              </select>
              <select 
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="flex-1 bg-white border border-slate-200 text-slate-700 text-[11px] font-bold rounded-lg py-2 px-2 outline-none cursor-pointer focus:border-handy-dark-red focus:ring-1 focus:ring-handy-dark-red transition-all"
              >
                <option value="All">All Severity</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Inbox List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {filteredInquiries.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-[13px] font-medium">
                No inquiries match your filters.
              </div>
            ) : (
              <div className="divide-y divide-slate-50">
                {filteredInquiries.map((inq) => {
                  const isActive = inq.id === activeId;
                  return (
                    <div 
                      key={inq.id}
                      onClick={() => setActiveId(inq.id)}
                      className={`p-4 cursor-pointer transition-all relative outline-none ${
                        isActive ? 'bg-red-50/40' : 'hover:bg-slate-50/80 bg-white'
                      }`}
                    >
                      {/* Active Indicator Line */}
                      {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-handy-dark-red rounded-r-md"></div>}
                      
                      <div className="flex justify-between items-start mb-1.5 pl-1.5">
                        <span className="text-[13px] font-extrabold text-slate-900 truncate pr-2">{inq.studentName}</span>
                        <span className="text-[10px] font-semibold text-slate-400 shrink-0">{inq.time}</span>
                      </div>
                      
                      <div className="pl-1.5 mb-2.5">
                        <p className="text-[12px] font-medium text-slate-600 line-clamp-1">{inq.subject}</p>
                      </div>

                      <div className="flex items-center gap-2 pl-1.5">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border ${getSeverityColor(inq.severity)}`}>
                          {inq.severity}
                        </span>
                        {inq.status === 'Resolved' && (
                          <span className="px-2 py-0.5 rounded bg-green-100 border border-green-200 text-green-700 text-[9px] font-black uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 size={10} /> Resolved
                          </span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </aside>

        {/* =========================================
            RIGHT PANE: ACTIVE WORKSPACE
        ========================================= */}
        <main className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
          
          {!activeInquiry ? (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
              <MessageSquare size={48} className="mb-4 opacity-20" />
              <p className="font-semibold text-[13px]">Select an inquiry to view details</p>
            </div>
          ) : (
            <>
              {/* Workspace Header */}
              <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col xl:flex-row xl:items-start justify-between gap-4 shrink-0 bg-white z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2.5">
                    <h2 className="text-[18px] font-extrabold text-slate-900 leading-tight">{activeInquiry.subject}</h2>
                    {activeInquiry.status === "Resolved" && (
                      <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shrink-0">
                        <CheckCircle2 size={12} /> Resolved
                      </span>
                    )}
                  </div>
                  
                  {/* Detailed Metadata Row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] font-medium text-slate-500">
                    <span className="flex items-center gap-1.5"><User size={14} className="text-slate-400"/> <span className="font-semibold text-slate-700">{activeInquiry.studentName}</span> ({activeInquiry.studentId})</span>
                    <span className="hidden sm:flex items-center gap-1.5 text-slate-200">|</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-slate-400"/> {activeInquiry.time}</span>
                    <span className="hidden sm:flex items-center gap-1.5 text-slate-200">|</span>
                    
                    {/* Source Indicator */}
                    <span className="flex items-center gap-1.5 bg-red-50 text-handy-dark-red px-2 py-0.5 rounded text-[11px] font-bold">
                      <MapPin size={12} /> {activeInquiry.source}
                    </span>
                    
                    <span className="hidden sm:flex items-center gap-1.5 text-slate-200">|</span>
                    <span className="flex items-center gap-1.5 font-mono text-[11px]">ID: {activeInquiry.id}</span>
                  </div>
                </div>

                {/* Admin Controls */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex flex-col items-start xl:items-end">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 pl-1 xl:pl-0">Internal Severity</label>
                    <select 
                      value={activeInquiry.severity}
                      onChange={(e) => handleSeverityChange(e.target.value)}
                      className={`text-[11px] font-extrabold rounded-lg py-1.5 px-3 border outline-none cursor-pointer transition-colors focus:ring-2 focus:ring-slate-200 ${getSeverityColor(activeInquiry.severity)}`}
                    >
                      <option value="Critical">Critical</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-handy-dark-red hover:bg-red-50 rounded-lg mt-4 transition-colors outline-none">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              {/* Workspace Scrollable Body */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-8 bg-[#F8FAFC]">
                
                {/* 1. The Student's Escalation Message */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm mb-8 relative">
                  <div className="absolute -top-3 left-6 bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                    Student Inquiry
                  </div>
                  <p className="text-[14px] text-slate-800 font-medium leading-relaxed mt-1">
                    "{activeInquiry.escalationMessage}"
                  </p>
                </div>

                {/* 2. AI Context Transcript (Conditionally Renders if context exists) */}
                {activeInquiry.aiContext && activeInquiry.aiContext.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-5 px-2">
                      <Sparkles size={14} className="text-slate-400" />
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Previous AI Chat Transcript</h4>
                      <div className="flex-1 h-px bg-slate-200 ml-2"></div>
                    </div>
                    
                    <div className="space-y-4 px-2">
                      {activeInquiry.aiContext.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[85%] sm:max-w-[75%] p-3.5 rounded-2xl text-[13px] font-medium leading-relaxed ${
                            msg.sender === 'user' 
                            ? 'bg-[#E2E8F0] text-slate-800 rounded-tr-sm' 
                            : 'bg-white border border-slate-200 text-slate-600 rounded-tl-sm shadow-sm'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
              </div>

              {/* Workspace Footer (Reply Area) */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-100 shrink-0">
                {activeInquiry.status === 'Resolved' ? (
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center">
                    <p className="text-[13px] font-bold text-slate-600">This inquiry has been marked as resolved.</p>
                    <button 
                      onClick={() => setInquiries(inquiries.map(inq => inq.id === activeId ? { ...inq, status: "Pending" } : inq))}
                      className="text-[12px] font-extrabold text-handy-dark-red mt-2 hover:underline hover:text-red-900 transition-colors outline-none"
                    >
                      Reopen Inquiry
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <textarea 
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Type your response to the student here..."
                      className="w-full bg-[#F4F6F8] border border-slate-200 rounded-xl p-4 text-[13px] font-medium text-slate-800 focus:outline-none focus:border-handy-dark-red focus:ring-1 focus:ring-handy-dark-red resize-none min-h-[120px] transition-all placeholder:text-slate-400 placeholder:font-normal"
                    ></textarea>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <p className="text-[11px] text-slate-500 font-medium">
                        Student will receive this response via email and portal notification.
                      </p>
                      <div className="flex w-full sm:w-auto gap-3">
                        <button 
                          onClick={handleResolve}
                          className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-200 text-slate-700 text-[12px] font-bold rounded-lg hover:bg-slate-50 transition-colors outline-none"
                        >
                          Mark as Resolved
                        </button>
                        <button 
                          disabled={!replyText.trim()}
                          className="flex-1 sm:flex-none px-5 py-2.5 bg-handy-dark-red text-white text-[12px] font-bold rounded-lg hover:bg-red-900 transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:active:scale-100 active:scale-95 outline-none"
                        >
                          <Send size={14} /> Send Response
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
            </>
          )}

        </main>

      </div>
    </AdminLayout>
  );
};

export default AdminInquiries;