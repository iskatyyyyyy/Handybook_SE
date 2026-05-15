import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { X, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const SubmitInquiryModal = ({ isOpen, onClose, source, chatSessionId }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      // 1. Get the currently logged-in user
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !session) {
        throw new Error("You must be logged in to submit an inquiry.");
      }

      // 2. Insert the inquiry into the database
      const { error: insertError } = await supabase
        .from('inquiries')
        .insert({
          user_id: session.user.id,
          subject: subject,
          escalation_message: message,
          source: source,
          chat_session_id: chatSessionId || null
          // status and severity will automatically default to 'Pending' and 'Low' per our SQL schema!
        });

      if (insertError) throw insertError;

      // 3. Show success state
      setIsSuccess(true);
      
      // 4. Reset form and close after a short delay
      setTimeout(() => {
        setSubject("");
        setMessage("");
        setIsSuccess(false);
        onClose();
      }, 5000);

    } catch (err) {
      console.error(err);
      setErrorMsg(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-200 p-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-full">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 shrink-0">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 leading-tight">Submit an Inquiry</h2>
            <p className="text-[12px] font-medium text-slate-500 mt-0.5">We usually respond within 24-48 hours.</p>
          </div>
          <button 
            onClick={onClose}
            disabled={isSubmitting || isSuccess}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors outline-none disabled:opacity-50"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <CheckCircle2 size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Inquiry Submitted!</h3>
              <p className="text-[13px] font-medium text-slate-500 max-w-xs mx-auto leading-relaxed">
                Your ticket has been sent to our administration team. You can track its status in the "My Inquiries" tab.
              </p>
            </div>
          ) : (
            <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-4">
              
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-2.5 text-red-600">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <p className="text-[12px] font-bold leading-snug">{errorMsg}</p>
                </div>
              )}

              {/* REPLACED: Input is now a Select Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-slate-900 uppercase tracking-widest pl-1">
                  Subject Category
                </label>
                <select 
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all text-[13px] font-medium cursor-pointer" 
                >
                  <option value="" disabled>Select a category...</option>
                  <option value="Academic Records & Enrollment">Academic Records & Enrollment</option>
                  <option value="Student Conduct & Discipline">Student Conduct & Discipline</option>
                  <option value="Student Life, Orgs & Scholarships">Student Life, Orgs & Scholarships</option>
                  <option value="IT & Technical Support">IT & Technical Support</option>
                  <option value="Health, Wellness & Counseling">Health, Wellness & Counseling</option>
                  <option value="Library & Campus Facilities">Library & Campus Facilities</option>
                  <option value="General Administrative / Other">General Administrative / Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-extrabold text-slate-900 uppercase tracking-widest pl-1">
                  Detailed Message
                </label>
                <textarea 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please describe what you need help with in detail..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-handy-dark-red/30 focus:border-handy-dark-red transition-all text-[13px] font-medium placeholder:font-normal placeholder:text-slate-400 min-h-[140px] resize-none" 
                ></textarea>
              </div>
            </form>
          )}
        </div>

        {/* Modal Footer */}
        {!isSuccess && (
          <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50/50 shrink-0 flex gap-3">
            <button 
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all outline-none disabled:opacity-50"
            >
              Cancel
            </button>
            <button 
              type="submit"
              form="inquiry-form"
              disabled={isSubmitting || !subject || !message.trim()}
              className="flex-1 py-2.5 bg-handy-dark-red text-white text-[13px] font-bold rounded-xl hover:bg-red-900 transition-all shadow-sm flex items-center justify-center gap-2 outline-none disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  <Send size={16} /> Submit Ticket
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default SubmitInquiryModal;