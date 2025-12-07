import React from 'react';
import { ShieldCheck, Zap, Headphones, GlobeLock } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'سرعت بی‌نهایت',
      desc: 'اتصال پرسرعت و پایدار بدون افت کیفیت',
      color: 'blue'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'امنیت تضمینی',
      desc: 'رمزنگاری پیشرفته اطلاعات شما',
      color: 'emerald'
    },
    {
      icon: <GlobeLock size={24} />,
      title: 'آی‌پی ثابت',
      desc: 'مناسب برای ترید و کارهای حساس',
      color: 'violet'
    },
    {
      icon: <Headphones size={24} />,
      title: 'پشتیبانی ۲۴/۷',
      desc: 'پاسخگویی سریع در تمام ساعات شبانه‌روز',
      color: 'amber'
    }
  ];

  return (
    <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 p-4 rounded-2xl flex flex-col items-center text-center gap-3 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-lg">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${item.color}-50 dark:bg-${item.color}-500/10 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 dark:text-white text-sm mb-1">{item.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-tight">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};