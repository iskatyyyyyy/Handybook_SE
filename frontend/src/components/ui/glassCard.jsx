import React from 'react';

const TupButton = ({ children, variant = 'primary', className = "", ...props }) => {
  const styles = {
    primary: 'bg-tup-green text-white shadow-lg shadow-tup-green/20 hover:bg-opacity-90',
    secondary: 'bg-tup-soft-green text-tup-green hover:bg-tup-green/10',
    outline: 'border-2 border-tup-green/20 text-tup-green hover:bg-tup-soft-green',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30'
  };

  return (
    <button 
      className={`px-6 py-3 rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default TupButton;