import React from 'react';

const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-[2rem] ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;