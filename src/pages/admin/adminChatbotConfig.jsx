import React, { useState } from 'react';
import { Bot, Save, RefreshCw, MessageSquarePlus, Zap, BrainCircuit } from 'lucide-react';
import AdminSidebar from '../../components/layout/adminSidebar';

const AdminChatbotConfig = () => {
  const [temperature, setTemperature] = useState(0.7);

  return (
    <div className="flex min-h-screen bg-tup-bg">
      <AdminSidebar />

      <main className="flex-1 ml-64 p-10">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-black text-tup-navy">Chatbot Config</h1>
            <p className="text-gray-500 mt-1">Configure Hance's personality and intelligence parameters.</p>
          </div>
          <button className="bg-tup-green text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-tup-green/20 hover:scale-105 transition-transform">
            <Save size={20} />
            Save Changes
          </button>
        </header>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column: Personality & Model */}
          <div className="col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-handbook shadow-sm border border-gray-50">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Bot className="text-tup-green" size={20} />
                Personality & Persona
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Bot Name</label>
                  <input type="text" defaultValue="Hance" className="w-full bg-tup-bg border-none rounded-xl p-4 font-bold outline-none focus:ring-2 focus:ring-tup-green/20" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">System Instructions</label>
                  <textarea 
                    rows="4" 
                    className="w-full bg-tup-bg border-none rounded-xl p-4 text-sm leading-relaxed outline-none focus:ring-2 focus:ring-tup-green/20"
                    defaultValue="You are Hance, the official digital assistant for TUP Manila. Be professional, helpful, and concise. Always cite the handbook section when providing policy information."
                  />
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-handbook shadow-sm border border-gray-50">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="text-orange-400" size={20} />
                Model Parameters
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Creativity (Temperature)</label>
                    <span className="text-tup-green font-bold">{temperature}</span>
                  </div>
                  <input 
                    type="range" min="0" max="1" step="0.1" value={temperature} 
                    onChange={(e) => setTemperature(e.target.value)}
                    className="w-full h-2 bg-tup-bg rounded-lg appearance-none cursor-pointer accent-tup-green" 
                  />
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-300">
                    <span>PRECISE</span>
                    <span>CREATIVE</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Status & Training */}
          <div className="space-y-8">
            <div className="bg-tup-navy text-white p-8 rounded-handbook shadow-xl shadow-tup-navy/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BrainCircuit size={20} className="text-tup-green" />
                Knowledge Base
              </h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Last synced with Supabase: <br />
                <span className="text-white">April 16, 2026 - 09:42 AM</span>
              </p>
              <button className="w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2">
                <RefreshCw size={14} />
                Sync Manuals Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50">
              <h4 className="font-bold mb-4">Training Data</h4>
              <div className="space-y-3">
                <TrainingItem label="Handbook v2.0" status="Active" />
                <TrainingItem label="FAQ Dataset" status="Active" />
                <TrainingItem label="Admin Overrides" status="Pending" color="text-orange-400" />
              </div>
              <button className="w-full mt-6 border-2 border-dashed border-gray-100 py-3 rounded-xl text-xs font-bold text-gray-400 hover:border-tup-green/30 hover:text-tup-green transition-all flex items-center justify-center gap-2">
                <MessageSquarePlus size={14} />
                Upload New Data
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const TrainingItem = ({ label, status, color = "text-tup-green" }) => (
  <div className="flex justify-between items-center p-3 bg-tup-bg rounded-xl">
    <span className="text-xs font-bold text-tup-navy">{label}</span>
    <span className={`text-[10px] font-black uppercase ${color}`}>{status}</span>
  </div>
);

export default AdminChatbotConfig;