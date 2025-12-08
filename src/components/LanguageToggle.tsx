
import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../translations';

interface LanguageToggleProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ lang, setLang }) => {
  return (
    <button
      onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
      className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all active:scale-95 group relative"
      aria-label="Toggle Language"
    >
      <Languages size={20} />
      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white ring-2 ring-white dark:ring-slate-900">
        {lang.toUpperCase()}
      </span>
    </button>
  );
};
