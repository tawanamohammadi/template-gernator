
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { UserData } from '../types';
import { Database, RefreshCw, Crown, MessageCircle, Clock, Activity, Calendar } from 'lucide-react';
import { Language, translations } from '../translations';

interface UsageSectionProps {
  userData: UserData;
  lang: Language;
}

export const UsageSection: React.FC<UsageSectionProps> = ({ userData, lang }) => {
  const t = translations[lang];
  const [chartPeriod, setChartPeriod] = useState<'24h' | '30d'>('24h');

  const pieData = [
    { name: 'Used', value: userData.usedPercentage },
    { name: 'Remaining', value: 100 - userData.usedPercentage },
  ];

  const chartData = chartPeriod === '24h' ? userData.usageHistory24h : userData.usageHistory30d;

  return (
    <div id="usage" className="mb-20 scroll-mt-24 animate-fade-in-up delay-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* User Status Card (Bento Item 1) */}
        <div className="md:col-span-4 bg-spotify-card border border-spotify-border rounded-[2rem] p-6 relative overflow-hidden group hover:border-spotify-green/30 transition-all duration-500 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-spotify-highlight to-black"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                     <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-spotify-green animate-pulse shadow-[0_0_10px_#1DB954]"></span>
                        <span className="text-spotify-green text-xs font-bold tracking-widest uppercase">{t.usage.status_active}</span>
                     </div>
                     <div className="text-4xl font-black text-white tracking-tighter mb-1">{userData.username}</div>
                     <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/5 backdrop-blur-md">
                        <Crown size={12} className="text-yellow-400" />
                        <span className="text-xs font-bold text-white/80">{userData.plan}</span>
                     </div>
                </div>

                <div className="mt-8">
                     <p className="text-spotify-subtext text-xs mb-2">{t.usage.expiry}</p>
                     <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white font-mono" dir="ltr">{userData.daysRemaining}</span>
                        <span className="text-sm text-spotify-green font-bold">{t.usage.days}</span>
                     </div>
                     <div className="w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden">
                        <div className="h-full bg-spotify-green rounded-full w-3/4 shadow-[0_0_15px_#1DB954]"></div>
                     </div>
                </div>
            </div>
        </div>

        {/* Gauge Chart (Bento Item 2) */}
        <div className="md:col-span-4 bg-spotify-card border border-spotify-border rounded-[2rem] p-6 relative overflow-hidden flex flex-col items-center justify-center group hover:border-spotify-green/30 transition-all duration-500 shadow-xl">
             <div className="absolute inset-0 bg-deep-gradient opacity-80"></div>
             
             <div className="relative z-10 w-full h-48 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <defs>
                      <linearGradient id="usageGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#1DB954" />
                        <stop offset="100%" stopColor="#1ed760" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="70%" 
                      startAngle={180}
                      endAngle={0}
                      innerRadius={80}
                      outerRadius={95}
                      paddingAngle={0}
                      dataKey="value"
                      stroke="none"
                      cornerRadius={6}
                    >
                      <Cell key="cell-0" fill="url(#usageGradient)" filter="url(#glow)" />
                      <Cell key="cell-1" fill="#2A2A2A" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-4xl font-black text-white tracking-tighter drop-shadow-2xl">{userData.usedPercentage}%</div>
                    <div className="text-[10px] text-spotify-subtext uppercase tracking-widest font-bold mt-1">{t.usage.used}</div>
                </div>
             </div>
             
             <div className="relative z-10 flex w-full justify-between px-2 mt-[-20px]">
                 <div className="text-center">
                     <div className="text-xs text-spotify-subtext mb-1">{t.usage.used}</div>
                     <div className="text-lg font-bold text-white font-mono" dir="ltr">{userData.usedTraffic}</div>
                 </div>
                 <div className="text-center">
                     <div className="text-xs text-spotify-subtext mb-1">{t.usage.total}</div>
                     <div className="text-lg font-bold text-white font-mono" dir="ltr">{userData.totalTraffic}</div>
                 </div>
             </div>
        </div>

        {/* Analytics Chart (Bento Item 3 - Large) */}
        <div className="md:col-span-4 bg-spotify-card border border-spotify-border rounded-[2rem] p-6 relative overflow-hidden group hover:border-spotify-green/30 transition-all duration-500 shadow-xl flex flex-col">
             <div className="absolute inset-0 bg-gradient-to-b from-spotify-elevated to-black"></div>
             
             <div className="relative z-10 flex items-center justify-between mb-6">
                 <div className="flex items-center gap-2">
                     <Activity size={16} className="text-spotify-green" />
                     <span className="font-bold text-white text-sm">{t.usage.update}</span>
                 </div>
                 <div className="flex bg-black/40 rounded-lg p-0.5 border border-white/5">
                     <button 
                        onClick={() => setChartPeriod('24h')}
                        className={`text-[10px] font-bold px-2 py-1 rounded-md transition-all ${chartPeriod === '24h' ? 'bg-spotify-green text-black' : 'text-spotify-subtext hover:text-white'}`}
                     >
                         24H
                     </button>
                     <button 
                        onClick={() => setChartPeriod('30d')}
                        className={`text-[10px] font-bold px-2 py-1 rounded-md transition-all ${chartPeriod === '30d' ? 'bg-spotify-green text-black' : 'text-spotify-subtext hover:text-white'}`}
                     >
                         30D
                     </button>
                 </div>
             </div>

             <div className="relative z-10 flex-1 min-h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1DB954" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#1DB954" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#181818', border: '1px solid #333', borderRadius: '8px', fontSize: '12px' }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ stroke: '#ffffff20' }}
                        />
                        <Area type="monotone" dataKey="usage" stroke="#1DB954" strokeWidth={2} fillOpacity={1} fill="url(#colorUsage)" />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
        </div>

        {/* Action Buttons (Bento Item 4 - Full Width) */}
        <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
                href={userData.supportLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-spotify-green text-black p-4 rounded-2xl flex items-center justify-center gap-3 font-black shadow-[0_0_20px_rgba(29,185,84,0.3)] transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <RefreshCw size={20} className="relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                <span className="relative z-10 text-lg">{t.usage.renew_btn}</span>
            </a>
            
             <a 
                href={userData.channelLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-spotify-elevated border border-spotify-border text-white p-4 rounded-2xl flex items-center justify-center gap-3 font-black hover:bg-white/10 transition-all active:scale-[0.99]"
            >
                <MessageCircle size={20} className="text-blue-400" />
                <span>{t.usage.channel_btn}</span>
            </a>
        </div>
      </div>
    </div>
  );
};
