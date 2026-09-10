import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Globe2, Layers, Cpu, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const IwajuModal = () => {
  const { isIwajuModalOpen, closeIwaju } = useApp();

  if (!isIwajuModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-obsidian-950/90 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-2xl my-auto rounded-3xl bg-obsidian-900 border border-cyber-violet/30 shadow-2xl overflow-hidden text-slate-100 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-obsidian-950/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyber-violet/20 border border-cyber-violet/40 flex items-center justify-center text-cyber-violet font-bold text-xs">
              IW
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Parent Company Overview
              </div>
              <div className="text-sm font-bold font-display text-white">
                About Iwaju
              </div>
            </div>
          </div>

          <button
            onClick={closeIwaju}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold font-display text-white">
              Building the Infrastructure for Africa's Next Generation.
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Iwaju is a pan-African technology group dedicated to accelerating commercial infrastructure across emerging markets. From modern web development and automation engines to enterprise telemetry and financial technology, Iwaju equips forward-looking enterprises with the tools to compete globally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 space-y-1.5">
              <div className="text-xs font-mono uppercase text-cyber-cyan font-semibold">WebX by Iwaju</div>
              <div className="text-xs text-slate-400">Digital presence, high-converting websites, online stores and web automations.</div>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 space-y-1.5">
              <div className="text-xs font-mono uppercase text-cyber-violet font-semibold">Iwaju Core</div>
              <div className="text-xs text-slate-400">Commercial infrastructure, technical architecture and capital deployment.</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-950/60 border border-white/5 text-xs font-mono text-slate-400 space-y-1">
            <div className="text-slate-200">Headquarters: Lagos, Nigeria • Nairobi, Kenya</div>
            <div>Mission: Powering 10,000+ businesses with world-class digital systems.</div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={closeIwaju}
              className="px-6 py-2.5 rounded-xl bg-cyber-violet text-white text-xs font-semibold hover:bg-white hover:text-obsidian-950 transition-colors"
            >
              Close Overview
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
