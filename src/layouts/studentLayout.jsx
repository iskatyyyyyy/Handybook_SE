import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLayout = ({ children, activePage }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const getSidebarLinkClass = (pageName) => {
    const baseClass = "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer ";
    return activePage === pageName 
      ? baseClass + "bg-handy-dark-red text-white shadow-md" 
      : baseClass + "text-gray-600 hover:bg-gray-100";
  };

  return (
    <>
      {/* Outer Shell: Fixed to screen height */}
      <div className="bg-[#F9F9F9] text-gray-900 h-screen flex font-sans overflow-hidden">
        
        {/* LEFT SIDEBAR: Full height, internal scroll */}
        <aside className="w-64 h-full bg-white border-r border-gray-200 flex flex-col shrink-0 overflow-y-auto">
          <div className="p-6 flex items-center space-x-3 shrink-0">
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

          <div className="p-4 border-t border-gray-100 space-y-3 shrink-0">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Resources</p>
            <button onClick={() => navigate('/chat')} className="w-full bg-handy-dark-red text-white flex items-center justify-center space-x-2 py-3 rounded-xl shadow-lg hover:bg-red-800 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path></svg>
              <span className="font-bold text-sm">Ask Hance</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 flex flex-col h-full overflow-hidden">
          
          {/* TOP HEADER: Fixed to top */}
          <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0 relative">
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
              
              {/* Profile Dropdown Container */}
              <div className="relative">
                <div 
                  className="h-10 w-10 overflow-hidden rounded-full border-2 border-red-200 cursor-pointer active:scale-95 transition-transform" 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea" alt="Profile" />
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button 
                      onClick={() => { navigate('/profile'); setIsDropdownOpen(false); }} 
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors"
                    >
                      Profile
                    </button>
                    <button 
                      onClick={() => { setIsSettingsModalOpen(true); setIsDropdownOpen(false); }} 
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors"
                    >
                      Settings
                    </button>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <button 
                      onClick={() => { navigate('/login'); setIsDropdownOpen(false); }} 
                      className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm font-medium text-red-600 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-8">
            {children}
          </div>
        </main>
      </div>

      {/* GLOBAL SETTINGS MODAL */}
      {isSettingsModalOpen && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Settings</h2>
              <button 
                onClick={() => setIsSettingsModalOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </button>
            </div>
            
            <div className="p-5 space-y-2">
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors border border-transparent hover:border-gray-100">Privacy & Security</button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors border border-transparent hover:border-gray-100">Accessibility</button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors border border-transparent hover:border-gray-100">Support & About</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentLayout;