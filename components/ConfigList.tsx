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

  const getFlagUrl = (countryCode?: string) => {
      if (!countryCode || countryCode === 'ir') return null;
      return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
  };

  return (
    <div id="configs" className="mb-16 scroll-mt-24">
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-8 gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
             <h2 className="text-2xl font-bold text-slate-900 dark:text-white">کانفیگ‌های اتصال</h2>
             <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">برای اتصال، یکی از سرورهای زیر را انتخاب کنید</p>
        </div>
        
        <button
          onClick={copyAll}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
        >
          <Copy size={18} />
          <span>کپی همه</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONFIGS.map((config) => {
           const flagUrl = getFlagUrl(config.countryCode);
           
           return (
            <div
                key={config.id}
                className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-slate-600 rounded-2xl p-4 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:-translate-y-1 backdrop-blur-sm"
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800/80 overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
                        {flagUrl ? (
                            <img src={flagUrl} alt={config.countryCode} className="w-full h-full object-cover" />
                        ) : (
                            <Shield size={22} className="text-slate-400" />
                        )}
                    </div>
                    <div className="min-w-0">
                        <p className="text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base truncate">{config.name.split('|')[0]}</p>
                        {config.name.includes('|') && (
                            <p className="text-slate-500 text-xs mt-0.5">{config.name.split('|')[1]}</p>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700/50">
                     <div className="text-[10px] font-mono text-slate-400 bg-slate-50 dark:bg-slate-900/50 px-2 py-1 rounded max-w-[120px] truncate">
                        {config.countryCode ? config.countryCode.toUpperCase() : 'AUTO'} • TCP
                     </div>
                     <div className="flex gap-2">
                        <button
                            onClick={() => setSelectedConfig({ url: config.url, title: config.name })}
                            className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                            title="QR Code"
                        >
                            <QrCode size={18} />
                        </button>
                        <button
                            onClick={() => handleCopy(config.id, config.url)}
                            className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 shadow-sm ${
                            copiedId === config.id
                                ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600'
                            }`}
                            title="Copy"
                        >
                            {copiedId === config.id ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </div>
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