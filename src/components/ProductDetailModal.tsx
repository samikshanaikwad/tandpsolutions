import React from 'react';
import {
  X,
  CheckCircle2,
  Zap,
  Cog,
  Shield,
  Clock,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { PanelProduct, SPMMachine } from '../types';

interface ProductDetailModalProps {
  item: PanelProduct | SPMMachine | null;
  type: 'panel' | 'spm';
  onClose: () => void;
  onRequestQuote: (name: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  type,
  onClose,
  onRequestQuote,
}) => {
  if (!item) return null;

  const isPanel = type === 'panel';
  const panel = isPanel ? (item as PanelProduct) : null;
  const spm = !isPanel ? (item as SPMMachine) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with image preview */}
        <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
          <div className="w-full sm:w-48 h-36 rounded-md overflow-hidden bg-slate-100 shrink-0 border border-[#E2E8F0] relative">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-[#0B2F64] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
              {isPanel ? panel?.acronym : 'SPM'}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#61C014]">
              {isPanel ? 'Industrial Electrical Panel' : spm?.category}
            </span>
            <h3 className="text-2xl font-bold text-[#0B2F64] mt-1">
              {item.name}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {item.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Technical Specification Box */}
        <div className="p-4 rounded-md bg-slate-50 border border-[#E2E8F0] mb-6 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Engineering Parameters:
          </h4>
          {isPanel && panel && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-2.5 rounded-md border border-[#E2E8F0]">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Rated Voltage</span>
                <span className="font-bold text-[#0B2F64]">{panel.voltageRating}</span>
              </div>
              <div className="bg-white p-2.5 rounded-md border border-[#E2E8F0]">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Enclosure Protection</span>
                <span className="font-bold text-[#0B2F64]">{panel.enclosureRating}</span>
              </div>
            </div>
          )}

          {!isPanel && spm && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white p-2.5 rounded-md border border-[#E2E8F0]">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Takt / Cycle Time</span>
                <span className="font-bold text-[#0B2F64]">{spm.cycleTime}</span>
              </div>
              <div className="bg-white p-2.5 rounded-md border border-[#E2E8F0]">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Control Architecture</span>
                <span className="font-bold text-[#0B2F64]">{spm.controlArchitecture}</span>
              </div>
            </div>
          )}
        </div>

        {/* Features list */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Standard Features & Hardware Architecture:
          </h4>
          <ul className="space-y-2">
            {item.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#61C014] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Applications / Industries */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            {isPanel ? 'Common Industrial Deployments:' : 'Recommended Application Domains:'}
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {(isPanel ? panel?.commonApplications : spm?.idealIndustries)?.map((app, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-50 border border-[#E2E8F0] text-slate-700 text-xs font-medium"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 border border-[#E2E8F0] transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              const name = item.name;
              onClose();
              onRequestQuote(name);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[#0B2F64] hover:bg-[#071f43] text-white shadow-xs transition-all"
          >
            <span>Request Quotation & Drawing</span>
            <ArrowRight className="w-4 h-4 text-[#61C014]" />
          </button>
        </div>
      </div>
    </div>
  );
};
