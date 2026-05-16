import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Scale, Building2, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

import handybookLogoExtd from '../assets/images/Group_44.svg';

// --- MOCK GLOBAL SEARCH INDEX ---
const globalSearchIndex = [
  { id: 1, title: 'University History & Expansion', category: 'General Info', path: '/guide?topicId=1', icon: BookOpen },
  { id: 2, title: 'Academic Framework & Degrees', category: 'General Info', path: '/guide?topicId=2', icon: BookOpen },
  { id: 3, title: 'Admission Requirements', category: 'General Info', path: '/guide?topicId=3', icon: BookOpen },
  { id: 4, title: 'Maximum Residency Rule', category: 'General Info', path: '/guide?topicId=4', icon: BookOpen },
  { id: 5, title: 'Grading System & Delinquency', category: 'General Info', path: '/guide?topicId=8', icon: BookOpen },
  { id: 6, title: 'Academic Honors & Latin Honors', category: 'General Info', path: '/guide?topicId=9', icon: BookOpen },
  { id: 7, title: 'Major and Minor Offenses', category: 'Rules on Conduct', path: '/rules', icon: Scale },
  { id: 8, title: 'Dress Code Policy & Uniforms', category: 'Rules on Conduct', path: '/rules', icon: Scale },
  { id: 9, title: 'Disciplinary Process & Appeals', category: 'Rules on Conduct', path: '/rules', icon: Scale },
  { id: 10, title: 'Graduation Clearance Application', category: 'Student Services', path: '/services', icon: Building2 },
  { id: 11, title: 'Leave of Absence (LOA)', category: 'Student Services', path: '/services', icon: Building2 },
  { id: 12, title: 'Medical and Dental Clinic', category: 'Student Services', path: '/services', icon: Building2 },
  { id: 13, title: 'How to Add/Drop Subjects', category: 'Student Services', path: '/services', icon: Building2 },
  { id: 14, title: 'Filing a Misconduct Complaint', category: 'Student Services', path: '/services', icon: Building2 },
];

const StudentLayout = ({ children, activePage }) => {
  const navigate = useNavigate();
  
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // --- SEARCH BAR STATE & LOGIC ---
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : globalSearchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchResultClick = (path) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  // --- SUPABASE DYNAMIC USER DATA ---
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        const { data, error } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', session.user.id)
          .single();

        if (data && !error) {
          setFirstName(data.first_name);
          setLastName(data.last_name);
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  // --- NEW: Download Handbook Function ---
  const handleDownload = () => {
    const fileId = "1xDY2-kVcGStG6QVktrHPMs3jv8HPA2p_";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
  };

  const getSidebarLinkClass = (pageName) => {
    const baseClass = "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] ";
    return activePage === pageName 
      ? baseClass + "bg-handy-dark-red text-white shadow-sm font-semibold" 
      : baseClass + "text-slate-500 hover:bg-slate-50 hover:text-handy-dark-red font-medium";
  };

  const actionLinkClass = "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] text-slate-500 hover:bg-slate-50 hover:text-handy-dark-red font-medium";

  return (
    <>
      <div 
        className="bg-[#F4F6F8] text-slate-900 h-screen flex overflow-hidden p-3 sm:p-4 gap-3 sm:gap-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        
        {/* SIDEBAR */}
        <aside className="w-60 h-full bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col shrink-0 relative z-20">
          <div className="px-5 py-5 flex items-center shrink-0 border-b border-slate-50">
            <img src={handybookLogoExtd} alt="Handybook Logo" className="h-12 object-contain"/>
          </div>

          <div className="flex-1 flex flex-col px-3 py-5 overflow-y-auto custom-scrollbar">
            <div className="space-y-6">
              {/* Main Navigation */}
              <nav className="space-y-0.5">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Main Navigation</p>
                <div onClick={() => navigate('/home')} className={getSidebarLinkClass('home')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Dashboard</span>
                </div>
                <div onClick={() => navigate('/guide')} className={getSidebarLinkClass('guide')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>General Information</span>
                </div>
                <div onClick={() => navigate('/services')} className={getSidebarLinkClass('services')}>
                   <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Student Services</span>
                </div>
                <div onClick={() => navigate('/rules')} className={getSidebarLinkClass('rules')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Rules on Conduct</span>
                </div>
                <div onClick={() => navigate('/map')} className={getSidebarLinkClass('map')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  <span>Campus Life</span>
                </div>
              </nav>

              {/* Resources Navigation */}
              <nav className="space-y-0.5">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Resources</p>
                <div onClick={() => navigate('/inquiries')} className={getSidebarLinkClass('inquiries')}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>My Inquiries</span>
                </div>
                <div onClick={() => navigate('/chat')} className={actionLinkClass}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  <span>Ask Hance</span>
                </div>
                {/* WIRED UP DOWNLOAD BUTTON */}
                <div onClick={handleDownload} className={actionLinkClass}>
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  <span>Download Handbook</span>
                </div>
              </nav>
            </div>

            {/* Account Settings Navigation */}
            <nav className="space-y-0.5 mt-auto pt-6">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">Account Settings</p>
              <div onClick={() => setIsSettingsModalOpen(true)} className={actionLinkClass}>
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Settings</span>
              </div>
              <div onClick={() => setIsLogoutModalOpen(true)} className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] text-slate-500 hover:bg-red-50 hover:text-red-600 font-semibold">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                <span>Logout Account</span>
              </div>
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
          
          <header className="h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between px-5 shrink-0 mb-3 sm:mb-4 relative z-50">
            
            <div className="relative w-full max-w-lg" ref={searchRef}>
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                <Search size={16} />
              </span>
              <input 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="block w-full bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-handy-dark-red focus:bg-white rounded-lg py-1.5 pl-9 pr-3 text-[13px] font-medium text-slate-700 transition-all outline-none placeholder:text-slate-400" 
                placeholder="Search for policies, rules, or guides..." 
                type="text" 
              />

              {isSearchOpen && searchQuery.trim() !== '' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                    {searchResults.length > 0 ? (
                      <div className="p-2 space-y-1">
                        <div className="px-3 pt-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Suggested Results
                        </div>
                        {searchResults.map((result) => {
                          const Icon = result.icon;
                          return (
                            <button
                              key={result.id}
                              onClick={() => handleSearchResultClick(result.path)}
                              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 group text-left transition-colors"
                            >
                              <div className="bg-red-50 text-handy-dark-red p-2 rounded-lg group-hover:bg-handy-dark-red group-hover:text-white transition-colors">
                                <Icon size={16} />
                              </div>
                              <div className="flex-1">
                                <p className="text-[13px] font-bold text-slate-900 group-hover:text-handy-dark-red transition-colors">
                                  {result.title}
                                </p>
                                <p className="text-[11px] font-medium text-slate-500">
                                  {result.category}
                                </p>
                              </div>
                              <ArrowRight size={14} className="text-slate-300 group-hover:text-handy-dark-red group-hover:translate-x-1 transition-all" />
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="p-8 text-center text-slate-500">
                        <Search size={24} className="mx-auto mb-3 text-slate-300" />
                        <p className="text-[13px] font-bold text-slate-700">No matching guides found</p>
                        <p className="text-[12px] mt-1">Try asking <span className="text-handy-dark-red font-semibold cursor-pointer hover:underline" onClick={() => navigate('/chat')}>Hance AI</span> instead.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-3 ml-4 shrink-0">
              <div className="hidden sm:block text-right">
                <p className="text-[13px] font-semibold text-slate-900 leading-tight">
                  {firstName ? `${firstName} ${lastName}` : "Student"}
                </p>
              </div>
              <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-red-100 bg-red-50 shrink-0 cursor-pointer hover:ring-2 hover:ring-red-200 transition-all">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName || 'Student'}`} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-2">
            {children}
          </div>
        </main>
      </div>

      {isSettingsModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-200 p-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {/* ... Settings Modal Content ... */}
        </div>
      )}

      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-200 p-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-50 mb-4">
                <svg className="w-6 h-6 text-handy-dark-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
              </div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-2">Sign Out</h2>
              <p className="text-[13px] font-medium text-slate-500 mb-6 leading-relaxed">
                Are you sure you want to sign out of your account? You will need to log in again to access the dashboard.
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsLogoutModalOpen(false)}
                  className="flex-1 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-[13px] font-bold rounded-xl transition-colors border border-slate-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex-1 py-2.5 bg-handy-dark-red hover:bg-red-900 text-white text-[13px] font-bold rounded-xl transition-colors shadow-sm"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentLayout;