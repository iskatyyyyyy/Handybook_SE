import React from 'react';
import { Search, Plus, Filter, MoreVertical, Edit3, Trash2 } from 'lucide-react';
import AdminSidebar from '../../components/layout/adminSidebar';

const ContentManagement = () => {
  const sections = [
    { id: '101', title: 'Grading System & Computation', category: 'Academic', lastEdit: 'Oct 24, 2024' },
    { id: '204', title: 'Scholarship Requirements', category: 'Financial', lastEdit: 'Jan 12, 2025' },
    { id: '302', title: 'Library Code of Conduct', category: 'Campus Life', lastEdit: 'Nov 05, 2024' },
    { id: '401', title: 'Shifting Course Procedure', category: 'Registrar', lastEdit: 'Dec 18, 2024' },
  ];

  return (
    <div className="flex min-h-screen bg-tup-bg">
      <AdminSidebar />

      <main className="flex-1 ml-64 p-10">
        {/* Header Section */}
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-black text-tup-navy">Content Management</h1>
            <p className="text-gray-500 mt-1">Manage, edit, and update TUP Manila handbook sections.</p>
          </div>
          <button className="bg-tup-navy text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-tup-navy/20 hover:scale-105 transition-transform">
            <Plus size={20} />
            Create Section
          </button>
        </header>

        {/* Toolbar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search handbook sections..." 
              className="w-full bg-white border-none rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-tup-green/10 outline-none"
            />
          </div>
          <button className="bg-white px-5 rounded-2xl shadow-sm flex items-center gap-2 font-bold text-sm text-gray-500 hover:bg-gray-50">
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Content List */}
        <div className="grid grid-cols-1 gap-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50 flex items-center justify-between group hover:border-tup-green/30 transition-colors">
              <div className="flex items-center gap-6">
                <div className="h-14 w-14 bg-tup-soft-green rounded-2xl flex items-center justify-center text-tup-green font-black">
                  {section.id}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{section.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-tup-green px-2 py-0.5 bg-tup-soft-green rounded">
                      {section.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Last Edited: {section.lastEdit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-3 text-gray-400 hover:text-tup-green hover:bg-tup-soft-green rounded-xl transition-colors">
                  <Edit3 size={18} />
                </button>
                <button className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
                  <Trash2 size={18} />
                </button>
                <button className="p-3 text-gray-400">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ContentManagement;