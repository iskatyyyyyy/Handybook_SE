import React from 'react';
import { Bell, GraduationCap, Calendar, FileText, MoreHorizontal } from 'lucide-react';
import AdminStatCard from '../../components/cards/adminStatCard';
import WeeklyQueriesChart from '../../components/charts/weeklyQueriesChart';

const AdminAnalytics = () => {
  return (
    <div className="min-h-screen bg-tup-bg pb-28 font-sans text-tup-navy">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="bg-tup-green/10 p-2 rounded-lg">
            <div className="w-5 h-5 bg-tup-green rounded-sm" /> 
          </div>
          <div>
            <h1 className="text-lg font-bold">Admin Analytics</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">TUP Manila Handybook</p>
          </div>
        </div>
        <button className="relative p-2 bg-white rounded-full shadow-sm">
          <Bell size={20} className="text-tup-navy" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      <main className="px-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <AdminStatCard title="Total Queries" value="12,450" trend="+12%" isPositive />
          <AdminStatCard title="AI Answered" value="9,820" trend="+8%" isPositive isAI />
          <AdminStatCard title="Escalated" value="450" trend="-5%" isPositive={false} />
          <AdminStatCard title="Students" value="3,200" trend="+15%" isPositive />
        </div>

        {/* Weekly Chart Card */}
        <section className="bg-white p-6 rounded-handbook shadow-sm border border-gray-50">
          <div className="flex justify-between items-center">
            <h4 className="font-bold">Weekly Queries</h4>
            <span className="text-tup-green font-black text-xl">12.4k</span>
          </div>
          <p className="text-xs text-gray-400">Activity last 7 days</p>
          <WeeklyQueriesChart />
        </section>

        {/* Most Viewed */}
        <section>
          <h4 className="font-bold mb-4 px-1">Most Viewed Sections</h4>
          <div className="bg-white rounded-handbook shadow-sm border border-gray-50 overflow-hidden">
            <ViewItem icon={<GraduationCap className="text-blue-500" />} title="Enrollment Process" views="2.4k" />
            <ViewItem icon={<Calendar className="text-purple-500" />} title="Academic Calendar" views="1.8k" />
            <ViewItem icon={<FileText className="text-orange-500" />} title="Scholarship Req." views="1.2k" border={false} />
          </div>
        </section>

        {/* Recent Unanswered */}
        <section className="pb-4">
          <div className="flex justify-between items-center mb-4 px-1">
            <h4 className="font-bold">Recent Unanswered</h4>
            <button className="text-tup-green text-xs font-bold">View All</button>
          </div>
          
          <div className="space-y-4">
            <UnansweredCard 
              tag="CRITICAL" 
              time="2 mins ago" 
              query="How do I appeal for a grade modification after the deadline?" 
              isCritical 
            />
          </div>
        </section>
      </main>
    </div>
  );
};

// Sub-components for cleaner code
const ViewItem = ({ icon, title, views, border = true }) => (
  <div className={`flex items-center justify-between p-4 ${border ? 'border-b border-gray-50' : ''}`}>
    <div className="flex items-center gap-4">
      <div className="p-2 bg-gray-50 rounded-xl">{icon}</div>
      <span className="text-sm font-bold">{title}</span>
    </div>
    <span className="text-xs text-gray-400 font-bold">{views} views</span>
  </div>
);

const UnansweredCard = ({ tag, time, query, isCritical }) => (
  <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-50 relative overflow-hidden">
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${isCritical ? 'bg-red-400' : 'bg-gray-200'}`} />
    <div className="flex justify-between items-center mb-2">
      <span className={`text-[10px] font-black px-2 py-0.5 rounded ${isCritical ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'}`}>
        {tag}
      </span>
      <span className="text-[10px] text-gray-400">{time}</span>
    </div>
    <p className="text-sm font-bold leading-relaxed mb-4">"{query}"</p>
    <div className="flex gap-2">
      <button className="flex-1 bg-tup-green text-white py-3 rounded-xl text-xs font-bold shadow-md shadow-tup-green/20">Respond</button>
      <button className="px-3 bg-gray-50 rounded-xl text-gray-400"><MoreHorizontal size={18} /></button>
    </div>
  </div>
);

export default AdminAnalytics;