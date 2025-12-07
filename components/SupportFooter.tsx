import React from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { USER_DATA } from '../constants';

export const SupportFooter: React.FC = () => {
  return (
    <div className="mt-12 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Support Channel */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 dark:from-indigo-900/50 dark:to-slate-900 border border-indigo-400/30 dark:border-indigo-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-xl shadow-indigo-500/20 dark:shadow-none flex flex-col items-center justify-center group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-indigo-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
            
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">پشتیبانی آنلاین</h3>
            <p className="text-indigo-100 dark:text-slate-400 mb-6 relative z-10 text-sm">
              در صورت بروز مشکل یا نیاز به تمدید، پیام دهید
            </p>
            
            <a
              href={USER_DATA.supportLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500 px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-black/10 dark:shadow-indigo-600/30 relative z-10 hover:scale-105"
            >
              <Send size={18} />
              <span>ارتباط با پشتیبانی</span>
            </a>
          </div>

          {/* News Channel */}
           <div className="bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-8 text-center relative overflow-hidden flex flex-col items-center justify-center group">
            
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 relative z-10">کانال اطلاع‌رسانی</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6 relative z-10 text-sm">
              دریافت آخرین اخبار، سرورهای جدید و آموزش‌ها
            </p>
            
            <a
              href={USER_DATA.channelLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 relative z-10 hover:scale-105"
            >
              <MessageCircle size={18} />
              <span>عضویت در کانال</span>
            </a>
          </div>
      </div>
      
      <p className="text-center text-slate-400 dark:text-slate-600 text-sm mt-12 mb-4 font-mono">
        Looka VPN Dashboard © {new Date().getFullYear()}
      </p>
    </div>
  );
};