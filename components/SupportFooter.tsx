import React from 'react';
import { Send } from 'lucide-react';

export const SupportFooter: React.FC = () => {
  return (
    <div className="mt-12 mb-6">
      <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -ml-16 -mb-16"></div>
        
        <h3 className="text-xl font-bold text-white mb-2 relative z-10">پشتیبانی تلگرام</h3>
        <p className="text-slate-400 mb-6 relative z-10 max-w-lg mx-auto">
          در صورت وجود هرگونه مشکل در اشتراک, با پشتیبانی تلگرام در ارتباط باشید.
        </p>
        
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/30 relative z-10"
        >
          <Send size={18} />
          <span>ارتباط با پشتیبانی</span>
        </a>
      </div>
      
      <p className="text-center text-slate-600 text-sm mt-8">
        Designed for Looka VPN © {new Date().getFullYear()}
      </p>
    </div>
  );
};