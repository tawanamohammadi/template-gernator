
import React from 'react';
import { ShieldCheck, Zap, Headphones, GlobeLock } from 'lucide-react';
import { Language, translations } from '../translations';

interface FeaturesSectionProps {
  lang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ lang }) => {
  const t = translations[lang];
  
  const features = [
    {
      icon: <Zap size={24} />,
      title: t.features.speed_title,
      desc: t.features.speed_desc,
    },
    {
      icon: <ShieldCheck size={24} />,
      title: t.features.security_title,
      desc: t.features.security_desc,
    },
    {
      icon: <GlobeLock size={24} />,
      title: t.features.ip_title,
      desc: t.features.ip_desc,
    },
    {
      icon: <Headphones size={24} />,
      title: t.features.support_title,
      desc: t.features.support_desc,
    }
  ];

  return (
    <div className="mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((item, index) => (
                <div key={index} className="bg-spotify-elevated border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-black/40 text-spotify-green group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                        <p className="text-spotify-subtext text-xs leading-tight font-medium">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
