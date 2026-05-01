import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, BookText, Bot, Library, User } from 'lucide-react';

// 1. Defined first to prevent ReferenceError
const NavItem = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-1 group">
    <div className={`${active ? 'text-tup-green' : 'text-gray-400'} transition-colors`}>{icon}</div>
    <span className={`text-[10px] font-bold ${active ? 'text-tup-green' : 'text-gray-400'}`}>{label}</span>
  </button>
);

const BottomNavigation = ({ activePage }) => {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-6 left-6 right-6 flex items-center justify-around rounded-[1.5rem] border border-white/20 bg-white/70 py-4 shadow-2xl backdrop-blur-xl z-50">
      <NavItem icon={<Home size={24} />} label="Home" active={activePage === 'home'} onClick={() => navigate('/home')} />
      <NavItem icon={<BookText size={24} />} label="Policies" active={activePage === 'policies'} onClick={() => navigate('/guide')} />
      
      <div onClick={() => navigate('/chat')} className="relative flex flex-col items-center group cursor-pointer">
        <div className="absolute -top-12 h-14 w-14 rounded-full bg-tup-green flex items-center justify-center border-4 border-white shadow-lg shadow-tup-green/30 transition-transform group-hover:scale-110 active:scale-95">
          <Bot className="text-white" size={28} />
        </div>
        <span className="mt-6 text-[10px] font-bold text-gray-400">AI Chat</span>
      </div>

      <NavItem icon={<Library size={24} />} label="Library" active={activePage === 'library'} onClick={() => navigate('/library-info')} />
      <NavItem icon={<User size={24} />} label="Profile" active={activePage === 'profile'} onClick={() => navigate('/status')} />
    </nav>
  );
};

export default BottomNavigation;