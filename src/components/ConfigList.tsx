
import React, { useState } from 'react';
import { CONFIGS } from '../constants';
import { Copy, QrCode, Check, Shield, Globe } from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';
import { Language, translations } from '../translations';

interface ConfigListProps {
  onCopy: (text: string) => void;
  lang: Language;
}

export const ConfigList: React.FC<ConfigListProps> = ({ onCopy, lang }) => {
  const [selectedConfig, setSelectedConfig] = useState<{ url: string; title: string } | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const t = translations[lang];

  const handleCopy = (id: string, url: string) => {
    onCopy(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAll = () => {
    const allUrls = CONFIGS.map(c => c.url).join('\n');
    onCopy(allUrls);
  };

  const getFlagUrl = (countryCode?: string) => {
      if (!countryCode || countryCode === 'ir') return null;
      return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
  };

  return (
    <div id="configs" className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-8 gap-6">
        <div>
             <h2 className="text-3xl font-black text-white mb-2 tracking-tight">{t.configs.title}</h2>
             <p className="text-spotify-subtext">{t.configs.subtitle}</p>
        </div>
        
        <button
          onClick={copyAll}
          className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2 backdrop-blur-md"
        >
          <Copy size={18} />
          <span>{t.configs.copy_all}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CONFIGS.map((config) => {
           const flagUrl = getFlagUrl(config.countryCode);
           
           return (
            <div
                key={config.id}
                className="relative bg-spotify-card hover:bg-spotify-elevated border border-spotify-border hover:border-spotify-green/40 rounded-2xl p-5 flex flex-col justify-between group transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden"
            >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-spotify-green/0 via-spotify-green/5 to-spotify-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex items-start justify-between mb-4 relative z-10">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black border border-white/10 overflow-hidden shadow-2xl relative">
                            {flagUrl ? (
                                <img src={flagUrl} alt={config.countryCode} className="w-full h-full object-cover scale-110" />
                            ) : (
                                <Globe size={20} className="text-spotify-subtext" />
                            )}
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-white font-bold text-base truncate group-hover:text-spotify-green transition-colors" dir="ltr">{config.name.split('|')[0]}</h3>
                             <p className="text-spotify-subtext text-xs mt-0.5 truncate flex items-center gap-1">
                                {config.countryCode ? config.countryCode.toUpperCase() : 'AUTO'} 
                                <span className="w-1 h-1 rounded-full bg-spotify-subtext"></span>
                                VLESS
                             </p>
                        </div>
                     </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-white/5 relative z-10">
                     <button
                        onClick={() => setSelectedConfig({ url: config.url, title: config.name })}
                        className="flex-1 py-2.5 flex items-center justify-center gap-2 text-spotify-subtext hover:text-white bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-all"
                    >
                        <QrCode size={16} />
                        QR CODE
                    </button>
                    <button
                        onClick={() => handleCopy(config.id, config.url)}
                        className={`flex-1 py-2.5 flex items-center justify-center gap-2 rounded-lg text-xs font-bold transition-all ${
                            copiedId === config.id
                                ? 'bg-spotify-green text-black'
                                : 'bg-white text-black hover:bg-gray-200'
                        }`}
                    >
                        {copiedId === config.id ? <Check size={16} /> : <Copy size={16} />}
                        {copiedId === config.id ? 'COPIED' : 'COPY'}
                    </button>
                </div>
            </div>
            );
        })}
      </div>

      {selectedConfig && (
        <QRCodeModal
          url={selectedConfig.url}
          title={selectedConfig.title}
          onClose={() => setSelectedConfig(null)}
          onCopy={(text) => {
             onCopy(text);
             setSelectedConfig(null);
          }}
        />
      )}
    </div>
  );
};
