import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/hero/Hero';
import { TrustCredibility } from './components/trust/TrustCredibility';
import { Services } from './components/services/Services';
import { Portfolio } from './components/portfolio/Portfolio';
import { WhyWebX } from './components/why/WhyWebX';
import { ProcessTimeline } from './components/process/ProcessTimeline';
import { ApplicationSection } from './components/application/ApplicationSection';
import { IwajuSection } from './components/iwaju/IwajuSection';
import { AiTechSection } from './components/tech/AiTechSection';
import { ClientTypes } from './components/clients/ClientTypes';
import { Testimonials } from './components/testimonials/Testimonials';
import { FinalCta } from './components/cta/FinalCta';
import { Footer } from './components/common/Footer';

// Modals and drawers
import { MultiStepModal } from './components/application/MultiStepModal';
import { CaseStudyModal } from './components/portfolio/CaseStudyModal';
import { IwajuModal } from './components/iwaju/IwajuModal';
import { AdminDrawer } from './components/admin/AdminDrawer';

export function App() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-cyber-cyan selection:text-obsidian-950 relative">
      {/* Top sticky announcement / status pill bar */}
      <div className="bg-obsidian-900/90 border-b border-white/5 py-1.5 px-4 text-center text-[11px] font-mono text-slate-400 flex items-center justify-center gap-2 z-50">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
        <span className="text-slate-300 font-medium">WebX by Iwaju</span>
        <span className="text-slate-600">•</span>
        <span>Digital Infrastructure for Africa & Global Enterprise</span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <span className="text-cyber-cyan hidden sm:inline">Now Taking Q3/Q4 2026 Commissions</span>
      </div>

      {/* Main Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main className="flex-1">
        <Hero />
        <TrustCredibility />
        <Services />
        <Portfolio />
        <WhyWebX />
        <ProcessTimeline />
        <ApplicationSection />
        <IwajuSection />
        <AiTechSection />
        <ClientTypes />
        <Testimonials />
        <FinalCta />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <MultiStepModal />
      <CaseStudyModal />
      <IwajuModal />
      <AdminDrawer />
    </div>
  );
}

export default App;
