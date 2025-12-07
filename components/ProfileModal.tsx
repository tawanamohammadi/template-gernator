import React from 'react';
import { X, Copy, Crown, User, ExternalLink, ShieldCheck } from 'lucide-react';
import { UserData } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: UserData;
  onCopy: (text: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, userData, onCopy }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-slate-200 dark:border-slate-700">
        
        {/* Header Background */}
        <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-600">
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 p-2 bg-black/20 hover:bg-black/30 text-white rounded-xl transition-colors backdrop-blur-sm"
          >
            <X size={20} />
          </button>
          <div className="absolute -bottom-12 right-1/2 translate-x-1/2">
             <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-xl flex items-center justify-center">
                 <User size={40} className="text-slate-400" />
             </div>
          </div>
        </div>

        <div className="pt-14 px-6 pb-8 text-center">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{userData.username}</h2>
            <div className="flex justify-center items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-700/50">
                    <Crown size={12} />
                    {userData.plan}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-700/50">
                    <ShieldCheck size={12} />
                    {userData.status}
                </span>
            </div>

            <div className="space-y-4 text-right">
                <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 block pr-1">لینک اشتراک (Subscription Link)</label>
                    <div className="flex gap-2">
                        <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 font-mono truncate border border-slate-200 dark:border-slate-700 select-all">
                            {userData.subscriptionUrl}
                        </div>
                        <button 
                            onClick={() => onCopy(userData.subscriptionUrl)}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-4 rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-blue-500/20"
                        >
                            <Copy size={18} />
                        </button>
                    </div>
                </div>

                 <div>
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 block pr-1">آیدی کاربر (User ID)</label>
                    <div className="flex gap-2">
                        <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 font-mono truncate border border-slate-200 dark:border-slate-700 select-all">
                            {userData.userId}
                        </div>
                        <button 
                            onClick={() => onCopy(userData.userId)}
                            className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-200 px-4 rounded-xl flex items-center justify-center transition-colors"
                        >
                            <Copy size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                 <a 
                    href={userData.supportLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-500/20"
                >
                    <ExternalLink size={16} />
                    پشتیبانی
                </a>
                 <button 
                    onClick={onClose}
                    className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                    بستن
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};