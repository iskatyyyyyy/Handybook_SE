import React from 'react';
import StudentLayout from '../../layouts/studentLayout';
import GlassCard from '../../components/ui/glassCard';
import { 
  History, 
  Calendar, 
  FileCheck, 
  AlertCircle, 
  BarChart3,
  Clock 
} from 'lucide-react';

const EnrollmentStatus = () => {
  
  const residencyLimit = "6 years";

  return (
    <StudentLayout activePage="profile">
      <div className="pb-10 animate-in fade-in duration-500">
        
        {/* 1. STATUS HEADER */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-tup-green animate-pulse" />
            <p className="text-[10px] font-black text-tup-green uppercase tracking-[0.2em]">Currently Enrolled</p>
          </div>
          <h1 className="text-3xl font-black text-tup-navy">Academic Status</h1>
          <p className="text-sm text-gray-500 font-medium">Tracking residency and attendance compliance.</p>
        </header>

        {/* 2. ENROLLMENT OVERVIEW GRID */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <GlassCard className="p-4 flex flex-col items-center text-center">
            <Calendar className="text-tup-green mb-2" size={24} />
            <p className="text-[9px] font-black text-gray-400 uppercase">Period</p>
            <p className="text-xs font-bold text-tup-navy">{studentEnrollment.semester}</p>
            <p className="text-[10px] text-gray-400 font-medium">SY 2025-2026</p>
          </GlassCard>

          <GlassCard className="p-4 flex flex-col items-center text-center">
            <FileCheck className="text-tup-green mb-2" size={24} />
            <p className="text-[9px] font-black text-gray-400 uppercase">Load</p>
            <p className="text-xs font-bold text-tup-navy">{studentEnrollment.currentUnits} Units</p>
            <p className="text-[10px] text-gray-400 font-medium">Max: Prescribed Load</p> {/* [cite: 1135] */}
          </GlassCard>
        </div>

        {/* 3. RESIDENCY TRACKER */}
        <section className="mb-8">
          <h3 className="text-xs font-black text-tup-navy uppercase tracking-widest ml-1 mb-4">Residency Progress</h3>
          <GlassCard className="p-6">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-2xl font-black text-tup-navy leading-none">{studentEnrollment.yearsSpent}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">Years Consumed</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-tup-green leading-none">{residencyLimit}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">Maximum Allowed</p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden border border-white shadow-inner">
              <div 
                className="h-full bg-tup-green transition-all duration-1000" 
                style={{ width: `${(studentEnrollment.yearsSpent / parseInt(residencyLimit)) * 100}%` }} 
              />
            </div>
            <div className="mt-4 flex items-start gap-2 bg-tup-soft-green/50 p-3 rounded-xl border border-tup-green/10">
              <Clock size={14} className="text-tup-green mt-0.5" />
              <p className="text-[10px] text-tup-navy leading-relaxed font-medium">
                Residency is strictly enforced per Section 1.3 of the TUP Handbook. [cite: 1251]
              </p>
            </div>
          </GlassCard>
        </section>

        {/* 4. ATTENDANCE & DELINQUENCY WARNINGS */}
        <section className="space-y-4">
          <h3 className="text-xs font-black text-tup-navy uppercase tracking-widest ml-1 mb-4">Health & Compliance</h3>
          
          {/* Attendance Health */}
          <GlassCard className="p-5 flex items-center gap-5">
            <div className="w-14 h-14 rounded-full border-4 border-tup-soft-green flex items-center justify-center relative">
               <span className="text-xs font-black text-tup-navy">85%</span>
               {/* Visual Ring Overlay */}
               <svg className="absolute inset-0 w-full h-full -rotate-90">
                 <circle cx="28" cy="28" r="24" fill="none" stroke="#1B8E5F" strokeWidth="4" strokeDasharray="150" strokeDashoffset="22" />
               </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-tup-navy leading-none mb-1">Attendance Health</h4>
              <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
                Avoid exceeding the 20% absence limit to prevent being dropped. 
              </p>
            </div>
          </GlassCard>

          {/* Scholastic Status */}
          <GlassCard className="p-5 flex items-center gap-5 border-l-4 border-l-tup-green">
            <div className="p-3 bg-tup-soft-green rounded-2xl text-tup-green">
              <BarChart3 size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-tup-navy leading-none mb-1">Scholastic Status</h4>
              <p className="text-xs font-black text-tup-green uppercase tracking-widest">Good Standing</p>
              <p className="text-[10px] text-gray-400 font-medium mt-1 leading-relaxed">
                No recorded 5.0 marks for current and previous terms. 
              </p>
            </div>
          </GlassCard>

          {/* Critical Warning if delinquent (Conditional) */}
          {studentEnrollment.status === "Probationary" && (
            <div className="bg-red-50 border border-red-100 p-5 rounded-handbook flex items-start gap-4">
              <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-black text-red-600 uppercase tracking-tight">Probation Warning</h4>
                <p className="text-[10px] text-red-500 font-medium leading-relaxed mt-1">
                  You must pass at least 75% of your load to avoid dismissal from the university rolls. [cite: 1243]
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </StudentLayout>
  );
};

export default EnrollmentStatus;