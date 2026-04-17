import React from 'react';
import AdminLayout from '../../layouts/adminLayout';

const AdminAnalytics = () => {
  return (
    <AdminLayout activePage="analytics">
      {/* BEGIN: DashboardHeader */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Handbook Analytics</h2>
          <p className="text-slate-500 mt-1">Real-time overview of student engagement and AI interaction performance.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg bg-white text-xs font-bold shadow-sm hover:bg-slate-50 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Export Report
        </button>
      </div>

      {/* BEGIN: QuickStats (Using mock data) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat Card 1: Total Queries */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            </div>
            <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+12%</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Total Queries</p>
          <p className="text-3xl font-extrabold">12,450</p>
        </div>
        
        {/* Stat Card 2: AI Answered */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+8%</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">AI Answered</p>
          <p className="text-3xl font-extrabold">9,820</p>
        </div>
        
        {/* Stat Card 3: Escalated */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">-5%</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Escalated</p>
          <p className="text-3xl font-extrabold">450</p>
        </div>
        
        {/* Stat Card 4: Active Students */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">+15%</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Active Students</p>
          <p className="text-3xl font-extrabold">3,200</p>
        </div>
      </div>

      {/* BEGIN: ChartsRow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Most Viewed Sections (Using mock data) */}
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-lg">Most Viewed Sections</h3>
            <select className="text-xs font-bold border-slate-200 rounded-lg focus:ring-handy-dark-red bg-slate-50 outline-none p-2">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold">Enrollment Process</span>
                <span className="text-sm font-bold text-slate-500">2.4k views</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-handy-dark-red h-3 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold">Academic Calendar</span>
                <span className="text-sm font-bold text-slate-500">1.8k views</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-handy-dark-red h-3 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold">Scholarship Req.</span>
                <span className="text-sm font-bold text-slate-500">1.2k views</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-handy-dark-red h-3 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly AI Queries Chart */}
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg">Frequent AI Queries</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-handy-dark-red"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">12.4k Total</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mb-8">Activity last 7 days</p>
          
          <div className="flex-1 flex items-end justify-between gap-4 px-4 pb-4 min-h-[200px]">
            <div className="flex-1 flex flex-col items-center gap-4">
              <div className="w-full bg-red-100/50 rounded-t-lg" style={{ height: '40%' }}></div>
              <span className="text-[10px] font-bold text-slate-500 text-center uppercase tracking-tight">Grades</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4">
              <div className="w-full bg-red-100/50 rounded-t-lg" style={{ height: '70%' }}></div>
              <span className="text-[10px] font-bold text-slate-500 text-center uppercase tracking-tight">Policies</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4">
              <div className="w-full bg-red-100/50 rounded-t-lg" style={{ height: '55%' }}></div>
              <span className="text-[10px] font-bold text-slate-500 text-center uppercase tracking-tight">Shifting</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-4">
              <div className="w-full bg-handy-dark-red rounded-t-lg shadow-sm" style={{ height: '90%' }}></div>
              <span className="text-[10px] font-bold text-slate-800 text-center uppercase tracking-tight">Enrollment</span>
            </div>
          </div>
        </div>
      </div>

      {/* BEGIN: InteractionsTable (Using mock query) */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-lg">Recent Escalations & Unanswered</h3>
          <span className="text-xs font-bold text-handy-dark-red hover:underline cursor-pointer">View All Logs</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Query Message</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {/* Mock data from original UnansweredCard */}
              <tr className="hover:bg-slate-50/30 transition-colors bg-red-50/10">
                <td className="px-6 py-4 text-sm font-bold text-gray-900">
                  "How do I appeal for a grade modification after the deadline?"
                </td>
                <td className="px-6 py-4 text-xs font-medium text-gray-500">2 mins ago</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded-full uppercase tracking-widest">Critical</span>
                </td>
                <td className="px-6 py-4 text-center">
                   <button className="bg-handy-dark-red text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-900 transition-colors shadow-sm">
                     Respond
                   </button>
                </td>
              </tr>
              
              <tr className="hover:bg-slate-50/30 transition-colors">
                <td className="px-6 py-4 text-sm font-medium">
                  "Is the 2013 Student Handbook still valid for graduation requirements?"
                </td>
                <td className="px-6 py-4 text-xs font-medium text-gray-500">1 hour ago</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-full uppercase tracking-widest">Escalated</span>
                </td>
                <td className="px-6 py-4 text-center">
                   <button className="border border-handy-dark-red text-handy-dark-red px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-50 transition-colors">
                     Review
                   </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;