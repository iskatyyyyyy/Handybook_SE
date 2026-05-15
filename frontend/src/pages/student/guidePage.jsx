import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import StudentLayout from '../../layouts/studentLayout';
import { GeneralInfoTopics } from '../../constants/handbookData';
import HelpBanner from '../../components/common/helpBanner';
import SubmitInquiryModal from '../../components/inquiry/submitInquiryModal';
import { 
  Book, History, BookOpen, UserCheck, Timer, 
  Layout, Settings, Clock, BarChart, Award, 
  LogOut, Sparkles, X, ArrowRight, MessageSquare, ChevronRight 
} from 'lucide-react';

const GuidePage = () => {
  const navigate = useNavigate();
  
  // STATEFUL REDIRECTION
  const [searchParams, setSearchParams] = useSearchParams();
  const topicParam = searchParams.get('topicId');
  const selectedTopic = topicParam ? parseInt(topicParam, 10) : null;
  
  const [activeCampus, setActiveCampus] = useState(0); 
  const [activeCollege, setActiveCollege] = useState(null);

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const iconMap = {
    History: <History size={20} />,
    BookOpen: <BookOpen size={20} />,
    UserCheck: <UserCheck size={20} />,
    Timer: <Timer size={20} />,
    Layout: <Layout size={20} />,
    Settings: <Settings size={20} />,
    Clock: <Clock size={20} />,
    BarChart: <BarChart size={20} />,
    Award: <Award size={20} />,
    LogOut: <LogOut size={20} />
  };

  const topics = GeneralInfoTopics;
  const activeTopic = topics.find(t => t.id === selectedTopic);

  const handleTopicSelect = (id) => {
    if (id) {
      setSearchParams({ topicId: id });
    } else {
      setSearchParams({}); 
    }
    setActiveCampus(0);
    setActiveCollege(null);
  };

  const handleAskHance = () => {
    if (activeTopic) {
      navigate(`/chat?topicId=${activeTopic.id}&context=${encodeURIComponent(activeTopic.title)}`);
    } else {
      navigate('/chat');
    }
  };

  return (
    <>
    <StudentLayout activePage="guide">
      <div className="relative max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
        
        {/* MAIN TOPICS GRID */}
        <section className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm transition-all duration-500 ${selectedTopic ? 'pr-[0%] lg:pr-[40%]' : ''}`}>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
            <div className="flex gap-4">
              <div className="bg-red-50 text-handy-dark-red p-2.5 rounded-xl shrink-0">
                <Book size={24} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">Handbook Topics</h1>
                <p className="text-[13px] font-medium text-slate-500 max-w-2xl text-balance">
                  Select a topic to explore university policies. Content is isolated for better readability.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic) => (
              <button 
                key={topic.id}
                onClick={() => handleTopicSelect(topic.id)}
                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all group 
                  ${selectedTopic === topic.id 
                    ? 'border-handy-dark-red bg-red-50/50 ring-1 ring-handy-dark-red shadow-sm' 
                    : 'border-slate-100 bg-white hover:border-red-200 hover:shadow-md'}`}
              >
                <div className={`p-3 rounded-lg shrink-0 transition-colors
                  ${selectedTopic === topic.id ? 'bg-red-900 text-white' : 'bg-handy-dark-red text-white group-hover:bg-red-800'}`}>
                  {iconMap[topic.iconName]}
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-[13px] font-bold text-slate-900 mb-0.5 truncate">{topic.title}</h3>
                  <p className="text-[11px] font-medium text-slate-400 leading-snug truncate">{topic.desc}</p>
                </div>
                <ArrowRight size={16} className={`text-slate-300 group-hover:text-handy-dark-red transition-transform ${selectedTopic === topic.id ? 'translate-x-1 text-handy-dark-red' : ''}`} />
              </button>
            ))}
          </div>
        </section>

        {/* FOCUSED SIDE DRAWER */}
        {selectedTopic && (
          <div className="fixed inset-y-0 right-0 w-full lg:w-[38%] bg-white shadow-[-20px_0_50px_-12px_rgba(0,0,0,0.15)] border-l border-slate-100 z-50 animate-in slide-in-from-right duration-500 flex flex-col">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="bg-handy-dark-red text-white p-2 rounded-lg">
                  {iconMap[activeTopic.iconName]}
                </div>
                <h2 className="text-lg font-bold text-slate-900">{activeTopic.title}</h2>
              </div>
              <button onClick={() => handleTopicSelect(null)} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="space-y-8">
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 items-start shadow-sm">
                  <Sparkles className="text-blue-500 shrink-0" size={18} />
                  <p className="text-[12px] text-blue-800 font-medium leading-relaxed">
                    This section is summarized for clarity. Use <strong>"Ask Hance"</strong> for specific rule clarifications.
                  </p>
                </div>

                <div className="prose prose-slate max-w-none">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="h-px bg-slate-200 flex-1"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest tracking-tighter">Official Content</span>
                    <span className="h-px bg-slate-200 flex-1"></span>
                  </div>
                  
                  {/* WIDGET 1: UNIVERSITY HISTORY */}
                  {selectedTopic === 1 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      <div>
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2 mb-6">{activeTopic.content.title}</h4>
                        <div className="relative border-l-2 border-red-100 ml-3 pl-6 space-y-8">
                          {activeTopic.content.eras?.map((era, index) => (
                            <div key={index} className="relative">
                              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-handy-dark-red border-4 border-white shadow-sm"></div>
                              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-[10px] font-bold text-handy-dark-red uppercase tracking-wider">{era.era}</span>
                                <h5 className="text-sm font-bold text-slate-900 mt-1">{era.name}</h5>
                                <p className="text-[12px] text-slate-500 mt-2 leading-relaxed">{era.milestone}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 tracking-tighter">Expansion Milestones</h5>
                        <ul className="space-y-4">
                          {activeTopic.content.milestones?.map((item, i) => (
                            <li key={i} className="flex gap-3 text-[12px] text-slate-600 font-medium leading-snug">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></div>
                              <span className="font-bold text-slate-900">{item.date}: </span>{item.desc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 tracking-tighter">Historical Leadership</h4>
                        <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                          <table className="w-full text-[12px] text-left">
                            <thead className="bg-slate-50 text-slate-500 font-bold">
                              <tr>
                                <th className="p-3">Name & Role</th>
                                <th className="p-3">Term</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 bg-white">
                              {activeTopic.content.leadership?.map((leader, i) => (
                                <tr key={i} className="hover:bg-red-50/30 transition-colors">
                                  <td className="p-3">
                                    <p className="font-bold text-slate-700 leading-tight">{leader.name}</p>
                                    <p className="text-[10px] text-slate-400 mt-0.5">{leader.role}</p>
                                  </td>
                                  <td className="p-3 text-slate-500 align-top">{leader.term}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-white/10 p-2 rounded-lg"><Sparkles className="text-yellow-400" size={20} /></div>
                          <h4 className="font-bold text-sm tracking-tighter">TUP Seal Symbolism</h4>
                        </div>
                        <p className="text-[11px] text-slate-400 mb-6 italic">Colors: {activeTopic.content.seal.colors}</p>
                        <div className="space-y-4">
                          {activeTopic.content.seal?.symbolism?.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors shadow-sm">
                              <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                              <div>
                                <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1 tracking-tighter">{item.element}</p>
                                <p className="text-[12px] text-slate-300 leading-relaxed font-medium">{item.meaning}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase mb-4 tracking-widest">Registered Goods & Services</h5>
                          <div className="space-y-3 text-left">
                            {activeTopic.content.seal.ipoClasses?.map((item, i) => (
                              <div key={i} className="text-[11px] text-slate-300 leading-relaxed">
                                <span className="font-bold text-white">{item.class}:</span> {item.desc}
                              </div>
                            ))}
                          </div>
                          <p className="text-[11px] text-slate-500 mt-6 italic">{activeTopic.content.seal?.registration}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WIDGET 2: ACADEMIC FRAMEWORK */}
                  {selectedTopic === 2 && activeTopic.content && (
                    <div className="space-y-6 pb-10">
                      {/* Campus Selector */}
                      <div className="flex p-1 bg-slate-100 rounded-xl mb-6 shadow-inner">
                        {activeTopic.content.campuses.map((campus, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveCampus(idx)}
                            className={`flex-1 py-2 text-[11px] font-bold rounded-lg transition-all ${activeCampus === idx ? 'bg-white text-handy-dark-red shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                          >
                            {campus.name}
                          </button>
                        ))}
                      </div>

                      {/* Manila Campus */}
                      {activeCampus === 0 && (
                        <div className="space-y-6">
                          {activeTopic.content.campuses[0].colleges.map((college, cIdx) => (
                            <div key={cIdx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="text-[13px] font-bold text-handy-dark-red mb-5 uppercase tracking-tighter border-b pb-2">
                                {college.name}
                              </h5>
                              <div className="space-y-5">
                                {college.programs.map((prog, pIdx) => (
                                  <div key={pIdx}>
                                    <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{prog.level}</h6>
                                    <ul className="space-y-2.5">
                                      {prog.list.map((item, iIdx) => (
                                        <li key={iIdx} className="text-[12px] text-slate-600 flex gap-3 leading-relaxed">
                                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                                {college.note && (
                                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 mt-6">
                                    <p className="text-[11px] italic text-amber-800 leading-snug"><strong>Note:</strong> {college.note}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Regional Campuses */}
                      {activeCampus === 1 && (
                        <div className="space-y-5">
                          {activeTopic.content.campuses[1].sites.map((site, sIdx) => (
                            <div key={sIdx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:border-red-100 transition-colors">
                              <h5 className="text-[13px] font-bold text-handy-dark-red mb-4 border-b pb-2 flex items-center justify-between">
                                {site.name}
                                <span className="bg-red-50 text-[10px] px-2 py-0.5 rounded text-handy-dark-red">Regional</span>
                              </h5>
                              <div className="space-y-5">
                                {site.details.map((detail, dIdx) => (
                                  <div key={dIdx}>
                                    <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{detail.level}</h6>
                                    <ul className="space-y-2">
                                      {detail.list.map((item, iIdx) => (
                                        <li key={iIdx} className="text-[12px] text-slate-600 flex gap-2 leading-relaxed">
                                          <div className="w-1 h-1 bg-red-300 rounded-full mt-2 shrink-0" />
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* WIDGET 3: ENTRY AND INTEGRATION */}
                  {selectedTopic === 3 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      {/* Admission Requirements Section */}
                      <div>
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2 mb-6">Admission Requirements</h4>
                        <div className="space-y-6">
                          {activeTopic.content.admission?.map((group, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                              <h5 className="text-[13px] font-bold text-handy-dark-red mb-4 flex items-center gap-2">
                                <UserCheck size={16} />
                                {group.category}
                              </h5>
                              <div className="space-y-4">
                                {group.requirements.map((req, rIdx) => (
                                  <div key={rIdx} className="text-[12px]">
                                    <p className="font-bold text-slate-700">{req.label}:</p>
                                    {req.isList ? (
                                      <ul className="mt-2 space-y-2 ml-4">
                                        {req.items.map((item, iIdx) => (
                                          <li key={iIdx} className="flex gap-2 text-slate-600 leading-snug">
                                            <div className="w-1 h-1 bg-red-300 rounded-full mt-1.5 shrink-0" />
                                            {item}
                                          </li>
                                        ))}
                                      </ul>
                                    ) : (
                                      <p className="text-slate-500 mt-1 leading-relaxed">{req.detail}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Transfer Policies Section */}
                      <div>
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2 mb-6">Transfer Policies</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {activeTopic.content.transferPolicies?.map((policy, pIdx) => (
                            <div key={pIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                              <h6 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">{policy.type}</h6>
                              <div className="space-y-3">
                                <div className="flex gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                                  <p className="text-[12px] text-slate-700 font-medium">
                                    <span className="font-bold">Policy: </span>{policy.policy}
                                  </p>
                                </div>
                                <div className="flex gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                  <p className="text-[12px] text-slate-500 italic">
                                    <span className="font-bold not-italic">Requirement: </span>{policy.requirement}
                                  </p>
                                </div>
                                {policy.action && (
                                  <p className="text-[11px] text-blue-600 font-bold mt-2 ml-[1.125rem]">
                                    Action: {policy.action}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WIDGET 4: STUDENT STATUS AND TENURE */}
                  {selectedTopic === 4 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      {/* Classification Section */}
                      <div>
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2 mb-6">Classification of Students</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {activeTopic.content.classifications?.map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                              <h5 className="text-[13px] font-bold text-handy-dark-red mb-1">{item.group}</h5>
                              <p className="text-[11px] text-slate-400 mb-4">{item.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {item.types.map((type, tIdx) => (
                                  <span key={tIdx} className="bg-slate-50 text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg text-[10px] font-medium">
                                    {type}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Residency Rule Section */}
                      <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-white/10 p-2 rounded-lg"><Timer className="text-yellow-400" size={20} /></div>
                          <h4 className="font-bold text-sm tracking-tighter">Maximum Residency Rule</h4>
                        </div>
                        <p className="text-[12px] text-slate-300 leading-relaxed mb-6 font-medium">
                          {activeTopic.content.residency.definition}
                        </p>

                        {/* Table-style Matrix */}
                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden mb-6">
                          <div className="grid grid-cols-2 bg-white/10 border-b border-white/10">
                            <div className="p-3 text-[10px] font-bold text-slate-400 uppercase">Program Level</div>
                            <div className="p-3 text-[10px] font-bold text-slate-400 uppercase text-right">Max Duration</div>
                          </div>
                          <div className="divide-y divide-white/10">
                            {activeTopic.content.residency.rules.map((rule, rIdx) => (
                              <div key={rIdx} className="grid grid-cols-2 hover:bg-white/[0.05] transition-colors">
                                <div className="p-3 text-[12px] font-bold text-white">{rule.level}</div>
                                <div className="p-3 text-[12px] font-bold text-red-400 text-right">{rule.max}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Special Cases Info Box */}
                        <div className="bg-white/10 p-4 rounded-xl border-l-4 border-red-500">
                          <h6 className="text-[10px] font-bold text-red-400 uppercase mb-1">Special Cases / Extensions</h6>
                          <p className="text-[11px] text-slate-300 leading-snug">
                            {activeTopic.content.residency.specialCases}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WIDGET 5: ENROLLMENT PLANNING */}
                  {selectedTopic === 5 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      {/* Credit Units Section */}
                      <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-white/10 p-2 rounded-lg"><Layout className="text-yellow-400" size={20} /></div>
                          <h4 className="font-bold text-sm tracking-tighter">Definition of a Credit Unit</h4>
                        </div>
                        <ul className="space-y-4">
                          <li className="flex gap-3 text-[12px] text-slate-300 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                            <p><span className="font-bold text-white">Standard:</span> {activeTopic.content.creditUnits.standard}</p>
                          </li>
                          <li className="flex gap-3 text-[12px] text-slate-300 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                            <p><span className="font-bold text-white">Total:</span> {activeTopic.content.creditUnits.total}</p>
                          </li>
                        </ul>
                      </div>

                      {/* Undergraduate Load Table */}
                      <div>
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Undergraduate Student Load</h4>
                        <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                          <table className="w-full text-[12px] text-left">
                            <thead className="bg-slate-50 text-slate-500 font-bold">
                              <tr>
                                <th className="p-3">Status</th>
                                <th className="p-3">Maximum Load</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 bg-white">
                              {activeTopic.content.undergraduateLoad.map((item, idx) => (
                                <tr key={idx} className="hover:bg-red-50/30 transition-colors">
                                  <td className="p-3 font-bold text-slate-700">{item.status}</td>
                                  <td className="p-3 text-slate-500">
                                    {item.limit}
                                    {item.specialNote && <p className="text-[10px] italic mt-2 text-slate-400">{item.specialNote}</p>}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Graduate and Working Students Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Graduate Student Load</h5>
                          <div className="space-y-3">
                            {activeTopic.content.graduateLoad.map((item, idx) => (
                              <div key={idx} className="text-[12px]">
                                <p className="font-bold text-slate-700">{item.category}:</p>
                                <p className="text-slate-500">{item.limit}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Working Students</h5>
                          <p className="text-[11px] italic text-slate-400 mb-4">{activeTopic.content.workingStudents.generalRule}</p>
                          <div className="space-y-3">
                            {activeTopic.content.workingStudents.fullTimeEmployedGraduate.map((item, idx) => (
                              <div key={idx} className="text-[12px]">
                                <p className="font-bold text-slate-700">{item.level}:</p>
                                <p className="text-slate-500">{item.limit}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Prerequisites Note Box */}
                      <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500 shadow-sm">
                        <h6 className="text-[10px] font-bold text-amber-600 uppercase mb-1">Pre-requisite Subjects</h6>
                        <p className="text-[11px] text-amber-800 leading-snug font-medium">
                          {activeTopic.content.prerequisites}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* WIDGET 6: COURSE AND SUBJECT ADJUSTMENTS */}
                  {selectedTopic === 6 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      {activeTopic.content.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-6">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h4 className="text-md font-bold text-slate-800 tracking-tight">{section.title}</h4>
                          </div>

                          <div className="grid grid-cols-1 gap-5">
                            
                            {/* Descriptions and Approvals (Top Level) */}
                            {section.description && (
                              <p className="text-[12px] text-slate-600 leading-relaxed font-medium px-1">
                                {section.description}
                              </p>
                            )}
                            {section.approval && !section.subsections && (
                              <p className="text-[12px] text-slate-600 leading-relaxed font-medium px-1">
                                <span className="font-bold text-slate-800">Approval Process: </span>{section.approval}
                              </p>
                            )}

                            {/* SPECIAL CLASSES & ADDING SUBJECTS (Conditions) */}
                            {(section.eligibility || section.conditions) && (
                              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                                <h5 className="text-[11px] font-bold text-handy-dark-red uppercase tracking-widest mb-5 flex items-center gap-2">
                                  <Sparkles size={14} className="text-red-400" />
                                  {section.eligibility ? "Eligibility & General Rules" : "Academic Conditions"}
                                5</h5>
                                <div className="space-y-4">
                                  {(section.eligibility || section.conditions).map((item, iIdx) => (
                                    <div key={iIdx} className="flex gap-4 items-start">
                                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                      <p className="text-[12.5px] text-slate-600 leading-relaxed font-medium">{item}</p>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Special Class Details */}
                                {section.details && (
                                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-50">
                                    {section.details.map((det, dIdx) => (
                                      <div key={dIdx} className="space-y-1">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{det.label}</p>
                                        <p className="text-[12px] text-slate-800 font-bold leading-tight">{det.value}</p>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {/* SUBSTITUTION & CHANGING (Redesigned Flow) */}
                            {section.subsections && (
                              <div className="space-y-6">
                                {section.subsections.map((sub, subIdx) => {
                                  if (sub.process) {
                                    return (
                                      <div key={subIdx} className="bg-slate-900 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden">
                                        <div className="flex flex-col gap-4 mb-8">
                                          <div className="flex items-center gap-3">
                                            <div className="bg-red-600/20 p-2 rounded-lg">
                                              <Settings className="text-red-500" size={18} />
                                            </div>
                                            <h5 className="text-sm font-extrabold tracking-tight">{sub.name}</h5>
                                          </div>
                                          {sub.timeline && (
                                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl w-fit">
                                              <Clock size={14} className="text-red-400" />
                                              <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest">
                                                {sub.timeline}
                                              </p>
                                            </div>
                                          )}
                                        </div>

                                        <div className="space-y-8 relative">
                                          {sub.process.map((step, stIdx) => (
                                            <div key={stIdx} className="flex gap-6 relative">
                                              <div className="flex flex-col items-center">
                                                <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-[13px] font-black text-white z-10 border-4 border-slate-900 shadow-lg">
                                                  {stIdx + 1}
                                                </div>
                                                {stIdx !== sub.process.length - 1 && (
                                                  <div className="w-0.5 h-full bg-red-900/30 absolute top-9" />
                                                )}
                                              </div>
                                              <div className="pb-4 pt-1.5 flex-1">
                                                <p className="text-[13.5px] font-bold text-white mb-1.5 tracking-tight">{step}</p>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    );
                                  }

                                  // If no process list, render standard condition/approval card
                                  return (
                                    <div key={subIdx} className="bg-white/60 border border-slate-100 rounded-xl p-5 mt-6 hover:shadow-md transition-shadow">
                                      <h5 className="text-[11px] font-bold text-handy-dark-red uppercase tracking-widest mb-3">{sub.name}</h5>
                                      <div className="space-y-4 text-[12.5px] text-slate-600 leading-relaxed font-medium">
                                        {sub.condition && (
                                          <div className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-handy-dark-red mt-1.5 shrink-0" />
                                            <p><span className="font-bold text-slate-800">Condition: </span>{sub.condition}</p>
                                          </div>
                                        )}
                                        {sub.approval && (
                                          <div className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                            <p><span className="font-bold text-slate-800">Approval Process: </span>{sub.approval}</p>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* DROPPING PROCEDURE - STATIC STEPPER */}
                            {section.procedure && (
                              <div className="bg-slate-900 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden">
                                <div className="flex items-center justify-between mb-8">
                                  <div className="flex items-center gap-3">
                                    <div className="bg-red-600/20 p-2 rounded-lg">
                                      <Settings className="text-red-500" size={18} />
                                    </div>
                                    <h5 className="text-sm font-extrabold tracking-tight">Official Dropping Workflow</h5>
                                  </div>
                                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                    Before Midterms
                                  </span>
                                </div>

                                <div className="space-y-8 relative">
                                  {section.procedure.map((step, stIdx) => (
                                    <div key={stIdx} className="flex gap-6 relative">
                                      <div className="flex flex-col items-center">
                                        <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-[13px] font-black text-white z-10 border-4 border-slate-900 shadow-lg">
                                          {stIdx + 1}
                                        </div>
                                        {stIdx !== section.procedure.length - 1 && (
                                          <div className="w-0.5 h-full bg-red-900/30 absolute top-9" />
                                        )}
                                      </div>
                                      <div className="pb-4">
                                        <p className="text-[13.5px] font-bold text-white mb-1.5 tracking-tight">{step.step}</p>
                                        <p className="text-[11.5px] text-slate-400 leading-relaxed font-medium">{step.detail}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* WIDGET 7: ATTENDANCE AND EXTERNAL CREDITS */}
                  {selectedTopic === 7 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      {/* Attendance Section */}
                      <div className="space-y-6">
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2">Attendance Policies</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeTopic.content.attendance.rules.map((rule, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                              <h5 className="text-[12px] font-bold text-slate-700 mb-2">{rule.title}</h5>
                              <p className="text-[12px] text-slate-500 leading-relaxed">{rule.detail}</p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-red-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-white/10 p-2 rounded-lg"><Clock className="text-red-200" size={20} /></div>
                            <h4 className="font-bold text-sm tracking-tight">{activeTopic.content.attendance.criticalRule.title}</h4>
                          </div>
                          <p className="text-[13px] font-bold text-red-100 leading-relaxed mb-4">{activeTopic.content.attendance.criticalRule.detail}</p>
                          <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                            <p className="text-[11px] italic text-red-200"><strong>Special Consideration:</strong> {activeTopic.content.attendance.criticalRule.consideration}</p>
                          </div>
                        </div>
                      </div>

                      {/* Cross-Registration Section */}
                      <div className="space-y-8">
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2">Cross-Registration & Enrollment</h4>
                        
                        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl">
                          <h5 className="text-[13px] font-bold text-red-400 mb-2 uppercase tracking-tighter">{activeTopic.content.crossRegistration[0].type}</h5>
                          <p className="text-[12px] text-slate-400 mb-8 leading-relaxed italic">{activeTopic.content.crossRegistration[0].eligibility}</p>
                          
                          <div className="space-y-8 relative">
                            {activeTopic.content.crossRegistration[0].process.map((step, sIdx) => (
                              <div key={sIdx} className="flex gap-5 relative">
                                <div className="flex flex-col items-center">
                                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-[12px] font-bold z-10 border-4 border-slate-900 shadow-lg">
                                    {sIdx + 1}
                                  </div>
                                  {sIdx !== activeTopic.content.crossRegistration[0].process.length - 1 && (
                                    <div className="w-0.5 h-full bg-red-900/30 absolute top-8" />
                                  )}
                                </div>
                                <div className="pb-2">
                                  <p className="text-[13px] font-bold text-white mb-1 tracking-tight">{step.step}</p>
                                  <p className="text-[11px] text-slate-400 leading-snug">{step.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
             
                  {/* WIDGET 8: SCHOLASTIC STANDING AND EVALUATION */}
                  {selectedTopic === 8 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      
                      {/* Grading System Section */}
                      <div className="space-y-6">
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2">Grading System</h4>
                        
                        {/* Undergrad Table */}
                        <div>
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Undergraduate Students</h5>
                          <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                            <table className="w-full text-[12px] text-left">
                              <thead className="bg-slate-50 text-slate-500 font-bold">
                                <tr>
                                  <th className="p-3">Grade</th>
                                  <th className="p-3">Percentage Equivalent</th>
                                  <th className="p-3">Descriptive Rating</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50 bg-white">
                                {activeTopic.content.gradingSystem.undergrad.map((item, idx) => (
                                  <tr key={idx} className="hover:bg-red-50/30 transition-colors">
                                    <td className="p-3 font-bold text-slate-700">{item.grade}</td>
                                    <td className="p-3 text-slate-500">{item.percentage}</td>
                                    <td className="p-3 text-slate-500">{item.rating}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Graduate Table */}
                        <div>
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 mt-6">Graduate Students</h5>
                          <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                            <table className="w-full text-[12px] text-left">
                              <thead className="bg-slate-50 text-slate-500 font-bold">
                                <tr>
                                  <th className="p-3">Grade</th>
                                  <th className="p-3">Master's Descriptive Rating</th>
                                  <th className="p-3">Doctorate Descriptive Rating</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50 bg-white">
                                {activeTopic.content.gradingSystem.graduate.map((item, idx) => (
                                  <tr key={idx} className="hover:bg-red-50/30 transition-colors">
                                    <td className="p-3 font-bold text-slate-700">{item.grade}</td>
                                    <td className="p-3 text-slate-500">{item.masters}</td>
                                    <td className="p-3 text-slate-500">{item.doctorate}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Special Remarks Box */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm mt-4">
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Special Grade Remarks (All Levels)</h5>
                          <div className="flex flex-col gap-3">
                            {activeTopic.content.gradingSystem.remarks.map((remark, idx) => (
                              <div className="flex items-start gap-3 text-[12px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                <p className="text-slate-700 leading-snug">
                                  <span className="font-bold mr-1">{remark.mark} = {remark.meaning}</span>
                                  {remark.note && <span className="text-slate-500 italic block mt-0.5">{remark.note}</span>}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Scholastic Delinquency Section */}
                      <div className="space-y-6">
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2">Scholastic Delinquency</h4>
                        
                        {/* Probationary Status (Warning theme) */}
                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <BarChart className="text-amber-500" size={20} />
                            <h5 className="text-[13px] font-bold text-amber-800 uppercase tracking-tight">{activeTopic.content.delinquency.probation.title}</h5>
                          </div>
                          <p className="text-[12px] text-amber-700/80 mb-5 leading-relaxed font-medium">{activeTopic.content.delinquency.probation.description}</p>
                          <ul className="space-y-4">
                            {activeTopic.content.delinquency.probation.conditions.map((cond, idx) => (
                              <li key={idx} className="flex gap-3 text-[12px] text-amber-900 leading-snug">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                <p><span className="font-bold">{cond.label}:</span> {cond.detail}</p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Dismissal Status (High severity theme) */}
                        <div className="bg-slate-900 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-red-600/20 p-2 rounded-lg">
                              <LogOut className="text-red-500" size={18} />
                            </div>
                            <h5 className="text-[14px] font-extrabold text-red-400 uppercase tracking-tight">{activeTopic.content.delinquency.dismissal.title}</h5>
                          </div>
                          <p className="text-[12.5px] text-slate-300 leading-relaxed font-medium mb-6">
                            {activeTopic.content.delinquency.dismissal.description}
                          </p>

                          <div className="bg-white/10 p-4 rounded-xl border-l-4 border-red-500 mb-6">
                            <h6 className="text-[10px] font-bold text-red-400 uppercase mb-1">Exemption Note</h6>
                            <p className="text-[11px] text-slate-300 leading-snug">
                              {activeTopic.content.delinquency.dismissal.exemption}
                            </p>
                          </div>

                          <h6 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Conditions for Dismissal</h6>
                          <div className="space-y-4">
                            {activeTopic.content.delinquency.dismissal.conditions.map((cond, idx) => (
                              <div key={idx} className="flex gap-4 items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <p className="text-[12.5px] text-slate-300 leading-relaxed">
                                  <span className="font-bold text-white block mb-0.5">{cond.label}</span>
                                  {cond.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                  {/* WIDGET 9: MERITS AND RECOGNITIONS */}
                  {selectedTopic === 9 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      
                      {/* Honorific Scholarship Section */}
                      <div className="space-y-6">
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2">Honorific Scholarship</h4>
                        <p className="text-[12px] text-slate-600 leading-relaxed">
                          {activeTopic.content.honorificScholarship.description}
                        </p>

                        <div>
                          <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                            <table className="w-full text-[12px] text-left">
                              <thead className="bg-slate-50 text-slate-500 font-bold">
                                <tr>
                                  <th className="p-3">Scholarship Type</th>
                                  <th className="p-3">Required Cumulative GPA</th>
                                  <th className="p-3">Minimum Grade Allowed</th>
                                  <th className="p-3">Official Recognition</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50 bg-white">
                                {activeTopic.content.honorificScholarship.table.map((item, idx) => (
                                  <tr key={idx} className="hover:bg-red-50/30 transition-colors">
                                    <td className="p-3 font-bold text-slate-700">{item.type}</td>
                                    <td className="p-3 text-slate-500">{item.gpa}</td>
                                    <td className="p-3 text-slate-500">{item.minGrade}</td>
                                    <td className="p-3 text-slate-500 font-medium text-handy-dark-red">{item.recognition}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {/* Academic Honors Section */}
                      <div className="space-y-6">
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2">Academic Honors</h4>
                        <p className="text-[12px] text-slate-600 leading-relaxed">
                          {activeTopic.content.academicHonors.description}
                        </p>

                        {/* General Qualifications Box */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm mt-4">
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Award size={14} className="text-red-400"/> General Qualifications
                          </h5>
                          <div className="flex flex-col gap-4">
                            {activeTopic.content.academicHonors.qualifications.map((qual, idx) => (
                              <div key={idx} className="flex items-start gap-3 text-[12px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                <p className="text-slate-700 leading-snug">
                                  <span className="font-bold mr-1">{qual.label}:</span>
                                  <span className="text-slate-500 block mt-0.5">{qual.detail}</span>
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Honor Classifications Matrix */}
                        <div className="bg-slate-900 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden mt-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="bg-yellow-500/20 p-2 rounded-lg">
                              <Award className="text-yellow-400" size={18} />
                            </div>
                            <h5 className="text-[14px] font-extrabold text-white tracking-tight">Honor Classifications by Program Level</h5>
                          </div>
                          
                          <p className="text-[11.5px] text-slate-400 leading-relaxed font-medium mb-6">
                            {activeTopic.content.academicHonors.classificationsDesc}
                          </p>

                          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                            <div className="grid grid-cols-3 bg-white/10 border-b border-white/10">
                              <div className="p-3 text-[10px] font-bold text-slate-400 uppercase">Required GPA Range</div>
                              <div className="p-3 text-[10px] font-bold text-slate-400 uppercase">Baccalaureate (4-5 Years)</div>
                              <div className="p-3 text-[10px] font-bold text-slate-400 uppercase">Pre-Baccalaureate (3 Years)</div>
                            </div>
                            <div className="divide-y divide-white/10">
                              {activeTopic.content.academicHonors.classifications.map((cls, idx) => (
                                <div key={idx} className="grid grid-cols-3 hover:bg-white/[0.05] transition-colors">
                                  <div className="p-3 text-[12px] font-bold text-red-400">{cls.gpa}</div>
                                  <div className="p-3 text-[12px] font-bold text-white">{cls.baccalaureate}</div>
                                  <div className="p-3 text-[12px] font-bold text-slate-300">{cls.preBaccalaureate}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* WIDGET 10: ADMINISTRATIVE EXIT AND RE-ENTRY */}
                  {selectedTopic === 10 && activeTopic.content && (
                    <div className="space-y-10 pb-10">
                      
                      {/* Leave of Absence Section */}
                      <div className="space-y-6">
                        <h4 className="text-md font-bold text-handy-dark-red border-b pb-2">Leave of Absence (LOA)</h4>
                        
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                          <h5 className="text-[11px] font-bold text-handy-dark-red uppercase tracking-widest mb-4">Application Details</h5>
                          <div className="space-y-4 mb-6">
                            {activeTopic.content.loa.processDuration.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                <p className="text-[12px] text-slate-600 leading-relaxed">
                                  <span className="font-bold text-slate-800 mr-1">{item.label}:</span>{item.detail}
                                </p>
                              </div>
                            ))}
                          </div>
                          
                          {/* Approval Routing */}
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Approval Routing</h5>
                          <div className="flex items-center flex-wrap gap-2.5">
                            {activeTopic.content.loa.routing.map((step, idx) => (
                              <React.Fragment key={idx}>
                                <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-[10.5px] font-bold text-slate-700">
                                  {step}
                                </div>
                                {idx !== activeTopic.content.loa.routing.length - 1 && <ChevronRight size={14} className="text-slate-300 mx-1" />}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        {/* Timing Constraints (Warning) */}
                        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                          <h5 className="text-[11px] font-bold text-red-600 uppercase tracking-widest mb-3">Timing Constraints & Emergencies</h5>
                          <div className="space-y-3 text-[12px] text-red-900/80 leading-relaxed">
                            <p><span className="font-bold text-red-700">Blackout Period: </span>{activeTopic.content.loa.constraints.blackout}</p>
                            <p><span className="font-bold text-red-700">Emergency Exception: </span>{activeTopic.content.loa.constraints.emergency}</p>
                          </div>
                        </div>

                        {/* AWOL Policy */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 shadow-sm">
                          <h5 className="text-[11px] font-bold text-amber-700 uppercase tracking-widest mb-3">Returning Without Official Leave (AWOL)</h5>
                          <div className="space-y-3 text-[12px] text-amber-900/80 leading-relaxed">
                            <p><span className="font-bold text-amber-800">Policy: </span>{activeTopic.content.loa.awol.policy}</p>
                            <p><span className="font-bold text-amber-800">Condition: </span>{activeTopic.content.loa.awol.condition}</p>
                          </div>
                        </div>
                      </div>

                      {/* Readmission & Graduation Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-sm font-bold text-slate-800 border-b pb-2 mb-4">Readmission Policy</h4>
                          <p className="text-[11px] text-slate-600 leading-relaxed italic mb-4">{activeTopic.content.readmission.general}</p>
                          
                          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Evaluation Process</h5>
                          <ul className="space-y-3 mb-4">
                            {activeTopic.content.readmission.evaluation.map((evalStep, idx) => (
                              <li key={idx} className="flex gap-3 text-[12px] text-slate-600 leading-snug">
                                <div className="w-1 h-1 bg-red-400 rounded-full mt-1.5 shrink-0" />
                                {evalStep}
                              </li>
                            ))}
                          </ul>
                          
                          <p className="text-[10px] text-amber-700 bg-amber-50 p-3 rounded-lg leading-relaxed">
                            <span className="font-bold uppercase">Special Cases: </span>{activeTopic.content.readmission.specialCases}
                          </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                          <h4 className="text-sm font-bold text-slate-800 border-b pb-2 mb-4">Graduation Application</h4>
                          
                          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Eligibility</h5>
                          <ul className="space-y-3 mb-6">
                            {activeTopic.content.graduation.requirements.map((req, idx) => (
                              <li key={idx} className="flex gap-3 text-[12px] text-slate-600 leading-snug">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>

                          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Timeline</h5>
                          <p className="text-[11.5px] text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
                            {activeTopic.content.graduation.timeline}
                          </p>
                        </div>
                      </div>

                      {/* Application for Clearance Section */}
                      <div className="space-y-6">
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2">Application for Clearance</h4>
                        
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                          <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Who Needs to File?</h5>
                          <ul className="space-y-2 mb-6">
                            {activeTopic.content.clearance.whoNeeds.map((person, idx) => (
                              <li key={idx} className="flex gap-3 text-[12px] text-slate-700 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                {person}
                              </li>
                            ))}
                          </ul>
                          <p className="text-[11px] text-slate-500 italic leading-relaxed border-t border-slate-200 pt-4">
                            <span className="font-bold not-italic text-slate-700">Purpose: </span>{activeTopic.content.clearance.purpose}
                          </p>
                        </div>

                        {/* Clearance Process Stepper */}
                        <div className="bg-slate-900 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden">
                          <div className="flex items-center gap-3 mb-8">
                            <div className="bg-red-600/20 p-2 rounded-lg">
                              <LogOut className="text-red-500" size={18} />
                            </div>
                            <h5 className="text-sm font-extrabold tracking-tight">Official Clearance Workflow</h5>
                          </div>

                          <div className="space-y-8 relative">
                            {activeTopic.content.clearance.process.map((step, stIdx) => (
                              <div key={stIdx} className="flex gap-6 relative">
                                <div className="flex flex-col items-center">
                                  <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-[13px] font-black text-white z-10 border-4 border-slate-900 shadow-lg">
                                    {stIdx + 1}
                                  </div>
                                  {stIdx !== activeTopic.content.clearance.process.length - 1 && (
                                    <div className="w-0.5 h-full bg-red-900/30 absolute top-9" />
                                  )}
                                </div>
                                <div className="pb-4 pt-1.5 flex-1">
                                  <p className="text-[13.5px] font-bold text-white mb-1.5 tracking-tight">{step.step}</p>
                                  <p className="text-[11.5px] text-slate-400 leading-relaxed font-medium">{step.detail}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Fees and Refunds Section */}
                      <div className="space-y-6">
                        <h4 className="text-md font-bold text-slate-800 border-b pb-2">Fees & Refunds</h4>
                        
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                              <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
                                <span className="font-bold text-slate-800">Authorized Fees: </span>{activeTopic.content.feesAndRefunds.fees.authorized}
                              </p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                              <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
                                <span className="font-bold text-slate-800">Matriculation & Regular Fees: </span>{activeTopic.content.feesAndRefunds.fees.matriculation}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Refund Matrix */}
                        <div className="bg-slate-900 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden mt-6">
                          <div className="mb-6 border-b border-white/10 pb-6">
                            <h5 className="text-[14px] font-extrabold text-white tracking-tight mb-2">Refund Policy</h5>
                            <p className="text-[12px] text-slate-400 leading-relaxed mb-3">{activeTopic.content.feesAndRefunds.refundPolicy.general}</p>
                            <p className="text-[11px] text-red-200 bg-red-500/10 p-3 rounded-lg italic">
                              <span className="font-bold uppercase not-italic">Important Note: </span>{activeTopic.content.feesAndRefunds.refundPolicy.note}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Regular Semester Table */}
                            <div>
                              <h6 className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-3">Regular Semester / Term Schedule</h6>
                              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-inner">
                                <div className="grid grid-cols-2 bg-white/10 border-b border-white/10">
                                  <div className="p-3 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Time of Withdrawal</div>
                                  <div className="p-3 text-[10px] font-bold text-slate-400 uppercase text-right tracking-tighter">Refund %</div>
                                </div>
                                <div className="divide-y divide-white/10">
                                  {activeTopic.content.feesAndRefunds.refundSchedules.regular.map((ref, idx) => (
                                    <div key={idx} className="grid grid-cols-2 hover:bg-white/[0.05] transition-colors">
                                      <div className="p-3 text-[11px] font-medium text-slate-300 leading-snug pr-4">{ref.time}</div>
                                      <div className="p-3 text-[12.5px] font-bold text-white text-right flex items-center justify-end">{ref.refund}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Summer Term Table */}
                            <div>
                              <h6 className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-3">Summer Term Schedule</h6>
                              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-inner">
                                <div className="grid grid-cols-2 bg-white/10 border-b border-white/10">
                                  <div className="p-3 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Time of Withdrawal</div>
                                  <div className="p-3 text-[10px] font-bold text-slate-400 uppercase text-right tracking-tighter">Refund %</div>
                                </div>
                                <div className="divide-y divide-white/10">
                                  {activeTopic.content.feesAndRefunds.refundSchedules.summer.map((ref, idx) => (
                                    <div key={idx} className="grid grid-cols-2 hover:bg-white/[0.05] transition-colors">
                                      <div className="p-3 text-[11px] font-medium text-slate-300 leading-snug pr-4">{ref.time}</div>
                                      <div className="p-3 text-[12.5px] font-bold text-white text-right flex items-center justify-end">{ref.refund}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* Placeholders for remaining Widgets */}
                  {(selectedTopic && selectedTopic > 10) && (
                    <div className="p-10 border-2 border-dashed border-slate-100 rounded-3xl flex flex-col items-center text-center py-20">
                      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                        <BookOpen className="text-slate-300" size={32} />
                      </div>
                      <h4 className="text-sm font-bold text-slate-400 mb-2">Content Ready for Formatting</h4>
                      <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                        We will inject the specific tables and visual matrices for <strong>{activeTopic.title}</strong> here.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-50 bg-slate-50/30">
              <button onClick={handleAskHance} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-95 shadow-lg shadow-slate-200">
                <MessageSquare size={18} />
                Ask Hance about {activeTopic.title}
              </button>
            </div>
          </div>
        )}

        {/* REPLACED: BOTTOM CTA CARD */}
        <div className={`transition-all duration-500 ${selectedTopic ? 'lg:mr-[38%]' : ''}`}>
          <HelpBanner onOpenInquiry={() => setIsInquiryModalOpen(true)} />
        </div>
      </div>
      
      {/* Backdrop for mobile */}
      {selectedTopic && (
        <div 
          onClick={() => handleTopicSelect(null)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </StudentLayout>
      {/* The Reusable Modal! */}
          <SubmitInquiryModal 
            isOpen={isInquiryModalOpen}
            onClose={() => setIsInquiryModalOpen(false)}
            source="General Information"
      />
    </>
  );
};

export default GuidePage;