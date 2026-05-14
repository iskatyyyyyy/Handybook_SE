import React from 'react';
import { 
  Settings, 
  Shield, 
  Users, 
  Globe, 
  Database, 
  Activity, 
  UserPlus, 
  Trash2, 
  ShieldCheck 
} from 'lucide-react';
import AdminLayout from '../../layouts/adminLayout';
import GlassCard from '../../components/ui/glassCard';

const SystemSettings = () => {
  return (
    <AdminLayout>
      <div className="animate-in fade-in duration-500">
        
        {/* 1. HEADER SECTION */}
        <header className="mb-10">
          <h1 className="text-3xl font-black text-tup-navy">System Settings</h1>
          <p className="text-gray-500 mt-1 font-medium">Global configuration and administrative access control.</p>
        </header>

        <div className="space-y-10">
          
          {/* 2. GLOBAL APP CONTROLS (Quick Toggles) */}
          <section className="grid grid-cols-3 gap-6">
            <ToggleCard 
              icon={<Shield size={20} />} 
              title="Maintenance Mode" 
              desc="Temporarily disable student access for updates." 
              active={false} 
            />
            <ToggleCard 
              icon={<Globe size={20} />} 
              title="Public Access" 
              desc="Allow non-students to view the handbook." 
              active={true} 
            />
            <ToggleCard 
              icon={<Database size={20} />} 
              title="Chat Logging" 
              desc="Archive all Hance transcripts for training." 
              active={true} 
            />
          </section>

          {/* 3. ADMINISTRATOR MANAGEMENT TABLE */}
          <section className="bg-white rounded-handbook shadow-sm border border-gray-50 overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Users className="text-tup-green" size={22} />
                  Administrative Staff
                </h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Manage portal permissions</p>
              </div>
              <button className="flex items-center gap-2 text-xs font-black text-white bg-tup-green px-5 py-3 rounded-xl shadow-lg shadow-tup-green/20 hover:scale-105 transition-all">
                <UserPlus size={16} /> ADD ADMINISTRATOR
              </button>
            </div>
            
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-8 py-5">Administrator</th>
                  <th className="px-8 py-5">Role & Clearance</th>
                  <th className="px-8 py-5">Last Session</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <UserRow 
                  name="Felix del Mundo" 
                  email="felix.dm@tup.edu.ph" 
                  role="Superuser" 
                  status="Active Now" 
                  isOnline={true}
                />
                <UserRow 
                  name="Kristine B. del Mundo" 
                  email="kristine.b@tup.edu.ph" 
                  role="Moderator" 
                  status="2 hours ago" 
                  isOnline={false}
                />
                <UserRow 
                  name="Hance (AI Core)" 
                  email="hance-ai@handybook.internal" 
                  role="System" 
                  status="Always Online" 
                  isOnline={true}
                />
              </tbody>
            </table>
          </section>

          {/* 4. CLOUD INFRASTRUCTURE HEALTH */}
          <section className="bg-tup-navy text-white p-8 rounded-handbook shadow-xl shadow-tup-navy/10 flex items-center justify-between group overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-tup-green/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-tup-green border border-white/10">
                <Activity size={28} className="animate-pulse" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Infrastucture: Optimal</h4>
                <p className="text-xs text-white/50 mt-1">Supabase Database & OpenAI API are performing within parameters.</p>
              </div>
            </div>
            
            <div className="flex gap-2 relative z-10">
              <HealthNode active={true} />
              <HealthNode active={true} />
              <HealthNode active={true} />
            </div>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
};

// --- Sub-components ---

const ToggleCard = ({ icon, title, desc, active }) => (
  <div className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50 flex justify-between items-start group hover:border-tup-green/20 transition-all">
    <div className="flex gap-4">
      <div className={`p-3 rounded-xl transition-colors ${active ? 'bg-tup-soft-green text-tup-green' : 'bg-gray-100 text-gray-400'}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-tup-navy">{title}</p>
        <p className="text-[10px] text-gray-400 font-bold leading-relaxed pr-4">{desc}</p>
      </div>
    </div>
    <div className={`w-10 h-6 rounded-full p-1 transition-colors cursor-pointer relative ${active ? 'bg-tup-green' : 'bg-gray-200'}`}>
      <div className={`bg-white w-4 h-4 rounded-full shadow-sm transition-transform ${active ? 'translate-x-4' : ''}`} />
    </div>
  </div>
);

const UserRow = ({ name, email, role, status, isOnline }) => (
  <tr className="hover:bg-gray-50/50 transition-colors group">
    <td className="px-8 py-6">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-tup-soft-green border-2 border-white overflow-hidden">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
        </div>
        <div>
          <p className="text-sm font-bold text-tup-navy">{name}</p>
          <p className="text-[10px] text-gray-400 font-bold">{email}</p>
        </div>
      </div>
    </td>
    <td className="px-8 py-6">
      <span className={`text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-widest ${
        role === 'Superuser' ? 'bg-tup-navy text-white' : 'bg-tup-soft-green text-tup-green'
      }`}>
        {role}
      </span>
    </td>
    <td className="px-8 py-6">
      <div className="flex items-center gap-2">
        {isOnline && <div className="h-1.5 w-1.5 rounded-full bg-tup-green animate-pulse" />}
        <span className="text-xs text-gray-500 font-medium">{status}</span>
      </div>
    </td>
    <td className="px-8 py-6 text-right">
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-2 text-gray-300 hover:text-tup-navy transition-colors"><Settings size={16} /></button>
        <button className="p-2 text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
      </div>
    </td>
  </tr>
);

const HealthNode = ({ active }) => (
  <div className={`h-2.5 w-2.5 rounded-full ${active ? 'bg-tup-green shadow-[0_0_8px_rgba(27,142,95,0.6)]' : 'bg-red-500'}`} />
);

export default SystemSettings;