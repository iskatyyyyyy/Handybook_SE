import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLayout = ({ children, activePage }) => {
  const navigate = useNavigate();

  // Helper function to check active state for your new red sidebar
  const getSidebarLinkClass = (pageName) => {
    const baseClass = "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer ";
    return activePage === pageName 
      ? baseClass + "bg-handy-dark-red text-white shadow-md" 
      : baseClass + "text-gray-600 hover:bg-gray-100";
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex font-sans">
      {/* LEFT SIDEBAR (From your Figma) */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
        <div className="p-6 flex items-center space-x-3">
          <div className="bg-handy-dark-red text-white p-1 rounded-lg text-xs font-bold w-8 h-8 flex items-center justify-center">LOGO</div>
          <span className="text-xl font-bold tracking-tight">Handybook</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-2">Main Menu</p>
          
          <div onClick={() => navigate('/home')} className={getSidebarLinkClass('home')}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            <span className="font-medium">Dashboard</span>
          </div>
          
          <div onClick={() => navigate('/guide')} className={getSidebarLinkClass('guide')}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            <span className="font-medium">General Information</span>
          </div>

          <div onClick={() => navigate('/services')} className={getSidebarLinkClass('services')}>
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            <span className="font-medium">Student Services</span>
          </div>

          <div onClick={() => navigate('/rules')} className={getSidebarLinkClass('rules')}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            <span className="font-medium">Rules on Conduct</span>
          </div>

          <div onClick={() => navigate('/map')} className={getSidebarLinkClass('map')}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            <span className="font-medium">Campus Life</span>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Resources</p>
          <button onClick={() => navigate('/chat')} className="w-full bg-handy-dark-red text-white flex items-center justify-center space-x-2 py-3 rounded-xl shadow-lg hover-bg-handy-red transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path></svg>
            <span className="font-bold text-sm">Ask HandyBook AI</span>
          </button>
          <button className="w-full bg-white text-gray-700 border border-gray-200 flex items-center justify-center space-x-2 py-3 rounded-xl hover:bg-gray-50 transition-all">
             <span className="font-semibold text-sm">Download Handbook</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#F9F9F9]">
        
        {/* TOP HEADER (Search moved here based on your Figma) */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <div className="relative w-full max-w-lg">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </span>
            <input 
              className="block w-full bg-[#F5F1F1] border-transparent focus:ring-handy-dark-red focus:border-handy-dark-red rounded-xl py-3 pl-12 pr-4 text-sm" 
              placeholder="Search for policies, rules, or guides" 
              type="text" 
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-red-200 cursor-pointer" onClick={() => navigate('/profile')}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea" alt="Profile" />
            </div>
          </div>
        </header>

        {/* Dynamic Content wrapper */}
        <div className="p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default StudentLayout;