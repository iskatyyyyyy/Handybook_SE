import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import GlassCard from '../../components/ui/glassCard';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

const RulesOnConduct = () => {
  const [activeTab, setActiveTab] = useState('major');

  // Actual TUP Major Offenses [cite: 1725]
  const majorOffenses = [
    { title: "Liquor and Prohibited Drugs", first: "15 days Suspension", second: "30 days Suspension", third: "1 sem Suspension" },
    { title: "Possession of Prohibited Drugs", first: "Dismissal", second: "-", third: "-" },
    { title: "Illegal Assemblies/Rallies", first: "15 days Suspension", second: "30 days Suspension", third: "1 sem Suspension" }
  ];

  // Actual TUP Minor Offenses [cite: 1765]
  const minorOffenses = [
    { title: "Loitering/Disturbance", first: "Warning/Apology", second: "10-20 hrs Community Service", third: "30-50 hrs Community Service" },
    { title: "Dress Code Violation", first: "Warning/Apology", second: "10-20 hrs Community Service", third: "30-50 hrs Community Service" }
  ];

  const data = activeTab === 'major' ? majorOffenses : minorOffenses;

  return (
    <StudentLayout activePage="policies">
      <div className="pb-10">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-tup-navy">Rules on Conduct</h1>
          <p className="text-gray-500 text-sm mt-1">Disciplinary guidelines for TUP students.</p>
        </header>

        {/* Tab Switcher */}
        <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
          <button 
            onClick={() => setActiveTab('major')}
            className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${activeTab === 'major' ? 'bg-white text-tup-navy shadow-sm' : 'text-gray-400'}`}
          >
            MAJOR OFFENSES
          </button>
          <button 
            onClick={() => setActiveTab('minor')}
            className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${activeTab === 'minor' ? 'bg-white text-tup-navy shadow-sm' : 'text-gray-400'}`}
          >
            MINOR OFFENSES
          </button>
        </div>

        {/* Offense List */}
        <div className="space-y-4">
          {data.map((offense, i) => (
            <GlassCard key={i} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-2 rounded-xl ${activeTab === 'major' ? 'bg-red-50 text-red-500' : 'bg-orange-50 text-orange-500'}`}>
                  {activeTab === 'major' ? <ShieldAlert size={20} /> : <AlertTriangle size={20} />}
                </div>
                <h3 className="font-bold text-lg">{offense.title}</h3>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <SanctionBox label="1st" sanction={offense.first} />
                <SanctionBox label="2nd" sanction={offense.second} />
                <SanctionBox label="3rd" sanction={offense.third} />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </StudentLayout>
  );
};

const SanctionBox = ({ label, sanction }) => (
  <div className="bg-tup-bg p-3 rounded-xl border border-gray-50 text-center">
    <p className="text-[10px] font-black text-gray-400 uppercase mb-1">{label} Offense</p>
    <p className="text-[10px] font-bold text-tup-navy leading-tight">{sanction}</p>
  </div>
);

export default RulesOnConduct;