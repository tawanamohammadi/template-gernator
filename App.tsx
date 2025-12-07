import React, { useState, useCallback } from 'react';
import { USER_DATA } from './constants';
import { UsageSection } from './components/UsageSection';
import { AppGuide } from './components/AppGuide';
import { ConfigList } from './components/ConfigList';
import { SupportFooter } from './components/SupportFooter';
import { Toast } from './components/Toast';
import { ShieldCheck, User } from 'lucide-react';

const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('کپی شد!');
    }).catch(() => {
      setToastMessage('مشکلی در کپی کردن پیش آمد');
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-100 pb-safe font-sans relative overflow-x-hidden">
        
        {/* Advanced Background Mesh */}
        <div className="fixed inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-cyan-900/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
            {/* Header */}
            <header className="flex items-center justify-between mb-10 sm:mb-14">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 ring-2 ring-white/10">
                        <ShieldCheck className="text-white w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-white tracking-tighter">Looka<span className="text-cyan-400">.</span></h1>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-0.5">Secure Tunnel</p>
                    </div>
                </div>
                
                <button className="flex items-center gap-2 bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 rounded-xl px-4 py-2 backdrop-blur-md transition-all group">
                    <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <User size={14} className="text-slate-300 group-hover:text-white" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium group-hover:text-white">{USER_DATA.username}</span>
                </button>
            </header>

            <main>
                <UsageSection userData={USER_DATA} />
                <AppGuide />
                <ConfigList onCopy={handleCopy} />
                <SupportFooter />
            </main>
        </div>

        {toastMessage && (
            <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        )}
    </div>
  );
};

export default App;