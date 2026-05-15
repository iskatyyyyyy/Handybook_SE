import React, { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/adminLayout';
import { supabase } from '../../lib/supabase'; // <-- Import your Supabase client
import { 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  User, 
  Sparkles,
  Send,
  MoreVertical,
  MapPin
} from 'lucide-react';

const AdminInquiries = () => {
  // State Management
  const [inquiries, setInquiries] = useState([]);
  const [activeId, setActiveId] = useState(null); 
  const [statusFilter, setStatusFilter] = useState("Pending");
  const [severityFilter, setSeverityFilter] = useState("All");
  const [replyText, setReplyText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Initial Data Fetch
  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setIsLoading(true);
    
    // Fetch inquiries AND the connected user profile data in one query
    const { data, error } = await supabase
      .from('inquiries')
      .select(`
        *,
        profiles (
          first_name,
          last_name
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching inquiries:", error);
    } else if (data) {
      setInquiries(data);
      // Auto-select the first inquiry if available
      if (data.length > 0 && !activeId) {
        setActiveId(data[0].id);
      }
    }
    
    setIsLoading(false);
  };

  // Derived State & Helpers
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

  const formatTimestamp = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  // REAL SUPABASE HANDLERS
  const handleResolve = async () => {
    // 1. Just update the status, leave the admin_reply exactly as it is in the database!
    const { error } = await supabase
      .from('inquiries')
      .update({ status: 'Resolved' }) 
      .eq('id', activeId);

    if (error) {
      console.error("Error resolving inquiry:", error);
      alert("Failed to resolve inquiry. Please try again.");
    } else {
      // 2. Update local state 
      setInquiries(inquiries.map(inq => 
        inq.id === activeId ? { ...inq, status: "Resolved" } : inq
      ));
      setReplyText(""); // Clear any text they might have started typing
    }
  };

  const handleSendReply = async () => {
    if (!replyText.trim()) return;

    // Update the database (but keep status as 'Pending')
    const { error } = await supabase
      .from('inquiries')
      .update({ admin_reply: replyText })
      .eq('id', activeId);

    if (error) {
      console.error("Error sending response:", error);
      alert("Failed to send response. Please try again.");
    } else {
      // Update local state to reflect the sent reply
      setInquiries(inquiries.map(inq => 
        inq.id === activeId ? { ...inq, admin_reply: replyText } : inq
      ));
      setReplyText(""); // Clear the text area so they know it sent
    }
  };

  const handleSeverityChange = async (newSeverity) => {
    // Update the database
    const { error } = await supabase
      .from('inquiries')
      .update({ severity: newSeverity })
      .eq('id', activeId);

    if (error) {
      console.error("Error updating severity:", error);
    } else {
      // Update local state
      setInquiries(inquiries.map(inq => 
        inq.id === activeId ? { ...inq, severity: newSeverity } : inq
      ));
    }
  };

  const handleReopen = async () => {
    const { error } = await supabase
      .from('inquiries')
      .update({ status: 'Pending' })
      .eq('id', activeId);

    if (!error) {
      setInquiries(inquiries.map(inq => 
        inq.id === activeId ? { ...inq, status: "Pending" } : inq
      ));
    }
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
                  placeholder="Search students..." 
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
            {isLoading ? (
              <div className="p-8 text-center text-slate-400 text-[13px] font-medium animate-pulse">
                Loading inquiries...
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-[13px] font-medium">
                No inquiries match your filters.
              </div>
            ) : (
              <div className="divide-y divide-slate-50">
                {filteredInquiries.map((inq) => {
                  const isActive = inq.id === activeId;
                  const fullName = inq.profiles ? `${inq.profiles.first_name} ${inq.profiles.last_name}` : 'Unknown User';
                  
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
                        <span className="text-[13px] font-extrabold text-slate-900 truncate pr-2">{fullName}</span>
                        <span className="text-[10px] font-semibold text-slate-400 shrink-0">{formatTimestamp(inq.created_at)}</span>
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
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-slate-400"/> 
                      <span className="font-semibold text-slate-700">
                        {activeInquiry.profiles ? `${activeInquiry.profiles.first_name} ${activeInquiry.profiles.last_name}` : 'Unknown'}
                      </span>
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5 text-slate-200">|</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-slate-400"/> {formatTimestamp(activeInquiry.created_at)}</span>
                    <span className="hidden sm:flex items-center gap-1.5 text-slate-200">|</span>
                    
                    {/* Source Indicator */}
                    <span className="flex items-center gap-1.5 bg-red-50 text-handy-dark-red px-2 py-0.5 rounded text-[11px] font-bold">
                      <MapPin size={12} /> {activeInquiry.source}
                    </span>
                    
                    <span className="hidden sm:flex items-center gap-1.5 text-slate-200">|</span>
                    <span className="flex items-center gap-1.5 font-mono text-[11px]">ID: {activeInquiry.id.split('-')[0]}...</span>
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
                  <p className="text-[14px] text-slate-800 font-medium leading-relaxed mt-1 whitespace-pre-wrap">
                    "{activeInquiry.escalation_message}"
                  </p>
                </div>

                {/* Placeholder for AI Context Transcript once Chat Logs are implemented */}
                {/* We will wire this up later when we link chat_session_id! */}
                {activeInquiry.chat_session_id && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-5 px-2">
                      <Sparkles size={14} className="text-slate-400" />
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Previous AI Chat Transcript</h4>
                      <div className="flex-1 h-px bg-slate-200 ml-2"></div>
                    </div>
                    
                    <div className="space-y-4 px-2">
                       <p className="text-[12px] font-medium text-slate-500 italic">Chat transcript will appear here (linked via {activeInquiry.chat_session_id})...</p>
                    </div>
                  </div>
                )}
                
              </div>

              {/* Workspace Footer (Reply Area) */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-100 shrink-0">
                {activeInquiry.status === 'Resolved' ? (
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-center">
                    <p className="text-[13px] font-bold text-slate-600 mb-2">This inquiry has been marked as resolved.</p>
                    {activeInquiry.admin_reply && (
                       <div className="bg-white border border-slate-200 rounded-lg p-4 text-left mb-4 shadow-sm">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Your Reply:</span>
                         <p className="text-[13px] text-slate-700">{activeInquiry.admin_reply}</p>
                       </div>
                    )}
                    <button 
                      onClick={handleReopen}
                      className="text-[12px] font-extrabold text-handy-dark-red mt-2 hover:underline hover:text-red-900 transition-colors outline-none"
                    >
                      Reopen Inquiry
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    
                    {/* NEW: Show the sent reply even if the ticket is still Pending */}
                    {activeInquiry.admin_reply && (
                       <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left shadow-sm">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Latest Response Sent:</span>
                         <p className="text-[13px] text-slate-700">{activeInquiry.admin_reply}</p>
                       </div>
                    )}

                    <textarea 
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={activeInquiry.admin_reply ? "Type a follow-up response..." : "Type your response to the student here..."}
                      className="w-full bg-[#F4F6F8] border border-slate-200 rounded-xl p-4 text-[13px] font-medium text-slate-800 focus:outline-none focus:border-handy-dark-red focus:ring-1 focus:ring-handy-dark-red resize-none min-h-[120px] transition-all placeholder:text-slate-400 placeholder:font-normal"
                    ></textarea>
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <p className="text-[11px] text-slate-500 font-medium">
                        Student will receive this response via email and portal notification.
                      </p>
                      <div className="flex w-full sm:w-auto gap-3">
                        <button 
                          onClick={handleResolve}
                          className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-200 text-slate-700 text-[12px] font-bold rounded-lg hover:bg-slate-50 transition-colors outline-none disabled:opacity-50"
                        >
                          Mark as Resolved
                        </button>
                        <button 
                          onClick={handleSendReply} // <-- ADDED THE MISSING ONCLICK HERE!
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