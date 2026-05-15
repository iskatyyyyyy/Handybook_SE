import React, { useState, useEffect } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { supabase } from '../../lib/supabase'; // <-- Import Supabase
import SubmitInquiryModal from '../../components/inquiry/submitInquiryModal';
import ViewInquiryModal from '../../components/inquiry/viewInquiryModal';
import { Mail, Search, Plus, CheckCircle2, AlertCircle } from 'lucide-react';

const StudentInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // Fetch data when component mounts, and re-fetch when modal closes
  useEffect(() => {
    fetchMyInquiries();
  }, [isInquiryModalOpen]); // Re-running this when the modal closes ensures the table updates instantly!

  const fetchMyInquiries = async () => {
    setIsLoading(true);
    
    // 1. Get the current user's session
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
      // 2. Fetch ONLY this user's inquiries (RLS enforces this automatically!)
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false }); // Newest first

      if (!error && data) {
        setInquiries(data);
      }
    }
    setIsLoading(false);
  };

  // Derived state for the search filter
  const filteredInquiries = inquiries.filter(inq => {
    const searchLower = searchTerm.toLowerCase();
    const formattedId = `INQ-${inq.id.substring(0, 8).toUpperCase()}`;
    return (
      inq.subject.toLowerCase().includes(searchLower) || 
      formattedId.toLowerCase().includes(searchLower)
    );
  });

  const getStatusBadge = (status) => {
    // Our DB only uses 'Pending' and 'Resolved'
    if (status === "Resolved") {
      return <span className="flex items-center w-fit gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest"><CheckCircle2 size={12} /> Resolved</span>;
    }
    return <span className="flex items-center w-fit gap-1.5 bg-amber-50 text-amber-700 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest"><AlertCircle size={12} /> Pending</span>;
  };

  const formatTimestamp = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <>
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

              {/* Wired up the button to open the modal */}
              <button 
                onClick={() => setIsInquiryModalOpen(true)}
                className="flex items-center gap-2 bg-handy-dark-red hover:bg-red-900 text-white px-6 py-3 rounded-xl font-bold text-[13px] shadow-md transition-all active:scale-95 shrink-0 h-fit outline-none"
              >
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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search ticket ID or subject..." 
                  className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-[12px] font-medium text-slate-700 outline-none focus:border-handy-dark-red focus:ring-1 focus:ring-handy-dark-red transition-all placeholder:font-normal"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest">
                    <th className="p-4 pl-6 whitespace-nowrap">Ticket ID</th>
                    <th className="p-4">Subject</th>
                    <th className="p-4 whitespace-nowrap">Date Submitted</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 pr-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[13px]">
                  {isLoading ? (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-400 font-medium animate-pulse">
                        Loading your inquiries...
                      </td>
                    </tr>
                  ) : filteredInquiries.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-400 font-medium">
                        {searchTerm ? "No tickets match your search." : "You haven't submitted any inquiries yet."}
                      </td>
                    </tr>
                  ) : (
                    filteredInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-slate-50 transition-colors group">
                        {/* Format the long UUID into a clean Ticket ID */}
                        <td className="p-4 pl-6 font-bold text-slate-700 font-mono text-[12px]">
                          INQ-{inq.id.substring(0, 8).toUpperCase()}
                        </td>
                        <td className="p-4 font-semibold text-slate-900 group-hover:text-handy-dark-red transition-colors">
                          {inq.subject}
                        </td>
                        <td className="p-4 text-slate-500 font-medium whitespace-nowrap">
                          {formatTimestamp(inq.created_at)}
                        </td>
                        <td className="p-4">
                          {getStatusBadge(inq.status)}
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <button 
                            onClick={() => setSelectedInquiry(inq)}
                            className="text-[12px] font-bold text-handy-dark-red hover:underline outline-none"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </StudentLayout>

      {/* The Global Submit Inquiry Modal */}
      <SubmitInquiryModal 
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        source="My Inquiries Page"
      />
      
      <ViewInquiryModal 
        isOpen={!!selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
        inquiry={selectedInquiry}
      />
    </>
  );
};

export default StudentInquiries;