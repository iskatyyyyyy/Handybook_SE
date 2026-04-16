import React from 'react';
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'M', queries: 4000 },
  { name: 'T', queries: 3000 },
  { name: 'W', queries: 2000 },
  { name: 'T', queries: 2780 },
  { name: 'F', queries: 1890 },
  { name: 'S', queries: 2390 },
  { name: 'S', queries: 3490 },
];

const WeeklyQueriesChart = () => {
  return (
    <div className="h-64 w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1B8E5F" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#1B8E5F" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
            dy={10}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
          />
          <Area 
            type="monotone" 
            dataKey="queries" 
            stroke="#1B8E5F" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorQueries)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyQueriesChart;