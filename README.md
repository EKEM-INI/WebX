# WebX by Iwaju — Digital Infrastructure for What's Next

> **We build the digital presence your business deserves.**
> Modern websites, high-converting online stores, and intelligent digital infrastructure engineered for ambitious businesses.

---

## ⚡ Overview

WebX is a modern website development and automation company under **Iwaju**. WebX builds digital infrastructure for businesses across Africa and globally, combining modern web development, intelligent automation, design systems, and commercial thinking.

This codebase delivers a futuristic, high-contrast, obsidian dark-themed digital flagship featuring an interactive canvas infrastructure visualizer, responsive showcase portfolio with full case studies and device mockups, a 5-step client intake application flow, and an embedded CMS Administration Drawer.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Development
```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev
```

### Production Build
```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Architectural & Design Highlights

1. **Obsidian & Cyber Glow Aesthetic**:
   - Deep obsidian dark interface (`#030508`, `#060910`, `#0d1320`).
   - Cyan (`#00F0FF`) & Violet (`#818CF8`) accents with soft radial glow fields and glassmorphism (`backdrop-blur-xl`).
   - Tactile typography using *Space Grotesk*, *Plus Jakarta Sans*, and *JetBrains Mono*.

2. **Interactive Real-Time Infrastructure Canvas**:
   - Custom lightweight HTML5 canvas (`src/components/hero/NetworkCanvas.jsx`) rendering node constellations, data packets, and cursor-reactive connections.

3. **Curated Showcase Portfolio & Case Study Engine**:
   - Filterable portfolio: `All`, `Business`, `E-commerce`, `Restaurant`, `Creative`, `Professional`, `Other`.
   - Comprehensive **Case Study Modal** with live viewport toggle (Desktop browser frame vs. Mobile phone mockup), client profiles, challenges, WebX build specs, technologies used, and verified conversion metrics.

4. **Multi-Step Website & Store Application Flow**:
   - 5-step guided intake wizard:
     - **Step 1**: Project Type (Business Website, Online Store, Landing Page, Redesign, Portals, Not Sure)
     - **Step 2**: Business Profile (Name, industry, description, existing links)
     - **Step 3**: Goals & Features (Objectives, pages checklist, desired automations, design references)
     - **Step 4**: Budget & Timeline (Pre-set investment brackets & turnaround ranges)
     - **Step 5**: Contact Information (Full name, work email, WhatsApp/phone, company)
   - Real-time step validation, persistent progress indicator, and polished confirmation screen with unique Application Reference ID (`APP-XXXX`).

5. **Decoupled CMS Data Architecture & Live Admin Console**:
   - `src/data/cmsData.js`: Centralized data store for all credibility metrics, portfolio projects, services, testimonials, and Iwaju parentage copy.
   - **Embedded WebX Admin Drawer**: Accessible via top navbar/footer terminal icon or keyboard shortcut `Alt + A`. Allows the team to:
     - View all submitted client applications in real time.
     - Dynamically update credibility metrics (e.g. 100+ -> 150+).
     - Add new portfolio projects without touching source files.
     - Export full CMS state as JSON.

---

## 📁 Project Structure

```
WEBX/
├── index.html                   # High-res SEO, Open Graph & typography preloads
├── package.json                 # Dependencies (React 18, Tailwind CSS, Lucide Icons, Vite)
├── vite.config.js               # Fast HMR Vite server configuration
├── tailwind.config.js           # Custom colors, glows, animations & typography
├── postcss.config.js            # PostCSS processing
├── src/
│   ├── main.jsx                 # Bootstrap entrypoint with AppProvider
│   ├── index.css                # Base directives, high-tech scrollbars, glass utilities
│   ├── App.jsx                  # Main page layout & modal coordinator
│   ├── context/
│   │   └── AppContext.jsx       # State management for modals, CMS updates, applications
│   ├── data/
│   │   └── cmsData.js           # Centralized CMS store
│   └── components/
│       ├── common/
│       │   ├── Navbar.jsx       # Sticky glass navbar with mobile drawer
│       │   ├── Footer.jsx       # Complete footer with copyright 2026, social links
│       │   ├── Badge.jsx        # "Powered by Iwaju" & section status badges
│       │   └── GlassCard.jsx    # Futuristic glass card container
│       ├── hero/
│       │   ├── Hero.jsx         # Hero headline, dual CTAs, live deploy pipeline
│       │   └── NetworkCanvas.jsx# Cursor-interactive node canvas
│       ├── trust/
│       │   └── TrustCredibility.jsx # Built on Experience, verified metrics grid
│       ├── services/
│       │   ├── Services.jsx     # What We Build section
│       │   └── ServiceCard.jsx  # Interactive service cards with deliverables
│       ├── portfolio/
│       │   ├── Portfolio.jsx    # Category-filtered work showcase
│       │   ├── ProjectCard.jsx  # Rich project card with hover zooms
│       │   └── CaseStudyModal.jsx # Full case study with Desktop/Mobile toggle
│       ├── why/
│       │   └── WhyWebX.jsx      # 6 core competitive advantage blocks
│       ├── process/
│       │   └── ProcessTimeline.jsx # 5-step interactive delivery pipeline
│       ├── application/
│       │   ├── ApplicationSection.jsx # Dual CTA section (Website / Store)
│       │   └── MultiStepModal.jsx # 5-step interactive wizard & confirmation
│       ├── iwaju/
│       │   ├── IwajuSection.jsx # WebX is Built by Iwaju feature
│       │   └── IwajuModal.jsx   # Iwaju parent company overview
│       ├── tech/
│       │   └── AiTechSection.jsx# 6-pillar tech radar (AI, Code, Design, etc.)
│       ├── clients/
│       │   └── ClientTypes.jsx  # 10 business sector tailored solutions
│       ├── testimonials/
│       │   └── Testimonials.jsx # Verified client feedback & CMS placeholders
│       ├── cta/
│       │   └── FinalCta.jsx     # Dramatic closing hero with dual CTA
│       └── admin/
│           └── AdminDrawer.jsx  # CMS management & applications viewer
```

---

## 🛡️ License & Parentage

© 2026 WebX by Iwaju. All rights reserved.  
Part of the **Iwaju** digital infrastructure ecosystem.
