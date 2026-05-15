import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
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

  // 1. Profile State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // 2. Dashboard Data States
  const [stats, setStats] = useState({
    users: 0,
    escalated: 0,
    aiToday: 0,  // <-- Defaulted to 0
    aiTotal: 0   // <-- Defaulted to 0
  });
  
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [topPages, setTopPages] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  // 3. Fetch all dashboard data on mount
  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);

      // --- A. Fetch Admin Profile ---
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', session.user.id)
          .single();

        if (profile) {
          setFirstName(profile.first_name);
          setLastName(profile.last_name);
        }
      }

      // --- B. Fetch QuickStat Counts (Head-only queries for speed) ---
      const { count: usersCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      const { count: pendingCount } = await supabase
        .from('inquiries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'Pending');

      // Setup "Today" boundary for the AI query
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to midnight this morning
      const todayISO = today.toISOString();

      // Get AI Queries Today (Count user messages sent since midnight)
      const { count: aiTodayCount } = await supabase
        .from('chat_messages')
        .select('*', { count: 'exact', head: true })
        .eq('sender', 'user')
        .gte('created_at', todayISO);

      // Get Total AI Answered (Count all AI responses ever)
      const { count: aiTotalCount } = await supabase
        .from('chat_messages')
        .select('*', { count: 'exact', head: true })
        .eq('sender', 'ai');

      setStats({
        users: usersCount || 0,
        escalated: pendingCount || 0,
        aiToday: aiTodayCount || 0,
        aiTotal: aiTotalCount || 0
      });

      // --- C. Fetch Recent Inquiries for the table ---
      const { data: recentTickets } = await supabase
        .from('inquiries')
        .select('subject, status')
        .order('created_at', { ascending: false })
        .limit(5);

      if (recentTickets) {
        setRecentInquiries(recentTickets);
      }

      // --- D. Fetch and Aggregate Page Views ---
      const { data: pageViews } = await supabase
        .from('page_views')
        .select('page_name');

      if (pageViews) {
        const counts = pageViews.reduce((acc, curr) => {
          if (curr.page_name !== "Dashboard") {
            acc[curr.page_name] = (acc[curr.page_name] || 0) + 1;
          }
          return acc;
        }, {});

        const sortedPages = Object.entries(counts)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        setTopPages(sortedPages);
      }

      setIsLoading(false);
    };

    fetchDashboardData();
  }, []);

  return (
    <AdminLayout activePage="analytics">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 animate-in fade-in duration-500">
        
        {/* BEGIN: Hero Header Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 flex items-center gap-2 tracking-tight">
              Hello there, {firstName ? `${firstName} ${lastName}` : "Admin"} <span className="text-2xl sm:text-3xl">👋</span>
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

        {/* BEGIN: QuickStats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Stat Card 1: Total Active Users */}
          <div className="bg-[#3B82F6] p-6 rounded-2xl shadow-sm relative overflow-hidden flex items-center gap-4">
            <div className="absolute top-4 right-4 bg-white px-2 py-0.5 rounded-md text-[#3B82F6] text-[10px] font-extrabold">
              Live
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#3B82F6] shrink-0">
              <Users size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-2">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">
                {isLoading ? "..." : stats.users}
              </p>
              <p className="text-[11px] font-semibold opacity-90">Total Active Profiles</p>
            </div>
          </div>
          
          {/* Stat Card 2: AI Queries Today */}
          <div className="bg-[#F59E0B] p-6 rounded-2xl shadow-sm relative overflow-hidden flex items-center gap-4">
            <div className="absolute top-4 right-4 bg-white px-2 py-0.5 rounded-md text-[#F59E0B] text-[10px] font-extrabold">
              Live {/* <-- Changed from Mock Data to Live! */}
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#F59E0B] shrink-0">
              <MessageSquare size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-2">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">
                {isLoading ? "..." : stats.aiToday}
              </p>
              <p className="text-[11px] font-semibold opacity-90">AI Queries Today</p>
            </div>
          </div>
          
          {/* Stat Card 3: Escalated (Pending Tickets) */}
          <div className="bg-[#A855F7] p-6 rounded-2xl shadow-sm relative overflow-hidden flex items-center gap-4">
            <div className="absolute top-4 right-4 bg-white px-2 py-0.5 rounded-md text-[#A855F7] text-[10px] font-extrabold">
              Live
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#A855F7] shrink-0">
              <AlertCircle size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-2">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">
                {isLoading ? "..." : stats.escalated}
              </p>
              <p className="text-[11px] font-semibold opacity-90">Pending Inquiries</p>
            </div>
          </div>
          
          {/* Stat Card 4: Total AI Answered */}
          <div className="bg-handy-dark-red p-6 rounded-2xl shadow-sm relative overflow-hidden flex items-center gap-4">
            <div className="absolute top-4 right-4 bg-white px-2 py-0.5 rounded-md text-handy-dark-red text-[10px] font-extrabold">
              Live {/* <-- Changed from Mock Data to Live! */}
            </div>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-handy-dark-red shrink-0">
              <CheckSquare size={24} strokeWidth={2.5} />
            </div>
            <div className="text-white mt-2">
              <p className="text-2xl font-extrabold leading-none tracking-tight mb-1">
                {isLoading ? "..." : stats.aiTotal}
              </p>
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
            </div>
            
            <div className="space-y-6 flex-1 justify-center flex flex-col">
              {isLoading ? (
                <div className="text-center text-slate-400 text-[12px] animate-pulse">Loading data...</div>
              ) : topPages.length === 0 ? (
                <div className="text-center text-slate-400 text-[12px]">Not enough data to display yet.</div>
              ) : (
                topPages.map((item, idx) => {
                  const maxCount = topPages[0].count;
                  const percentage = Math.max((item.count / maxCount) * 100, 5);

                  return (
                    <div key={idx}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-[12px] font-bold text-slate-900">{item.name}</span>
                        <span className="text-[11px] font-bold text-slate-500">{item.count} views</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-handy-dark-red h-2 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })
              )}
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
            <table className="w-full text-left table-fixed">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="w-full px-6 py-4 text-[10px] font-extrabold text-slate-900 uppercase tracking-widest">Query Message</th>
                  <th className="w-32 px-6 py-4 text-[10px] font-extrabold text-slate-900 uppercase tracking-widest text-left">Status</th>
                  <th className="w-32 px-6 py-4 text-[10px] font-extrabold text-slate-900 uppercase tracking-widest text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {isLoading ? (
                  <tr>
                    <td colSpan="3" className="px-6 py-8 text-center text-[12px] font-medium text-slate-400 animate-pulse">
                      Loading recent inquiries...
                    </td>
                  </tr>
                ) : recentInquiries.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-6 py-8 text-center text-[12px] font-medium text-slate-400">
                      No inquiries submitted yet.
                    </td>
                  </tr>
                ) : (
                  recentInquiries.map((inq, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-5 text-[12px] font-semibold text-slate-600 pr-10 truncate">
                        {inq.subject}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className={`text-[11px] font-semibold ${inq.status === 'Resolved' ? 'text-green-600' : 'text-slate-700'}`}>
                          {inq.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center whitespace-nowrap">
                         <button 
                           onClick={() => navigate('/admin/inquiries')}
                           className="bg-handy-dark-red text-white w-20 py-1.5 rounded-md text-[11px] font-bold hover:bg-red-900 transition-colors shadow-sm outline-none"
                         >
                           Review
                         </button>
                      </td>
                    </tr>
                  ))
                )}
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