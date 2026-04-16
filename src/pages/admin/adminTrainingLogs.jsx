import React from 'react';
import AdminLayout from '../../layouts/adminLayout';
import GlassCard from '../../components/ui/glassCard';
import PolicyBadge from '../../components/ui/policyBadge';
import { BrainCircuit, AlertCircle, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

const AdminTrainingLogs = () => {
  // Mock data for unanswered/low-confidence queries 
  const logs = [
    { id: 1, query: "Can I appeal for a grade change after the 1-week deadline?", status: "Escalated", confidence: "42%", time: "10 mins ago" },
    { id: 2, query: "What are the specific requirements for the BSET program in Visayas?", status: "Pending", confidence: "58%", time: "1 hr ago" },
    { id: 3, query: "How many units can a student under probation take?", status: "Solved", confidence: "94%", time: "3 hrs ago" },
  ];

  return (
    <AdminLayout>
      <div className="animate-in fade-in duration-500">
        <header className="mb-10">
          <h1 className="text-3xl font-black text-tup-navy">AI Training & Logs</h1>
          <p className="text-gray-500 mt-1">Review AI accuracy and resolve escalated student inquiries.</p>
        </header>

        {/* 1. AI HEALTH STATS [cite: 558, 568] */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <StatBox label="Overall Accuracy" value="94.4%" trend="Optimal" icon={<CheckCircle2 className="text-tup-green" />} />
          <StatBox label="Low Confidence Rate" value="5.9%" trend="Improving" icon={<AlertCircle className="text-orange-400" />} />
          <StatBox label="Total Queries" value="789" trend="+12 today" icon={<MessageSquare className="text-tup-navy" />} />
        </div>

        {/* 2. UNANSWERED / LOW CONFIDENCE QUEUE [cite: 452, 488] */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-black text-tup-navy uppercase tracking-widest">Query Resolution Queue</h3>
            <button className="text-xs font-bold text-tup-green">View All Logs</button>
          </div>

          <div className="space-y-4">
            {logs.map((log) => (
              <GlassCard key={log.id} className="p-6 flex items-center justify-between group hover:border-tup-green/20 transition-all">
                <div className="flex-1 pr-10">
                  <div className="flex items-center gap-3 mb-2">
                    <PolicyBadge variant={log.status === 'Escalated' ? 'danger' : log.status === 'Solved' ? 'default' : 'warning'}>
                      {log.status}
                    </PolicyBadge>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{log.time}</span>
                  </div>
                  <p className="font-bold text-tup-navy leading-relaxed">"{log.query}"</p>
                  <p className="text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-widest">
                    AI Confidence: <span className={parseInt(log.confidence) < 50 ? 'text-red-500' : 'text-tup-green'}>{log.confidence}</span>
                  </p>
                </div>

                <button className="p-4 bg-gray-50 rounded-2xl text-tup-navy group-hover:bg-tup-green group-hover:text-white transition-all shadow-sm">
                  <ArrowRight size={20} />
                </button>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

const StatBox = ({ label, value, trend, icon }) => (
  <GlassCard className="p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-tup-bg rounded-2xl">{icon}</div>
      <span className="text-[9px] font-black text-tup-green bg-tup-soft-green px-2 py-0.5 rounded uppercase">{trend}</span>
    </div>
    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{label}</p>
    <h4 className="text-2xl font-black text-tup-navy">{value}</h4>
  </GlassCard>
);

export default AdminTrainingLogs;