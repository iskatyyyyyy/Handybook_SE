import React from 'react';
import StudentLayout from '../../layouts/studentLayout';
import GlassCard from '../../components/ui/glassCard';
import TupButton from '../../components/ui/tupButton';
import { 
  User, 
  Settings, 
  ShieldCheck, 
  LogOut, 
  ChevronRight, 
  GraduationCap, 
  Award,
  Bell
} from 'lucide-react';

const Profile = () => {
  // Mock Data aligned with TUP Handbook categories
  const studentInfo = {
    name: "Andrea Kristine B. Del Mundo",
    studentId: "TUPM-21-0542",
    college: "College of Science (COS)",
    program: "BS Computer Science",
    classification: "Undergraduate", // [cite: 1114]
    status: "Regular",
    gpa: "1.35", // Vying for Magna Cum Laude 
  };

  return (
    <StudentLayout activePage="profile">
      <div className="pb-10 animate-in fade-in duration-500">
        
        {/* 1. HERO IDENTITY SECTION */}
        <section className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-4">
            <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-tup-soft-green">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Andrea" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-1 right-1 p-2 bg-tup-green text-white rounded-full shadow-lg border-2 border-white active:scale-90 transition-transform">
              <Settings size={14} />
            </button>
          </div>
          <h2 className="text-2xl font-black text-tup-navy leading-tight">{studentInfo.name}</h2>
          <p className="text-xs font-bold text-tup-green uppercase tracking-widest mt-1">
            {studentInfo.studentId}
          </p>
        </section>

        {/* 2. ACADEMIC STATUS GRID */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <StatusCard 
            icon={<GraduationCap size={20} />} 
            label="Classification" 
            value={studentInfo.classification} 
          />
          <StatusCard 
            icon={<ShieldCheck size={20} />} 
            label="Enrollment" 
            value={studentInfo.status} 
          />
        </div>

        {/* 3. PROGRAM DETAILS CARD */}
        <GlassCard className="p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-tup-soft-green rounded-2xl text-tup-green">
              <Award size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Current Program</p>
              <h3 className="font-bold text-tup-navy leading-tight">{studentInfo.program}</h3>
              <p className="text-xs text-gray-500 font-medium">{studentInfo.college}</p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Academic Standing</p>
              <p className="text-sm font-bold text-tup-navy">GWA: {studentInfo.gpa}</p>
            </div>
            <div className="text-right">
               <span className="px-3 py-1 bg-tup-soft-green text-tup-green text-[10px] font-black rounded-full uppercase">
                 Deans Lister
               </span>
            </div>
          </div>
        </GlassCard>

        {/* 4. SETTINGS & ACTIONS */}
        <section className="space-y-3">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 mb-2">Account Settings</p>
          
          <SettingItem icon={<Bell size={18} />} label="Notifications" />
          <SettingItem icon={<ShieldCheck size={18} />} label="Privacy & Security" />
          <SettingItem icon={<User size={18} />} label="Edit Personal Info" />
          
          <div className="pt-4">
            <TupButton variant="outline" className="w-full text-red-500 border-red-100 hover:bg-red-50">
              <LogOut size={18} />
              Logout from Handybook
            </TupButton>
          </div>
        </section>

        {/* 5. VERSION FOOTER */}
        <p className="mt-10 text-center text-[10px] font-bold text-gray-300 uppercase tracking-widest">
          Handybook Mobile v1.2.0 • TUP Manila
        </p>
      </div>
    </StudentLayout>
  );
};

// Sub-components
const StatusCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-handbook border border-gray-50 shadow-sm">
    <div className="text-tup-green mb-2">{icon}</div>
    <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter leading-none mb-1">{label}</p>
    <p className="text-sm font-bold text-tup-navy">{value}</p>
  </div>
);

const SettingItem = ({ icon, label }) => (
  <button className="w-full bg-white flex items-center justify-between p-5 rounded-2xl border border-gray-50 shadow-sm active:scale-[0.98] transition-all group">
    <div className="flex items-center gap-4 text-tup-navy">
      <div className="text-gray-400 group-hover:text-tup-green transition-colors">{icon}</div>
      <span className="text-sm font-bold">{label}</span>
    </div>
    <ChevronRight size={16} className="text-gray-300" />
  </button>
);

export default Profile;