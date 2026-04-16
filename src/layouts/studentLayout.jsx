import React from 'react';
import BottomNavigation from '../components/glass/bottomNavigation';
import { Menu, Bell } from 'lucide-react';

const StudentLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-tup-bg pb-24 font-sans text-tup-navy">
      {/* Shared Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Menu className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-sm font-bold text-gray-400">TUP Manila</h1>
            <p className="text-lg font-extrabold leading-none">Student Portal</p>
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

      {/* Shared Bottom Nav */}
      <BottomNavigation />
    </div>
  );
};

export default StudentLayout;