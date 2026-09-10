import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { SectionTabBar } from './components/common/SectionTabBar';
import { Hero } from './components/hero/Hero';
import { TrustCredibility } from './components/trust/TrustCredibility';
import { Services } from './components/services/Services';
import { Portfolio } from './components/portfolio/Portfolio';
import { WhyWebX } from './components/why/WhyWebX';
import { ProcessTimeline } from './components/process/ProcessTimeline';
import { ApplicationSection } from './components/application/ApplicationSection';
import { InlineApplicationPortal } from './components/application/InlineApplicationPortal';
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
  const { currentTab } = useApp();

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-cyber-cyan selection:text-obsidian-950 relative">
      {/* Top subtle status announcement */}
      <div className="bg-obsidian-950/90 border-b border-white/[0.05] py-1.5 px-4 text-center text-[10px] font-mono text-slate-400 flex items-center justify-center gap-2 z-50">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
        <span className="text-slate-300 font-medium">WebX by Iwaju</span>
        <span className="text-slate-600">•</span>
        <span>Digital Infrastructure for Africa & Global Enterprise</span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <span className="text-slate-400 hidden sm:inline">Now Taking Q3/Q4 2026 Commissions</span>
      </div>

      {/* Main Glass Navigation */}
      <Navbar />

      {/* Tabbed Content Router */}
      <main className="flex-1 pt-16">
        {/* OVERVIEW TAB (Flagship Walkthrough) */}
        {currentTab === 'overview' && (
          <div className="animate-fadeIn">
            <Hero />
            <SectionTabBar />
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
          </div>
        )}

        {/* WHAT WE BUILD TAB */}
        {currentTab === 'services' && (
          <div className="animate-fadeIn">
            <SectionTabBar />
            <Services />
            <ApplicationSection />
          </div>
        )}

        {/* SELECTED WORK TAB */}
        {currentTab === 'work' && (
          <div className="animate-fadeIn">
            <SectionTabBar />
            <Portfolio />
            <ApplicationSection />
          </div>
        )}

        {/* WHY WEBX TAB */}
        {currentTab === 'why' && (
          <div className="animate-fadeIn">
            <SectionTabBar />
            <WhyWebX />
            <TrustCredibility />
            <ApplicationSection />
          </div>
        )}

        {/* DELIVERY PROCESS TAB */}
        {currentTab === 'process' && (
          <div className="animate-fadeIn">
            <SectionTabBar />
            <ProcessTimeline />
            <ApplicationSection />
          </div>
        )}

        {/* AI + TECH RADAR TAB */}
        {currentTab === 'technology' && (
          <div className="animate-fadeIn">
            <SectionTabBar />
            <AiTechSection />
            <ApplicationSection />
          </div>
        )}

        {/* CLIENT SECTORS & TESTIMONIALS TAB */}
        {currentTab === 'clients' && (
          <div className="animate-fadeIn">
            <SectionTabBar />
            <ClientTypes />
            <Testimonials />
            <ApplicationSection />
          </div>
        )}

        {/* PARENT COMPANY IWAJU TAB */}
        {currentTab === 'iwaju' && (
          <div className="animate-fadeIn">
            <SectionTabBar />
            <IwajuSection />
            <ApplicationSection />
          </div>
        )}

        {/* DEDICATED INTAKE / APPLY TAB */}
        {currentTab === 'apply' && (
          <div className="animate-fadeIn">
            <SectionTabBar />
            <InlineApplicationPortal />
          </div>
        )}
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
