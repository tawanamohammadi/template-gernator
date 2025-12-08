
import React from 'react';
import { Send, Mail, Phone, Clock, Headphones } from 'lucide-react';
import { USER_DATA } from '../constants';
import { Language, translations } from '../translations';

interface SupportFooterProps {
  lang: Language;
}

export const SupportFooter: React.FC<SupportFooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="mt-20 pt-10 border-t border-white/5 pb-10">
      <div className="bg-gradient-to-b from-spotify-card to-black border border-spotify-border rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-spotify-green/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 text-center mb-10">
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/10 shadow-lg animate-float">
                <Headphones size={32} className="text-spotify-green" />
             </div>
             <h2 className="text-3xl font-black text-white mb-3 tracking-tight">{t.support.title}</h2>
             <p className="text-spotify-subtext text-lg">{t.support.subtitle}</p>
             
             <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-spotify-green/10 border border-spotify-green/20 text-spotify-green text-xs font-bold uppercase tracking-wider">
                <Clock size={14} className="animate-spin-slow" />
                {t.support.hours}
             </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Telegram */}
            <a href={USER_DATA.supportLink} target="_blank" rel="noopener noreferrer" className="group bg-spotify-elevated hover:bg-[#2AABEE] border border-white/5 hover:border-transparent p-6 rounded-2xl transition-all duration-300 flex flex-col items-center gap-3">
                <Send size={28} className="text-[#2AABEE] group-hover:text-white transition-colors" />
                <span className="font-bold text-white text-sm">{t.support.telegram}</span>
            </a>

            {/* WhatsApp */}
            <a href={USER_DATA.whatsappLink} target="_blank" rel="noopener noreferrer" className="group bg-spotify-elevated hover:bg-[#25D366] border border-white/5 hover:border-transparent p-6 rounded-2xl transition-all duration-300 flex flex-col items-center gap-3">
                <div className="w-7 h-7 rounded-full border-2 border-[#25D366] group-hover:border-white flex items-center justify-center">
                    <span className="font-bold text-[#25D366] group-hover:text-white text-xs">WA</span>
                </div>
                <span className="font-bold text-white text-sm">{t.support.whatsapp}</span>
            </a>

            {/* Email */}
            <a href={USER_DATA.email} className="group bg-spotify-elevated hover:bg-orange-500 border border-white/5 hover:border-transparent p-6 rounded-2xl transition-all duration-300 flex flex-col items-center gap-3">
                <Mail size={28} className="text-orange-500 group-hover:text-white transition-colors" />
                <span className="font-bold text-white text-sm">{t.support.email}</span>
            </a>

            {/* Phone */}
            <a href={USER_DATA.phone} className="group bg-spotify-elevated hover:bg-purple-500 border border-white/5 hover:border-transparent p-6 rounded-2xl transition-all duration-300 flex flex-col items-center gap-3">
                <Phone size={28} className="text-purple-500 group-hover:text-white transition-colors" />
                <span className="font-bold text-white text-sm">{t.support.phone}</span>
            </a>
        </div>

        <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-spotify-subtext text-xs opacity-60 font-mono tracking-widest">{t.support.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
