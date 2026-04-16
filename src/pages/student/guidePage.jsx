import React from 'react';
import StudentLayout from '../../layouts/studentLayout';
import { UndergradGradingSystem } from '../../constants/handbookData';

const GuidePage = () => {
  return (
    <StudentLayout activePage="policies">
      <div className="space-y-6">
        <h1 className="text-3xl font-black text-tup-navy">Grading System</h1>
        
        {/* Real TUP Data Grid */}
        <div className="bg-white rounded-handbook shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-tup-soft-green text-[10px] font-black text-tup-green uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Grade</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4">Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {UndergradGradingSystem.map((item) => (
                <tr key={item.grade}>
                  <td className="px-6 py-4 font-bold text-tup-navy">{item.grade}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.rating}</td>
                  <td className="px-6 py-4 text-xs font-bold text-gray-400">{item.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StudentLayout>
  );
};

export default GuidePage;