import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Globe,
  ShoppingBag,
  Layers,
  RefreshCw,
  Sparkles,
  HelpCircle,
  Clock,
  DollarSign,
  Send,
  Building2,
  Check
} from 'lucide-react';

export const MultiStepModal = () => {
  const { isAppModalOpen, closeApplication, initialFormNeed, submitApplication } = useApp();

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

  useEffect(() => {
    if (initialFormNeed) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialFormNeed }));
    }
    // Reset state when opened
    if (isAppModalOpen) {
      setStep(1);
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isAppModalOpen, initialFormNeed]);

  if (!isAppModalOpen) return null;

  const serviceOptions = [
    { id: 'Business Website', icon: Globe, desc: 'Flagship presence tailored to brand, audience and conversion' },
    { id: 'Online Store', icon: ShoppingBag, desc: 'High-converting e-commerce with fast checkout and payment gateways' },
    { id: 'Website Redesigns', icon: RefreshCw, desc: 'Dismantle outdated web pages and rebuild for sub-second speed' },
    { id: 'Landing Pages', icon: Layers, desc: 'Laser-focused single pages for campaigns, product launches & ads' },
    { id: 'Business Portals', icon: Building2, desc: 'Secure client desks, customer portals and booking workflows' },
    { id: 'Not Sure', icon: HelpCircle, desc: 'Consult with the WebX engineering team to map your requirements' }
  ];

  const commonPages = ['Home', 'About', 'Services / Products', 'Case Studies / Portfolio', 'Pricing', 'Contact', 'Store / Checkout', 'Blog / Insights'];
  const commonFeatures = ['AI Lead Assistant', 'Online Payments (Stripe/Paystack)', 'WhatsApp Instant Order', 'Appointment Booking', 'Client Portal', 'Custom Dynamic CRM'];

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
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      setErrors({});
    }
  };

  const handleSubmit = () => {
    const result = submitApplication(formData);
    setSubmissionResult(result);
    setIsSubmitted(true);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-obsidian-950/90 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-3xl my-auto rounded-3xl bg-obsidian-900 border border-cyber-cyan/30 shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-obsidian-950/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan font-bold text-xs">
              WX
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                WebX Build Application
              </div>
              <div className="text-sm font-bold font-display text-white">
                {isSubmitted ? 'Confirmation' : `Step ${step} of ${totalSteps}`}
              </div>
            </div>
          </div>

          <button
            onClick={closeApplication}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div className="w-full bg-obsidian-950 h-1.5 relative">
            <div
              className="bg-cyber-cyan h-full transition-all duration-300 shadow-glow-cyan"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          
          {/* SUCCESS SCREEN */}
          {isSubmitted && submissionResult ? (
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-cyber-cyan/10 border-2 border-cyber-cyan flex items-center justify-center text-cyber-cyan mx-auto shadow-glow-cyan">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Application ID: {submissionResult.id}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-3">
                  APPLICATION RECEIVED.
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  We've got it from here. The WebX team will review your project requirements and get back to you within 24 hours.
                </p>
              </div>

              {/* Application Summary Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-obsidian-950 border border-white/10 text-left text-xs font-mono space-y-2 text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="text-cyber-cyan font-semibold">{formData.serviceNeeded}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Business:</span>
                  <span className="text-white">{formData.businessName}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500">Contact:</span>
                  <span className="text-white">{formData.contactName} ({formData.contactEmail})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Expected Timeline:</span>
                  <span className="text-emerald-400">{formData.timeline}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={closeApplication}
                  className="px-8 py-3.5 rounded-xl bg-cyber-cyan text-obsidian-950 font-semibold text-xs hover:bg-white transition-all shadow-glow-cyan"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            /* MULTI-STEP QUESTIONS */
            <div>
              
              {/* STEP 1: What do you need? */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      What do you need?
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Select the primary type of digital build you are commissioning.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {serviceOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = formData.serviceNeeded === opt.id;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => {
                            setFormData({ ...formData, serviceNeeded: opt.id });
                            if (errors.serviceNeeded) setErrors({});
                          }}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                            isSelected
                              ? 'bg-cyber-cyan/15 border-cyber-cyan text-white shadow-glow-cyan/20'
                              : 'bg-obsidian-950/60 border-white/10 text-slate-300 hover:border-cyber-cyan/40 hover:bg-obsidian-850'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${isSelected ? 'bg-cyber-cyan text-obsidian-950' : 'bg-obsidian-900 text-slate-400'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm">{opt.id}</div>
                            <div className="text-xs text-slate-400 mt-1 leading-snug">{opt.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.serviceNeeded && (
                    <p className="text-xs text-red-400">{errors.serviceNeeded}</p>
                  )}
                </div>
              )}

              {/* STEP 2: Tell us about your business */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      Tell us about your business
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      We design around your commercial reality and audience.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Horizon Capital"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                      />
                      {errors.businessName && <p className="text-xs text-red-400 mt-1">{errors.businessName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Industry / Sector *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. FinTech, Hospitality, Architecture"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                      />
                      {errors.industry && <p className="text-xs text-red-400 mt-1">{errors.industry}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Business Description *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what your business offers, your primary customers, and what makes you distinctive."
                      value={formData.businessDescription}
                      onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                    />
                    {errors.businessDescription && <p className="text-xs text-red-400 mt-1">{errors.businessDescription}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Existing Website (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="https://example.com"
                        value={formData.existingWebsite}
                        onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Social Media / Instagram (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="@yourhandle"
                        value={formData.socialLinks}
                        onChange={(e) => setFormData({ ...formData, socialLinks: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: What are you looking for? */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      What are you looking for?
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Define the goals, required pages, and features for this build.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Primary Website Goal *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Generate high-ticket client inquiries, sell DTC products, build trust with investors"
                      value={formData.websiteGoals}
                      onChange={(e) => setFormData({ ...formData, websiteGoals: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                    />
                    {errors.websiteGoals && <p className="text-xs text-red-400 mt-1">{errors.websiteGoals}</p>}
                  </div>

                  {/* Required Pages Chips */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Select Required Pages
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {commonPages.map((page) => {
                        const isSelected = formData.requiredPages.includes(page);
                        return (
                          <button
                            type="button"
                            key={page}
                            onClick={() => togglePageSelection(page)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-cyber-cyan text-obsidian-950 font-semibold shadow-glow-cyan/20'
                                : 'bg-obsidian-950 text-slate-400 border border-white/10 hover:border-white/20'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                            <span>{page}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Desired Features */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Desired Features & Automations
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {commonFeatures.map((feat) => {
                        const isSelected = formData.desiredFeatures.includes(feat);
                        return (
                          <button
                            type="button"
                            key={feat}
                            onClick={() => toggleFeatureSelection(feat)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-cyber-violet text-white font-semibold'
                                : 'bg-obsidian-950 text-slate-400 border border-white/10 hover:border-white/20'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                            <span>{feat}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Websites you admire / Design references (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. apple.com, stripe.com, linear.app"
                      value={formData.likedWebsites}
                      onChange={(e) => setFormData({ ...formData, likedWebsites: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Budget & Timeline */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      Budget & Timeline
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Choose realistic ranges to help us tailor the engineering scope.
                    </p>
                  </div>

                  {/* Budget Ranges */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-3">
                      Estimated Investment Range *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { title: '$1,500 - $3,500', tier: 'Starter Launch', desc: 'Single-page landing or streamlined business presence' },
                        { title: '$3,500 - $7,500', tier: 'Growth Flagship', desc: 'Multi-page custom design system, CMS & automations' },
                        { title: '$7,500 - $15,000+', tier: 'Enterprise / Store', desc: 'Complex portals, headless e-commerce & high scale' },
                        { title: 'Undetermined', tier: 'Custom Consultation', desc: 'Scope to be determined following architecture review' }
                      ].map((b) => {
                        const isSelected = formData.budgetRange.includes(b.title);
                        return (
                          <div
                            key={b.title}
                            onClick={() => setFormData({ ...formData, budgetRange: `${b.title} (${b.tier})` })}
                            className={`p-4 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-cyber-cyan/15 border-cyber-cyan text-white shadow-glow-cyan/20'
                                : 'bg-obsidian-950 border-white/10 text-slate-400 hover:border-cyber-cyan/30'
                            }`}
                          >
                            <div className="font-bold text-sm text-white">{b.title}</div>
                            <div className="text-xs text-cyber-cyan font-mono">{b.tier}</div>
                            <div className="text-[11px] text-slate-500 mt-1">{b.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-3">
                      Desired Timeline
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        'Urgent (< 2 Weeks)',
                        '3 - 4 Weeks (Standard)',
                        'Flexible (1 - 2 Months)'
                      ].map((t) => {
                        const isSelected = formData.timeline === t;
                        return (
                          <div
                            key={t}
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            className={`p-3 rounded-xl border text-center transition-all cursor-pointer text-xs font-mono ${
                              isSelected
                                ? 'bg-cyber-violet/20 border-cyber-violet text-white'
                                : 'bg-obsidian-950 border-white/10 text-slate-400 hover:border-white/20'
                            }`}
                          >
                            {t}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Contact Information */}
              {step === 5 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">
                      Contact Information
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Where should the WebX team send your architecture breakdown & quote?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Samuel Okafor"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                      />
                      {errors.contactName && <p className="text-xs text-red-400 mt-1">{errors.contactName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="samuel@company.com"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                      />
                      {errors.contactEmail && <p className="text-xs text-red-400 mt-1">{errors.contactEmail}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                      />
                      {errors.contactPhone && <p className="text-xs text-red-400 mt-1">{errors.contactPhone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Company / Entity Name
                      </label>
                      <input
                        type="text"
                        placeholder="Official company name"
                        value={formData.companyName || formData.businessName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-cyber-cyan focus:outline-none text-sm text-white placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 text-xs text-slate-400 space-y-1">
                    <div className="text-slate-200 font-semibold font-mono">🔒 WebX Privacy Protocol:</div>
                    <div>Your details are never shared or sold. We strictly communicate regarding your digital build scope.</div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer Action Controls */}
        {!isSubmitted && (
          <div className="p-6 border-t border-white/10 bg-obsidian-950 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="px-7 py-3 rounded-xl bg-cyber-cyan text-obsidian-950 font-semibold text-xs hover:bg-white transition-all shadow-glow-cyan flex items-center gap-2"
            >
              <span>{step === totalSteps ? 'Submit Application' : 'Continue'}</span>
              {step === totalSteps ? (
                <Send className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
