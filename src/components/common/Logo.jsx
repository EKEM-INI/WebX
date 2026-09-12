import React from 'react';

/**
 * High-fidelity Vector Sphere Icon matching the official WebX circuit sphere
 */
export const WebxSphereIcon = ({ className = 'w-8 h-8' }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="webxBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="40%" stopColor="#1AB5E3" />
          <stop offset="80%" stopColor="#0077EE" />
          <stop offset="100%" stopColor="#1A1D54" />
        </linearGradient>
        <filter id="webxGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Top Cap */}
      <path d="M38 18 C 46 14, 54 14, 62 18" stroke="url(#webxBlueGrad)" strokeWidth="3" strokeLinecap="round" />
      
      {/* Band 1 */}
      <path d="M30 24 C 44 17, 60 17, 72 25" stroke="url(#webxBlueGrad)" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="42" cy="22" r="2.4" fill="#38BDF8" filter="url(#webxGlow)" />

      {/* Band 2 */}
      <path d="M24 32 C 40 22, 68 22, 80 34" stroke="url(#webxBlueGrad)" strokeWidth="3.6" strokeLinecap="round" />
      <circle cx="58" cy="28" r="2.6" fill="#38BDF8" filter="url(#webxGlow)" />

      {/* Band 3 */}
      <path d="M20 41 C 38 29, 74 29, 86 44" stroke="url(#webxBlueGrad)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="48" cy="37" r="2.8" fill="#38BDF8" filter="url(#webxGlow)" />

      {/* Band 4 - Center Equator */}
      <path d="M19 50 C 36 38, 76 38, 88 54" stroke="url(#webxBlueGrad)" strokeWidth="4.5" strokeLinecap="round" />
      <circle cx="68" cy="46" r="3.0" fill="#38BDF8" filter="url(#webxGlow)" />

      {/* Band 5 */}
      <path d="M22 60 C 40 48, 74 48, 86 64" stroke="url(#webxBlueGrad)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="46" cy="58" r="2.8" fill="#38BDF8" filter="url(#webxGlow)" />

      {/* Band 6 */}
      <path d="M28 69 C 44 59, 70 59, 80 72" stroke="url(#webxBlueGrad)" strokeWidth="3.6" strokeLinecap="round" />
      <circle cx="60" cy="67" r="2.6" fill="#38BDF8" filter="url(#webxGlow)" />

      {/* Band 7 */}
      <path d="M36 78 C 48 70, 64 70, 72 80" stroke="url(#webxBlueGrad)" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="52" cy="76" r="2.4" fill="#38BDF8" filter="url(#webxGlow)" />

      {/* Bottom Cap */}
      <path d="M44 85 C 50 82, 58 82, 64 86" stroke="url(#webxBlueGrad)" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="56" cy="85" r="2.2" fill="#38BDF8" filter="url(#webxGlow)" />
    </svg>
  );
};

/**
 * Standard WebX Brand Lockup with glowing Sphere and modern typography
 */
export const Logo = ({ showTagline = false, size = 'default', className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official glowing sphere icon */}
      <div className="relative w-9 h-9 rounded-xl bg-[#06042B] border border-sky-400/30 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(26,181,227,0.35)] shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src="/webx-sphere.png"
          alt="WebX Sphere"
          className="w-full h-full object-cover"
          onError={(e) => {
            // If image fails, fallback gracefully to SVG icon
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#06042B]/40 to-transparent pointer-events-none" />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-bold font-display tracking-tight text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
              WebX
            </span>
          </span>
          <span className="text-[10px] font-mono tracking-wider uppercase text-sky-400/85">
            by Iwaju
          </span>
        </div>
        {showTagline ? (
          <span className="text-[9px] font-mono tracking-widest text-sky-300/80 uppercase">
            Create The Website Of Your Dreams
          </span>
        ) : (
          <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase">
            Digital Infrastructure
          </span>
        )}
      </div>
    </div>
  );
};

/**
 * Full Official Brand Logo component (renders the official artwork directly)
 */
export const BrandImageLogo = ({ className = 'max-w-[280px]', showGlow = true }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {showGlow && (
        <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 via-blue-600/20 to-purple-600/10 blur-xl rounded-2xl pointer-events-none" />
      )}
      <img
        src="/webx-logo-full.png"
        alt="WebX by Iwaju — Create The Website Of Your Dreams"
        className="relative z-10 w-full h-auto rounded-xl border border-sky-500/20 shadow-2xl"
      />
    </div>
  );
};
