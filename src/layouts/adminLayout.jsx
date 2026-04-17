import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLayout = ({ children, activePage }) => {
  const navigate = useNavigate();

  // Helper for active link styling
  const getSidebarLinkClass = (pageName) => {
    const baseClass = "flex items-center gap-3 px-3 py-2 rounded-md transition-colors ";
    return activePage === pageName 
      ? baseClass + "bg-red-50 border-r-4 border-handy-dark-red text-handy-dark-red font-medium" 
      : baseClass + "text-slate-500 hover:bg-slate-50 font-medium";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F9FAFB] text-slate-800 font-sans">
      
      {/* BEGIN: Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-handy-dark-red rounded flex items-center justify-center text-white font-bold text-xs">LOGO</div>
          <div>
            <h1 className="font-bold text-sm leading-tight">Handybook</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Admin Portal</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          <button onClick={() => navigate('/admin/analytics')} className={`w-full ${getSidebarLinkClass('analytics')}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            <span className="text-sm">Analytics Dashboard</span>
          </button>
          
          <button onClick={() => navigate('/admin/logs')} className={`w-full ${getSidebarLinkClass('logs')}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            <span className="text-sm">AI Training/Logs</span>
          </button>

          {/* Sidebar Section Label */}
          <div className="pt-6 pb-2 px-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Resources</span>
          </div>
          
          <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <span className="text-sm font-medium">Ask Handybook AI</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            <span className="text-sm font-medium">Download Handbook</span>
          </button>
        </nav>

        {/* Sidebar Status */}
        <div className="p-4 bg-slate-50 m-4 rounded-xl">
          <p className="text-[10px] text-slate-500 font-bold mb-2">System Status</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-semibold">AI Model Active</span>
          </div>
        </div>
      </aside>
      {/* END: Sidebar */}

      {/* BEGIN: MainContent Shell */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* BEGIN: TopBar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
              <input className="block w-full pl-10 pr-3 py-2 border-none bg-slate-100 rounded-lg text-sm focus:ring-1 focus:ring-handy-dark-red outline-none" placeholder="Search for logs, sections, or users..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-6 ml-4">
            <button className="text-slate-400 hover:text-slate-600 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
            <div className="flex items-center gap-3 border-l pl-6 border-slate-200">
              <div className="text-right">
                <p className="text-sm font-bold leading-none">Admin User</p>
                <p className="text-[10px] text-slate-400 font-medium">Super Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-slate-100 bg-gray-200 overflow-hidden">
                <img alt="Admin Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEYJcUvbHdw0Q7cJSE8KSS9x7Gr7H_7KZ75VR6mD4_hmYyXnPSuoztKJj1bqY3NljnO_NcUmrd0WWIn6YrvTlB0Q9Ey_bUWGNWfIPD4bWf80ykPS9dwOpFVXjIQLzfjbmSw_Yea5rGK8kzQ1eZFwntanSJyYLL1_Xb2_Afmy3srIbBjeu71DkUz0uGlA3cbqSQ8mNnYawW9xCTau-H35smh8o3C7GQR-BsOptOWxyxyA-0LnJBgYq5G2tCtTKVXqfhUZDRZtHIjEE"/>
              </div>
            </div>
          </div>
        </header>
        {/* END: TopBar */}

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          {children}
        </div>
      </main>
      {/* END: MainContent Shell */}

    </div>
  );
};

export default AdminLayout;