import React from 'react';
import { useApp } from '../../context/AppContext';
import { SectionBadge } from '../common/Badge';
import { Quote, CheckCircle, PlusCircle, Terminal } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials, toggleAdmin } = useApp();

  return (
    <section className="relative py-28 bg-obsidian-950 border-t border-white/5 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[32rem] h-[32rem] bg-cyber-cyan/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionBadge color="cyan">
            Client Verification
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            DON'T TAKE OUR WORD FOR IT.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Direct feedback from founders, managing partners, and brand leaders who commissioned their digital presence with WebX by Iwaju.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className={`relative p-7 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-xl ${
                test.isPlaceholder
                  ? 'bg-obsidian-950/40 border-dashed border-white/10 hover:border-cyber-cyan/40'
                  : 'bg-obsidian-900/70 border-white/10 hover:border-cyber-cyan/30'
              }`}
            >
              <div>
                {/* Quote Icon & Verification Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-white/5 flex items-center justify-center text-cyber-cyan">
                    <Quote className="w-5 h-5" />
                  </div>

                  {test.verified ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified Client</span>
                    </span>
                  ) : (
                    <button
                      onClick={toggleAdmin}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 hover:bg-amber-500/20 transition-colors"
                    >
                      <PlusCircle className="w-3 h-3" />
                      <span>CMS Slot [Edit in Admin]</span>
                    </button>
                  )}
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white font-display">
                    {test.clientName}
                  </div>
                  <div className="text-xs text-slate-400">
                    {test.role}, <span className="text-cyber-cyan">{test.business}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-950 text-slate-500 border border-white/5">
                  {test.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CMS Data Note */}
        <div className="mt-10 text-center">
          <button
            onClick={toggleAdmin}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyber-cyan transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Click to manage client testimonials in WebX CMS Console</span>
          </button>
        </div>

      </div>
    </section>
  );
};
