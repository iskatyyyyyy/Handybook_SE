import React, { useState } from 'react';
import { Menu, Bell, X, Home, Book, Map, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// ✅ CORRECTED PATH: Go up to src, then down to components
import BottomNavigation from '../components/glass/bottomNavigation.jsx'; 

const StudentLayout = ({ children, activePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Book, label: 'Handbook', path: '/guide' },
    { icon: Map, label: 'Campus Map', path: '/map' },
    { icon: Settings, label: 'Settings', path: '/profile' },
  ];

  return (
    <div className="min-h-screen bg-tup-bg pb-24 font-sans text-tup-navy">
      
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-tup-navy/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <aside className={`fixed top-0 left-0 z-[70] h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-50">
          <p className="font-black text-tup-green">TUP HANDYBOOK</p>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => { navigate(item.path); setIsSidebarOpen(false); }}
              className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 font-bold transition-all ${activePage === item.label.toLowerCase() ? 'bg-tup-soft-green text-tup-green' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => navigate('/login')}
            className="flex w-full items-center gap-4 rounded-xl px-4 py-3 font-bold text-red-400 hover:bg-red-50 mt-10"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>

      {/* Shared Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-6 py-4 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-lg p-1 active:scale-95 transition-transform"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-sm font-bold text-gray-400 leading-none">TUP Manila</h1>
            <p className="text-lg font-extrabold leading-tight">Student Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="h-6 w-6 text-gray-600" />
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-tup-soft-green">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea" alt="Profile" />
          </div>
        </div>
      </header>

      {/* Dynamic Page Content */}
      <main className="px-6 pt-6">{children}</main>

      {/* ✅ ADDED: The Navigation bar at the bottom */}
      <BottomNavigation activePage={activePage} />
    </div>
  );
};

export default StudentLayout;