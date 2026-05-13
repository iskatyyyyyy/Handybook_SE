import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart2, 
  Bot, 
  Sparkles, 
  BookOpen, 
  User, 
  LogOut,
  Search,
  Bell
} from 'lucide-react';

// Import the extended Handybook logo for the sidebar
import handybookLogoExtd from '../assets/images/Group_44.svg';

const AdminLayout = ({ children, activePage }) => {
  const navigate = useNavigate();

  // Helper for active link styling - Compact padding and sizing
  const getSidebarLinkClass = (pageName) => {
    const baseClass = "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] ";
    return activePage === pageName 
      ? baseClass + "bg-handy-dark-red text-white shadow-sm font-semibold" 
      : baseClass + "text-slate-500 hover:bg-slate-50 hover:text-handy-dark-red font-medium";
  };

  // Helper for non-page action links
  const actionLinkClass = "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] text-slate-500 hover:bg-slate-50 hover:text-handy-dark-red font-medium";

  return (
    // OUTER SHELL: Light gray background, viewport height, p-4 gap-4, Poppins font
    <div 
      className="bg-[#F4F6F8] text-slate-900 h-screen flex overflow-hidden p-3 sm:p-4 gap-3 sm:gap-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      
      {/* SIDEBAR: w-60, rounded-2xl, floating card design */}
      <aside className="w-60 h-full bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col shrink-0 relative z-20">
        
        {/* Logo Area */}
        <div className="px-5 py-5 flex items-center shrink-0 border-b border-slate-50">
          <img src={handybookLogoExtd} alt="Handybook Logo" className="h-12 object-contain"/>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 flex flex-col px-3 py-5 overflow-y-auto custom-scrollbar">
          
          <div className="space-y-6">
            {/* Main Navigation */}
            <nav className="space-y-0.5">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Main Navigation</p>
              
              <button onClick={() => navigate('/admin/analytics')} className={`w-full ${getSidebarLinkClass('analytics')}`}>
                <BarChart2 className="w-[18px] h-[18px]" />
                <span>Analytical Dashboard</span>
              </button>
              
              <button onClick={() => navigate('/admin/logs')} className={`w-full ${getSidebarLinkClass('logs')}`}>
                <Bot className="w-[18px] h-[18px]" />
                <span>AI Training and Logs</span>
              </button>
            </nav>

            {/* Resources Navigation */}
            <nav className="space-y-0.5">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Resources</p>
              
              <button onClick={() => navigate('/admin/chat')} className={actionLinkClass}>
                <Sparkles className="w-[18px] h-[18px]" />
                <span>Handybook AI</span>
              </button>
              
              <button onClick={() => navigate('/admin/preview-handbook')} className={actionLinkClass}>
                <BookOpen className="w-[18px] h-[18px]" />
                <span>Student Handbook</span>
              </button>
            </nav>
          </div>

          {/* Account Settings Navigation (Pushed to bottom) */}
          <nav className="space-y-0.5 mt-auto pt-6">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Account Settings</p>
            
            <button onClick={() => navigate('/admin/profile')} className={`w-full ${getSidebarLinkClass('profile')}`}>
              <User className="w-[18px] h-[18px]" />
              <span>User Profile</span>
            </button>

            <button onClick={() => navigate('/login')} className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] text-slate-500 hover:bg-red-50 hover:text-red-600 font-semibold outline-none">
              <LogOut className="w-[18px] h-[18px]" />
              <span>Logout Account</span>
            </button>
          </nav>
          
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
        
        {/* TOP HEADER: Shorter height (h-14), rounded-2xl */}
        <header className="h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between px-5 shrink-0 mb-3 sm:mb-4">
          
          {/* Search Bar - Slim padding and squared-off rounded-lg corners */}
          <div className="relative w-full max-w-sm">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="h-3.5 w-3.5" />
            </span>
            <input 
              className="block w-full bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-handy-dark-red focus:bg-white rounded-lg py-1.5 pl-9 pr-3 text-[13px] font-medium text-slate-700 transition-all outline-none placeholder:text-slate-400" 
              placeholder="Search for logs, sections, or users..." 
              type="text"
            />
          </div>
          
          {/* Right Header Controls (Bell + Admin Profile) */}
          <div className="flex items-center gap-5 ml-4">
            
            {/* Notification Bell */}
            <button className="text-slate-400 hover:text-slate-600 relative transition-colors outline-none">
              <Bell className="w-[18px] h-[18px]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            {/* Admin Profile */}
            <div className="flex items-center gap-3 pl-5 border-l border-slate-100">
              <div className="hidden sm:block text-right">
                <p className="text-[13px] font-semibold text-slate-900 leading-tight">Admin User</p>
                <p className="text-[10px] text-slate-400 font-medium">Super Administrator</p>
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-red-100 bg-red-50 overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-200 transition-all shrink-0">
                <img alt="Admin Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEYJcUvbHdw0Q7cJSE8KSS9x7Gr7H_7KZ75VR6mD4_hmYyXnPSuoztKJj1bqY3NljnO_NcUmrd0WWIn6YrvTlB0Q9Ey_bUWGNWfIPD4bWf80ykPS9dwOpFVXjIQLzfjbmSw_Yea5rGK8kzQ1eZFwntanSJyYLL1_Xb2_Afmy3srIbBjeu71DkUz0uGlA3cbqSQ8mNnYawW9xCTau-H35smh8o3C7GQR-BsOptOWxyxyA-0LnJBgYq5G2tCtTKVXqfhUZDRZtHIjEE"/>
              </div>
            </div>
            
          </div>
        </header>

        {/* PAGE CONTENT CONTAINER */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-2">
          {children}
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;