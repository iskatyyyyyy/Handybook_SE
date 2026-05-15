import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { DisciplinaryOffenses } from '../../constants/handbookPolicies';
import { 
  MessageSquare, 
  ConciergeBell,
  Scale,
  Filter
} from 'lucide-react';

const RulesOnConduct = () => {
  // Dual-filter state
  const [severityFilter, setSeverityFilter] = useState("All");
  const [scopeFilter, setScopeFilter] = useState("All");

  // Extract unique scopes dynamically from the data, sort them, THEN put "All" at the front
  const uniqueScopes = [...new Set(DisciplinaryOffenses.map(o => o.type))].sort();
  const scopes = ["All", ...uniqueScopes];

  // Dual-Filter Logic
  const filteredOffenses = DisciplinaryOffenses.filter(offense => {
    const matchSeverity = severityFilter === "All" || offense.category === severityFilter;
    const matchScope = scopeFilter === "All" || offense.type === scopeFilter;
    return matchSeverity && matchScope;
  });

  return (
    <StudentLayout activePage="rules">
      <div className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-10">
        
        {/* HEADER & DUAL-FILTER SECTION */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-6 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 text-handy-dark-red p-3 rounded-xl shrink-0">
                <Scale size={24} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">Rules on Conduct</h2>
                <p className="text-[13px] font-medium text-slate-500 max-w-2xl leading-relaxed">
                  Explore disciplinary guidelines and sanction timelines. Use the filters below to narrow down offenses by severity or specific topic.
                </p>
              </div>
            </div>

            {/* Severity Filters (Primary) */}
            <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0 h-fit">
              {['All', 'Major', 'Minor'].map((f) => (
                <button
                  key={f}
                  onClick={() => setSeverityFilter(f)}
                  className={`px-5 py-2 text-[12px] font-bold rounded-lg transition-all ${
                    severityFilter === f 
                      ? 'bg-handy-dark-red text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {f === 'All' ? 'All Severities' : `${f} Offenses`}
                </button>
              ))}
            </div>
          </div>

          {/* Scope Filters (Secondary) */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <Filter size={16} className="text-slate-400 shrink-0" />
              <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 w-full">
                {scopes.map((scope) => (
                  <button
                    key={scope}
                    onClick={() => setScopeFilter(scope)}
                    className={`shrink-0 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg border transition-all ${
                      scopeFilter === scope
                        ? 'bg-slate-800 text-white border-slate-800 shadow-sm'
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700'
                    }`}
                  >
                    {scope === "All" ? "All Topics" : scope}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATIC TABLE LIST */}
        <div className="mb-8 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col overflow-hidden">
          
          {/* Table Headers (Hidden on Mobile) */}
          <div className="hidden lg:grid grid-cols-12 gap-4 bg-handy-dark-red text-white p-4 text-[11px] font-bold uppercase tracking-widest border-b border-red-900 z-10 relative shadow-sm">
            <div className="col-span-2 pl-2">Category</div>
            <div className="col-span-4">Offense Description</div>
            <div className="col-span-2">1st Sanction</div>
            <div className="col-span-2">2nd Sanction</div>
            <div className="col-span-2">3rd Sanction</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col divide-y divide-slate-100">
            {filteredOffenses.map((offense) => {
              const isMajor = offense.category === "Major";

              return (
                /* ADDED HOVER LOGIC TO THIS WRAPPER */
                <div key={offense.id} className="group relative flex flex-col bg-white hover:bg-red-50/20 transition-all duration-300">
                  
                  {/* Interactive Left Highlight Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-handy-dark-red scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300 z-10" />

                  {/* DESKTOP ROW VIEW - Added group-hover:translate-x-1 */}
                  <div className="hidden lg:grid grid-cols-12 gap-4 p-4 items-center text-left transform transition-transform duration-300 group-hover:translate-x-1">
                    
                    {/* Category */}
                    <div className="col-span-2 flex items-center pl-2">
                      <div className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm ${
                        isMajor ? 'bg-handy-dark-red text-white' : 'bg-slate-800 text-white'
                      }`}>
                        {isMajor ? 'Major' : 'Minor'}
                      </div>
                    </div>

                    {/* Offense Title & Scope Tag */}
                    <div className="col-span-4 pr-4 py-2">
                      <h3 className="text-[13px] font-bold text-slate-900 leading-snug group-hover:text-handy-dark-red transition-colors">{offense.title}</h3>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest group-hover:text-slate-500 transition-colors">{offense.type}</p>
                    </div>

                    {/* 1st Sanction */}
                    <div className="col-span-2 py-2">
                      <p className="text-[11.5px] font-medium text-slate-600 pr-2 leading-relaxed">
                        {offense.sanctions[0]}
                      </p>
                    </div>

                    {/* 2nd Sanction */}
                    <div className="col-span-2 py-2">
                      <p className="text-[11.5px] font-medium text-slate-600 pr-2 leading-relaxed">
                        {offense.sanctions[1] === "None" || offense.sanctions[1] === "-" ? <span className="text-slate-300 italic group-hover:text-slate-400 transition-colors">Dismissed previously</span> : offense.sanctions[1]}
                      </p>
                    </div>

                    {/* 3rd Sanction */}
                    <div className="col-span-2 py-2">
                      <p className="text-[11.5px] font-medium text-slate-600 pr-2 leading-relaxed">
                        {offense.sanctions[2] === "None" || offense.sanctions[2] === "-" ? <span className="text-slate-300 italic group-hover:text-slate-400 transition-colors">Dismissed previously</span> : offense.sanctions[2]}
                      </p>
                    </div>
                  </div>

                  {/* MOBILE/TABLET CARD VIEW - Added group-hover:translate-x-1 */}
                  <div className="flex lg:hidden flex-col p-5 gap-4 transform transition-transform duration-300 group-hover:translate-x-1">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-fit px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm ${
                          isMajor ? 'bg-handy-dark-red text-white' : 'bg-slate-800 text-white'
                        }`}>
                          {isMajor ? 'Major' : 'Minor'}
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-500 transition-colors">{offense.type}</span>
                      </div>
                      <h3 className="text-[14px] font-bold text-slate-900 leading-snug group-hover:text-handy-dark-red transition-colors">{offense.title}</h3>
                    </div>
                    
                    <div className="flex flex-col gap-3 bg-slate-50/80 rounded-xl p-4 border border-slate-100 group-hover:bg-white group-hover:border-red-100 transition-colors">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">1st Sanction</span>
                        <span className="text-[12px] font-medium text-slate-700">{offense.sanctions[0]}</span>
                      </div>
                      <div className="flex flex-col gap-0.5 border-t border-slate-200/60 pt-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2nd Sanction</span>
                        <span className="text-[12px] font-medium text-slate-700">
                          {offense.sanctions[1] === "None" || offense.sanctions[1] === "-" ? <span className="text-slate-400 italic">Dismissed</span> : offense.sanctions[1]}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5 border-t border-slate-200/60 pt-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">3rd Sanction</span>
                        <span className="text-[12px] font-medium text-slate-700">
                          {offense.sanctions[2] === "None" || offense.sanctions[2] === "-" ? <span className="text-slate-400 italic">Dismissed</span> : offense.sanctions[2]}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
            
            {filteredOffenses.length === 0 && (
              <div className="text-center py-12 bg-white flex flex-col items-center justify-center">
                <div className="bg-slate-50 p-4 rounded-full mb-3">
                  <Filter size={24} className="text-slate-300" />
                </div>
                <p className="text-slate-600 font-bold text-[14px]">No offenses match your filters.</p>
                <p className="text-slate-400 text-[12px] mt-1">Try adjusting the severity or topic scope above.</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Appeal Process Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4 hover:border-slate-300 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-900 text-white rounded-xl shrink-0 shadow-md transition-transform group-hover:scale-105">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Appeal Process</h3>
            </div>
            <p className="text-[13px] font-medium text-slate-500 leading-relaxed">
              Students have the right to appeal any disciplinary decision within 5 business days of the sanction. Appeals must be submitted in writing to the Office of Student Affairs.
            </p>
          </div>
          
          {/* Counseling Services Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4 hover:border-slate-300 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-handy-dark-red text-white rounded-xl shrink-0 shadow-md shadow-red-900/20 transition-transform group-hover:scale-105">
                <ConciergeBell size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Counseling Services</h3>
            </div>
            <p className="text-[13px] font-medium text-slate-500 leading-relaxed">
              Corrective actions often involve mandatory counseling. Our aim is restoration and personal growth rather than just punitive measures.
            </p>
          </div>
          
        </div>

      </div>
    </StudentLayout>
  );
};

export default RulesOnConduct;