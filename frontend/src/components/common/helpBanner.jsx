import React from 'react';
// We can remove useNavigate since this button now opens a modal instead of changing pages!
import { Sparkles, ArrowRight } from 'lucide-react';

// 1. Accept the onOpenInquiry prop
const HelpBanner = ({ onOpenInquiry }) => {
  return (
    <section className="bg-gradient-to-br from-red-900 to-black rounded-3xl p-8 text-white relative overflow-hidden shadow-md">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
            Can't find what you're looking for? <Sparkles size={20} className="text-yellow-400" />
          </h2>
          <p className="text-red-100/80 text-sm max-w-md font-medium">
            Submit a formal inquiry to the administration or Office of Student Affairs, and track its resolution status.
          </p>
        </div>
        <button 
          // 2. Trigger the prop function instead of navigating
          onClick={onOpenInquiry}
          className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-sm hover:bg-red-50 transition-all flex items-center gap-2 shrink-0 shadow-xl active:scale-95"
        >
          Submit Inquiry
          <ArrowRight size={18} />
        </button>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
    </section>
  );
};

export default HelpBanner;