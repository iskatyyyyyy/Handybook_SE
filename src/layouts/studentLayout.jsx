import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import handybookLogoExtd from '../assets/images/Group_44.svg';

const StudentLayout = ({ children, activePage }) => {
  const navigate = useNavigate();
  
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  // TIGHTER LINKS: Reduced padding (py-2), smaller text (text-[13px])
  const getSidebarLinkClass = (pageName) => {
    const baseClass = "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] ";
    return activePage === pageName 
      ? baseClass + "bg-handy-dark-red text-white shadow-sm font-semibold" 
      : baseClass + "text-slate-500 hover:bg-slate-50 hover:text-handy-dark-red font-medium";
  };

  const actionLinkClass = "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] text-slate-500 hover:bg-slate-50 hover:text-handy-dark-red font-medium";

  return (
    <>
      {/* TIGHTER OUTER SHELL: Reduced padding and gap to p-4 gap-4 */}
      <div 
        className="bg-[#F4F6F8] text-slate-900 h-screen flex overflow-hidden p-3 sm:p-4 gap-3 sm:gap-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        
        {/* NARROWER SIDEBAR: Changed w-64 to w-60 */}
        <aside className="w-60 h-full bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col shrink-0 relative z-20">
          
          {/* Logo Area: Tighter padding, proportionate logo size */}
          <div className="px-5 py-5 flex items-center shrink-0 border-b border-slate-50">
            <img src={handybookLogoExtd} alt="Handybook Logo" className="h-12 object-contain"/>
          </div>

          {/* Scrollable Navigation Area */}
          <div className="flex-1 flex flex-col px-3 py-5 overflow-y-auto custom-scrollbar">
            
            <div className="space-y-6">
              {/* Main Navigation */}
              <nav className="space-y-0.5">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Main Navigation</p>
                
                <div onClick={() => navigate('/home')} className={getSidebarLinkClass('home')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Dashboard</span>
                </div>
                
                <div onClick={() => navigate('/guide')} className={getSidebarLinkClass('guide')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>General Information</span>
                </div>

                <div onClick={() => navigate('/services')} className={getSidebarLinkClass('services')}>
                   <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Student Services</span>
                </div>

                <div onClick={() => navigate('/rules')} className={getSidebarLinkClass('rules')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Rules on Conduct</span>
                </div>

                <div onClick={() => navigate('/map')} className={getSidebarLinkClass('map')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Campus Life</span>
                </div>
              </nav>

              {/* Resources Navigation */}
              <nav className="space-y-0.5">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Resources</p>
                
                <div onClick={() => navigate('/chat')} className={actionLinkClass}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  <span>Ask Hance</span>
                </div>

                <div className={actionLinkClass}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  <span>Download Handbook</span>
                </div>
              </nav>
            </div>

            {/* Account Settings Navigation */}
            <nav className="space-y-0.5 mt-auto pt-6">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Account Settings</p>
              
              <div onClick={() => setIsSettingsModalOpen(true)} className={actionLinkClass}>
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Settings</span>
              </div>

              <div onClick={() => navigate('/login')} className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] text-slate-500 hover:bg-red-50 hover:text-red-600 font-semibold">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                <span>Logout Account</span>
              </div>
            </nav>

          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
          
          {/* TIGHTER TOP HEADER: Shorter height (h-14) */}
          <header className="h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between px-5 shrink-0 mb-3 sm:mb-4">
            
            {/* Search Pill - Slimmer padding and squared-off rounded-lg corners */}
            <div className="relative w-full max-w-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
              <input 
                className="block w-full bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-handy-dark-red focus:bg-white rounded-lg py-1.5 pl-9 pr-3 text-[13px] font-medium text-slate-700 transition-all outline-none placeholder:text-slate-400" 
                placeholder="Search for policies, rules, or guides..." 
                type="text" 
              />
            </div>
            
            {/* Simplified User Profile */}
            <div className="flex items-center space-x-3 ml-4">
              <div className="hidden sm:block text-right">
                <p className="text-[13px] font-semibold text-slate-900 leading-tight">Juno Assidons</p>
              </div>
              {/* Tighter Avatar size */}
              <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-red-100 bg-red-50 shrink-0 cursor-pointer hover:ring-2 hover:ring-red-200 transition-all">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Juno" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </header>

          {/* PAGE CONTENT CONTAINER */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-2">
            {children}
          </div>
        </main>
      </div>

      {/* GLOBAL SETTINGS MODAL */}
      {isSettingsModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-200 p-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">App Settings</h2>
              <button 
                onClick={() => setIsSettingsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            <div className="p-5 space-y-1.5">
              <button className="w-full text-left p-3.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700 transition-colors border border-transparent hover:border-slate-100 flex items-center justify-between group">
                Privacy & Security
                <svg className="w-4 h-4 text-slate-300 group-hover:text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
              <button className="w-full text-left p-3.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700 transition-colors border border-transparent hover:border-slate-100 flex items-center justify-between group">
                Accessibility
                <svg className="w-4 h-4 text-slate-300 group-hover:text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
              <button className="w-full text-left p-3.5 rounded-xl hover:bg-slate-50 text-sm font-semibold text-slate-700 transition-colors border border-transparent hover:border-slate-100 flex items-center justify-between group">
                Support & About
                <svg className="w-4 h-4 text-slate-300 group-hover:text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentLayout;