
import React from 'react';
import { X, Copy, Plus, Download, Zap, Monitor, Smartphone, CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { TutorialStep } from '../types';
import { Language, translations } from '../translations';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
  steps?: TutorialStep[];
  lang: Language;
}

const IconMap: Record<string, React.ReactNode> = {
    'Copy': <Copy size={24} />,
    'Plus': <Plus size={24} />,
    'Download': <Download size={24} />,
    'Zap': <Zap size={24} />,
    'Monitor': <Monitor size={24} />,
    'Smartphone': <Smartphone size={24} />,
    'CheckSquare': <CheckSquare size={24} />,
};

export const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose, appName, steps, lang }) => {
  if (!isOpen || !steps) return null;
  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-spotify-elevated w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-scale-in border border-white/5 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-spotify-base">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="text-spotify-green">{t.appGuide.tutorial}:</span> {appName}
            </h3>
            <button 
                onClick={onClose}
                className="text-spotify-subtext hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
                <X size={24} />
            </button>
        </div>

        {/* Steps Content */}
        <div className="overflow-y-auto p-6 space-y-8">
            {steps.map((step, index) => {
                // Translate content
                // @ts-ignore
                const stepTitle = t.tutorials[step.title] || step.title;
                // @ts-ignore
                const stepDesc = t.tutorials[step.description] || step.description;

                return (
                    <div key={index} className="flex gap-5 relative">
                        {/* Connecting Line */}
                        {index !== steps.length - 1 && (
                             <div className="absolute top-12 left-[19px] rtl:right-[19px] bottom-[-20px] w-0.5 bg-white/10"></div>
                        )}

                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-spotify-highlight border border-white/10 flex items-center justify-center text-spotify-green shadow-lg z-10 relative">
                                {step.icon && IconMap[step.icon] ? IconMap[step.icon] : <Zap size={20} />}
                            </div>
                        </div>
                        <div className="pt-1">
                            <h4 className="text-lg font-bold text-white mb-1">{stepTitle}</h4>
                            <p className="text-sm text-spotify-subtext leading-relaxed">{stepDesc}</p>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-spotify-base">
            <button 
                onClick={onClose}
                className="w-full py-3.5 bg-spotify-green hover:bg-spotify-greenHover text-black font-bold rounded-full transition-transform active:scale-95 shadow-lg shadow-green-500/20"
            >
                {t.tutorials.close}
            </button>
        </div>

      </div>
    </div>
  );
};
