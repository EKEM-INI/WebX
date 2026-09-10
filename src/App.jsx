import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { TopLoadingBar } from './components/common/TopLoadingBar';

// Distinct Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { WhyWebXPage } from './pages/WhyWebXPage';
import { ProcessPage } from './pages/ProcessPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ClientsPage } from './pages/ClientsPage';
import { IwajuPage } from './pages/IwajuPage';
import { ApplyPage } from './pages/ApplyPage';

// Modals
import { CaseStudyModal } from './components/portfolio/CaseStudyModal';
import { AdminDrawer } from './components/admin/AdminDrawer';

export function App() {
  const { currentPage } = useApp();

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-cyber-cyan selection:text-obsidian-950 relative">
      {/* Top Page Loading Bar */}
      <TopLoadingBar />

      {/* Top Subtle Status Announcement */}
      <div className="bg-obsidian-950/90 border-b border-white/[0.05] py-1.5 px-4 text-center text-[10px] font-mono text-slate-400 flex items-center justify-center gap-2 z-40">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
        <span className="text-slate-300 font-medium">WebX by Iwaju</span>
        <span className="text-slate-600">•</span>
        <span>Digital Infrastructure for Africa & Global Enterprise</span>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <span className="text-slate-400 hidden sm:inline">Now Taking Q3/Q4 2026 Commissions</span>
      </div>

      {/* Main Glass Navigation */}
      <Navbar />

      {/* Distinct Loaded Page View */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'why-webx' && <WhyWebXPage />}
        {currentPage === 'process' && <ProcessPage />}
        {currentPage === 'technology' && <TechnologyPage />}
        {currentPage === 'clients' && <ClientsPage />}
        {currentPage === 'about-iwaju' && <IwajuPage />}
        {currentPage === 'apply' && <ApplyPage />}
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Global Case Study Modal & CMS Admin Drawer */}
      <CaseStudyModal />
      <AdminDrawer />
    </div>
  );
}

export default App;
