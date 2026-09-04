import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  User,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, CORE_SERVICES } from '../data/companyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceRequired: 'Control Panel Manufacturing',
    projectTimeline: 'Within 2-4 Weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: prefilledService,
      }));
    }
  }, [prefilledService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and a valid phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello T & P Solution Team,\n\nI would like to inquire about: ${formData.serviceRequired || 'Custom Automation'}\nName: ${formData.fullName}\nPhone: ${formData.phone}\nCompany: ${formData.companyName || 'N/A'}\nMessage: ${formData.message || 'Please contact me regarding panel manufacturing and SPM machine details.'}`
    );
    window.open(`https://wa.me/918762933980?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-[#E2E8F0] text-[#0B2F64] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#61C014]" />
            Connect With Our Engineering Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2F64] tracking-tight">
            Contact T & P Solution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Ready to discuss your control panel schematics, SPM machinery requirements, or schedule a technical site visit in Bengaluru? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Official Contact & Company Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 shadow-xs">
              <h3 className="text-xl font-bold text-[#0B2F64] mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#61C014]" />
                <span>Head Office & Works</span>
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-md bg-slate-50 border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#0B2F64]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Works & Registered Address
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mt-1 leading-snug">
                    {COMPANY_INFO.address.full}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Near Bommasandra Industrial Area Hub, South Bengaluru
                  </p>
                </div>
              </div>

              {/* Direct Phone Numbers */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-md bg-slate-50 border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#0B2F64]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Phone Numbers
                  </p>
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <div key={idx} className="text-sm">
                      <a
                        href={`tel:${p.raw}`}
                        className="font-bold text-[#0B2F64] hover:text-[#61C014] transition-colors"
                      >
                        {p.number}
                      </a>
                      <span className="text-xs text-slate-500 ml-2">({p.label.split(' ')[0]})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Emails */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-md bg-slate-50 border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#0B2F64]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Email Inquiries
                  </p>
                  {COMPANY_INFO.emails.map((m, idx) => (
                    <div key={idx} className="text-sm">
                      <a
                        href={`mailto:${m.address}`}
                        className="font-bold text-[#0B2F64] hover:text-[#61C014] transition-colors"
                      >
                        {m.address}
                      </a>
                      <span className="text-xs text-slate-500 ml-2">({m.label})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web & Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-md bg-slate-50 border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#0B2F64]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Website & Operating Hours
                  </p>
                  <p className="text-sm font-semibold text-[#0B2F64] mt-1">
                    {COMPANY_INFO.website}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps / Location Visual Frame */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#0B2F64] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E87722]" />
                  Bommasandra Industrial Area, Bengaluru
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Pin: 560099</span>
              </div>
              <div className="relative h-44 rounded-md overflow-hidden border border-[#E2E8F0] bg-slate-50">
                {/* Embedded schematic map representation */}
                <div className="absolute inset-0 bg-[#0B2F64]/5 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#0B2F64] text-white flex items-center justify-center mb-2 shadow-xs">
                    <MapPin className="w-5 h-5 text-[#61C014]" />
                  </div>
                  <p className="text-xs font-bold text-[#0B2F64]">T & P Solution Works</p>
                  <p className="text-[11px] text-slate-600">Bommasandra, Bengaluru - 560099</p>
                  <a
                    href="https://maps.google.com/?q=Bommasandra,+Bengaluru,+Karnataka+560099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white text-xs font-semibold text-[#0B2F64] border border-[#CBD5E1] shadow-xs hover:bg-slate-50 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg border border-[#E2E8F0] p-6 sm:p-8 shadow-xs relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0B2F64]">
                  Send an Engineering Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out your technical requirements below. Our engineering leads will review your request and get back within 2-4 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#61C014]/15 text-[#4EAF0A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B2F64]">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry for <strong className="text-slate-800">{formData.serviceRequired}</strong> has been logged. Our lead engineers (Tarun / Pavan) will review your specifications and contact you shortly.
                  </p>

                  <div className="p-4 rounded-md bg-slate-50 border border-[#E2E8F0] max-w-sm mx-auto text-xs text-slate-600 text-left">
                    <p><strong>Contact:</strong> {formData.phone} | {formData.email || 'Email not provided'}</p>
                    <p className="mt-1"><strong>Requirement:</strong> {formData.serviceRequired}</p>
                    {formData.message && <p className="mt-1 text-slate-500 italic">"{formData.message}"</p>}
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[#25D366] hover:bg-[#1ebd5b] text-white shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 border border-[#E2E8F0] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-md bg-red-50 border border-red-200 flex items-center gap-2 text-xs font-semibold text-red-700">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-3.5 py-2 rounded-md border border-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] text-sm text-slate-800"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2 rounded-md border border-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] text-sm text-slate-800"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Work Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="engineer@company.com"
                        className="w-full px-3.5 py-2 rounded-md border border-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] text-sm text-slate-800"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Precision Components Pvt Ltd"
                        className="w-full px-3.5 py-2 rounded-md border border-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Service / Product Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-md border border-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] text-sm text-slate-800 bg-white"
                      >
                        <optgroup label="Core Services">
                          {CORE_SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Control Panels">
                          <option value="PLC Panels (Automation Panel)">PLC Panels (Automation Panel)</option>
                          <option value="MCC (Motor Control Centre)">MCC (Motor Control Centre)</option>
                          <option value="PCC (Power Control Centre)">PCC (Power Control Centre)</option>
                          <option value="APFC (Power Factor Panel)">APFC (Power Factor Panel)</option>
                          <option value="VFD (Drive Panel)">VFD (Drive Panel)</option>
                          <option value="Custom Industrial Control Panels">Custom Industrial Control Panels</option>
                        </optgroup>
                        <optgroup label="SPM Machines">
                          <option value="Custom Automation Machines">Custom Automation Machines</option>
                          <option value="Assembly Automation Machines">Assembly Automation Machines</option>
                          <option value="Industrial Process Automation Systems">Industrial Process Automation Systems</option>
                          <option value="PLC Controlled Machinery">PLC Controlled Machinery</option>
                          <option value="Machine Retrofit & Automation Upgrades">Machine Retrofit & Automation Upgrades</option>
                        </optgroup>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Required Timeline
                      </label>
                      <select
                        name="projectTimeline"
                        value={formData.projectTimeline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-md border border-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] text-sm text-slate-800 bg-white"
                      >
                        <option value="Immediate Breakdown / Urgent">Immediate Breakdown / Urgent (1-3 Days)</option>
                        <option value="Within 2-4 Weeks">Within 2-4 Weeks</option>
                        <option value="1-2 Months">1-2 Months</option>
                        <option value="Future Project Planning">Future Project Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project Details / Panel Specifications
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention motor ratings (KW/HP), preferred PLC brand (Delta/Siemens), number of I/Os, or machine cycle requirements..."
                      className="w-full px-3.5 py-2 rounded-md border border-[#CBD5E1] focus:outline-none focus:ring-1 focus:ring-[#0B2F64] focus:border-[#0B2F64] text-sm text-slate-800"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#0B2F64] hover:bg-[#071f43] text-white py-2.5 px-6 rounded-md text-sm font-semibold shadow-xs transition-all"
                    >
                      <Send className="w-4 h-4 text-[#61C014]" />
                      <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Technical Inquiry'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white py-2.5 px-5 rounded-md text-sm font-semibold shadow-xs transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
