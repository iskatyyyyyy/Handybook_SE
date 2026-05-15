import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../layouts/adminLayout';
import { 
  Download, 
  Sparkles, 
  Users, 
  MessageSquare, 
  AlertCircle, 
  CheckSquare,
  TrendingUp,
  MessageCircle
} from 'lucide-react';

const AdminAnalytics = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout activePage="analytics">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-500">
        
        {/* BEGIN: Hero Header Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 flex items-center gap-2 tracking-tight">
              Hello there, Juno Assidons <span className="text-2xl sm:text-3xl">👋</span>
            </h1>
            <p className="text-[13px] font-medium text-slate-500">Here are the overview for engagements and AI interaction performance.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-5 py-2.5 bg-white border-2 border-handy-dark-red text-handy-dark-red text-[13px] font-bold rounded-lg hover:bg-red-50 transition-colors shadow-sm flex items-center gap-2">
              <Download size={16} />
              Export Report
            </button>
            <button 
              onClick={() => navigate('/admin/chat')}
              className="px-5 py-2.5 bg-handy-dark-red text-white text-[13px] font-bold rounded-lg hover:bg-red-900 transition-colors shadow-sm flex items-center gap-2"
            >
              <Sparkles size={16} />
              Ask Handybook AI
            </button>
          </div>
        </section>
        {/* END: Hero Header Card */}

        {/* BEGIN: QuickStats (Solid Colored Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Stat Card 1: Total Active Users */}
          <div className="bg-[#3B82F6] p-6 rounded-2xl shadow-sm relative overflow-hidden flex items-center gap-4">
            <div className="absolute top-4 right-4 bg-white px-2 py-0.5 rounded-md text-[#3B82F6] text-[10px] font-extrabold">
              +25%
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#3B82F6] shrink-0">
              <Users size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-2">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">450</p>
              <p className="text-[11px] font-semibold opacity-90">Total Active Users</p>
            </div>
          </div>
          
          {/* Stat Card 2: AI Queries Today */}
          <div className="bg-[#F59E0B] p-6 rounded-2xl shadow-sm relative overflow-hidden flex items-center gap-4">
            <div className="absolute top-4 right-4 bg-white px-2 py-0.5 rounded-md text-[#F59E0B] text-[10px] font-extrabold">
              +15%
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#F59E0B] shrink-0">
              <MessageSquare size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-2">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">78</p>
              <p className="text-[11px] font-semibold opacity-90">AI Queries Today</p>
            </div>
          </div>
          
          {/* Stat Card 3: Escalated */}
          <div className="bg-[#A855F7] p-6 rounded-2xl shadow-sm relative overflow-hidden flex items-center gap-4">
            <div className="absolute top-4 right-4 bg-white px-2 py-0.5 rounded-md text-[#A855F7] text-[10px] font-extrabold">
              -3%
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A855F7] shrink-0">
              <AlertCircle size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-2">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">429</p>
              <p className="text-[11px] font-semibold opacity-90">Escalated</p>
            </div>
          </div>
          
          {/* Stat Card 4: Total AI Answered */}
          <div className="bg-handy-dark-red p-6 rounded-2xl shadow-sm relative overflow-hidden flex items-center gap-4">
            <div className="absolute top-4 right-4 bg-white px-2 py-0.5 rounded-md text-handy-dark-red text-[10px] font-extrabold">
              +6%
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-handy-dark-red shrink-0">
              <CheckSquare size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-2">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">1,567</p>
              <p className="text-[11px] font-semibold opacity-90">Total AI Answered</p>
            </div>
          </div>
          
        </div>
        {/* END: QuickStats */}

        {/* BEGIN: ChartsRow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Most Viewed Sections */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 text-handy-dark-red p-1.5 rounded-md">
                  <TrendingUp size={18} />
                </div>
                <h3 className="font-extrabold text-[15px] text-slate-900 tracking-tight">Most Viewed Sections</h3>
              </div>
              <select className="text-[11px] font-bold border border-slate-200 rounded-md focus:ring-handy-dark-red bg-slate-50 outline-none px-2 py-1.5 cursor-pointer text-slate-600">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>
            
            <div className="space-y-6 flex-1 justify-center flex flex-col">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[12px] font-bold text-slate-900">Enrollment Process</span>
                    <span className="text-[11px] font-bold text-slate-500">2.4k views</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-handy-dark-red h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frequent AI Queries Chart */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 text-handy-dark-red p-1.5 rounded-md">
                  <MessageCircle size={18} />
                </div>
                <h3 className="font-extrabold text-[15px] text-slate-900 tracking-tight">Frequent AI Queries</h3>
              </div>
              <select className="text-[11px] font-bold border border-slate-200 rounded-md focus:ring-handy-dark-red bg-slate-50 outline-none px-2 py-1.5 cursor-pointer text-slate-600">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>
            
            <div className="flex-1 flex items-end justify-around gap-2 px-2 pb-2 min-h-[220px] mt-4">
              {/* Bar 1 */}
              <div className="flex flex-col items-center gap-3 w-12">
                <div className="w-full bg-handy-dark-red rounded-t-sm shadow-sm" style={{ height: '140px' }}></div>
                <span className="text-[9px] font-bold text-slate-800 text-center leading-tight">Wifi Access</span>
              </div>
              {/* Bar 2 */}
              <div className="flex flex-col items-center gap-3 w-12">
                <div className="w-full bg-[#A855F7] rounded-t-sm shadow-sm" style={{ height: '160px' }}></div>
                <span className="text-[9px] font-bold text-slate-800 text-center leading-tight">Grading</span>
              </div>
              {/* Bar 3 */}
              <div className="flex flex-col items-center gap-3 w-12">
                <div className="w-full bg-[#F59E0B] rounded-t-sm shadow-sm" style={{ height: '110px' }}></div>
                <span className="text-[9px] font-bold text-slate-800 text-center leading-tight">Admissions</span>
              </div>
              {/* Bar 4 */}
              <div className="flex flex-col items-center gap-3 w-12">
                <div className="w-full bg-[#3B82F6] rounded-t-sm shadow-sm" style={{ height: '90px' }}></div>
                <span className="text-[9px] font-bold text-slate-800 text-center leading-tight">Dress code</span>
              </div>
            </div>
          </div>
          
        </div>
        {/* END: ChartsRow */}

        {/* BEGIN: InteractionsTable */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center gap-3">
            <div className="bg-red-50 text-handy-dark-red p-1.5 rounded-md">
              <TrendingUp size={18} />
            </div>
            <h3 className="font-extrabold text-[15px] text-slate-900 tracking-tight">Recent Inquiries</h3>
          </div>
          
          <div className="overflow-x-auto">
            {/* Added table-fixed to strictly enforce our custom column widths */}
            <table className="w-full text-left table-fixed">
              <thead>
                <tr className="border-b border-slate-100">
                  {/* Query Message takes all remaining space (w-full) */}
                  <th className="w-full px-6 py-4 text-[10px] font-extrabold text-slate-900 uppercase tracking-widest">Query Message</th>
                  
                  {/* Status gets a strict, non-collapsing width (w-32 is 128px) */}
                  <th className="w-32 px-6 py-4 text-[10px] font-extrabold text-slate-900 uppercase tracking-widest text-left">Status</th>
                  
                  {/* Action is now CENTERED and slightly wider (w-32) to fit the button perfectly */}
                  <th className="w-32 px-6 py-4 text-[10px] font-extrabold text-slate-900 uppercase tracking-widest text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 text-[12px] font-semibold text-slate-600 pr-10">
                    How do I appeal for a grade modification after the deadline?
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-slate-700 text-[11px] font-semibold">Pending</span>
                  </td>
                  {/* Text-center added here to perfectly center the button */}
                  <td className="px-6 py-5 text-center whitespace-nowrap">
                     {/* Removed w-full, added w-20 to keep buttons uniform size */}
                     <button className="bg-handy-dark-red text-white w-20 py-1.5 rounded-md text-[11px] font-bold hover:bg-red-900 transition-colors shadow-sm">
                       Review
                     </button>
                  </td>
                </tr>
                
                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5 text-[12px] font-semibold text-slate-600 pr-10">
                    Is the 2013 Student Handbook still valid for graduation requirements? what the hell my brother mane are you forking alright okie my dude?
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="text-slate-700 text-[11px] font-semibold">Successful</span>
                  </td>
                  <td className="px-6 py-5 text-center whitespace-nowrap">
                     <button className="bg-handy-dark-red text-white w-20 py-1.5 rounded-md text-[11px] font-bold hover:bg-red-900 transition-colors shadow-sm">
                       Review
                     </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* END: InteractionsTable */}

      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;