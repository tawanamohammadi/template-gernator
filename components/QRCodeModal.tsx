import React from 'react';
import QRCode from 'react-qr-code';
import { X, Copy } from 'lucide-react';

interface QRCodeModalProps {
  url: string;
  title: string;
  onClose: () => void;
  onCopy: (text: string) => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ url, title, onClose, onCopy }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-sm relative shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-center text-lg font-bold text-slate-200 mb-6 mt-2 pr-8">{title}</h3>
        
        <div className="bg-white p-4 rounded-xl mx-auto w-fit mb-6">
          <QRCode
            value={url}
            size={200}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            viewBox={`0 0 256 256`}
          />
        </div>

        <button
          onClick={() => onCopy(url)}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20"
        >
          <Copy size={18} />
          <span>کپی کردن کد</span>
        </button>
      </div>
    </div>
  );
};