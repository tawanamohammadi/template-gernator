
import React from 'react';
import { X, Copy, Crown, User, ExternalLink, ShieldCheck } from 'lucide-react';
import { UserData } from '../types';
import { Language, translations } from '../translations';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: UserData;
  onCopy: (text: string) => void;
  lang: Language;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, userData, onCopy, lang }) => {
  if (!isOpen) return null;
  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-spotify-elevated w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-white/10">
        
        {/* Header Background */}
        <div className="relative h-32 bg-gradient-to-b from-spotify-green/80 to-spotify-base">
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 rtl:left-auto rtl:right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm"
          >
            <X size={20} />
          </button>
          <div className="absolute -bottom-12 right-1/2 translate-x-1/2 rtl:translate-x-1/2">
             <div className="w-24 h-24 rounded-full bg-spotify-base border-4 border-spotify-base shadow-2xl flex items-center justify-center">
                 <User size={40} className="text-spotify-subtext" />
             </div>
          </div>
        </div>

        <div className="pt-14 px-6 pb-8 text-center">
            <h2 className="text-2xl font-black text-white mb-2">{userData.username}</h2>
            <div className="flex justify-center items-center gap-2 mb-8">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-spotify-green text-black text-xs font-bold">
                    <Crown size={12} />
                    {userData.plan === 'VIP' ? t.usage.plan_vip : userData.plan}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/5">
                    <ShieldCheck size={12} />
                    {userData.status === 'active' ? t.usage.status_active : t.usage.status_inactive}
                </span>
            </div>

            <div className="space-y-4 text-right rtl:text-right ltr:text-left">
                <div>
                    <label className="text-xs font-bold text-spotify-subtext mb-2 block uppercase tracking-wide px-1">{t.profile.sub_link}</label>
                    <div className="flex gap-2">
                        <div className="flex-1 bg-black/40 rounded-full px-5 py-3.5 text-sm text-spotify-subtext font-mono truncate border border-white/5 select-all text-left">
                            {userData.subscriptionUrl}
                        </div>
                        <button 
                            onClick={() => onCopy(userData.subscriptionUrl)}
                            className="bg-white text-black hover:bg-gray-200 px-4 rounded-full flex items-center justify-center transition-colors shadow-lg"
                        >
                            <Copy size={18} />
                        </button>
                    </div>
                </div>

                 <div>
                    <label className="text-xs font-bold text-spotify-subtext mb-2 block uppercase tracking-wide px-1">{t.profile.user_id}</label>
                    <div className="flex gap-2">
                        <div className="flex-1 bg-black/40 rounded-full px-5 py-3.5 text-sm text-spotify-subtext font-mono truncate border border-white/5 select-all text-left">
                            {userData.userId}
                        </div>
                        <button 
                            onClick={() => onCopy(userData.userId)}
                            className="bg-white/10 hover:bg-white/20 text-white px-4 rounded-full flex items-center justify-center transition-colors"
                        >
                            <Copy size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex gap-3">
                 <a 
                    href={userData.supportLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-spotify-green hover:bg-spotify-greenHover text-black py-3.5 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-green-500/10"
                >
                    <ExternalLink size={16} />
                    {t.profile.support}
                </a>
                 <button 
                    onClick={onClose}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-full font-bold text-sm transition-colors"
                >
                    {t.profile.close}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
