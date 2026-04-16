import React from 'react';
import { Home, BookText, Bot, Library, User } from 'lucide-react';

const BottomNavigation = ({ activePage }) => {
  return (
    <nav className="fixed bottom-6 left-6 right-6 flex items-center justify-around rounded-handbook border border-white/20 bg-white/70 py-4 shadow-2xl backdrop-blur-xl z-50">
      
      {/* Home */}
      <NavItem 
        icon={<Home size={24} strokeWidth={activePage === 'home' ? 2.5 : 2} />} 
        label="Home" 
        active={activePage === 'home'} 
      />

      {/* Policies */}
      <NavItem 
        icon={<BookText size={24} strokeWidth={activePage === 'policies' ? 2.5 : 2} />} 
        label="Policies" 
        active={activePage === 'policies'} 
      />
      
      {/* AI Chat (The Hero Button) */}
      <div className="relative flex flex-col items-center group cursor-pointer">
        <div className="absolute -top-12 h-14 w-14 rounded-full bg-tup-green shadow-lg shadow-tup-green/30 flex items-center justify-center border-4 border-white transition-transform group-hover:scale-110 active:scale-95">
          <Bot className="text-white" size={28} />
        </div>
        <span className="mt-6 text-[10px] font-bold text-gray-400">AI Chat</span>
      </div>

      {/* Library/Guides */}
      <NavItem 
        icon={<Library size={24} strokeWidth={activePage === 'library' ? 2.5 : 2} />} 
        label="Library" 
        active={activePage === 'library'} 
      />

      {/* Profile */}
      <NavItem 
        icon={<User size={24} strokeWidth={activePage === 'profile' ? 2.5 : 2} />} 
        label="Profile" 
        active={activePage === 'profile'} 
      />

    </nav>
  );
};

const NavItem = ({ icon, label, active }) => (
  <button className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-tup-green' : 'text-gray-400 hover:text-tup-green/70'}`}>
    {icon}
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

export default BottomNavigation;