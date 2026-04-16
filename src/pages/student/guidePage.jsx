import React from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { Bookmark, ChevronRight } from 'lucide-react';

const GuidePage = () => {
  return (
    <StudentLayout>
      <div className="pb-10">
        <header className="mb-6">
          <p className="text-xs font-bold text-tup-green uppercase tracking-widest">Handbook / Academic Policies</p>
          <h1 className="text-3xl font-black text-tup-navy mt-1">Academic Policies</h1>
        </header>

        {/* Sync Status Card */}
        <div className="bg-tup-soft-green p-5 rounded-handbook border border-tup-green/10 flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
             <div className="bg-tup-green p-2 rounded-full text-white">
                <ShieldCheck size={20} />
             </div>
             <div>
                <p className="font-bold text-sm">Handybook is up to date</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Latest revision: Oct 24, 2024</p>
             </div>
          </div>
          <button className="text-tup-green text-xs font-black">View Logs</button>
        </div>

        {/* Content Section Card */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-50 mb-6">
          <div className="flex justify-between items-start mb-4">
             <div className="bg-tup-soft-green px-4 py-2 rounded-full text-tup-green text-xs font-black">
                Section 101
             </div>
             <Bookmark className="text-gray-300" size={20} />
          </div>
          
          <h2 className="text-xl font-bold mb-3">Grading System & Computation</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            The university follows a numerical grading system to evaluate the academic performance of students...
          </p>

          <div className="space-y-3">
             <GradeItem grade="1.00 - 1.25" label="Excellent performance" />
             <GradeItem grade="1.50 - 1.75" label="Very Good performance" />
             <GradeItem grade="2.00 - 3.00" label="Passing grade" />
             <GradeItem grade="5.00" label="Failure" color="text-red-500" />
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

const GradeItem = ({ grade, label, color = "text-tup-navy" }) => (
  <div className="flex items-center gap-4">
    <div className="w-2 h-2 rounded-full bg-tup-green" />
    <p className="text-sm font-bold">
      <span className={color}>{grade}:</span>
      <span className="text-gray-500 font-medium ml-2">{label}</span>
    </p>
  </div>
);

export default GuidePage;