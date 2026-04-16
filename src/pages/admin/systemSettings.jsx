import React from 'react';
import { Settings, Shield, Users, Globe, Database, Activity } from 'lucide-react';
import AdminSidebar from '../../components/layout/adminSidebar';

const SystemSettings = () => {
  return (
    <div className="flex min-h-screen bg-tup-bg">
      <AdminSidebar />

      <main className="flex-1 ml-64 p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-black text-tup-navy">System Settings</h1>
          <p className="text-gray-500 mt-1">Manage global app behavior and administrative access.</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {/* Quick Toggles */}
          <section className="grid grid-cols-3 gap-6">
            <ToggleCard icon={<Shield size={20} />} title="Maintenance Mode" desc="Disables student access" active={false} />
            <ToggleCard icon={<Globe size={20} />} title="Public Access" desc="Anyone can view handbook" active={true} />
            <ToggleCard icon={<Database size={20} />} title="Manual Logs" desc="Store all chat transcripts" active={true} />
          </section>

          {/* User Management Table */}
          <section className="bg-white rounded-handbook shadow-sm border border-gray-50 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex justify-between items-center">
              <h3 className="font-bold flex items-center gap-2">
                <Users className="text-tup-green" size={20} />
                Manage Administrators
              </h3>
              <button className="text-xs font-bold text-tup-green bg-tup-soft-green px-4 py-2 rounded-lg">Add Admin</button>
            </div>
            
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Last Active</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <UserRow name="Felix del Mundo" role="Superuser" active="Online" />
                <UserRow name="Kristine B." role="Moderator" active="2 hrs ago" />
                <UserRow name="Hance (AI Core)" role="System" active="Always Online" />
              </tbody>
            </table>
          </section>

          {/* System Health */}
          <section className="bg-tup-soft-green/50 p-6 rounded-handbook border border-tup-green/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl text-tup-green shadow-sm">
                <Activity size={24} />
              </div>
              <div>
                <h4 className="font-bold">System Health: Optimal</h4>
                <p className="text-xs text-gray-500">All services (Supabase, OpenAI API) are operational.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-tup-green"></div>
              <div className="h-2 w-2 rounded-full bg-tup-green"></div>
              <div className="h-2 w-2 rounded-full bg-tup-green"></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const ToggleCard = ({ icon, title, desc, active }) => (
  <div className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50 flex justify-between items-start">
    <div className="flex gap-4">
      <div className={`p-3 rounded-xl ${active ? 'bg-tup-soft-green text-tup-green' : 'bg-gray-100 text-gray-400'}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="text-[10px] text-gray-400 font-bold">{desc}</p>
      </div>
    </div>
    <div className={`w-10 h-6 rounded-full p-1 transition-colors cursor-pointer ${active ? 'bg-tup-green' : 'bg-gray-200'}`}>
      <div className={`bg-white w-4 h-4 rounded-full shadow-sm transition-transform ${active ? 'translate-x-4' : ''}`} />
    </div>
  </div>
);

const UserRow = ({ name, role, active }) => (
  <tr className="hover:bg-gray-50/50 transition-colors">
    <td className="px-6 py-4 text-sm font-bold">{name}</td>
    <td className="px-6 py-4">
      <span className="text-[10px] font-black bg-tup-bg px-2 py-1 rounded-md text-tup-navy uppercase">{role}</span>
    </td>
    <td className="px-6 py-4 text-xs text-gray-400 font-bold">{active}</td>
    <td className="px-6 py-4 text-right">
      <button className="text-gray-300 hover:text-tup-navy font-bold text-xs px-2">Manage</button>
    </td>
  </tr>
);

export default SystemSettings;