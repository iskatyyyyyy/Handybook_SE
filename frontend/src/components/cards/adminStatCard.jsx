import React from 'react';
import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

const AdminStatCard = ({ title, value, trend, isPositive, isAI }) => {
  return (
    <div className="bg-white p-5 rounded-handbook shadow-sm border border-gray-50">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          {title}
        </span>
        {isAI && <Sparkles size={14} className="text-tup-green" />}
      </div>
      <div className="flex items-end gap-2">
        <h3 className="text-2xl font-black text-tup-navy">{value}</h3>
        <div className={`flex items-center text-[10px] font-bold mb-1 ${isPositive ? 'text-tup-green' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span className="ml-0.5">{trend}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminStatCard;