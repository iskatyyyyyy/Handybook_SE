import React from 'react';

const PolicyBadge = ({ variant = 'default', children }) => {
  const styles = {
    default: 'bg-tup-soft-green text-tup-green',
    danger: 'bg-red-50 text-red-500',
    warning: 'bg-orange-50 text-orange-500',
    info: 'bg-blue-50 text-blue-500'
  };

  return (
    <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${styles[variant]}`}>
      {children}
    </span>
  );
};

export default PolicyBadge;