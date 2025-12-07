import React, { useState, useCallback, useEffect } from 'react';
import { USER_DATA } from './constants';
import { UsageSection } from './components/UsageSection';
import { AppGuide } from './components/AppGuide';
import { ConfigList } from './components/ConfigList';
import { SupportFooter } from './components/SupportFooter';
import { HeroSection } from './components/HeroSection';
import { FAQSection } from './components/FAQSection';
import { ThemeToggle } from './components/ThemeToggle';
import { FeaturesSection } from './components/FeaturesSection';
import { Toast } from './components/Toast';
import { ProfileModal } from './components/ProfileModal';
import { ShieldCheck, User, Crown } from 'lucide-react';

const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Initialize theme based on html class or preference
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('کپی شد!');
    }).catch(() => {
      setToastMessage('مشکلی در کپی کردن پیش آمد');
    });
  }, []);

  return (
    <div className="min-h-screen pb-safe font-sans relative overflow-x-hidden selection:bg-blue-500/30">
        
        {/* Background Mesh (Dark Mode) */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-cyan-900/10 rounded-full blur-[100px]"></div>
        </div>

         {/* Background Mesh (Light Mode) */}
         <div className="fixed inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[120px]"></div>
            <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-200/30 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
            {/* Header */}
            <header className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 gap-4">
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 ring-2 ring-white/10">
                        <ShieldCheck className="text-white w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Looka<span className="text-blue-500">.</span></h1>
                    </div>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
                    <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                    
                    {/* User Profile Pill */}
                    <button 
                        onClick={() => setIsProfileOpen(true)}
                        className="flex items-center gap-3 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 rounded-2xl px-2 py-2 pr-4 backdrop-blur-md shadow-sm hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors group cursor-pointer"
                    >
                         <div className="flex flex-col items-end hidden sm:flex">
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{USER_DATA.username}</span>
                            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/20 px-1.5 rounded flex items-center gap-1 mt-0.5">
                                <Crown size={10} />
                                VIP
                            </span>
                         </div>
                        <div className="w-9 h-9 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-600 group-hover:bg-blue-100 dark:group-hover:bg-slate-600 transition-colors">
                            <User size={18} className="text-slate-500 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
                        </div>
                    </button>
                </div>
            </header>

            <main>
                <HeroSection />
                <UsageSection userData={USER_DATA} />
                <ConfigList onCopy={handleCopy} />
                <AppGuide />
                <FeaturesSection />
                <FAQSection />
                <SupportFooter />
            </main>
        </div>

        {toastMessage && (
            <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
        )}
        
        <ProfileModal 
            isOpen={isProfileOpen} 
            onClose={() => setIsProfileOpen(false)} 
            userData={USER_DATA}
            onCopy={handleCopy}
        />
    </div>
  );
};

export default App;