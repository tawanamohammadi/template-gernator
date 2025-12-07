import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-16 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <HelpCircle size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">سوالات متداول</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm">پاسخ به سوالاتی که ممکن است برای شما پیش بیاید</p>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((item, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                ? 'bg-white dark:bg-slate-800 border-indigo-500/30 shadow-lg shadow-indigo-500/10' 
                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-indigo-500/30'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-right"
            >
              <span className={`font-bold text-sm sm:text-base ${openIndex === index ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-200'}`}>
                {item.question}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-indigo-500' : ''}`} 
              />
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/50 mt-2">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};