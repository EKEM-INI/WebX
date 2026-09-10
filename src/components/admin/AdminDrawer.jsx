import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Terminal,
  Database,
  Inbox,
  BarChart,
  PlusCircle,
  Download,
  RotateCcw,
  CheckCircle2,
  Trash2,
  ExternalLink,
  MessageSquare,
  Layers
} from 'lucide-react';

export const AdminDrawer = () => {
  const {
    isAdminDrawerOpen,
    toggleAdmin,
    metrics,
    updateMetricValue,
    projects,
    addNewProject,
    testimonials,
    applications,
    resetCmsToDefault
  } = useApp();

  const [activeTab, setActiveTab] = useState('applications'); // 'applications' | 'metrics' | 'add-project' | 'export'

  // New Project Form state
  const [newProj, setNewProj] = useState({
    title: '',
    slug: '',
    category: 'Business',
    client: '',
    industry: '',
    year: '2026',
    shortDesc: '',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    overview: '',
    challenge: '',
    whatWebXBuilt: '',
    servicesProvided: ['Custom Web Architecture', 'UI/UX Design'],
    technologies: ['React', 'Tailwind CSS', 'Edge CDN'],
    keyFeatures: ['Sub-second page load', 'Responsive mobile layout'],
    verifiedOutcome: '100% verified production launch'
  });

  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!isAdminDrawerOpen) return null;

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!newProj.title || !newProj.client) return;

    const created = {
      ...newProj,
      id: `proj-${Date.now()}`,
      slug: newProj.slug || newProj.title.toLowerCase().replace(/\s+/g, '-'),
      stats: {
        metric1: '0.4s',
        label1: 'Load Time',
        metric2: '100%',
        label2: 'Mobile Score',
        metric3: '2026',
        label3: 'Launch Year'
      }
    };

    addNewProject(created);
    alert(`Project "${newProj.title}" added to WebX portfolio live!`);
    setNewProj({
      title: '',
      slug: '',
      category: 'Business',
      client: '',
      industry: '',
      year: '2026',
      shortDesc: '',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      overview: '',
      challenge: '',
      whatWebXBuilt: '',
      servicesProvided: ['Custom Web Architecture', 'UI/UX Design'],
      technologies: ['React', 'Tailwind CSS', 'Edge CDN'],
      keyFeatures: ['Sub-second page load', 'Responsive mobile layout'],
      verifiedOutcome: '100% verified production launch'
    });
  };

  const handleExportJson = () => {
    const exportData = {
      metrics,
      projects,
      testimonials,
      applications
    };
    const jsonStr = JSON.stringify(exportData, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-obsidian-950/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl h-full bg-obsidian-900 border-l border-white/10 shadow-2xl flex flex-col text-slate-100">
        
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-obsidian-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-obsidian-850 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan font-mono text-xs">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                WebX Administration & CMS
              </div>
              <div className="text-sm font-bold font-display text-white">
                Content & Application Control
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleAdmin}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 py-2.5 bg-obsidian-950/50 border-b border-white/5 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'applications'
                ? 'bg-cyber-cyan text-obsidian-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Applications ({applications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'metrics'
                ? 'bg-cyber-cyan text-obsidian-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart className="w-3.5 h-3.5" />
            <span>Metrics</span>
          </button>

          <button
            onClick={() => setActiveTab('add-project')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'add-project'
                ? 'bg-cyber-cyan text-obsidian-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Project</span>
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              activeTab === 'export'
                ? 'bg-cyber-cyan text-obsidian-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CMS</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: APPLICATIONS INBOX */}
          {activeTab === 'applications' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    Incoming Client Build Requests
                  </h4>
                  <p className="text-xs text-slate-400">
                    Client applications submitted through the multi-step intake flow.
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-obsidian-950 border border-cyber-cyan/30 text-cyber-cyan">
                  {applications.length} Received
                </span>
              </div>

              {applications.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-obsidian-950 border border-white/5 text-slate-500 text-xs font-mono">
                  No submissions yet. Test submitting through the application form!
                </div>
              ) : (
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-xl bg-obsidian-950 border border-white/10 space-y-3 text-xs"
                    >
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="font-mono font-bold text-cyber-cyan">{app.id}</span>
                        <span className="text-[10px] font-mono text-slate-500">{app.date}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-slate-300">
                        <div>
                          <span className="text-slate-500 font-mono">Client: </span>
                          <span className="font-semibold text-white">{app.contactName}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 font-mono">Service: </span>
                          <span className="text-cyber-cyan">{app.serviceNeeded}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 font-mono">Company: </span>
                          <span>{app.businessName || app.companyName}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 font-mono">Budget: </span>
                          <span>{app.budgetRange || app.budget || 'Standard'}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-slate-400 font-mono text-[11px]">
                        <span>{app.contactEmail}</span>
                        <span>{app.contactPhone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: METRICS EDITOR */}
          {activeTab === 'metrics' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  Live Credibility Metrics Configuration
                </h4>
                <p className="text-xs text-slate-400">
                  Update your verified metrics. Values will reflect in real-time on the live website.
                </p>
              </div>

              <div className="space-y-3">
                {metrics.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200">{m.label}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{m.subtext}</div>
                    </div>

                    <div className="w-28">
                      <input
                        type="text"
                        value={m.value}
                        onChange={(e) => updateMetricValue(m.id, e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-obsidian-900 border border-cyber-cyan/40 text-cyber-cyan font-bold font-mono text-center focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={resetCmsToDefault}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-red-400 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Defaults</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: ADD NEW PROJECT */}
          {activeTab === 'add-project' && (
            <form onSubmit={handleCreateProject} className="space-y-4 text-xs">
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  Add Website to Portfolio
                </h4>
                <p className="text-xs text-slate-400">
                  Dynamically adds a new project to the portfolio without modifying source files.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-slate-400 mb-1">Project Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zenith Tower"
                    value={newProj.title}
                    onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-obsidian-950 border border-white/10 text-white focus:border-cyber-cyan focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-slate-400 mb-1">Client *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zenith Group"
                    value={newProj.client}
                    onChange={(e) => setNewProj({ ...newProj, client: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-obsidian-950 border border-white/10 text-white focus:border-cyber-cyan focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-slate-400 mb-1">Category *</label>
                  <select
                    value={newProj.category}
                    onChange={(e) => setNewProj({ ...newProj, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-obsidian-950 border border-white/10 text-white focus:border-cyber-cyan focus:outline-none"
                  >
                    <option value="Business">Business</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Creative">Creative</option>
                    <option value="Professional">Professional</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-slate-400 mb-1">Industry</label>
                  <input
                    type="text"
                    placeholder="e.g. Real Estate & Development"
                    value={newProj.industry}
                    onChange={(e) => setNewProj({ ...newProj, industry: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-obsidian-950 border border-white/10 text-white focus:border-cyber-cyan focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-slate-400 mb-1">Short Description</label>
                <input
                  type="text"
                  placeholder="One sentence description for portfolio cards"
                  value={newProj.shortDesc}
                  onChange={(e) => setNewProj({ ...newProj, shortDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-obsidian-950 border border-white/10 text-white focus:border-cyber-cyan focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-400 mb-1">Image URL (Unsplash or CDN)</label>
                <input
                  type="text"
                  value={newProj.heroImage}
                  onChange={(e) => setNewProj({ ...newProj, heroImage: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-obsidian-950 border border-white/10 text-white focus:border-cyber-cyan focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block font-mono text-slate-400 mb-1">Case Study: Challenge & Solution</label>
                <textarea
                  rows={2}
                  placeholder="What was the client challenge and what did WebX engineer?"
                  value={newProj.challenge}
                  onChange={(e) => setNewProj({ ...newProj, challenge: e.target.value, overview: e.target.value, whatWebXBuilt: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-obsidian-950 border border-white/10 text-white focus:border-cyber-cyan focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyber-cyan text-obsidian-950 font-bold hover:bg-white transition-all shadow-glow-cyan"
              >
                Add Project to Live Portfolio →
              </button>
            </form>
          )}

          {/* TAB 4: EXPORT CMS */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  Export CMS & Submissions
                </h4>
                <p className="text-xs text-slate-400">
                  Export all updated site data as a JSON file or copy to clipboard for deployment to production.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/10 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Current Payload:</span>
                  <span className="text-cyber-cyan">
                    {projects.length} Projects • {metrics.length} Metrics • {applications.length} Submissions
                  </span>
                </div>

                <button
                  onClick={handleExportJson}
                  className="w-full py-3 rounded-xl bg-cyber-cyan text-obsidian-950 font-bold hover:bg-white transition-all shadow-glow-cyan flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>{copiedNotification ? 'Copied to Clipboard!' : 'Copy CMS JSON to Clipboard'}</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
