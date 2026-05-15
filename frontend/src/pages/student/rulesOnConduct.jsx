import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { useLocation } from 'react-router-dom';
import { DisciplinaryOffenses } from '../../constants/handbookPolicies';
import HelpBanner from '../../components/common/helpBanner';
import SubmitInquiryModal from '../../components/inquiry/submitInquiryModal';
import { 
  Building2,
  Scale,
  Filter,
  ClipboardList,
  UserCheck
} from 'lucide-react';

const RulesOnConduct = () => {
  // Dual-filter state
  const location = useLocation();
  const [severityFilter, setSeverityFilter] = useState("All");
  const [scopeFilter, setScopeFilter] = useState("All");

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Extract unique scopes dynamically from the data, sort them, THEN put "All" at the front
  const uniqueScopes = [...new Set(DisciplinaryOffenses.map(o => o.type))].sort();
  const scopes = ["All", ...uniqueScopes];

  // Dual-Filter Logic
  const filteredOffenses = DisciplinaryOffenses.filter(offense => {
    const matchSeverity = severityFilter === "All" || offense.category === severityFilter;
    const matchScope = scopeFilter === "All" || offense.type === scopeFilter;
    return matchSeverity && matchScope;
  });

  // --- NEW: SILENT ANALYTICS LOGGER ---
  useEffect(() => {
    const logPageView = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Silently insert the page view. We don't need to await or check for errors
        // because we don't want to interrupt the user's experience if logging fails.
        supabase.from('page_views').insert({
          user_id: session.user.id,
          page_name: "Rules on Conduct",
          page_path: location.pathname
        }).then(); 
      }
    };

    logPageView();
  }, [location.pathname]); // Re-run if the path changes

  return (
    <>
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
                <div key={offense.id} className="group relative flex flex-col bg-white hover:bg-red-50/20 transition-all duration-300">
                  
                  {/* Interactive Left Highlight Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-handy-dark-red scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300 z-10" />

                  {/* DESKTOP ROW VIEW */}
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

                  {/* MOBILE/TABLET CARD VIEW */}
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

        {/* BEGIN: Bottom Info Cards Grid (2x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-stretch">
          
          {/* CARD 1: The Appeal Process */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-5 hover:border-slate-300 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-slate-900 text-white rounded-xl shrink-0 shadow-md transition-transform group-hover:scale-105">
                <Scale size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">The Appeal Process</h3>
            </div>
            
            <div className="text-[13px] text-slate-600 leading-relaxed space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Minor Offenses:</span> 
                Decisions by the OSA are final and cannot be appealed.
              </div>
              
              <div>
                <span className="font-bold text-handy-dark-red block mb-2">Major Offenses (Strict 10-day window):</span>
                <ul className="space-y-2.5">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-handy-dark-red rounded-full mt-2 shrink-0" /> 
                    <p><span className="font-bold text-slate-800 block">Up to 30-day suspension:</span> Appeal to the VPAA/Campus Director.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-handy-dark-red rounded-full mt-2 shrink-0" /> 
                    <p><span className="font-bold text-slate-800 block">One-semester suspension:</span> Appeal to the University President.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-handy-dark-red rounded-full mt-2 shrink-0" /> 
                    <p><span className="font-bold text-slate-800 block">Dismissal or Expulsion:</span> Appeal to the President, then to the Board of Regents (BOR).</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CARD 2: Offices in Charge */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-5 hover:border-slate-300 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-handy-dark-red text-white rounded-xl shrink-0 shadow-md shadow-red-900/20 transition-transform group-hover:scale-105">
                <Building2 size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Offices in Charge</h3>
            </div>
            
            <div className="text-[13px] text-slate-600 leading-relaxed space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <p className="font-bold text-slate-900 mb-1.5">Office of Student Affairs (OSA)</p>
                <p className="text-slate-500 font-medium">Handles all Minor Offenses and is responsible for conducting the preliminary investigations for major cases.</p>
              </div>
              
              <div className="bg-red-50/40 p-4 rounded-xl border border-red-100 hover:border-red-200 transition-colors">
                <p className="font-bold text-handy-dark-red mb-1.5">Student Disciplinary Tribunal (SDT)</p>
                <p className="text-slate-600 font-medium">A dedicated committee consisting of four faculty members and one student representative that officially handles Major Offenses.</p>
              </div>
            </div>
          </div>

          {/* CARD 3: The Disciplinary Process (Mini Stepper) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-5 hover:border-slate-300 transition-colors group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 text-white rounded-xl shrink-0 shadow-md transition-transform group-hover:scale-105">
                  <ClipboardList size={20} />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Disciplinary Process</h3>
              </div>
              <span className="text-[9px] font-bold text-handy-dark-red bg-red-50 px-2 py-1 rounded uppercase tracking-widest">Major Offenses</span>
            </div>
            
            <div className="text-[12px] text-slate-600 font-medium relative mt-2">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100 -z-10" />
              <div className="space-y-4 relative z-0">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-handy-dark-red text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">1</div>
                  <p className="pt-1"><span className="font-bold text-slate-900">Filing:</span> Aggrieved party files a complaint with the OSA.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-handy-dark-red text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">2</div>
                  <p className="pt-1"><span className="font-bold text-slate-900">Inquiry:</span> OSA conducts preliminary check for prima facie evidence.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-handy-dark-red text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">3</div>
                  <p className="pt-1"><span className="font-bold text-slate-900">Evaluation:</span> SDT determines if the charge is sufficient.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-handy-dark-red text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">4</div>
                  <p className="pt-1"><span className="font-bold text-slate-900">Notice:</span> Respondent is served a "Notice to Answer".</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-handy-dark-red text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">5</div>
                  <p className="pt-1"><span className="font-bold text-slate-900">Hearing:</span> SDT holds hearing to receive evidence/testimonies.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-handy-dark-red text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">6</div>
                  <p className="pt-1"><span className="font-bold text-slate-900">Decision:</span> SDT issues written decision within 15 days.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4: Daily Norms of Conduct (Static List) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-5 hover:border-slate-300 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-handy-dark-red text-white rounded-xl shrink-0 shadow-md shadow-red-900/20 transition-transform group-hover:scale-105">
                <UserCheck size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Daily Norms of Conduct</h3>
            </div>
            
            <div className="text-[13px] text-slate-600 leading-relaxed space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" /> 
                <p><span className="font-bold text-slate-900 block mb-0.5">Academic Integrity</span>Maintain high academic standards and intellectual honesty at all times.</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" /> 
                <p><span className="font-bold text-slate-900 block mb-0.5">Prescribed Uniform & ID</span>Official uniform on Mon/Tue/Thu/Fri (Wash day: Wed). Official ID must be worn at all times on campus.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" /> 
                <p><span className="font-bold text-slate-900 block mb-0.5">Grooming strictly enforced</span>Males must have a clean haircut. Hair dyeing is strictly prohibited for all students.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" /> 
                <p><span className="font-bold text-slate-900 block mb-0.5">Attendance</span>Students must attend classes regularly. Absences require an Excuse Letter certified by the OSA.</p>
              </div>
            </div>
          </div>
          
        </div>
        {/* END: Bottom Info Cards Grid */}

        {/* HELP BANNER */}
        <HelpBanner onOpenInquiry={() => setIsInquiryModalOpen(true)} />

      </div>
    </StudentLayout>
    {/* The Reusable Modal! */}
    <SubmitInquiryModal 
      isOpen={isInquiryModalOpen}
      onClose={() => setIsInquiryModalOpen(false)}
      source="Rules on Conduct"
    />
    </>
  );
};

export default RulesOnConduct;