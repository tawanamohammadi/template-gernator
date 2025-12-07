import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { UserData } from '../types';
import { CalendarClock, Zap, Database } from 'lucide-react';

interface UsageSectionProps {
  userData: UserData;
}

export const UsageSection: React.FC<UsageSectionProps> = ({ userData }) => {
  // Data for the gauge
  const data = [
    { name: 'Used', value: userData.usedPercentage },
    { name: 'Remaining', value: 100 - userData.usedPercentage },
  ];

  // Colors for the chart
  const startColor = '#3b82f6'; // blue-500
  const endColor = '#06b6d4';   // cyan-500
  const emptyColor = '#334155'; // slate-700

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
      {/* Main Stats Card (Gauge) */}
      <div className="md:col-span-7 lg:col-span-8 bg-slate-800/40 border border-slate-700/50 rounded-[2rem] p-6 relative overflow-hidden backdrop-blur-xl shadow-2xl shadow-blue-900/10 group">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity opacity-50 group-hover:opacity-80"></div>

        <div className="flex justify-between items-start relative z-10 mb-2">
          <div>
            <span className="text-slate-400 text-xs font-medium bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600/50">
              {userData.username}
            </span>
            <h2 className="text-2xl font-bold text-white mt-3">وضعیت مصرف</h2>
          </div>
          <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            {userData.status}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
          {/* Gauge Chart */}
          <div className="relative w-64 h-48 flex items-center justify-center -my-4 sm:my-0">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <defs>
                  <linearGradient id="usageGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={startColor} />
                    <stop offset="100%" stopColor={endColor} />
                  </linearGradient>
                  <filter id="shadow" height="130%">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={endColor} floodOpacity="0.5"/>
                  </filter>
                </defs>
                <Pie
                  data={data}
                  cx="50%"
                  cy="70%" 
                  startAngle={180}
                  endAngle={0}
                  innerRadius={85}
                  outerRadius={105}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                  cornerRadius={10}
                >
                  <Cell key="cell-0" fill="url(#usageGradient)" filter="url(#shadow)" />
                  <Cell key="cell-1" fill={emptyColor} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center Text */}
            <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                {userData.usedPercentage}<span className="text-lg text-cyan-400">%</span>
              </span>
              <p className="text-slate-400 text-xs mt-1 font-medium">مصرف کل</p>
            </div>
          </div>

          {/* Details Text */}
          <div className="flex-1 w-full sm:w-auto mt-4 sm:mt-0 sm:pr-8 flex flex-col gap-4">
            <div className="bg-slate-700/30 rounded-2xl p-4 border border-slate-600/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                        <Database size={18} />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs">مصرف شده</p>
                        <p className="text-white font-bold font-mono text-lg">{userData.usedTraffic}</p>
                    </div>
                </div>
            </div>
             <div className="bg-slate-700/30 rounded-2xl p-4 border border-slate-600/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-500/20 rounded-lg text-slate-300">
                        <Database size={18} />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs">حجم کل</p>
                        <p className="text-white font-bold font-mono text-lg">{userData.totalTraffic}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expiry Card */}
      <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-[2rem] p-6 flex-1 flex flex-col justify-center backdrop-blur-xl relative overflow-hidden group">
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -ml-10 -mb-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <CalendarClock size={28} />
            </div>
            <div>
              <p className="text-slate-400 text-sm font-medium">زمان باقی‌مانده</p>
              <div className="text-3xl font-black text-white tracking-tight mt-0.5">
                 {userData.daysRemaining} <span className="text-lg text-indigo-400 font-bold">روز</span>
              </div>
            </div>
          </div>
          
           <div className="bg-slate-950/50 rounded-2xl p-4 border border-slate-800/50 relative z-10">
                <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-slate-400">انقضا:</span>
                    <span className="text-white font-mono font-bold">{userData.expiryDate}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full w-full animate-pulse"></div>
                </div>
           </div>
        </div>

        {/* Status Mini Card */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-[2rem] p-5 flex items-center justify-between text-white shadow-lg shadow-emerald-900/20 border border-emerald-500/30 group cursor-default">
            <div>
                <p className="font-bold text-lg">سرویس فعال</p>
                <p className="text-emerald-100 text-xs opacity-80 mt-0.5">اتصال بدون محدودیت</p>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md group-hover:scale-110 transition-transform">
                <Zap size={24} className="text-white fill-current" />
            </div>
        </div>
      </div>
    </div>
  );
};