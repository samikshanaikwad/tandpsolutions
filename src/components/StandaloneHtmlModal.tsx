import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Download,
  FileCode,
  ExternalLink,
  Code2,
} from 'lucide-react';

interface StandaloneHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneHtmlModal: React.FC<StandaloneHtmlModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      const response = await fetch('/tandp-solution.html');
      const text = await response.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/tandp-solution.html';
    a.download = 'tandp-solution.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-md bg-[#0B2F64] flex items-center justify-center text-white shrink-0">
            <FileCode className="w-5 h-5 text-[#61C014]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0B2F64]">
              Standalone Single-File HTML Code
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Self-contained deliverable with Tailwind CSS CDN, FontAwesome icons, and Vanilla JavaScript.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-md bg-slate-50 border border-[#E2E8F0] mb-6 space-y-3">
          <div className="flex items-start gap-2 text-xs text-slate-700">
            <Code2 className="w-4 h-4 text-[#61C014] shrink-0 mt-0.5" />
            <span>
              <strong>Zero-build required:</strong> Contains HTML5 markup, Tailwind CSS script CDN, FontAwesome icon library CDN, and inline Vanilla JS for tabs, drawer toggle, and contact validation.
            </span>
          </div>
          <div className="flex items-start gap-2 text-xs text-slate-700">
            <ExternalLink className="w-4 h-4 text-[#0B2F64] shrink-0 mt-0.5" />
            <span>
              Directly deployable to Apache, NGINX, GitHub Pages, or openable offline by double-clicking <code className="bg-slate-200 px-1 rounded text-slate-800">tandp-solution.html</code> in any web browser.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-[#E2E8F0]">
          <a
            href="/tandp-solution.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-50 border border-[#CBD5E1]"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-[#0B2F64] transition-colors border border-[#CBD5E1]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#61C014]" />
                <span>Copied Full HTML!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Full HTML Code</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-md text-xs font-semibold bg-[#0B2F64] hover:bg-[#071f43] text-white shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#61C014]" />
            <span>Download .html File</span>
          </button>
        </div>
      </div>
    </div>
  );
};
