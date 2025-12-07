import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { UserData } from '../types';
import { CalendarClock, Zap, Database, RefreshCw, Crown, MessageCircle, Clock } from 'lucide-react';

interface UsageSectionProps {
  userData: UserData;
}

export const UsageSection: React.FC<UsageSectionProps> = ({ userData }) => {
  const data = [
    { name: 'Used', value: userData.usedPercentage },
    { name: 'Remaining', value: 100 - userData.usedPercentage },
  ];

  const startColor = '#3b82f6'; 
  const endColor = '#06b6d4';   
  const emptyColor = '#94a3b8'; 

  return (
    <div id="usage" className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 scroll-mt-24">
      {/* Main Stats Card */}
      <div className="md:col-span-7 lg:col-span-8 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-[2rem] p-6 relative overflow-hidden backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-blue-900/10 group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 transition-opacity"></div>

        <div className="flex justify-between items-start relative z-10 mb-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
                <span className="text-slate-500 dark:text-slate-400 text-xs font-medium bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-600/50">
                {userData.username}
                </span>
                <span className="flex items-center gap-1 text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full text-[10px] font-bold border border-amber-500/20">
                    <Crown size={10} />
                    {userData.plan}
                </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">وضعیت مصرف</h2>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-500/30 px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {userData.status}
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                <Clock size={10} />
                <span>بروزرسانی: لحظاتی پیش</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
          <div className="relative w-64 h-48 flex items-center justify-center -my-4 sm:my-0">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <defs>
                  <linearGradient id="usageGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={startColor} />
                    <stop offset="100%" stopColor={endColor} />
                  </linearGradient>
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
                  <Cell key="cell-0" fill="url(#usageGradient)" />
                  <Cell key="cell-1" fill={emptyColor} className="opacity-20 dark:opacity-30" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-4xl font-black text-slate-800 dark:text-white">
                {userData.usedPercentage}<span className="text-lg text-cyan-500">%</span>
              </span>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 font-medium">مصرف کل</p>
            </div>
          </div>

          <div className="flex-1 w-full sm:w-auto mt-4 sm:mt-0 sm:pr-8 flex flex-col gap-4">
            <div className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-4 border border-slate-100 dark:border-slate-600/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-400">
                        <Database size={18} />
                    </div>
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">مصرف شده</p>
                        <p className="text-slate-800 dark:text-white font-bold font-mono text-lg">{userData.usedTraffic}</p>
                    </div>
                </div>
            </div>
             <div className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-4 border border-slate-100 dark:border-slate-600/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-500/10 dark:bg-slate-500/20 rounded-lg text-slate-600 dark:text-slate-300">
                        <Database size={18} />
                    </div>
                    <div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">حجم کل</p>
                        <p className="text-slate-800 dark:text-white font-bold font-mono text-lg">{userData.totalTraffic}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expiry & Actions Card */}
      <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4">
        <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800/80 dark:to-slate-900/80 border border-indigo-100 dark:border-slate-700/50 rounded-[2rem] p-6 flex-1 flex flex-col backdrop-blur-xl relative overflow-hidden group shadow-xl shadow-indigo-100/50 dark:shadow-none">
          
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <CalendarClock size={28} />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">زمان باقی‌مانده</p>
              <div className="text-3xl font-black text-slate-800 dark:text-white tracking-tight mt-0.5">
                 {userData.daysRemaining} <span className="text-lg text-indigo-500 dark:text-indigo-400 font-bold">روز</span>
              </div>
            </div>
          </div>
          
           <div className="bg-indigo-50 dark:bg-slate-950/50 rounded-2xl p-4 border border-indigo-100 dark:border-slate-800/50 relative z-10 mb-auto">
                <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-slate-500 dark:text-slate-400">انقضا:</span>
                    <span className="text-indigo-900 dark:text-white font-mono font-bold">{userData.expiryDate}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full w-full animate-pulse"></div>
                </div>
           </div>

           <div className="mt-4 flex flex-col gap-2 z-10">
                <a 
                    href={userData.supportLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-600/20 dark:shadow-indigo-900/40 hover:scale-[1.02] active:scale-95"
                >
                    <RefreshCw size={18} />
                    <span>تمدید اشتراک</span>
                </a>
                <a 
                    href={userData.channelLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 py-3 rounded-2xl font-bold transition-all border border-slate-200 dark:border-slate-700 active:scale-95"
                >
                    <MessageCircle size={18} />
                    <span>کانال اطلاع‌رسانی</span>
                </a>
           </div>
        </div>
      </div>
    </div>
  );
};