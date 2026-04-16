import React from 'react';
import { Search, BookOpen, Clock, Map, Award, ChevronRight, X } from 'lucide-react';
import StudentLayout from '../../layouts/studentLayout';
import ActiveProcedureCard from '../../components/stepper/activeProcedureCard';
import GlassCard from '../../components/ui/glassCard';
import { useSearch } from '../../hooks/useSearch'; // Importing your logic

const Home = () => {
  const { searchQuery, setSearchQuery, results } = useSearch();

  // Helper to determine if we should show results
  const hasResults = searchQuery.length > 0 && (results.faqs.length > 0 || results.policies.length > 0);

  return (
    <StudentLayout activePage="home">
      {/* 1. Personalized Greeting */}
      <section className="mb-8">
        <h2 className="text-3xl font-black tracking-tight text-tup-navy">Hello, Andrea!</h2>
        <p className="text-gray-500 font-medium">How can Handybook help you today?</p>
      </section>

      {/* 2. Glass Search Bar with Logic */}
      <div className="relative mb-10 z-20">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-tup-green" size={20} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ask about grading, attendance, or policies..." 
            className="w-full rounded-2xl border border-white bg-white/60 py-4 pl-12 pr-12 shadow-sm outline-none backdrop-blur-xl focus:ring-4 focus:ring-tup-green/5 focus:border-tup-green/30 transition-all text-tup-navy font-medium"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-tup-navy transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* 3. Dynamic Search Results Overlay */}
        {searchQuery.length > 0 && (
          <GlassCard className="absolute top-full left-0 right-0 mt-2 p-2 max-h-[400px] overflow-y-auto z-30 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {!hasResults ? (
              <div className="p-8 text-center">
                <p className="text-sm text-gray-400 font-bold italic">No policies found for "{searchQuery}"</p>
                <button className="mt-2 text-xs text-tup-green font-black uppercase tracking-widest">Ask Hance Instead</button>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {/* FAQ Results (Chatbot Knowledge) */}
                {results.faqs.map((faq, index) => (
                  <button key={`faq-${index}`} className="w-full text-left p-4 hover:bg-tup-soft-green/50 transition-colors group">
                    <p className="text-xs font-black text-tup-green uppercase tracking-tighter mb-1">Found in FAQ</p>
                    <p className="text-sm font-bold text-tup-navy group-hover:translate-x-1 transition-transform">{faq.question}</p>
                  </button>
                ))}

                {/* Policy/Grading Results */}
                {results.policies.map((policy, index) => (
                  <button key={`policy-${index}`} className="w-full text-left p-4 hover:bg-tup-soft-green/50 transition-colors group">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-tighter mb-1">Handbook Section 101</p>
                    <p className="text-sm font-bold text-tup-navy group-hover:translate-x-1 transition-transform">Rating: {policy.rating} ({policy.grade})</p>
                  </button>
                ))}
              </div>
            )}
          </GlassCard>
        )}
      </div>

      {/* 4. Active Process Card - Hidden when searching for clarity */}
      {!searchQuery && (
        <>
          <ActiveProcedureCard 
            title="Shifting Course Procedure" 
            step="Department Evaluation" 
            progress={40} 
          />

          {/* 5. Bento Grid Navigation */}
          <div className="grid grid-cols-2 gap-4 pb-10">
            <div className="col-span-2 bg-tup-navy rounded-handbook p-6 text-white flex justify-between items-center shadow-lg shadow-tup-navy/10">
              <div>
                <BookOpen className="mb-2 opacity-80" size={24} />
                <p className="font-bold text-lg">Academic Policies</p>
              </div>
              <ChevronRight className="opacity-40" />
            </div>
            
            <div className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50 flex flex-col gap-2">
              <Clock className="text-tup-green" size={24} />
              <p className="text-sm font-bold text-tup-navy leading-none">Library Hours</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase">7AM - 7PM</p>
            </div>

            <div className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50 flex flex-col gap-2">
              <Map className="text-tup-green" size={24} />
              <p className="text-sm font-bold text-tup-navy leading-none">Campus Map</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase">Interactive 3D</p>
            </div>
          </div>
        </>
      )}
    </StudentLayout>
  );
};

export default Home;