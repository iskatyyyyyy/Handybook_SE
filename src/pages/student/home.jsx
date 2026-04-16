import React from 'react';
import { Search, BookOpen, Clock, Map, Award, ChevronRight } from 'lucide-react';
import StudentLayout from '../../layouts/studentLayout';
import ActiveProcedureCard from '../../components/stepper/activeProcedureCard';

const Home = () => {
  return (
    <StudentLayout>
      {/* Greeting */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Hello, Andrea!</h2>
        <p className="text-gray-500">How can Handybook help you today?</p>
      </section>

      {/* Glass Search */}
      <div className="relative mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-tup-green" size={20} />
        <input 
          type="text" 
          placeholder="Ask Hance about policies..." 
          className="w-full rounded-2xl border border-white bg-white/60 py-4 pl-12 pr-4 shadow-sm outline-none backdrop-blur-xl focus:border-tup-green/30"
        />
      </div>

      {/* Components from your folders */}
      <ActiveProcedureCard 
        title="Shifting Course Procedure" 
        step="Department Evaluation" 
        progress={40} 
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-2 gap-4 pb-10">
        <div className="col-span-2 bg-tup-navy rounded-handbook p-6 text-white flex justify-between items-center">
           <div><BookOpen className="mb-2 opacity-80" /><p className="font-bold">Academic Policies</p></div>
           <ChevronRight className="opacity-40" />
        </div>
        <div className="bg-white p-5 rounded-handbook shadow-sm border border-gray-50">
          <Clock className="text-tup-green mb-2" /><p className="text-sm font-bold">Library Hours</p>
        </div>
        <div className="bg-white p-5 rounded-handbook shadow-sm border border-gray-50">
          <Map className="text-tup-green mb-2" /><p className="text-sm font-bold">Campus Map</p>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Home;