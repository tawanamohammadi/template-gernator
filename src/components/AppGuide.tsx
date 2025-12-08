
import React, { useState, useEffect } from 'react';
import { OS_DATA } from '../constants';
import { Download, Plus, BookOpen } from 'lucide-react';
import { Language, translations } from '../translations';
import { TutorialStep } from '../types';
import { TutorialModal } from './TutorialModal';

interface AppGuideProps {
  lang: Language;
}

// Typography Icon Component
const TypographyIcon = ({ name }: { name: string }) => {
    const letters = name.substring(0, 2).toUpperCase();
    return (
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-spotify-green to-black p-[2px] shadow-lg shadow-black/50 group-hover:shadow-spotify-green/20 transition-all duration-300">
            <div className="w-full h-full bg-spotify-elevated rounded-md flex items-center justify-center relative overflow-hidden">
                <span className="text-2xl font-black text-white z-10 tracking-widest">{letters}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
        </div>
    );
};

export const AppGuide: React.FC<AppGuideProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<string>('ios');
  const [tutorialData, setTutorialData] = useState<{isOpen: boolean, appName: string, steps?: TutorialStep[]}>({ isOpen: false, appName: '' });
  const t = translations[lang];

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('android') > -1) {
      setActiveTab('android');
    } else if (userAgent.indexOf('win') > -1) {
      setActiveTab('windows');
    } else if (userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1 || userAgent.indexOf('mac') > -1) {
      setActiveTab('ios');
    }
  }, []);

  const activeOsData = OS_DATA.find(os => os.id === activeTab);

  return (
    <div className="mb-20">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 px-2">
        <div>
             <h2 className="text-2xl font-bold text-white mb-2">{t.appGuide.title}</h2>
             <p className="text-spotify-subtext text-sm">{t.appGuide.subtitle}</p>
        </div>

        {/* OS Tabs */}
        <div className="bg-spotify-elevated p-1 rounded-full inline-flex border border-white/5">
          {OS_DATA.map((os) => (
            <button
              key={os.id}
              onClick={() => setActiveTab(os.id)}
              className={`relative flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === os.id
                  ? 'bg-spotify-green text-black shadow-lg shadow-green-500/20'
                  : 'text-spotify-subtext hover:text-white'
              }`}
            >
              <img src={os.icon} alt={os.label} className="w-5 h-5 object-contain" />
              <span className="hidden sm:inline">{os.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile-First Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-up">
        {activeOsData?.apps.map((app, index) => (
          <div key={index} className="bg-spotify-elevated hover:bg-[#2a2a2a] rounded-xl p-4 transition-all duration-300 group hover:translate-y-[-4px] border border-transparent hover:border-white/5">
            
            <div className="flex items-center gap-4 mb-4">
               <TypographyIcon name={app.name} />
               <div>
                    <h3 className="font-bold text-white text-lg tracking-tight group-hover:text-spotify-green transition-colors">{app.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                        {app.minOsVersion && (
                            <span className="text-[10px] font-bold text-spotify-subtext bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                {app.minOsVersion}
                            </span>
                        )}
                        <span className="text-[10px] font-bold text-black bg-spotify-green px-2 py-0.5 rounded">
                            {t.appGuide.free}
                        </span>
                    </div>
               </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
                <div className="grid grid-cols-2 gap-2">
                     <a 
                        href={app.downloadLink} 
                        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-full text-xs font-bold transition-all"
                    >
                        <Download size={14} />
                        {t.appGuide.download}
                    </a>
                    {app.addLink && (
                        <a 
                            href={app.addLink} 
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-spotify-subtext hover:text-white py-2.5 rounded-full text-xs font-bold transition-all"
                        >
                            <Plus size={14} />
                            {t.appGuide.add}
                        </a>
                    )}
                </div>
                
                {app.tutorialSteps && (
                     <button 
                        onClick={() => setTutorialData({ isOpen: true, appName: app.name, steps: app.tutorialSteps })}
                        className="flex items-center justify-center gap-2 w-full bg-transparent border border-white/10 hover:border-spotify-green/50 text-spotify-subtext hover:text-spotify-green py-2.5 rounded-full text-xs font-bold transition-all"
                    >
                        <BookOpen size={14} />
                        {t.appGuide.tutorial}
                    </button>
                )}
            </div>
          </div>
        ))}
      </div>

      <TutorialModal 
         isOpen={tutorialData.isOpen}
         onClose={() => setTutorialData({ ...tutorialData, isOpen: false })}
         appName={tutorialData.appName}
         steps={tutorialData.steps}
         lang={lang}
      />
    </div>
  );
};
