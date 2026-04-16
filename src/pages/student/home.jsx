import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Clock, Map, Award, ChevronRight, X } from 'lucide-react';
import StudentLayout from '../../layouts/studentLayout';
import ActiveProcedureCard from '../../components/stepper/activeProcedureCard';
import GlassCard from '../../components/ui/glassCard';
import { useSearch } from '../../hooks/useSearch';

const Home = () => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, results } = useSearch();

  const hasResults = searchQuery.length > 0 && (results.faqs.length > 0 || results.policies.length > 0);

  return (
    <StudentLayout activePage="home">
      {/* 1. Personalized Greeting */}
      <section className="mb-8">
        <h2 className="text-3xl font-black tracking-tight text-tup-navy">Hello, Andrea!</h2>
        <p className="text-gray-500 font-medium">How can Handybook help you today?</p>
      </section>

      {/* 2. Functional Search Bar */}
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
            <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <X size={18} />
            </button>
          )}
        </div>

        {/* Search Results Overlay */}
        {searchQuery.length > 0 && (
          <GlassCard className="absolute top-full left-0 right-0 mt-2 p-2 max-h-[400px] overflow-y-auto z-30 shadow-2xl">
            {!hasResults ? (
              <div className="p-8 text-center">
                <p className="text-sm text-gray-400 font-bold italic">No policies found.</p>
                <button 
                   onClick={() => navigate('/chat')} 
                   className="mt-2 text-xs text-tup-green font-black uppercase hover:underline"
                >
                   Ask Hance Instead
                </button>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {results.faqs.map((faq, index) => (
                  <button 
                    key={`faq-${index}`} 
                    onClick={() => navigate('/chat')} // Direct link to AI Chat
                    className="w-full text-left p-4 hover:bg-tup-soft-green/50 transition-colors group"
                  >
                    <p className="text-xs font-black text-tup-green uppercase tracking-tighter mb-1">Found in FAQ</p>
                    <p className="text-sm font-bold text-tup-navy group-hover:translate-x-1 transition-transform">{faq.question}</p>
                  </button>
                ))}
              </div>
            )}
          </GlassCard>
        )}
      </div>

      {!searchQuery && (
        <>
          {/* 3. Procedure Card Connectivity */}
          <div onClick={() => navigate('/shifting')} className="cursor-pointer active:scale-[0.98] transition-transform">
            <ActiveProcedureCard 
              title="Shifting Course Procedure" 
              step="Department Evaluation" 
              progress={40} 
            />
          </div>

          {/* 4. Bento Grid Navigation */}
          <div className="grid grid-cols-2 gap-4 pb-10 mt-6">
            {/* Academic Policies Link */}
            <div 
              onClick={() => navigate('/guide')} 
              className="col-span-2 bg-tup-navy rounded-handbook p-6 text-white flex justify-between items-center shadow-lg cursor-pointer hover:opacity-90 transition-opacity active:scale-[0.99]"
            >
              <div>
                <BookOpen className="mb-2 opacity-80" size={24} />
                <p className="font-bold text-lg">Academic Policies</p>
              </div>
              <ChevronRight className="opacity-40" />
            </div>
            
            {/* Library Link */}
            <div 
              onClick={() => navigate('/library-info')}
              className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50 flex flex-col gap-2 cursor-pointer hover:bg-gray-50 transition-colors active:scale-[0.97]"
            >
              <Clock className="text-tup-green" size={24} />
              <p className="text-sm font-bold text-tup-navy leading-none">Library Hours</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">7AM - 7PM</p>
            </div>

            {/* Campus Map Link */}
            <div 
              onClick={() => navigate('/map')} 
              className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50 flex flex-col gap-2 cursor-pointer hover:bg-gray-50 transition-colors active:scale-[0.97]"
            >
              <Map className="text-tup-green" size={24} />
              <p className="text-sm font-bold text-tup-navy leading-none">Campus Map</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Interactive 3D</p>
            </div>
          </div>
        </>
      )}
    </StudentLayout>
  );
};

export default Home;