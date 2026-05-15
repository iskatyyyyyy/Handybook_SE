import React from 'react';
import { X, CheckCircle2, AlertCircle, Clock, User, ShieldCheck } from 'lucide-react';

const ViewInquiryModal = ({ isOpen, onClose, inquiry }) => {
  // If the modal isn't open or there's no inquiry data passed, render nothing
  if (!isOpen || !inquiry) return null;

  const formatTimestamp = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const getStatusBadge = (status) => {
    if (status === "Resolved") {
      return <span className="flex items-center w-fit gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest"><CheckCircle2 size={12} /> Resolved</span>;
    }
    return <span className="flex items-center w-fit gap-1 bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest"><AlertCircle size={12} /> Pending</span>;
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-200 p-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]">

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 shrink-0 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <h2 className="text-lg font-extrabold text-slate-900 leading-tight">Ticket Details</h2>
              {getStatusBadge(inquiry.status)}
            </div>
            <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              INQ-{inquiry.id.substring(0, 8).toUpperCase()}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors outline-none"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar flex-1 bg-slate-50/50 space-y-6">

          {/* Subject & Time Info */}
          <div>
            <h3 className="text-[15px] font-extrabold text-slate-900 mb-1.5">{inquiry.subject}</h3>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <Clock size={12} /> Submitted on {formatTimestamp(inquiry.created_at)}
            </div>
          </div>

          {/* Student's Original Message */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-slate-100 p-1.5 rounded-md text-slate-600"><User size={14} /></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Message</span>
            </div>
            <p className="text-[13px] text-slate-700 font-medium leading-relaxed whitespace-pre-wrap">
              {inquiry.escalation_message}
            </p>
          </div>

          {/* Admin Response (Only renders if an admin has replied) */}
          {inquiry.admin_reply && (
            <div className="bg-red-50 border border-red-100 rounded-xl p-5 shadow-sm relative">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-handy-dark-red p-1.5 rounded-md text-white"><ShieldCheck size={14} /></div>
                <span className="text-[10px] font-black text-handy-dark-red uppercase tracking-widest">Admin Response</span>
              </div>
              <p className="text-[13px] text-slate-800 font-medium leading-relaxed whitespace-pre-wrap">
                {inquiry.admin_reply}
              </p>
            </div>
          )}

          {/* Fallback text if it's still pending with no reply */}
          {!inquiry.admin_reply && inquiry.status === 'Pending' && (
            <div className="text-center py-6">
              <p className="text-[12px] font-medium text-slate-400 italic">
                The administration has not yet replied to this inquiry. We will notify you once an update is available.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ViewInquiryModal;