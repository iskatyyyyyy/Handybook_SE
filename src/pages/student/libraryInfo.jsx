import React from 'react';
import StudentLayout from '../../layouts/studentLayout';
import GlassCard from '../../components/ui/glassCard';
import { Clock, BookOpen, MapPin, Layers } from 'lucide-react';
import { LibraryInfo } from '../../constants/HandbookData';

const LibraryInfoPage = () => {
  return (
    <StudentLayout activePage="library">
      <div className="pb-10 animate-in fade-in duration-500">
        <header className="mb-8">
          <h1 className="text-3xl font-black text-tup-navy leading-tight">University Library</h1>
          <p className="text-sm text-gray-500 font-medium">Educational repository of TUP Manila.</p>
        </header>

        {/* 1. STATUS CARD */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          <GlassCard className="p-6 border-l-4 border-l-tup-green">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-tup-soft-green rounded-2xl text-tup-green">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-tup-navy">Operating Hours</h3>
                <p className="text-xs text-gray-600 mt-1">{LibraryInfo.hoursWeekday} [cite: 1382]</p>
                <p className="text-xs text-gray-600 font-bold italic mt-1">Saturday: {LibraryInfo.hoursSaturday} [cite: 1383]</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 2. FLOOR PLAN DIRECTORY */}
        <section className="space-y-4">
          <h3 className="text-xs font-black text-tup-navy uppercase tracking-widest ml-1">Floor Directory</h3>
          {LibraryInfo.sections.map((section, index) => (
            <GlassCard key={index} className="p-5 flex items-center gap-4 group hover:border-tup-green/20 transition-all">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-tup-navy/30 group-hover:bg-tup-soft-green group-hover:text-tup-green transition-colors">
                <Layers size={18} />
              </div>
              <p className="text-sm font-bold text-tup-navy">{section} [cite: 1380-1381]</p>
            </GlassCard>
          ))}
        </section>

        {/* 3. POLICY NOTE */}
        <div className="mt-10 p-5 bg-tup-navy rounded-handbook text-white shadow-xl">
           <div className="flex items-center gap-2 mb-2">
             <BookOpen size={16} className="text-tup-green" />
             <h4 className="text-[10px] font-black uppercase tracking-widest">Library Policy</h4>
           </div>
           <p className="text-[10px] text-white/60 leading-relaxed">
             The Library supports the instructional curricula and provides the research needs of the students. [cite: 1379]
           </p>
        </div>
      </div>
    </StudentLayout>
  );
};

export default LibraryInfoPage;