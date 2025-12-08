
import React from 'react';
import { ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="relative pt-10 pb-10 text-center flex flex-col items-center">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-spotify-green/10 to-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-spotify-green text-[10px] font-black mb-8 animate-fade-in-up uppercase tracking-[0.2em] shadow-lg backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-spotify-green"></span>
        </span>
        {t.hero.badge}
      </div>

      <h1 
        className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 animate-fade-in-up delay-100 drop-shadow-2xl leading-[1.1]"
        dangerouslySetInnerHTML={{ __html: t.hero.title }}
      />

      <p className="text-spotify-subtext text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200 font-medium opacity-80">
        {t.hero.desc}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 relative z-10">
        <button 
            onClick={() => document.getElementById('configs')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center justify-center gap-3 bg-spotify-green text-black px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(29,185,84,0.3)] hover:shadow-[0_0_60px_rgba(29,185,84,0.5)]"
        >
          <Zap size={22} className="fill-black" />
          <span>{t.hero.cta_configs}</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
        </button>
        <button 
             onClick={() => document.getElementById('usage')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all active:scale-95 backdrop-blur-md"
        >
          <ShieldCheck size={22} />
          <span>{t.hero.cta_status}</span>
        </button>
      </div>
    </div>
  );
};
