import React from 'react';
import { ChevronRight } from 'lucide-react';

const ActiveProcedureCard = ({ title, step, progress }) => {
  return (
    <div className="rounded-handbook border border-tup-green/10 bg-tup-soft-green p-6 mb-8">
      <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-tup-green">
        <span>Active Procedure</span>
        <span>{progress}% Complete</span>
      </div>
      <h3 className="mb-1 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-sm text-gray-500">Step: {step}</p>
      
      <div className="h-2.5 w-full rounded-full bg-white/50">
        <div className="h-full rounded-full bg-tup-green transition-all" style={{ width: `${progress}%` }}></div>
      </div>
      
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-tup-green shadow-sm">
        Continue Process <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default ActiveProcedureCard;