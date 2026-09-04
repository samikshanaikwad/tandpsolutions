import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  FileText,
  Building,
  Phone,
  Mail,
  Zap,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PANEL_PRODUCTS, SPM_MACHINES, BRAND_PARTNERS } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  const [category, setCategory] = useState<'panel' | 'spm' | 'service'>('panel');
  const [selectedItem, setSelectedItem] = useState<string>('PLC Panels (Automation Panel)');
  const [preferredBrand, setPreferredBrand] = useState<string>('Delta Electronics');
  const [quantity, setQuantity] = useState<number>(1);
  const [loadRating, setLoadRating] = useState<string>('Standard 415V / Custom');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [location, setLocation] = useState<string>('Bengaluru');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialProduct) {
      const isSpm = SPM_MACHINES.some((s) => s.name === initialProduct);
      if (isSpm) {
        setCategory('spm');
        setSelectedItem(initialProduct);
      } else {
        setCategory('panel');
        setSelectedItem(initialProduct);
      }
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello T & P Solution Team,\n\n*REQUEST A QUOTE*\n*Product/System:* ${selectedItem} (${category.toUpperCase()})\n*Qty:* ${quantity}\n*Preferred Brand:* ${preferredBrand}\n*Specifications:* ${loadRating}\n*Client:* ${fullName}\n*Phone:* ${phone}\n*Company:* ${company || 'N/A'}\n*Location:* ${location}\n*Notes:* ${notes || 'Kindly provide drawing & preliminary quote.'}`
    );
    window.open(`https://wa.me/918762933980?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-lg max-w-xl w-full max-h-[92vh] overflow-y-auto border border-[#E2E8F0] shadow-xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-md bg-[#0B2F64] flex items-center justify-center text-white shrink-0">
            <FileText className="w-5 h-5 text-[#61C014]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0B2F64]">
              Request Engineering Quote
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Get an accurate quotation, electrical single-line diagram (SLD), and lead time estimate.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-[#61C014]/15 text-[#4EAF0A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#0B2F64]">
              Quote Request Dispatched!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. Your estimate request for <strong className="text-slate-900">{selectedItem}</strong> has been assigned to our estimation desk.
            </p>
            <div className="p-3 bg-slate-50 border border-[#E2E8F0] rounded-md text-xs text-slate-600 text-left max-w-md mx-auto space-y-1">
              <p><strong>Config:</strong> {quantity} unit(s) • Brand: {preferredBrand}</p>
              <p><strong>Contact:</strong> {phone} | {email || 'N/A'}</p>
              <p><strong>Company:</strong> {company || 'Independent Inquiry'}</p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-3">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-semibold bg-[#25D366] hover:bg-[#1ebd5b] text-white shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Quote</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-md text-xs font-semibold text-slate-600 hover:bg-slate-50 border border-[#E2E8F0] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Category Selector Tabs */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                1. System Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setCategory('panel');
                    setSelectedItem(PANEL_PRODUCTS[0].name);
                  }}
                  className={`py-2 px-3 rounded-md text-xs font-semibold border transition-all ${
                    category === 'panel'
                      ? 'bg-[#0B2F64] text-white border-[#0B2F64] shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-[#E2E8F0] hover:bg-white'
                  }`}
                >
                  Control Panels
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('spm');
                    setSelectedItem(SPM_MACHINES[0].name);
                  }}
                  className={`py-2 px-3 rounded-md text-xs font-semibold border transition-all ${
                    category === 'spm'
                      ? 'bg-[#0B2F64] text-white border-[#0B2F64] shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-[#E2E8F0] hover:bg-white'
                  }`}
                >
                  SPM Machinery
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('service');
                    setSelectedItem('Control Panel Manufacturing');
                  }}
                  className={`py-2 px-3 rounded-md text-xs font-semibold border transition-all ${
                    category === 'service'
                      ? 'bg-[#0B2F64] text-white border-[#0B2F64] shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-[#E2E8F0] hover:bg-white'
                  }`}
                >
                  Automation Service
                </button>
              </div>
            </div>

            {/* Product selection dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Product / Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 bg-white focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                >
                  {category === 'panel' &&
                    PANEL_PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  {category === 'spm' &&
                    SPM_MACHINES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  {category === 'service' && (
                    <>
                      <option value="Control Panel Manufacturing & Installation">Control Panel Manufacturing</option>
                      <option value="PLC & HMI Software Programming">PLC & HMI Programming</option>
                      <option value="Industrial Automation Integration">Industrial Automation Solutions</option>
                      <option value="Electrical Maintenance & Repair">Electrical Maintenance & Repairs</option>
                    </>
                  )}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Quantity Required
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 bg-white focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                />
              </div>
            </div>

            {/* Brand preference & Load rating */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Switchgear/PLC Brand
                </label>
                <select
                  value={preferredBrand}
                  onChange={(e) => setPreferredBrand(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 bg-white focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                >
                  <option value="Delta Electronics">Delta Electronics</option>
                  <option value="Schneider Electric">Schneider Electric</option>
                  <option value="Siemens">Siemens</option>
                  <option value="Mitsubishi Electric">Mitsubishi Electric</option>
                  <option value="T & P Recommended (Best Value)">T & P Recommended (Best Value)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Load / KW / Amps / Voltage
                </label>
                <input
                  type="text"
                  placeholder="e.g. 50 HP Motor / 415V / 250A"
                  value={loadRating}
                  onChange={(e) => setLoadRating(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 bg-white focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                />
              </div>
            </div>

            {/* Client Details */}
            <div className="pt-2 border-t border-[#E2E8F0]">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Contact & Company Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <input
                    type="email"
                    placeholder="Official Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company / Facility Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder="Additional specifications, required delivery timeline, or drawing notes..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-md border border-[#CBD5E1] text-xs text-slate-800 focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] focus:outline-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-50 border border-[#E2E8F0] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md text-xs font-semibold bg-[#0B2F64] hover:bg-[#071f43] text-white shadow-xs transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#61C014]" />
                <span>Submit Technical Quote Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
