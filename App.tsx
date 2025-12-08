
import React, { useState, useCallback, useEffect } from 'react';
import { USER_DATA } from './constants';
import { UsageSection } from './components/UsageSection';
import { AppGuide } from './components/AppGuide';
import { ConfigList } from './components/ConfigList';
import { SupportFooter } from './components/SupportFooter';
import { HeroSection } from './components/HeroSection';
import { FAQSection } from './components/FAQSection';
import { LanguageToggle } from './components/LanguageToggle';
import { FeaturesSection } from './components/FeaturesSection';
import { Toast } from './components/Toast';
import { ProfileModal } from './components/ProfileModal';
import { ShieldCheck, User, Crown, Menu } from 'lucide-react';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [lang, setLang] = useState<Language>('fa');

  useEffect(() => {
     document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    document.documentElement.dir = translations[lang].dir;
    document.documentElement.lang = lang;
    document.body.style.fontFamily = `"${translations[lang].font}", sans-serif`;
  }, [lang]);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(translations[lang].configs.copy_toast);
    }).catch(() => {
      setToastMessage(translations[lang].configs.copy_error);
    });
  }, [lang]);

  return (
    <div className="min-h-screen pb-safe relative overflow-x-hidden selection:bg-spotify-green selection:text-black">
        
        {/* Deep Ambient Background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-black">
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-spotify-green/20 rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[150px] opacity-20"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {/* Header - Enforced LTR Layout for stability */}
            <header dir="ltr" className="flex items-center justify-between mb-12 sticky top-4 z-40 bg-black/60 backdrop-blur-xl p-2.5 pl-5 pr-2.5 rounded-full border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(29,185,84,0.4)] text-black animate-fade-in">
                        <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black text-white tracking-tighter">Looka<span className="text-spotify-green">.</span></h1>
                    </div>
                </div>
                
                <div className="flex items-center gap-2">
                    <LanguageToggle lang={lang} setLang={setLang} />
                    
                    <button 
                        onClick={() => setIsProfileOpen(true)}
                        className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-full pl-4 pr-1.5 py-1.5 hover:bg-white/10 transition-all group cursor-pointer"
                    >
                         <div className="flex flex-col items-end hidden sm:flex">
                            <span className="text-sm font-bold text-white leading-tight group-hover:text-spotify-green transition-colors">{USER_DATA.username}</span>
                            <span className="text-[9px] text-black font-black bg-spotify-green px-1.5 rounded-sm flex items-center gap-1 mt-0.5 tracking-wider uppercase">
                                VIP
                            </span>
                         </div>
                        <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shadow-inner">
                            <User size={18} className="text-white group-hover:text-black" />
                        </div>
                    </button>
                </div>
            </header>

            <main className="space-y-24">
                <HeroSection lang={lang} />
                <UsageSection userData={USER_DATA} lang={lang} />
                <ConfigList onCopy={handleCopy} lang={lang} />
                <AppGuide lang={lang} />
                <FeaturesSection lang={lang} />
                <FAQSection lang={lang} />
                <SupportFooter lang={lang} />
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
            lang={lang}
        />
    </div>
  );
};

export default App;
