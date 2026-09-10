/**
 * WEBX BY IWAJU — Centralized Content Management System (CMS) Data Store
 * All portfolio items, credibility metrics, services, testimonials, and brand configurations
 * are managed here so non-technical team members or CMS systems can update content easily.
 */

export const BRAND_CONFIG = {
  name: "WebX",
  parentCompany: "Iwaju",
  brandFormat: "WebX by Iwaju",
  headline: "WE BUILD THE WEB FOR WHAT'S NEXT.",
  supportingText: "WebX by Iwaju creates modern websites and online stores designed to help businesses look better, operate better, and grow online.",
  positioning: "We build the digital presence your business deserves.",
  tagline: "Modern websites. Smarter digital experiences.",
  poweredBadge: "Powered by Iwaju",
  foundedYear: 2020,
  copyrightYear: 2026,
  contactEmail: "build@webx.iwaju.africa",
  supportPhone: "+234 (0) 800 WEBX IWAJU",
  location: "Lagos • Nairobi • Global Delivery",
  socials: {
    x: "https://x.com/webx_iwaju",
    instagram: "https://instagram.com/webx_iwaju",
    linkedin: "https://linkedin.com/company/webx-iwaju",
    github: "https://github.com/iwaju"
  }
};

export const CREDIBILITY_METRICS = [
  {
    id: "metric-1",
    value: "100+",
    label: "Digital Experiences Created",
    subtext: "Engineered from scratch for ambitious founders & global brands",
    verified: true
  },
  {
    id: "metric-2",
    value: "50+",
    label: "Businesses Served",
    subtext: "Across retail, financial services, hospitality & modern tech",
    verified: true
  },
  {
    id: "metric-3",
    value: "5+",
    label: "Core Industries",
    subtext: "Deep domain understanding for specialized market conversion",
    verified: true
  },
  {
    id: "metric-4",
    value: "6+",
    label: "Years of Digital Experience",
    subtext: "Backed by the technical leadership and infrastructure of Iwaju",
    verified: true
  }
];

export const TRUST_STATEMENT = {
  badge: "Built on Experience. Designed for the Future.",
  headline: "BUILT ON EXPERIENCE. DESIGNED FOR THE FUTURE.",
  lead: "WebX is backed by Iwaju and combines modern web development, automation, design, technology, and business thinking.",
  quote: "We don't just build websites. We build digital experiences around businesses."
};

export const SERVICES = [
  {
    id: "01",
    key: "business-websites",
    title: "Business Websites",
    headline: "01 — Business Websites",
    shortDesc: "Professional websites designed around the business, brand, audience, and goals.",
    fullDesc: "Bespoke digital flagships built to establish market authority, communicate value propositions with razor clarity, and convert high-intent prospects into paying clients.",
    deliverables: [
      "Custom UI/UX Design System",
      "Sub-second page load performance",
      "Interactive product/service showpieces",
      "Technical SEO & Open Graph optimization",
      "Seamless lead routing & CRM capture"
    ],
    techStack: ["Next.js / React", "Tailwind CSS", "Edge CDN", "Semantic SEO"],
    timeline: "2 - 3 Weeks",
    badge: "Core Flagship"
  },
  {
    id: "02",
    key: "online-stores",
    title: "Online Stores",
    headline: "02 — Online Stores",
    shortDesc: "Modern e-commerce experiences that allow businesses to showcase products and sell online.",
    fullDesc: "Frictionless transactional platforms engineered for conversion. Features instant search, multi-currency checkout, dynamic inventory sync, and mobile-optimized payment flows.",
    deliverables: [
      "High-converting 1-click checkout flows",
      "Local & international payment gateways (Paystack, Flutterwave, Stripe)",
      "Automated WhatsApp & Email order notifications",
      "Inventory & SKU management dashboard",
      "Abandoned cart recovery automation"
    ],
    techStack: ["Shopify Plus / Headless Commerce", "Stripe / Paystack", "Algolia Search"],
    timeline: "3 - 4 Weeks",
    badge: "Revenue Engine"
  },
  {
    id: "03",
    key: "website-redesigns",
    title: "Website Redesigns",
    headline: "03 — Website Redesigns",
    shortDesc: "Transform outdated websites into modern, responsive, high-performing experiences.",
    fullDesc: "We dismantle slow, clunky, template-locked websites and rebuild them into lightning-fast, high-converting digital assets that reflect your business's modern stature.",
    deliverables: [
      "Full UX audit & bounce rate mitigation",
      "Modern dark/light glassmorphic aesthetics",
      "Zero-downtime database & content migration",
      "Core Web Vitals 95+ score guarantee",
      "Responsive overhaul for mobile & tablet"
    ],
    techStack: ["Architecture Migration", "Lighthouse 95+", "Clean Modern CSS"],
    timeline: "2 - 3 Weeks",
    badge: "Upgrade"
  },
  {
    id: "04",
    key: "landing-pages",
    title: "Landing Pages",
    headline: "04 — Landing Pages",
    shortDesc: "Focused pages designed for campaigns, products, services, launches, and conversions.",
    fullDesc: "Laser-targeted conversion engines built for ad campaigns, product rollouts, waitlists, and funding announcements. Engineered around behavioral psychology and direct action.",
    deliverables: [
      "Persuasive narrative structure & copywriting support",
      "A/B test ready micro-animations",
      "Interactive ROI calculators or demo previews",
      "Meta Pixel & Google Analytics 4 tracking pre-wired",
      "Instant form capture with instant webhook dispatch"
    ],
    techStack: ["React", "Motion Design", "Conversion Analytics", "Instant Webhooks"],
    timeline: "5 - 7 Days",
    badge: "High Conversion"
  },
  {
    id: "05",
    key: "business-portals",
    title: "Business Portals",
    headline: "05 — Business Portals",
    shortDesc: "Custom digital experiences designed around specific business workflows and customer needs.",
    fullDesc: "Secure client portals, vendor portals, and booking systems that automate client communications, invoice downloads, document signing, and operational bottlenecks.",
    deliverables: [
      "Role-based authentication & encrypted access",
      "Real-time client progress tracking dashboards",
      "Automated invoice & document generation",
      "Custom workflow APIs and third-party sync",
      "Self-service customer account center"
    ],
    techStack: ["Next.js", "Supabase / PostgreSQL", "Secure Auth", "REST / GraphQL"],
    timeline: "3 - 5 Weeks",
    badge: "Infrastructure"
  },
  {
    id: "06",
    key: "website-automation",
    title: "Website Automation",
    headline: "06 — Website Automation",
    shortDesc: "Use automation and AI where appropriate to make websites smarter, easier to manage, and more useful.",
    fullDesc: "Transform your website from a passive brochure into an active 24/7 sales agent. We embed intelligent lead qualification bots, calendar auto-booking, and automated follow-up pipelines.",
    deliverables: [
      "Custom AI assistants trained on your business documents",
      "Automated lead enrichment & Slack/WhatsApp alerts",
      "Calendar scheduling without back-and-forth emails",
      "Automated CRM sync (HubSpot, Notion, Airtable)",
      "Smart dynamic content personalization"
    ],
    techStack: ["OpenAI / Claude API", "Make / Zapier / n8n", "Webhooks", "Dynamic CRM"],
    timeline: "1 - 2 Weeks",
    badge: "AI Powered"
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "aurora-culinary",
    title: "Aurora Reserve",
    slug: "aurora-reserve",
    category: "Restaurant",
    client: "Aurora Hospitality Group",
    industry: "Fine Dining & Hospitality",
    year: "2026",
    shortDesc: "Immersive digital reservation portal and sensory culinary storytelling for a Michelin-starred dining experience.",
    servicesProvided: ["Custom UI/UX", "Reservation System", "Menu Automation", "Mobile First Design"],
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#F59E0B",
    stats: {
      metric1: "+240%",
      label1: "Online Table Reservations",
      metric2: "0.45s",
      label2: "Average Page Load",
      metric3: "4.9/5",
      label3: "Guest Feedback Score"
    },
    overview: "Aurora Reserve required a digital experience that matched the exclusivity, sensory richness, and culinary craft of their flagship venues in Lagos and London.",
    challenge: "Their previous website relied on slow third-party widgets, suffered from high abandonment during weekend table bookings, and failed to communicate their seasonal tasting menus on mobile screens.",
    whatWebXBuilt: "WebX architected an ultra-fast bespoke digital experience featuring a custom table availability checker, high-resolution visual storytelling, real-time WhatsApp reservation confirmation, and dietary preference intake.",
    keyFeatures: [
      "Real-time table reservation engine with SMS/WhatsApp sync",
      "Interactive seasonal tasting menu with wine pairing notes",
      "Private dining VIP concierge request flow",
      "Multi-currency gift card purchase & instant digital delivery",
      "Ambient sensory background audio toggle"
    ],
    technologies: ["React 18", "Tailwind CSS", "Stripe Connect", "WhatsApp Business API", "Vercel Edge"],
    verifiedOutcome: "Within 60 days of launch, direct online reservations climbed by 240%, cutting third-party portal commission costs by 68%."
  },
  {
    id: "apex-capital",
    title: "Apex Horizon Capital",
    slug: "apex-horizon-capital",
    category: "Professional",
    client: "Apex Horizon Partners",
    industry: "Private Equity & Venture Capital",
    year: "2026",
    shortDesc: "Futuristic, authoritative digital flagship for a pan-African private equity firm managing over $180M in alternative assets.",
    servicesProvided: ["Institutional Branding", "Web Development", "Investor Portal", "Compliance Security"],
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#00F0FF",
    stats: {
      metric1: "$180M+",
      label1: "Assets Represented",
      metric2: "99.99%",
      label2: "Uptime SLA",
      metric3: "100%",
      label3: "Security Compliance"
    },
    overview: "Apex Horizon Capital operates at the nexus of technology and institutional capital across emerging markets, requiring an undeniable, cyber-resilient web presence.",
    challenge: "The firm was operating with a dated static site that failed to articulate their multi-market footprint, while their portfolio companies lacked a unified showcase platform.",
    whatWebXBuilt: "A dark-mode institutional flagship powered by interactive portfolio filter matrices, live sector allocation visualizers, encrypted LP document request workflows, and executive leadership dossiers.",
    keyFeatures: [
      "Interactive portfolio investment map across 8 African economies",
      "Password-protected LP investor room with download telemetry",
      "Dynamic market insights and quarterly whitepaper distribution",
      "Zero-trust security headers and SOC2 compliant hosting"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudflare Enterprise"],
    verifiedOutcome: "Credited with expediting institutional due diligence for Fund II LP commitments and elevating corporate perception during international roadshows."
  },
  {
    id: "lumina-botanics",
    title: "Lumina Botanics",
    slug: "lumina-botanics",
    category: "E-commerce",
    client: "Lumina Skincare Labs",
    industry: "DTC Luxury Beauty & Wellness",
    year: "2026",
    shortDesc: "High-speed headless e-commerce store with AI skin consultation and personalized product recommendation bundles.",
    servicesProvided: ["Headless E-commerce", "AI Routine Finder", "Subscription Flow", "Conversion Optimization"],
    heroImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#10B981",
    stats: {
      metric1: "3.8%",
      label1: "Checkout Conversion Rate",
      metric2: "+145%",
      label2: "Average Order Value (AOV)",
      metric3: "0.38s",
      label3: "Instant Catalog Filter"
    },
    overview: "Lumina Botanics extracts active botanicals for clinical-grade skincare. They needed an online store that felt clean, medicinal, and intoxicatingly premium.",
    challenge: "Their previous platform had an average load time of 4.2 seconds, resulting in a 71% mobile bounce rate and poor repeat replenishment subscriptions.",
    whatWebXBuilt: "A sub-second headless storefront with an interactive 60-second Skin Diagnostic quiz that dynamically compiles tailored skincare routines directly into the customer's cart.",
    keyFeatures: [
      "AI-driven 60-second skincare consultation wizard",
      "One-click repeat subscription bundle management",
      "Multi-currency support with automated local delivery calculation",
      "Instant visual search & customer reviews with verified photo badges"
    ],
    technologies: ["Shopify Headless", "React", "Tailwind CSS", "Paystack & Stripe", "WebX Automation Engine"],
    verifiedOutcome: "Conversion rates increased from 1.2% to 3.8%, while the smart routine bundler drove a 145% lift in average order value within the first quarter."
  },
  {
    id: "synapse-robotics",
    title: "Synapse Industrial AI",
    slug: "synapse-industrial-ai",
    category: "Business",
    client: "Synapse Automation Systems",
    industry: "Smart Manufacturing & Robotics",
    year: "2025",
    shortDesc: "Interactive technical showcase and hardware demo platform for an industrial robotics and telemetry automation firm.",
    servicesProvided: ["Enterprise UI/UX", "Interactive 3D Hardware Previews", "Lead Qualification Automation"],
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#818CF8",
    stats: {
      metric1: "+310%",
      label1: "Enterprise Inquiries",
      metric2: "85%",
      label2: "Qualified Lead Rate",
      metric3: "12 Countries",
      label3: "International Reach"
    },
    overview: "Synapse builds robotic automation arms and telemetry sensors for supply chain warehouses. They required a site that established them alongside global Tier-1 automation providers.",
    challenge: "Explaining complex multi-axis robotics and PLC integrations was alienating non-technical plant managers and procurement leads.",
    whatWebXBuilt: "WebX constructed a clean, modular product architecture with interactive subsystem exploded views, ROI calculation sliders, and automated technical spec sheet generation.",
    keyFeatures: [
      "Interactive ROI calculator for warehouse automation payback",
      "Dynamic specification sheet generator with instant PDF download",
      "Enterprise lead qualification quiz routed to specialized engineers",
      "Client telemetry case studies with interactive before/after graphs"
    ],
    technologies: ["React", "HTML5 Canvas", "Tailwind CSS", "HubSpot API", "Edge CDN"],
    verifiedOutcome: "Enterprise demo requests surged by 310%, with average lead qualification speed dropping from 48 hours to under 15 minutes."
  },
  {
    id: "atelier-noir",
    title: "Atelier Noir Architects",
    slug: "atelier-noir-architects",
    category: "Creative",
    client: "Atelier Noir Studio",
    industry: "Contemporary Architecture & Urbanism",
    year: "2026",
    shortDesc: "Minimalist, editorial digital portfolio showcasing high-concept residential and cultural architecture across Africa and Europe.",
    servicesProvided: ["Bespoke Editorial Web Design", "Smooth Project Transitions", "High-Resolution Image Pipeline"],
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#00F0FF",
    stats: {
      metric1: "100%",
      label1: "Retina Asset Fidelity",
      metric2: "0.32s",
      label2: "Transition Speed",
      metric3: "4 Architectural Awards",
      label3: "Featured Recognition"
    },
    overview: "Atelier Noir creates striking monolithic concrete and glass structures. Their online presence needed to embody the restraint, precision, and majesty of their physical spaces.",
    challenge: "Traditional templates compressed their uncompressed 40MB architectural photography, ruining detail, or took over 7 seconds to load.",
    whatWebXBuilt: "A custom high-performance gallery with progressive WebP/AVIF multi-res streaming, full-screen cinematic project viewports, and architect-guided project retrospectives.",
    keyFeatures: [
      "Ultra-crisp progressive media pipeline without performance penalty",
      "Full-screen blueprint and floorplan toggle overlay",
      "Editorial storytelling layouts inspired by leading design publications",
      "Bespoke inquiry concierge for international development commissions"
    ],
    technologies: ["React", "Tailwind CSS", "Cloudinary Optimization", "Framer Transitions"],
    verifiedOutcome: "Won recognition on international architectural design directories and secured two multimillion-dollar residential commissions within 90 days."
  },
  {
    id: "kulture-collective",
    title: "Kulture Collective",
    slug: "kulture-collective",
    category: "Other",
    client: "Kulture Global",
    industry: "Art, Streetwear & Cultural Artifacts",
    year: "2025",
    shortDesc: "Limited-edition drop platform and digital cultural vault connecting contemporary African creators with collectors worldwide.",
    servicesProvided: ["Drop Engine", "Anti-Bot Protection", "Global Logistics Checkout", "Interactive Lookbook"],
    heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    accentColor: "#A855F7",
    stats: {
      metric1: "42 Secs",
      label1: "Average Drop Sellout",
      metric2: "0%",
      label2: "Bot Infiltration",
      metric3: "35+",
      label3: "Countries Shipped"
    },
    overview: "Kulture Collective hosts viral fashion and physical art drops that generate tens of thousands of concurrent visitors in under two minutes.",
    challenge: "Previous drops crashed their shared hosting, allowed automated scalper bots to drain stock, and frustrated genuine fans.",
    whatWebXBuilt: "A hardened serverless drop queue with bot-resistant verification, instant Apple Pay / Google Pay / Crypto / Card checkout, and live countdown telemetry.",
    keyFeatures: [
      "Serverless queue system capable of handling 50,000 concurrent users",
      "Anti-bot behavioral fingerprinting and SMS token authentication",
      "Interactive 3D wearable garment viewer",
      "Global tax and customs duty automated calculation at checkout"
    ],
    technologies: ["React", "Stripe Checkout", "Cloudflare Workers", "Redis Queue", "Tailwind CSS"],
    verifiedOutcome: "Enabled flawless sellout of 5 consecutive capsule collections with zero downtime and over 35 countries served."
  }
];

export const WHY_WEBX_FEATURES = [
  {
    id: "why-1",
    title: "Built Around Your Business",
    desc: "Every website is designed around the business instead of forcing the business into a template.",
    icon: "Layers",
    detail: "We engineer bespoke layouts and custom digital flows specifically mapped to your revenue model, audience psychology, and brand uniqueness."
  },
  {
    id: "why-2",
    title: "Modern by Default",
    desc: "Responsive, clean, fast, and designed for today's internet.",
    icon: "Zap",
    detail: "We write clean, semantic code optimized for sub-second loading, 95+ Core Web Vitals, and effortless readability across modern screens."
  },
  {
    id: "why-3",
    title: "AI + Automation",
    desc: "Where useful, we integrate modern AI and automation into the experience.",
    icon: "Cpu",
    detail: "From smart lead qualification bots to automated CRM sync and inventory workflows, we build websites that work tirelessly while you sleep."
  },
  {
    id: "why-4",
    title: "Designed to Convert",
    desc: "Websites aren't just meant to look good. They should guide visitors toward action.",
    icon: "Target",
    detail: "Visual hierarchy, persuasive micro-copy, clear call-to-actions, and frictionless forms engineered to maximize client inquiries and sales."
  },
  {
    id: "why-5",
    title: "Mobile First",
    desc: "The experience should work beautifully across phones, tablets, and desktops.",
    icon: "Smartphone",
    detail: "Over 75% of African and global web traffic happens on mobile devices. We guarantee your mobile experience feels as slick as a native app."
  },
  {
    id: "why-6",
    title: "Built for Growth",
    desc: "Create websites that can evolve as the business grows.",
    icon: "TrendingUp",
    detail: "Modular architecture designed for rapid additions—effortlessly add new product lines, team profiles, service tiers, or multilingual features."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    headline: "01 — Discover",
    tagline: "Uncovering your competitive edge",
    desc: "We understand the business, audience, goals, and requirements. We analyze your commercial positioning and map out the exact digital experience required to win.",
    deliverables: ["Strategy Brief", "Sitemap Architecture", "Conversion Funnel Mapping", "Technical Requirements"],
    duration: "Week 1"
  },
  {
    step: "02",
    title: "Design",
    headline: "02 — Design",
    tagline: "Translating brand into interactive art",
    desc: "We create the visual direction and structure of the website. High-fidelity wireframes, futuristic aesthetics, interactive component systems, and bespoke typography.",
    deliverables: ["Interactive Prototypes", "Design System Kit", "Mobile & Desktop Previews", "Content Structure"],
    duration: "Week 1 - 2"
  },
  {
    step: "03",
    title: "Build",
    headline: "03 — Build",
    tagline: "Turning concepts into production code",
    desc: "We turn the concept into a functional, responsive digital experience. Clean code, lightning-fast rendering, API integrations, and secure payment setups.",
    deliverables: ["Production Web Application", "CMS Integration", "Automated Workflows", "API Integrations"],
    duration: "Week 2 - 3"
  },
  {
    step: "04",
    title: "Refine",
    headline: "04 — Refine",
    tagline: "Stress-testing for perfection",
    desc: "We test, improve, optimize, and make sure everything works properly. Cross-browser audits, mobile touch responsiveness, speed optimization, and form validation.",
    deliverables: ["Core Web Vitals Audit", "Cross-Device Testing", "Security Hardening", "Conversion Walkthrough"],
    duration: "Week 3"
  },
  {
    step: "05",
    title: "Launch",
    headline: "05 — Launch",
    tagline: "Going live to the world",
    desc: "The website goes live and becomes part of the business's digital infrastructure. DNS propagation, SSL certificates, search engine indexing, and handover training.",
    deliverables: ["Global CDN Deployment", "Google Search Console Setup", "Admin Handover Video", "30-Day Post-Launch SLA"],
    duration: "Go Live Day"
  }
];

export const CLIENT_SECTORS = [
  { id: "sec-1", name: "Restaurants", icon: "Utensils", desc: "Table bookings, digital menus, online orders, and culinary visual storytelling." },
  { id: "sec-2", name: "Salons & Beauty", icon: "Sparkles", desc: "Automated appointment scheduling, stylist portfolios, and product retail." },
  { id: "sec-3", name: "Professional Services", icon: "Briefcase", desc: "Legal, accounting, advisory & consulting platforms establishing market authority." },
  { id: "sec-4", name: "Retail", icon: "ShoppingBag", desc: "Brick-and-mortar storefronts expanding into modern omnichannel commerce." },
  { id: "sec-5", name: "E-commerce", icon: "ShoppingCart", desc: "High-volume direct-to-consumer stores engineered for maximum checkout speed." },
  { id: "sec-6", name: "Startups", icon: "Rocket", desc: "Venture-ready landing pages, SaaS frontends, investor desks, and product waitlists." },
  { id: "sec-7", name: "Creators", icon: "Camera", desc: "Digital media hubs, paid community memberships, and content monetization portals." },
  { id: "sec-8", name: "Local Businesses", icon: "MapPin", desc: "High-visibility local SEO websites turning nearby searchers into phone calls and visits." },
  { id: "sec-9", name: "Service Businesses", icon: "Wrench", desc: "Contractors, logistics, and cleaning services with automated estimate calculators." },
  { id: "sec-10", name: "Growing Companies", icon: "Building2", desc: "Enterprise corporate flagships consolidating multiple subsidiaries and brands." }
];

export const TECH_RADAR = [
  {
    id: "ai",
    name: "AI",
    title: "Intelligent Assistants & Logic",
    desc: "Context-aware AI lead qualifiers, smart inquiry responders, and dynamic content tailored to visitor intent.",
    features: ["Bespoke document-trained bots", "Natural language inquiry triage", "Intelligent form assistance", "Automated multilingual translation"]
  },
  {
    id: "code",
    name: "Code",
    title: "Modern Engineering Stack",
    desc: "Zero bloated site builders. We write hand-crafted React, Next.js, and modern CSS for unbreakable performance.",
    features: ["Sub-second First Contentful Paint", "Type-safe robust components", "Modular component systems", "Clean semantic HTML5"]
  },
  {
    id: "design",
    name: "Design",
    title: "Next-Generation Visual Systems",
    desc: "Futuristic dark glassmorphic aesthetics, tactile typography, intentional micro-interactions, and high contrast.",
    features: ["Custom typography & layout grid", "Micro-animations with purpose", "Accessible color contrast", "Bespoke device preview mockups"]
  },
  {
    id: "automation",
    name: "Automation",
    title: "Self-Driving Operations",
    desc: "Connect your web visitors to your CRM, WhatsApp, Slack, Stripe, and Google Sheets in real-time.",
    features: ["Instant webhook dispatches", "Auto-scheduling without email ping-pong", "Automated invoice generation", "Real-time team notification feeds"]
  },
  {
    id: "deployment",
    name: "Deployment",
    title: "Global Edge Infrastructure",
    desc: "Your website is served from 300+ edge data centers worldwide with automatic SSL, DDoS shield, and 99.99% uptime.",
    features: ["Worldwide edge caching", "Automated HTTPS / SSL encryption", "Continuous integration & instant rollbacks", "Enterprise DDoS mitigation"]
  },
  {
    id: "analytics",
    name: "Analytics",
    title: "Conversion Intelligence",
    desc: "Track every button click, drop-off point, and revenue attribution without violating privacy laws.",
    features: ["Cookieless lightweight telemetry", "Event-based conversion tracking", "Heatmap & scroll depth analysis", "Real-time visitor dashboards"]
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    clientName: "Olumide Adeleke",
    business: "Aurora Reserve",
    role: "Founder & Executive Chef",
    verified: true,
    quote: "WebX completely transformed how guests discover and book at our restaurants. Within two months of launching the new site, our direct weekend bookings rose by over 200%. The site feels like a work of art.",
    projectType: "Restaurant & Table Portal"
  },
  {
    id: "test-2",
    clientName: "David Mensah",
    business: "Apex Horizon Partners",
    role: "Managing Partner",
    verified: true,
    quote: "Working with WebX by Iwaju gave us an institutional digital presence that stands shoulder-to-shoulder with top global venture funds. They understand business, not just code.",
    projectType: "Professional Corporate Flagship"
  },
  {
    id: "test-3",
    clientName: "Amina Yusuf",
    business: "Lumina Botanics",
    role: "CEO & Product Formulator",
    verified: true,
    quote: "The speed and mobile checkout experience WebX engineered for Lumina took our conversion rate from 1.2% to 3.8%. Our customers constantly comment on how luxurious and effortless the website feels.",
    projectType: "Headless E-commerce Store"
  },
  {
    id: "test-4",
    clientName: "CMS Placeholder Slot #4",
    business: "Verified Client Partner",
    role: "Managing Director",
    verified: false,
    isPlaceholder: true,
    quote: "Ready for verified client statement. This card is linked directly to the WebX CMS data store for rapid client quotation insertion.",
    projectType: "Enterprise Web Application"
  }
];

export const IWAJU_DETAILS = {
  headline: "WEBX IS BUILT BY IWAJU.",
  copy: "Iwaju is building the infrastructure for Africa's next generation of businesses. WebX is one part of that mission—helping businesses establish, improve, and automate their digital presence.",
  subtext: "From reliable payment conduits and digital identity to high-performance website infrastructure, Iwaju powers modern commerce across emerging markets.",
  missionPoints: [
    { title: "Digital Infrastructure First", desc: "Empowering businesses with modern software and tools that unlock global competitiveness." },
    { title: "Pan-African Scale", desc: "Designed for resilient connectivity, local mobile money gateways, and multi-currency commerce." },
    { title: "Long-Term Engineering", desc: "Not disposable freelance gigs—built to scale with your company across 5 to 10+ years." }
  ]
};
