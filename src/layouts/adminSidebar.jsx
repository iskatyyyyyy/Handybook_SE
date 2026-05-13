import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart2, 
  Bot, 
  Sparkles, 
  BookOpen, 
  User, 
  LogOut 
} from 'lucide-react';

import handybookLogoExtd from '../assets/images/Group_44.svg';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to dynamically check the current route for active styling
  const getSidebarLinkClass = (path) => {
    // Basic check to see if the current URL includes the path
    const isActive = location.pathname.includes(path);
    const baseClass = "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] ";
    
    return isActive 
      ? baseClass + "bg-handy-dark-red text-white shadow-sm font-semibold" 
      : baseClass + "text-slate-500 hover:bg-slate-50 hover:text-handy-dark-red font-medium";
  };

  // Helper for non-page action links
  const actionLinkClass = "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] text-slate-500 hover:bg-slate-50 hover:text-handy-dark-red font-medium";

  return (
    <aside className="w-60 h-full bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col shrink-0 relative z-20">
      
      {/* Logo Area */}
      <div className="px-5 py-5 flex items-center shrink-0 border-b border-slate-50">
        <img src={handybookLogoExtd} alt="Handybook Logo" className="h-7 object-contain"/>
      </div>

      {/* Navigation Area */}
      <div className="flex-1 flex flex-col px-3 py-5 overflow-y-auto custom-scrollbar">
        
        <div className="space-y-6">
          {/* Main Navigation */}
          <nav className="space-y-0.5">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Main Navigation</p>
            
            <div onClick={() => navigate('/admin/analytics')} className={getSidebarLinkClass('/admin/analytics')}>
              <BarChart2 className="w-[18px] h-[18px]" />
              <span>Analytical Dashboard</span>
            </div>
            
            {/* Navigates to logs, assuming your logs page is set up on this route */}
            <div onClick={() => navigate('/admin/logs')} className={getSidebarLinkClass('/admin/logs')}>
              <Bot className="w-[18px] h-[18px]" />
              <span>AI Training and Logs</span>
            </div>
          </nav>

          {/* Resources Navigation */}
          <nav className="space-y-0.5">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Resources</p>
            
            <div onClick={() => navigate('/chat')} className={actionLinkClass}>
              <Sparkles className="w-[18px] h-[18px]" />
              <span>Handybook AI</span>
            </div>

            <div onClick={() => navigate('/preview-handbook')} className={actionLinkClass}>
              <BookOpen className="w-[18px] h-[18px]" />
              <span>Student Handbook</span>
            </div>
          </nav>
        </div>

        {/* Account Settings Navigation (Pushed to bottom) */}
        <nav className="space-y-0.5 mt-auto pt-6">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Account Settings</p>
          
          <div onClick={() => navigate('/admin/profile')} className={getSidebarLinkClass('/admin/profile')}>
            <User className="w-[18px] h-[18px]" />
            <span>User Profile</span>
          </div>

          <div onClick={() => navigate('/login')} className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] text-slate-500 hover:bg-red-50 hover:text-red-600 font-semibold">
            <LogOut className="w-[18px] h-[18px]" />
            <span>Logout Account</span>
          </div>
        </nav>

      </div>
    </aside>
  );
};

export default AdminSidebar;