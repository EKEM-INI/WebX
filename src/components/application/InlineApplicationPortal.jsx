import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Globe,
  ShoppingBag,
  RefreshCw,
  Layers,
  Building2,
  HelpCircle,
  Check,
  ChevronRight,
  ChevronLeft,
  Send,
  CheckCircle2
} from 'lucide-react';

export const InlineApplicationPortal = () => {
  const { initialFormNeed, submitApplication, setTab } = useApp();

  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    serviceNeeded: initialFormNeed || 'Business Website',
    businessName: '',
    industry: '',
    businessDescription: '',
    existingWebsite: '',
    socialLinks: '',
    websiteGoals: '',
    requiredPages: ['Home', 'Services / Products', 'About', 'Contact'],
    desiredFeatures: ['Mobile First UX', 'Fast Edge Hosting'],
    designPreference: 'Futuristic & Dark Mode',
    likedWebsites: '',
    budgetRange: '$3,500 - $7,500 (Growth Flagship)',
    timeline: '3 - 4 Weeks (Standard)',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    companyName: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const serviceOptions = [
    { id: 'Business Website', icon: Globe, desc: 'Flagship presence tailored to brand, audience and conversion' },
    { id: 'Online Store', icon: ShoppingBag, desc: 'High-converting e-commerce with fast checkout and payment gateways' },
    { id: 'Website Redesigns', icon: RefreshCw, desc: 'Dismantle outdated web pages and rebuild for sub-second speed' },
    { id: 'Landing Pages', icon: Layers, desc: 'Laser-focused single pages for campaigns, product launches & ads' },
    { id: 'Business Portals', icon: Building2, desc: 'Secure client desks, customer portals and booking workflows' },
    { id: 'Not Sure', icon: HelpCircle, desc: 'Consult with the WebX engineering team to map your requirements' }
  ];

  const commonPages = ['Home', 'About', 'Services / Products', 'Case Studies', 'Pricing', 'Contact', 'Store', 'Blog'];
  const commonFeatures = ['AI Lead Assistant', 'Online Payments', 'WhatsApp Orders', 'Appointment Booking', 'Client Portal', 'CRM Integration'];

  const validateCurrentStep = () => {
    const errs = {};
    if (step === 1) {
      if (!formData.serviceNeeded) errs.serviceNeeded = 'Please select a project type';
    } else if (step === 2) {
      if (!formData.businessName.trim()) errs.businessName = 'Business name is required';
      if (!formData.industry.trim()) errs.industry = 'Industry is required';
      if (!formData.businessDescription.trim()) errs.businessDescription = 'Please describe what your business does';
    } else if (step === 3) {
      if (!formData.websiteGoals.trim()) errs.websiteGoals = 'Please outline your primary website goal';
    } else if (step === 4) {
      if (!formData.budgetRange) errs.budgetRange = 'Please select an estimated budget range';
    } else if (step === 5) {
      if (!formData.contactName.trim()) errs.contactName = 'Your name is required';
      if (!formData.contactEmail.trim()) {
        errs.contactEmail = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
        errs.contactEmail = 'Please provide a valid email address';
      }
      if (!formData.contactPhone.trim()) errs.contactPhone = 'Phone / WhatsApp is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (step < totalSteps) {
        setStep(prev => prev + 1);
      } else {
        const result = submitApplication(formData);
        setSubmissionResult(result);
        setIsSubmitted(true);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      setErrors({});
    }
  };

  const togglePageSelection = (page) => {
    setFormData(prev => {
      const exists = prev.requiredPages.includes(page);
      return {
        ...prev,
        requiredPages: exists
          ? prev.requiredPages.filter(p => p !== page)
          : [...prev.requiredPages, page]
      };
    });
  };

  const toggleFeatureSelection = (feature) => {
    setFormData(prev => {
      const exists = prev.desiredFeatures.includes(feature);
      return {
        ...prev,
        desiredFeatures: exists
          ? prev.desiredFeatures.filter(f => f !== feature)
          : [...prev.desiredFeatures, feature]
      };
    });
  };

  return (
    <section className="relative py-20 bg-obsidian-950 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono uppercase tracking-widest text-slate-400">
            Dedicated Intake Portal
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            COMMISSION YOUR BUILD
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Complete the 5-step brief below. Our engineering team reviews each application and returns a custom architecture proposal within 24 hours.
          </p>
        </div>

        {/* Portal Card */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
          
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>Step {step} of {totalSteps}</span>
                <span>{Math.round((step / totalSteps) * 100)}% Completed</span>
              </div>
              <div className="w-full bg-white/[0.05] h-1 rounded-full overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {isSubmitted && submissionResult ? (
            /* Confirmation Screen */
            <div className="text-center py-12 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mx-auto">
                <CheckCircle2 className="w-8 h-8 text-cyber-cyan" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-cyber-cyan uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                  Reference ID: {submissionResult.id}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-2">
                  APPLICATION RECEIVED.
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                  We've got it from here. The WebX team will review your requirements and reach out to {formData.contactEmail} within 24 hours.
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => setTab('overview')}
                  className="px-6 py-2.5 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-all"
                >
                  Return to Overview
                </button>
              </div>
            </div>
          ) : (
            /* Form Steps */
            <div>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">What do you need?</h3>
                    <p className="text-xs text-slate-400 mt-1">Select the primary type of digital build you require.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = formData.serviceNeeded === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setFormData({ ...formData, serviceNeeded: opt.id })}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                            isSelected
                              ? 'bg-white/10 border-white text-white'
                              : 'bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-white/20'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${isSelected ? 'bg-white text-obsidian-950' : 'bg-white/[0.04] text-slate-400'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{opt.id}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{opt.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">Tell us about your business</h3>
                    <p className="text-xs text-slate-400 mt-1">We engineer digital infrastructure around your commercial reality.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Business Name *</label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Horizon"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-white"
                      />
                      {errors.businessName && <p className="text-xs text-red-400 mt-1">{errors.businessName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Industry *</label>
                      <input
                        type="text"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        placeholder="e.g. Private Equity"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-white"
                      />
                      {errors.industry && <p className="text-xs text-red-400 mt-1">{errors.industry}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Business Description *</label>
                    <textarea
                      rows={3}
                      value={formData.businessDescription}
                      onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                      placeholder="Briefly describe what your business does and what makes your offering distinctive."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-white"
                    />
                    {errors.businessDescription && <p className="text-xs text-red-400 mt-1">{errors.businessDescription}</p>}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">What are you looking for?</h3>
                    <p className="text-xs text-slate-400 mt-1">Specify your goals, required pages, and automations.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Primary Website Goal *</label>
                    <input
                      type="text"
                      value={formData.websiteGoals}
                      onChange={(e) => setFormData({ ...formData, websiteGoals: e.target.value })}
                      placeholder="e.g. Convert high-value corporate inquiries"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-white"
                    />
                    {errors.websiteGoals && <p className="text-xs text-red-400 mt-1">{errors.websiteGoals}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">Required Pages</label>
                    <div className="flex flex-wrap gap-2">
                      {commonPages.map((p) => {
                        const isSelected = formData.requiredPages.includes(p);
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => togglePageSelection(p)}
                            className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                              isSelected
                                ? 'bg-white text-obsidian-950 font-semibold'
                                : 'bg-white/[0.04] text-slate-400 hover:text-white'
                            }`}
                          >
                            {p}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">Desired Automations</label>
                    <div className="flex flex-wrap gap-2">
                      {commonFeatures.map((f) => {
                        const isSelected = formData.desiredFeatures.includes(f);
                        return (
                          <button
                            key={f}
                            type="button"
                            onClick={() => toggleFeatureSelection(f)}
                            className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                              isSelected
                                ? 'bg-white text-obsidian-950 font-semibold'
                                : 'bg-white/[0.04] text-slate-400 hover:text-white'
                            }`}
                          >
                            {f}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">Budget & Timeline</h3>
                    <p className="text-xs text-slate-400 mt-1">Select realistic investment and launch expectations.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: '$1,500 - $3,500', tier: 'Starter Launch' },
                      { title: '$3,500 - $7,500', tier: 'Growth Flagship' },
                      { title: '$7,500 - $15,000+', tier: 'Enterprise / E-Commerce' },
                      { title: 'Undetermined', tier: 'Custom Consultation' }
                    ].map((b) => {
                      const isSelected = formData.budgetRange.includes(b.title);
                      return (
                        <div
                          key={b.title}
                          onClick={() => setFormData({ ...formData, budgetRange: `${b.title} (${b.tier})` })}
                          className={`p-4 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-white/10 border-white text-white'
                              : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:border-white/20'
                          }`}
                        >
                          <div className="font-bold text-sm text-white">{b.title}</div>
                          <div className="text-xs font-mono text-slate-400">{b.tier}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-mono text-slate-400 mb-2">Turnaround Window</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Urgent (< 2 Weeks)', '3 - 4 Weeks', 'Flexible'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: t })}
                          className={`p-2.5 rounded-xl border text-center text-xs font-mono transition-all ${
                            formData.timeline === t
                              ? 'bg-white text-obsidian-950 font-semibold border-white'
                              : 'bg-white/[0.02] border-white/[0.06] text-slate-400'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">Contact Information</h3>
                    <p className="text-xs text-slate-400 mt-1">Where should the WebX team send your digital proposal?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="e.g. Samuel Okafor"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-white"
                      />
                      {errors.contactName && <p className="text-xs text-red-400 mt-1">{errors.contactName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Work Email *</label>
                      <input
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        placeholder="samuel@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-white"
                      />
                      {errors.contactEmail && <p className="text-xs text-red-400 mt-1">{errors.contactEmail}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-white"
                    />
                    {errors.contactPhone && <p className="text-xs text-red-400 mt-1">{errors.contactPhone}</p>}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-8 mt-8 border-t border-white/[0.06] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 rounded-full border border-white/[0.1] text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-slate-200 transition-all flex items-center gap-1.5"
                >
                  <span>{step === totalSteps ? 'Submit Application' : 'Continue'}</span>
                  {step === totalSteps ? <Send className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
