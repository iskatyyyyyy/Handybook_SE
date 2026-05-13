import React, { useState } from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { 
  ClipboardList, 
  MessageSquare, 
  ConciergeBell 
} from 'lucide-react';

const RulesOnConduct = () => {
  // Combined offenses for the unified table and filtering
  const allOffenses = [
    { category: "Minor Offense", title: "Liquor and Prohibited Drugs", first: "15 days Suspension", second: "30 days Suspension", third: "1 semester suspension" },
    { category: "Major Offense", title: "Possession of Prohibited Drugs", first: "Dismissal", second: "-", third: "-" },
    { category: "Minor Offense", title: "Loitering/Disturbance", first: "Warning/Apology", second: "10-20 hrs Community Service", third: "30-50 hrs Community Service" },
    { category: "Major Offense", title: "Illegal Assemblies/Rallies", first: "15 days Suspension", second: "30 days Suspension", third: "1 sem Suspension" },
    { category: "Minor Offense", title: "Dress Code Violation", first: "Warning/Apology", second: "10-20 hrs Community Service", third: "30-50 hrs Community Service" },
    // Replicating a few to demonstrate the scrolling behavior seen in the mockup
    { category: "Major Offense", title: "Vandalism of Property", first: "15 days Suspension", second: "30 days Suspension", third: "Dismissal" },
    { category: "Minor Offense", title: "Littering on Campus", first: "Warning/Apology", second: "10 hrs Community Service", third: "20 hrs Community Service" },
  ];

  const [filter, setFilter] = useState("All Categories");

  // Filter logic
  const filteredOffenses = allOffenses.filter(offense => {
    if (filter === "All Categories") return true;
    return offense.category === filter;
  });

  return (
    <StudentLayout activePage="rules">
      <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
        
        {/* BEGIN: Main Disciplinary Guidelines Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-6">
          
          {/* Header Area */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-50 text-handy-dark-red p-3 rounded-xl shrink-0">
              <ClipboardList size={24} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">Disciplinary Guidelines</h2>
              <p className="text-[13px] font-medium text-slate-500 max-w-4xl leading-relaxed">
                A comprehensive guide to student discipline and behavioral expectations. These rules ensure a safe and productive learning environment for all members of the academic community at TUP.
              </p>
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="flex items-center gap-3 mb-4">
            <label className="text-[13px] font-bold text-slate-900">Filter:</label>
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border border-slate-200 text-slate-700 text-[13px] font-semibold rounded-lg py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-handy-dark-red/20 focus:border-handy-dark-red cursor-pointer"
            >
              <option value="All Categories">All Categories</option>
              <option value="Minor Offense">Minor Offenses</option>
              <option value="Major Offense">Major Offenses</option>
            </select>
          </div>

          {/* Table Container with internal scroll */}
          <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar relative">
              <table className="w-full text-left border-collapse min-w-[800px]">
                
                {/* Sticky Red Header */}
                <thead className="sticky top-0 z-10 bg-handy-dark-red shadow-sm">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-extrabold text-white uppercase tracking-widest">Category</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold text-white uppercase tracking-widest">Offense</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold text-white uppercase tracking-widest">1st Sanction</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold text-white uppercase tracking-widest">2nd Sanction</th>
                    <th className="px-6 py-4 text-[10px] font-extrabold text-white uppercase tracking-widest">3rd Sanction</th>
                  </tr>
                </thead>
                
                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredOffenses.length > 0 ? (
                    filteredOffenses.map((offense, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-[13px] font-extrabold text-slate-900 whitespace-nowrap">
                          {offense.category}
                        </td>
                        <td className="px-6 py-4 text-[13px] font-medium text-slate-700">
                          {offense.title}
                        </td>
                        <td className="px-6 py-4 text-[12px] font-medium text-slate-600">
                          {offense.first}
                        </td>
                        <td className="px-6 py-4 text-[12px] font-medium text-slate-600">
                          {offense.second}
                        </td>
                        <td className="px-6 py-4 text-[12px] font-medium text-slate-600">
                          {offense.third}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center text-sm font-medium text-slate-400">
                        No offenses found for this category.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* END: Main Disciplinary Guidelines Card */}

        {/* BEGIN: Bottom Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
          
          {/* Appeal Process Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-50 text-handy-dark-red rounded-xl shrink-0">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Appeal Process</h3>
            </div>
            <p className="text-[13px] font-medium text-slate-500 leading-relaxed">
              Students have the right to appeal any disciplinary decision within 5 business days of the sanction. Appeals must be submitted in writing to the Office of Student Affairs.
            </p>
          </div>
          
          {/* Counseling Services Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-red-50 text-handy-dark-red rounded-xl shrink-0">
                <ConciergeBell size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Counseling Services</h3>
            </div>
            <p className="text-[13px] font-medium text-slate-500 leading-relaxed">
              Corrective actions often involve mandatory counseling. Our aim is restoration and personal growth rather than just punitive measures.
            </p>
          </div>
          
        </div>
        {/* END: Bottom Info Cards Grid */}

      </div>
    </StudentLayout>
  );
};

export default RulesOnConduct;