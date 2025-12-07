import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative mb-12 sm:mb-16 pt-4 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 animate-fade-in-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        نسخه جدید داشبورد
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in-up delay-100">
        تجربه‌ای <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">سریع و امن</span>
        <br className="hidden sm:block" />
        برای دسترسی آزاد
      </h1>

      <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-200">
        مدیریت اشتراک، مشاهده مصرف و دریافت کانفیگ‌های اختصاصی. 
        همه چیز در یک پنل زیبا و مدرن برای شما آماده شده است.
      </p>

      <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
        <button 
            onClick={() => document.getElementById('configs')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
        >
          <Zap size={20} />
          <span>دریافت کانفیگ‌ها</span>
        </button>
        <button 
             onClick={() => document.getElementById('usage')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-3.5 rounded-2xl font-bold transition-all hover:scale-105"
        >
          <ShieldCheck size={20} />
          <span>وضعیت اشتراک</span>
        </button>
      </div>
    </div>
  );
};