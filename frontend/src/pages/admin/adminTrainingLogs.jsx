import React, { useState } from 'react';
import AdminLayout from '../../layouts/adminLayout';

const AdminTrainingLogs = () => {
  // Hollow state - No hardcoded logs[cite: 16]
  const [logs, setLogs] = useState([]);
  const [metrics, setMetrics] = useState({
    accuracy: "0.0%",
    lowConfidence: "0.0%",
    totalQueries: 0,
    mostViewed: "N/A"
  });

  return (
    <AdminLayout activePage="logs">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">AI Training & Logs</h2>
          <p className="text-slate-500 mt-1 text-lg">Monitor and refine university AI responses.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-xl bg-white text-sm font-bold shadow-sm text-slate-700">
          Export Report
        </button>
      </div>

      {/* Metrics Grid Consuming State[cite: 1] */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <MetricCard label="Overall Accuracy" value={metrics.accuracy} subValue="Live Data" />
        <MetricCard label="Low Confidence Rate" value={metrics.lowConfidence} subValue="Needs Review" />
        <MetricCard label="Most Viewed Section" value={metrics.mostViewed} />
        <MetricCard label="Total Queries" value={metrics.totalQueries} subValue="Total successful hits" />
      </div>

      {/* Dynamic Resolution Queue[cite: 16] */}
      <div className="bg-[#FCF8F8] rounded-3xl shadow-sm border border-red-50 overflow-hidden mb-10">
        <div className="p-6 border-b border-red-100/50 flex justify-between items-center bg-white/50">
          <h3 className="text-xl font-extrabold text-slate-900">Query Resolution Queue</h3>
          <span className="text-sm font-bold text-handy-dark-red hover:underline cursor-pointer pr-4">View All Logs</span>
        </div>

        <div className="divide-y divide-red-50/60">
          {logs.length > 0 ? (
            logs.map((log) => (
              <div key={log.id} className="p-6 flex items-center justify-between hover:bg-white/40 transition-colors">
                <div className="pr-8">
                  <p className="text-base font-medium text-slate-900 mb-2">"{log.query}"</p>
                  <p className="text-sm text-slate-500">Confidence: {log.confidence} | {log.time}</p>
                </div>
                <StatusBadge status={log.status} />
              </div>
            ))
          ) : (
            <div className="p-10 text-center text-slate-400 font-medium">No unresolved queries currently in the queue.</div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

const MetricCard = ({ label, value, subValue }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
    <p className="text-slate-400 text-sm font-bold mb-2">{label}</p>
    <div className="flex items-baseline gap-3">
      <span className="text-4xl font-black text-slate-900">{value}</span>
    </div>
    {subValue && <p className="text-xs text-slate-400 mt-2">{subValue}</p>}
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    Solved: 'bg-green-100 text-green-700',
    Escalated: 'bg-red-100 text-red-700',
    Pending: 'bg-amber-100 text-amber-700'
  };
  return (
    <span className={`px-4 py-1.5 text-[11px] font-black rounded-full uppercase tracking-widest shadow-sm ${styles[status] || 'bg-gray-100'}`}>
      {status}
    </span>
  );
};

export default AdminTrainingLogs;