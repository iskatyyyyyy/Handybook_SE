import React from 'react';
import { Search, Plus, Filter, MoreVertical, Edit3, Trash2, RefreshCcw } from 'lucide-react';
import AdminLayout from '../../layouts/adminLayout';
import PolicyBadge from '../../components/ui/policyBadge';
import GlassCard from '../../components/ui/glassCard';

const ContentManagement = () => {
  // Updated sections to match the sectionId system used for deep linking
  const sections = [
    { id: 'grading-system', title: 'Grading System & Computation', category: 'Academic', lastEdit: 'Apr 12, 2026', status: 'Live' },
    { id: 'scholarships', title: 'Honorific Scholarship Requirements', category: 'Financial', lastEdit: 'Apr 14, 2026', status: 'Live' },
    { id: 'attendance-policies', title: 'Campus Life & Dress Code', category: 'Campus Life', lastEdit: 'Mar 05, 2026', status: 'Live' },
    { id: 'shifting-procedure', title: 'Course Shifting Procedure', category: 'Registrar', lastEdit: 'Apr 16, 2026', status: 'Draft' },
  ];

  return (
    <AdminLayout>
      <div className="animate-in fade-in duration-500">
        
        {/* 1. HEADER SECTION */}
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-black text-tup-navy">Content Management</h1>
            <p className="text-gray-500 mt-1 font-medium">Manage, edit, and update the TUP Manila digital knowledge base.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-tup-navy border border-gray-100 px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
              <RefreshCcw size={18} className="text-tup-green" />
              Sync to AI
            </button>
            <button className="bg-tup-navy text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-tup-navy/20 hover:scale-105 transition-transform">
              <Plus size={20} />
              New Section
            </button>
          </div>
        </header>

        {/* 2. SEARCH & FILTER TOOLBAR */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by section ID or title (e.g., 'grading')..." 
              className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-4 focus:ring-tup-green/5 outline-none font-medium transition-all"
            />
          </div>
          <button className="bg-white px-6 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-2 font-bold text-sm text-tup-navy hover:bg-gray-50 transition-colors">
            <Filter size={18} className="text-gray-400" />
            Category
          </button>
        </div>

        {/* 3. CONTENT LIST */}
        <div className="grid grid-cols-1 gap-4">
          {sections.map((section) => (
            <GlassCard key={section.id} className="p-6 flex items-center justify-between group hover:border-tup-green/30 transition-all cursor-pointer">
              <div className="flex items-center gap-6">
                {/* Visual ID Box */}
                <div className="h-14 w-14 bg-tup-soft-green rounded-2xl flex items-center justify-center text-tup-green font-black text-[10px] text-center px-1 break-all leading-tight uppercase">
                  {section.id.replace('-', '\n')}
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-tup-navy leading-tight">{section.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <PolicyBadge variant={section.category === 'Registrar' ? 'warning' : 'default'}>
                      {section.category}
                    </PolicyBadge>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      ID: {section.id}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Updated: {section.lastEdit}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. ACTIONS & STATUS INDICATOR */}
              <div className="flex items-center gap-6">
                <div className="text-right mr-4">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${section.status === 'Live' ? 'text-tup-green' : 'text-orange-400'}`}>
                    {section.status}
                  </span>
                  <div className={`h-1 w-full rounded-full mt-1 ${section.status === 'Live' ? 'bg-tup-green/20' : 'bg-orange-400/20'}`}>
                    <div className={`h-full rounded-full ${section.status === 'Live' ? 'bg-tup-green' : 'bg-orange-400'}`} style={{ width: section.status === 'Live' ? '100%' : '40%' }} />
                  </div>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-3 text-gray-400 hover:text-tup-navy hover:bg-gray-100 rounded-xl transition-all">
                    <Edit3 size={18} />
                  </button>
                  <button className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
                    <Trash2 size={18} />
                  </button>
                  <button className="p-3 text-gray-400">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* 5. FOOTER INFO */}
        <p className="mt-10 text-center text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
          TUP Manila Student Handbook • 2013 Revised Edition
        </p>
      </div>
    </AdminLayout>
  );
};

export default ContentManagement;