import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Layers,
  Globe,
  GitBranch,
  Cpu,
  Building2,
  Compass,
  Send
} from 'lucide-react';

export const SectionTabBar = ({ className = '' }) => {
  const { currentTab, setTab } = useApp();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'services', label: 'What We Build', icon: Layers },
    { id: 'work', label: 'Selected Work', icon: Globe },
    { id: 'why', label: 'Why WebX', icon: null },
    { id: 'process', label: 'Delivery Process', icon: GitBranch },
    { id: 'technology', label: 'AI + Tech', icon: Cpu },
    { id: 'clients', label: 'Client Sectors', icon: Building2 },
    { id: 'iwaju', label: 'Parent: Iwaju', icon: Compass },
    { id: 'apply', label: 'Apply / Intake', icon: Send }
  ];

  return (
    <div className={`sticky top-16 z-30 py-2.5 bg-obsidian-950/80 backdrop-blur-xl border-y border-white/[0.06] transition-all ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-white text-obsidian-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {Icon && (
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-obsidian-950' : 'text-slate-500'}`} />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
