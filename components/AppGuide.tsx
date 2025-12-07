import React, { useState } from 'react';
import { OS_DATA } from '../constants';
import { Download, Plus, Smartphone, Monitor, Apple } from 'lucide-react';

export const AppGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ios');

  const activeOsData = OS_DATA.find(os => os.id === activeTab);

  const getIcon = (id: string) => {
      switch(id) {
          case 'ios': return <Apple size={20} className="mb-1" />;
          case 'android': return <Smartphone size={20} className="mb-1" />;
          case 'windows': return <Monitor size={20} className="mb-1" />;
          default: return <Smartphone size={20} />;
      }
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">دانلود و اتصال</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          برنامه مناسب دستگاه خود را دانلود کنید و با یک کلیک وصل شوید.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-slate-200 dark:bg-slate-900/80 p-1.5 rounded-2xl inline-flex shadow-inner border border-slate-300 dark:border-slate-800 backdrop-blur-md">
          {OS_DATA.map((os) => (
            <button
              key={os.id}
              onClick={() => setActiveTab(os.id)}
              className={`relative flex flex-col sm:flex-row items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === os.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 translate-y-0'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {getIcon(os.id)}
              <span>{os.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in-up">
        {activeOsData?.apps.map((app, index) => (
          <div key={index} className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500/30 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-blue-900/10 group flex flex-col justify-between h-full backdrop-blur-sm">
            
            <div className="flex items-start gap-4 mb-4">
               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-2xl shadow-inner border border-slate-200 dark:border-slate-600/30 group-hover:scale-105 transition-transform duration-300">
                    <span className="font-black text-slate-400 group-hover:text-slate-600 dark:group-hover:text-white transition-colors">{app.name.charAt(0)}</span>
               </div>
               <div>
                    <h3 className="font-bold text-slate-800 dark:text-white text-lg tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{app.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        {app.minOsVersion && (
                            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/50 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700">
                                {app.minOsVersion}
                            </span>
                        )}
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400/80 bg-emerald-50 dark:bg-emerald-900/10 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-900/20">
                            رایگان
                        </span>
                    </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
                <a 
                    href={app.downloadLink} 
                    className="flex items-center justify-center gap-2 bg-slate-800 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg shadow-slate-300 dark:shadow-black/20"
                >
                    <Download size={18} />
                    دانلود
                </a>
                {app.addLink ? (
                    <a 
                        href={app.addLink} 
                        className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 py-3 rounded-2xl text-sm font-bold transition-all duration-300"
                    >
                        <Plus size={18} />
                        افزودن
                    </a>
                ) : (
                    <button disabled className="opacity-0 cursor-default"></button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};