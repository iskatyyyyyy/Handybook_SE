import React from 'react';
import { 
  LayoutDashboard, 
  FileEdit, 
  MessageSquareText, 
  Settings, 
  LogOut, 
  ShieldCheck 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Updated paths to match the routes in App.jsx
  const menuItems = [
    { 
      name: 'Analytics', 
      icon: <LayoutDashboard size={20} />, 
      path: '/admin/analytics' 
    },
    { 
      name: 'Content', 
      icon: <FileEdit size={20} />, 
      path: '/admin/content' 
    },
    { 
      name: 'Chatbot', 
      icon: <MessageSquareText size={20} />, 
      path: '/admin/config' // Updated from /admin/chatbot
    },
    { 
      name: 'System', 
      icon: <Settings size={20} />, 
      path: '/admin/settings' // Updated from /admin/system
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col p-6 z-50">
      {/* Brand Logo Area */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="h-10 w-10 bg-tup-green rounded-xl flex items-center justify-center shadow-lg shadow-tup-green/20">
          <ShieldCheck className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-sm font-black text-tup-navy leading-none uppercase tracking-tighter">Handybook</h2>
          <p className="text-[10px] text-tup-green font-bold uppercase tracking-widest mt-1">Admin Portal</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${
                isActive 
                ? 'bg-tup-soft-green text-tup-green shadow-sm shadow-tup-green/5' 
                : 'text-gray-400 hover:bg-gray-50 hover:text-tup-navy'
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* Admin Profile & Logout */}
      <div className="pt-6 border-t border-gray-50">
        <div className="flex items-center gap-3 mb-6 px-2">
          <div className="h-10 w-10 rounded-full bg-gray-100 border-2 border-white shadow-sm overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Admin" />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-black truncate text-tup-navy">Admin Felix</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase">Superuser</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/login')} // Redirect to login on logout
          className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-red-400 font-bold text-sm hover:bg-red-50 transition-colors group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;