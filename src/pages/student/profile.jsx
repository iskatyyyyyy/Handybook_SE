import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { Camera, Pencil, Check } from 'lucide-react';

const Profile = () => {
  // Local state for inline editing
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("Andrea Kristine");
  
  // Dummy email for prospective students
  const accountEmail = "andrea.delmundo@example.com";

  const handleSaveName = () => {
    setIsEditing(false);
    // In the future, API call to save name goes here
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSaveName();
    if (e.key === 'Escape') setIsEditing(false);
  };

  return (
    <StudentLayout activePage="profile">
      <div className="pb-10 animate-in fade-in duration-500 flex flex-col items-center justify-center min-h-[60vh]">
        
        {/* 1. HERO IDENTITY SECTION */}
        <section className="flex flex-col items-center text-center w-full max-w-md">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-tup-soft-green">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Replaced Settings with Camera Icon */}
            <button 
              className="absolute bottom-1 right-1 p-2.5 bg-tup-green text-white rounded-full shadow-lg border-2 border-white active:scale-90 transition-transform hover:bg-green-700"
              title="Change Profile Picture"
            >
              <Camera size={16} />
            </button>
          </div>

          {/* Inline Name Editing */}
          <div className="h-10 flex items-center justify-center mb-1">
            {isEditing ? (
              <div className="flex items-center gap-2 animate-in slide-in-from-bottom-1 duration-200">
                <input 
                  type="text" 
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="text-2xl font-black text-gray-800 border-b-2 border-tup-green focus:outline-none bg-transparent text-center w-64 pb-1"
                  autoFocus
                />
                <button 
                  onClick={handleSaveName}
                  className="p-1.5 bg-tup-soft-green text-tup-green rounded-lg hover:bg-tup-green hover:text-white transition-colors"
                >
                  <Check size={18} />
                </button>
              </div>
            ) : (
              <div 
                className="flex items-center gap-3 group cursor-pointer px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsEditing(true)}
                title="Edit Display Name"
              >
                <h2 className="text-2xl font-black text-gray-800 leading-tight">{displayName}</h2>
                <div className="p-1.5 text-gray-300 group-hover:text-tup-green group-hover:bg-tup-soft-green rounded-md transition-all">
                  <Pencil size={14} />
                </div>
              </div>
            )}
          </div>
          
          <p className="text-sm font-medium text-gray-500 mt-2">
            {accountEmail}
          </p>
        </section>

        {/* 2. VERSION FOOTER */}
        <div className="mt-20">
          <p className="text-center text-[10px] font-bold text-gray-300 uppercase tracking-widest">
            Handybook Mobile v1.2.0 • TUP Manila
          </p>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Profile;