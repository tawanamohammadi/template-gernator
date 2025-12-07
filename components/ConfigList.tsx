import React, { useState } from 'react';
import { CONFIGS } from '../constants';
import { Copy, QrCode, Check, Shield } from 'lucide-react';
import { QRCodeModal } from './QRCodeModal';

interface ConfigListProps {
  onCopy: (text: string) => void;
}

export const ConfigList: React.FC<ConfigListProps> = ({ onCopy }) => {
  const [selectedConfig, setSelectedConfig] = useState<{ url: string; title: string } | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, url: string) => {
    onCopy(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAll = () => {
    const allUrls = CONFIGS.map(c => c.url).join('\n');
    onCopy(allUrls);
  };

  // Helper to get visual theme based on flag/name
  const getCountryTheme = (flag: string | undefined, name: string) => {
    if (flag === '🇺🇸' || name.includes('USA')) return 'shadow-blue-500/20 border-blue-500/20 bg-blue-500/5 text-blue-400';
    if (flag === '🇩🇪' || name.includes('GER')) return 'shadow-yellow-500/20 border-yellow-500/20 bg-yellow-500/5 text-yellow-400';
    if (flag === '🇬🇧' || name.includes('ENG')) return 'shadow-red-500/20 border-red-500/20 bg-red-500/5 text-red-400';
    if (flag === '🇳🇱' || name.includes('Netherlands')) return 'shadow-orange-500/20 border-orange-500/20 bg-orange-500/5 text-orange-400';
    return 'shadow-slate-500/20 border-slate-500/20 bg-slate-500/5 text-slate-400';
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div>
             <h2 className="text-2xl font-bold text-white">کانفیگ‌های اتصال</h2>
             <p className="text-slate-400 text-sm mt-1">سرور مورد نظر را انتخاب و کپی کنید</p>
        </div>
        
        <button
          onClick={copyAll}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 active:scale-95"
        >
          <Copy size={18} />
          <span>کپی همه کانفیگ‌ها</span>
        </button>
      </div>

      <div className="space-y-4">
        {CONFIGS.map((config) => {
           const themeClass = getCountryTheme(config.flag, config.name);
           
           return (
            <div
                key={config.id}
                className="bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 rounded-2xl p-4 flex items-center justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 backdrop-blur-sm"
            >
                <div className="flex items-center gap-4 overflow-hidden">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border transition-all duration-300 ${themeClass} shadow-[0_0_15px_rgba(0,0,0,0.1)]`}>
                    {config.flag ? (
                        <span className="drop-shadow-md filter">{config.flag}</span>
                    ) : (
                        <Shield size={20} className="opacity-70" />
                    )}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-slate-100 font-bold text-base truncate pr-1">{config.name.replace(/\|.*$/, '')}</p>
                    <div className="flex items-center gap-2 mt-1">
                        {config.name.includes('|') && (
                             <span className="text-[10px] text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800 hidden sm:inline-block">
                                {config.name.split('|')[1].trim()}
                             </span>
                        )}
                        <p className="text-slate-600 text-xs truncate dir-ltr text-left font-mono max-w-[150px] sm:max-w-xs">
                            {config.url.substring(0, 20)}...
                        </p>
                    </div>
                </div>
                </div>

                <div className="flex items-center gap-2 mr-2">
                <button
                    onClick={() => setSelectedConfig({ url: config.url, title: config.name })}
                    className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-all border border-transparent hover:border-slate-600"
                    title="QR Code"
                >
                    <QrCode size={20} />
                </button>
                <button
                    onClick={() => handleCopy(config.id, config.url)}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 shadow-md ${
                    copiedId === config.id
                        ? 'bg-emerald-500 text-white shadow-emerald-500/30 scale-110'
                        : 'bg-slate-700 text-slate-200 hover:bg-blue-600 hover:text-white hover:shadow-blue-600/30'
                    }`}
                    title="Copy"
                >
                    {copiedId === config.id ? <Check size={20} /> : <Copy size={20} />}
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