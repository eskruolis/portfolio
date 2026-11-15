import type { LocaleContent } from './data';

/** English portfolio content. Structural fields (slugs, tags, dates, urls,
 *  companies) must match data.lt.ts — guarded by the parity test. */
export const enContent: LocaleContent = {
  lifecycle: [
    {
      title: 'Product & launch',
      proof: 'Scoped, built and launched myanart: 5 languages, 3 currencies, an AI print pipeline.',
    },
    {
      title: 'Frontend & accessibility',
      proof: 'React / Next.js apps and design systems, with WCAG conformance for enterprise banks.',
    },
    {
      title: 'APIs & backend',
      proof: 'REST APIs, Medusa commerce, background jobs and third-party integrations.',
    },
    {
      title: 'Data & search',
      proof: 'PostgreSQL, Redis and Meilisearch; product-page p50 from 437 to 69 ms.',
    },
    {
      title: 'Caching & CDN',
      proof: 'Cloudflare edge, app caching and read models in front of a live store.',
    },
    {
      title: 'Auth, payments & security',
      proof: 'Ory auth with sessions and cookies, Stripe payments, strict TypeScript with zero "any".',
    },
    {
      title: 'Infrastructure & delivery',
      proof: 'Railway, Vercel, Docker and CI/CD; 185 releases, with a preview environment per PR.',
    },
    {
      title: 'Reliability',
      proof: 'Memory from 20+ GB to 12–13 GB; a written root-cause report for production incidents.',
    },
  ],

  stats: [
    {
      value: '8+',
      label: 'years shipping production software',
      detail:
        'Since 2017: agency platforms in Manchester, a Swiss SaaS used by banks, and two live online stores.',
    },
    {
      value: '6 weeks',
      label: 'from first commit to public launch',
      detail:
        'myanart, 18 Sep to 1 Nov 2026: an AI art builder and print shop with payments, in 5 languages and 52 countries.',
    },
    {
      value: '-91%',
      label: 'backend calls per page request',
      detail:
        'MyUrbanScoot: 1.33 → 0.12 after a Meilisearch read model, page caching and CDN work. One week in November against the 24 September baseline.',
    },
    {
      value: '185+',
      label: 'releases to a live store',
      detail:
        'MyUrbanScoot, from v1.0.0 on 19 June 2026 to mid-November, on the CI and release pipeline I built.',
    },
  ],

  cvSummary:
    'Senior full-stack engineer with 8+ years shipping production web software. As a consultant I lead engineering for a live online store, and I co-founded an AI art studio that I took from first commit to launch in six weeks. Before that I led the frontend of a Swiss SaaS used by major banks and insurers. I work with AI coding agents every day, and I direct and review what they produce.',
  story: [
    "I started at 17, running a private Lineage II game server. I didn't write the Java, but the project was mine: I decided every feature and customisation, and built or commissioned each one. To bring players in it needed a website, so I built that myself — raw HTML and CSS in Notepad++, with PHP reading player stats and top kills straight from the game's MySQL database, plus a donation page. This was before responsive design and design systems: every page was a copy of another page, and translating the site meant copying the copies.",
    'I kept at it for a few years. The server ran on my own PC, so every time my home internet dropped, it went down too. There were few cloud options back then, and eventually I stopped — for nearly ten years. I moved to London to live a little and meet people, and worked in a bar for six years.',
    "Then the curiosity came back. I started the same way, with a private game server, but by now there were PHP and JavaScript frameworks and responsive design, and I loved it. I wanted hands-on experience in web work alone, so I moved to Manchester, where I joined Two Flamingos. I've been shipping production software ever since.",
    'Those early problems — a server that died with my home connection, pages copied by hand for every language — are the ones I now solve for a living: infrastructure that stays up, and translation that needs no duplicating.',
  ],
  personal: [
    {
      title: "When I'm stuck",
      description:
        'I sleep on it. Then I go back to the beginning and make sure I understand the problem, or the solution I was chasing, because some rabbit holes lead nowhere. A fresh look usually gives a new angle, and I walk through the possible scenarios until one fits.',
    },
    {
      title: 'A normal day',
      description:
        "It starts with walking the dog and taking my daughter to kindergarten. Then coffee, a clean inbox, and the dev environment for whatever I'm working on. When I hit something I don't know, I enjoy the research, and I keep up with where the field is going.",
    },
    {
      title: "What I won't compromise on",
      description:
        "I run things as if the company were my own. So I won't quietly build a feature that experience tells me nobody will use: I'll say so, and argue for where the time is better spent. I'm there to raise what the team and the product deliver, not to please every request.",
    },
    {
      title: 'Outside of code',
      description:
        "I train, swim in the sea out of season — I live on the Mediterranean coast — and ski or snowboard in winter. Kitesurfing is my newest sport. I'm always looking for a good sauna, or an adventure outside my comfort zone.",
    },
  ],
  education: [
    'B.Sc. Computer Science — Kaunas University of Technology, Lithuania · 2014',
  ],
  languages: ['English — fluent', 'Lithuanian — native', 'Spanish — basic'],

  services: [
    {
      title: 'Full-stack product engineering',
      description:
        'From empty repo to production: I design, build, and ship complete web products — frontend, API, database, auth, payments, and deployment. I did it at a Swiss SaaS now relied on by major banks, and again for myanart, which I co-founded and launched in six weeks.',
      deliverables: [
        'React / Next.js applications',
        'Node.js APIs, Medusa commerce + PostgreSQL',
        'Authentication, payments & invoicing',
        'Railway / Vercel / AWS deployment with CI/CD',
      ],
    },
    {
      title: 'Taking over live platforms',
      description:
        'Inherited a codebase nobody fully understands? I take ownership of live systems: stabilise them, make them strictly typed, upgrade the framework, and set up releases you can trust — without freezing feature work. I do this today, leading engineering for a live online store.',
      deliverables: [
        'Framework upgrades with rehearsed runbooks',
        'Strict-typing migrations with CI ratchets',
        'Release pipelines & per-PR preview environments',
        'Angular → React / Next.js migrations',
      ],
    },
    {
      title: 'Performance & reliability',
      description:
        'Speed and stability as measurable outcomes, not vibes. I set a baseline, find the real bottleneck, and prove the fix — from read models that cut product-page latency to memory leaks traced to a single line. Production incidents get a written root-cause report.',
      deliverables: [
        'Baselines, replays & KPIs before any change',
        'Read models & caching (Meilisearch, Redis, CDN)',
        'Memory, query & payload optimisation',
        'Root-cause reports in plain language',
        'WCAG accessibility audits & fixes',
      ],
    },
    {
      title: 'AI-accelerated delivery',
      description:
        'I build with agentic AI workflows — but I direct every step, review every line, and own the result. I also build the guardrails around the agents: review gates, typed code, CI checks, and permission hooks so non-developers can contribute safely.',
      deliverables: [
        'Agentic development workflows',
        'Guardrails: review gates, hooks, CI ratchets',
        'AI features in products (image, translation, extraction)',
        'AI tooling & workflow consulting',
      ],
    },
  ],

  principles: [
    {
      title: 'Measure before changing',
      description:
        "I set a baseline first, so a fix only counts when the numbers move. Before switching MyUrbanScoot's product pages to a new data source, I replayed a real production hour against the old and the new code.",
    },
    {
      title: 'Find the real cause',
      description:
        'I trace a problem to its source before patching it. A store that kept running out of memory came down to one translation plugin; fixing it took memory from 20+ GB to 12–13 GB.',
    },
    {
      title: 'Rehearse the risky parts',
      description:
        'Changes that are hard to undo get a written runbook and a dry run. The Medusa 2.8 → 2.19 upgrade was rehearsed twice on a copy of the production database before it ran for real.',
    },
    {
      title: 'Ship small, ship often',
      description:
        'Small changes, each through CI and its own preview environment, are easier to review and to roll back. That is 185 releases on MyUrbanScoot and 78 on myanart so far.',
    },
    {
      title: 'Write it down',
      description:
        'Production incidents get a root-cause report in plain language: what happened, why, and what stops it happening again. The next person should not have to rediscover it.',
    },
    {
      title: 'AI drafts. I decide.',
      description:
        'I work with AI coding agents every day. They write fast; I write the specification, review what they produce and own the result. Types, tests and CI hold AI-written code to the same bar as hand-written code.',
    },
  ],

  experience: [
    {
      company: 'myanart',
      role: 'Co-founder & CTO',
      startDate: '2026',
      current: true,
      description:
        'An AI art studio for your photos: customers pick a style and put their picture on prints, canvas, mugs and gifts, printed and shipped by Gelato. I co-founded it, and I build and run the whole platform.',
      highlights: [
        'Took it from first commit to public launch in six weeks (September → 1 November 2026); it sells in 52 countries, in 5 languages and 3 currencies.',
        "Built the print pipeline: the customer's photo and crop — or an AI-styled version upscaled to about 8,192 px — becomes a 300 dpi print file that is sent to Gelato automatically, with live shipping quotes.",
        'Chose the AI image models through a side-by-side bake-off, and priced the AI cost into small per-preview style credits.',
        'Built the commerce plumbing on Medusa: markets with FX and VAT-inclusive prices, gap-free invoices, AI-assisted bookkeeping, and product feeds for five ad channels.',
        "Run growth hands-on: Meta, Google, TikTok and Pinterest campaigns, consent-mode analytics, and a measured funnel that decides where the budget goes.",
      ],
      skills: [
        'Next.js',
        'TypeScript',
        'Medusa',
        'PostgreSQL',
        'Stripe',
        'Cloudflare',
        'Railway',
        'Vercel',
      ],
      url: 'https://myanart.com',
    },
    {
      company: 'MyUrbanScoot',
      role: 'Freelance Consultant · Senior Full-Stack Engineer',
      startDate: '2026',
      current: true,
      description:
        "Spanish online store and workshop for electric scooters, vinyls and parts, built on Medusa.js 2 and Next.js. I've consulted for the business since June 2026; since September I lead its engineering: I own the code, releases, infrastructure and production database changes, and the tools the whole team runs the shop with.",
      highlights: [
        'Moved product pages onto a Meilisearch read model: on a replayed production hour, backend requests fell 74% and product-page p50 went from 437 to 69 ms.',
        'Traced a production memory leak to a translation plugin and fixed it (20+ GB with crashes → a stable 12–13 GB; about 3.5 GB on average today, after later work), then replaced the plugin with a native translation module for the store\'s nine languages.',
        'Made the codebase strictly typed without a feature freeze: explicit "any" from 4,594 to 0, strict mode in both apps, and a CI check that blocks new ones.',
        'Upgraded Medusa 2.8 → 2.19 in production, with the runbook rehearsed twice on a copy of the production database.',
        'Built the delivery pipeline — CI, a preview environment per pull request, automatic versioning — and shipped 185 releases since v1.0.0.',
        'Write root-cause reports for production incidents, and rewrote the heaviest analytics queries (combined dashboard 13.6 s → 3.9 s).',
      ],
      skills: [
        'Medusa',
        'Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Meilisearch',
        'Redis',
        'Docker',
        'Railway',
        'Cloudflare',
      ],
      url: 'https://myurbanscoot.com',
    },
    {
      company: 'Hypt AG',
      role: 'Senior Frontend Engineer',
      startDate: '2023',
      endDate: '2026',
      current: false,
      description:
        'Swiss conversational-feedback SaaS serving UBS, Raiffeisen, Generali, and Nestlé. Joined as the first frontend engineer and led the frontend from zero to a product relied on by major banks and insurers, working closely with the CTO on the API and product direction.',
      highlights: [
        'Architected and built the entire frontend, CI/CD pipelines, and core product from zero — now relied on by major Swiss banking and insurance enterprises.',
        'Co-designed and shipped the full REST API with the CTO — powering the funnel builder and real-time analytics dashboards, backed by PostgreSQL.',
        'Engineered the Chatbot Builder end-to-end: a fully customisable funnel builder with RxJS-based state management, from product design to delivery.',
        'Implemented the authentication architecture with Ory SDK — full auth flow, session and cookie handling across the platform.',
        'Delivered 100% WCAG accessibility conformance, meeting the strict standards required by enterprise banking clients.',
        'Owned frontend performance: image optimisation, leaner API payloads, code-splitting and lazy loading, guided by LCP and network-waterfall profiling.',
        'Drove the stack migration to React + Next.js + Tailwind within a Turborepo monorepo — researched, built the case, and shipped to production.',
      ],
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Tailwind CSS',
        'Turborepo',
        'Ory SDK',
        'AWS',
      ],
      url: 'https://hypt.io',
    },
    {
      company: 'Two Flamingos Ltd.',
      role: 'Full-Stack Developer',
      startDate: '2018',
      endDate: '2022',
      current: false,
      description:
        'Manchester, UK digital agency. Delivered 15+ corporate and e-commerce platforms end to end, from architecture to deployment.',
      highlights: [
        'Specialised in performance optimisation for global brand clients.',
        'Integrated complex third-party APIs into production environments.',
        'Worked directly with clients to translate business requirements into technical decisions.',
      ],
      skills: ['JavaScript', 'TypeScript', 'PHP', 'MySQL', 'REST APIs', 'CSS'],
    },
    {
      company: 'Freelance',
      role: 'Frontend Developer',
      startDate: '2017',
      endDate: '2018',
      current: false,
      description:
        'Web development and UI services for London-based clients — foundation built through self-directed learning and real project delivery.',
      highlights: [],
      skills: ['JavaScript', 'HTML & CSS', 'WordPress'],
    },
  ],

  projects: [
    {
      title: 'Portfolio',
      slug: 'portfolio',
      description:
        'This site — a dark, single-scrollable portfolio in English and Lithuanian, with case studies and OG image generation. Built with Next.js 16, Tailwind v4, and Upstash Redis.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Upstash Redis'],
      repo: 'https://github.com/eskruolis/portfolio',
      featured: true,
    },
  ],

  workProjects: [
    {
      title: 'myanart: AI art studio & print pipeline',
      company: 'myanart',
      description:
        'Co-founded and built solo: photo upload, AI styles, a print pipeline to Gelato, payments, invoices and feeds for 52 countries — from first commit to public launch in six weeks.',
      tags: ['Next.js', 'Medusa', 'Stripe', 'Cloudflare', 'AI image generation'],
      url: 'https://myanart.com',
      caseStudy: 'myanart-launch',
      private: true,
    },
    {
      title: 'Faster product pages for a live store',
      company: 'MyUrbanScoot',
      description:
        'Moved product pages onto a Meilisearch read model, proven on a replayed production hour: backend requests −74%, product-page p50 437 → 69 ms, zero errors.',
      tags: ['Meilisearch', 'Medusa', 'Next.js', 'Redis'],
      url: 'https://myurbanscoot.com',
      caseStudy: 'myurbanscoot-performance',
      private: true,
    },
    {
      title: 'Strict typing without a feature freeze',
      company: 'MyUrbanScoot',
      description:
        'Took a 55-module commerce codebase from 4,594 explicit "any" to zero, turned on strict mode in both apps, and added a CI check so no new ones get in.',
      tags: ['TypeScript', 'Medusa', 'CI/CD'],
      private: true,
    },
    {
      title: 'Delivery pipeline & Medusa upgrade',
      company: 'MyUrbanScoot',
      description:
        'CI, per-PR preview environments, automatic versioning and 185 releases; plus a Medusa 2.8 → 2.19 upgrade rehearsed twice on a production copy.',
      tags: ['Docker', 'Railway', 'GitHub Actions', 'Medusa'],
      private: true,
    },
    {
      title: 'Chatbot Builder',
      company: 'Hypt AG',
      description:
        'A fully customisable conversational funnel builder — drag-and-drop flows, real-time preview, brand theming, analytics. Built end-to-end as the first frontend engineer; serves UBS, Raiffeisen, Generali, and Nestlé.',
      tags: ['Angular', 'RxJS', 'TypeScript', 'REST APIs'],
      url: 'https://hypt.io',
      caseStudy: 'chatbot-builder',
      private: true,
    },
    {
      title: 'Angular → React Migration',
      company: 'Hypt AG',
      description:
        'Proposed, planned, and led the full migration of a live enterprise product to React + Next.js + Tailwind in a Turborepo monorepo — shipped to production without pausing feature delivery.',
      tags: ['React', 'Next.js', 'TypeScript', 'Turborepo'],
      caseStudy: 'react-migration',
      private: true,
    },
    {
      title: 'REST API & Auth Architecture',
      company: 'Hypt AG',
      description:
        'Co-designed the platform REST API with the CTO — PostgreSQL-backed, powering the funnel builder and real-time analytics. Implemented the full auth architecture with Ory SDK.',
      tags: ['Node.js', 'PostgreSQL', 'Ory SDK', 'REST APIs'],
      private: true,
    },
    {
      title: 'Design System & Figma Migration',
      company: 'Hypt AG',
      description:
        'Co-established a Figma-based design system with the in-house designer — component libraries, design tokens, and the team transition from Adobe XD to Figma as single source of truth.',
      tags: ['Figma', 'Design systems', 'Storybook'],
      private: true,
    },
    {
      title: 'Corporate & E-commerce Platforms',
      company: 'Two Flamingos Ltd.',
      description:
        '15+ end-to-end platforms for global brand clients — architecture to deployment, performance optimisation, and complex third-party API integrations.',
      tags: ['JavaScript', 'PHP', 'MySQL', 'CSS'],
      private: true,
    },
  ],

  caseStudies: [
    {
      slug: 'myanart-launch',
      title: 'myanart: from idea to a live shop in six weeks',
      subtitle:
        'Co-founding an AI art studio for personal photos, and building its whole platform as the only engineer.',
      company: 'myanart',
      year: '2026 — present',
      role: 'Co-founder & CTO',
      tags: [
        'Next.js',
        'Medusa',
        'TypeScript',
        'Stripe',
        'Cloudflare',
        'AI image generation',
      ],
      challenge:
        'My co-founder and I wanted a shop where anyone can turn a photo into art and put it on a print, canvas or mug. With two people and no engineering team, I had to build everything myself: the builder customers use, AI styles that hold up in print, payments, taxes and invoices for many countries, and the hand-off to a print partner.',
      approach: [
        'Built on managed services (Medusa, Stripe, Gelato, Cloudflare, Railway, Vercel) so two people can run it, and wrote the code to be read by the AI coding agents I direct and review.',
        'Picked the AI image models through a side-by-side bake-off, and priced each preview as a small style credit that covers the AI cost.',
        "Built the print pipeline: the customer's crop — or an AI style upscaled to about 8,192 px — becomes a 300 dpi file with bleed and canvas wraps, sent to Gelato automatically with live shipping quotes.",
        'Modelled markets as data (countries, currencies, VAT-inclusive prices), with gap-free invoices and AI-assisted bookkeeping.',
        'Set up measured growth: product feeds for five ad channels, consent-mode analytics, and a funnel that decides where the ad budget goes.',
      ],
      outcomes: [
        'Public launch on 1 November 2026, six weeks after the first commit — with 429 merged pull requests and 78 releases by mid-November, each through CI.',
        'Sells in 52 countries, in 5 languages and 3 currencies.',
        'First order from a stranger four days after launch.',
      ],
      stillOpen:
        "It's early. One order from a stranger doesn't prove a business: every ad channel still has to prove itself in cost per upload and per order.",
    },
    {
      slug: 'myurbanscoot-performance',
      title: 'Faster product pages for a live store',
      subtitle:
        "Moving an e-scooter shop's product pages onto a Meilisearch read model — product-page p50 from 437 to 69 ms on a replayed production hour.",
      company: 'MyUrbanScoot',
      year: '2026',
      role: 'Freelance consultant · engineering lead',
      tags: ['Meilisearch', 'Medusa', 'Next.js', 'Redis', 'PostgreSQL'],
      challenge:
        "Every product page view called the commerce backend for products and translations. Those calls were about three quarters of the backend's traffic, and the slow tail — p95 close to a second — reached shoppers. The fix had to land on a live store without changing content, prices or stock for any customer.",
      approach: [
        'Set a baseline first: replayed a real production hour against staging and recorded KPIs, so a change only counts when it moves outside the normal day-to-day range.',
        'Built a product-detail document in Meilisearch, kept current by one backend indexer, and rendered product pages from it, with side data (compatible vehicles, vinyls, upgrades, reviews) from cached routes.',
        'Checked parity before switching: a script compared the new documents with the old API on 100 URLs from that production hour, in four languages.',
        'Rolled it out in stages — listings and search first, behind a per-environment switch, then product pages — and compared the same replayed hour on the old and new code.',
      ],
      outcomes: [
        'On the same replayed production hour: backend requests −74%, product-page p50 437 → 69 ms and p95 943 → 257 ms, with zero errors on either side.',
        'In live production since then — a week in November against the 24 September baseline — backend calls per storefront request fell from 1.33 to 0.12 (−91%) while storefront traffic grew, with the read model plus the page caching and CDN work that followed.',
        'Product catalogue calls from product pages −94%, and their CPU time −92%.',
        'Parity: every live product in the sample matched the old API on content, prices, stock, images and translations.',
        'Related work on the same store: storefront builds ~10 → ~5 min, the image 2.9 → 1.1 GB, and page-cache entries 5–8× smaller in Redis.',
      ],
      stillOpen:
        'The read model fixed the common case, not everything: the backend still has rare, very slow requests, and those still need tracing.',
    },
    {
      slug: 'chatbot-builder',
      title: 'Chatbot Builder',
      subtitle:
        'Building an enterprise conversational-funnel builder from zero — now used by UBS, Raiffeisen, Generali, and Nestlé.',
      company: 'Hypt AG',
      year: '2023 — 2026',
      role: 'First Frontend Engineer',
      tags: ['Angular', 'Angular Material', 'RxJS', 'TypeScript', 'REST APIs'],
      challenge:
        'Hypt needed a product that let enterprise teams build fully branded, customisable conversational feedback funnels — with real-time preview, deep styling control, and analytics — built by a two-person engineering team on a startup timeline, to standards strict enough for Swiss banking and insurance clients.',
      approach: [
        'Owned the frontend end-to-end: architecture, component model, state management, and delivery — with RxJS streams as the backbone for real-time preview and editor state.',
        'Co-designed the REST API with the CTO so the data model served both the builder UX and the analytics dashboards without duplication.',
        'Built a theming engine that exposes brand-level styling controls safely — enterprise customers style everything without breaking layout or accessibility.',
        'Set up CI/CD pipelines from day one so every change shipped to production continuously.',
      ],
      outcomes: [
        'Platform adopted by major Swiss enterprises including UBS, Raiffeisen, Generali, and Nestlé.',
        '100% WCAG conformance on the chatbot product — a hard requirement from banking clients.',
        'Shipped and operated by a two-person engineering team.',
      ],
    },
    {
      slug: 'react-migration',
      title: 'Angular → React Migration',
      subtitle:
        'Migrating a live enterprise SaaS to React + Next.js without pausing feature delivery.',
      company: 'Hypt AG',
      year: '2024 — 2025',
      role: 'Senior Frontend Engineer',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Turborepo', 'TypeScript'],
      challenge:
        'The Angular codebase was slowing feature velocity and hiring. A rewrite-from-scratch was too risky for a product with live enterprise customers — the migration had to happen incrementally, in production, with zero regression tolerance.',
      approach: [
        'Researched the options, built the technical business case, and got buy-in — then owned the execution.',
        'Structured the codebase as a Turborepo monorepo so Angular and React apps could coexist, sharing types, tokens, and utilities during the transition.',
        'Migrated feature-by-feature behind stable API contracts, shipping each slice to production as it was ready.',
        'Used AI-assisted workflows to accelerate mechanical conversion work, with every change reviewed and tested before merge.',
      ],
      outcomes: [
        'Full migration delivered to production — no feature freeze, no customer-facing regressions.',
        'The team now builds on React + Next.js + Tailwind, a more widely used stack than the Angular setup it replaced.',
        'The monorepo structure was still in use when I left in 2026.',
      ],
    },
  ],
};
