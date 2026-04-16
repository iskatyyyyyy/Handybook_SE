import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import GlassCard from '../../components/ui/glassCard';
import { 
  UndergradGradingSystem, 
  AttendancePolicies, 
  HonorificScholarships 
} from '../../constants/handbookData';

const GuidePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the content is fully rendered before scrolling
      const timeoutId = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Add a temporary visual highlight
          element.classList.add('ring-2', 'ring-tup-green/30', 'bg-tup-soft-green/20');
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-tup-green/30', 'bg-tup-soft-green/20');
          }, 2000);
        }
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [hash]);

  return (
    <StudentLayout activePage="policies">
      <div className="pb-24 space-y-12 animate-in fade-in duration-500">
        
        <header>
          <h1 className="text-3xl font-black text-tup-navy">TUP Handbook</h1>
          <p className="text-sm text-gray-500 font-medium">Digitalized policies for academic excellence.</p>
        </header>

        {/* SECTION: GRADING SYSTEM [cite: 1223] */}
        <section id="grading-system" className="scroll-mt-24 transition-all duration-500 p-2 rounded-2xl">
          <h2 className="text-xs font-black text-tup-green uppercase tracking-widest mb-4">Undergraduate Grading System</h2>
          <GlassCard className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-[9px] font-black text-gray-400 uppercase tracking-tighter">
                <tr>
                  <th className="px-6 py-3">Grade</th>
                  <th className="px-6 py-3">Rating</th>
                  <th className="px-6 py-3">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {UndergradGradingSystem.map((item) => (
                  <tr key={item.grade} className="text-sm font-medium">
                    <td className="px-6 py-4 text-tup-navy font-bold">{item.grade}</td>
                    <td className="px-6 py-4 text-gray-600">{item.rating}</td>
                    <td className="px-6 py-4 text-gray-400 font-bold">{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </section>

        {/* SECTION: ATTENDANCE POLICIES [cite: 1476, 1479, 1480] */}
        <section id="attendance-policies" className="scroll-mt-24 transition-all duration-500 p-2 rounded-2xl">
          <h2 className="text-xs font-black text-tup-green uppercase tracking-widest mb-4">Campus Life & Attendance</h2>
          <div className="grid gap-4">
            <GlassCard className="p-6">
              <h3 className="font-bold text-tup-navy mb-2">Uniform Policy</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Students are required to wear prescribed uniforms on <strong>{AttendancePolicies.uniformDays.join(', ')}</strong>. [cite: 1476]
              </p>
              <div className="mt-4 p-3 bg-tup-soft-green rounded-xl border border-tup-green/10 text-[11px] font-bold text-tup-green">
                WASH DAY: {AttendancePolicies.washDay.toUpperCase()} [cite: 1479]
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-l-4 border-l-red-400">
              <h3 className="font-bold text-red-500 mb-2">Absence Limit</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {AttendancePolicies.absenteeLimit}. [cite: 1199]
              </p>
            </GlassCard>
          </div>
        </section>

        {/* SECTION: SCHOLARSHIPS [cite: 1233, 1235] */}
        <section id="scholarships" className="scroll-mt-24 pb-10 p-2 rounded-2xl">
          <h2 className="text-xs font-black text-tup-green uppercase tracking-widest mb-4">Honorific Scholarships</h2>
          <div className="space-y-4">
            {HonorificScholarships.map((s) => (
              <GlassCard key={s.id} className="p-6">
                <h4 className="font-black text-tup-navy uppercase text-xs">{s.type}</h4>
                <p className="text-[11px] font-bold text-tup-green mt-1">{s.gpaRequirement} GPA Requirement</p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{s.benefits}. [cite: 1234, 1236]</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </StudentLayout>
  );
};

export default GuidePage;