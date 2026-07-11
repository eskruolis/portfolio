import { z } from 'zod';

// ── Schemas ──────────────────────────────────────────────────────────────────

export const ExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string(),
  highlights: z.array(z.string()).default([]),
  skills: z.array(z.string()),
  url: z.url().optional(),
});

export const SkillSchema = z.object({
  name: z.string(),
  category: z.enum([
    'languages',
    'frontend',
    'backend',
    'infra',
    'practices',
    'ai',
  ]),
});

export const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  url: z.url().optional(),
  repo: z.url().optional(),
  featured: z.boolean().default(false),
});

export const WorkProjectSchema = z.object({
  title: z.string(),
  company: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  url: z.url().optional(),
  caseStudy: z.string().optional(),
  private: z.boolean().default(true),
});

export const ServiceSchema = z.object({
  title: z.string(),
  description: z.string(),
  deliverables: z.array(z.string()),
});

export const StatSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const PrincipleSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const CaseStudySchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  company: z.string(),
  year: z.string(),
  role: z.string(),
  tags: z.array(z.string()),
  challenge: z.string(),
  approach: z.array(z.string()),
  outcomes: z.array(z.string()),
});

export const SiteConfigSchema = z.object({
  showBlog: z.boolean().default(true),
  availableForFreelance: z.boolean().default(true),
});

// ── Site config ──────────────────────────────────────────────────────────────

export const siteConfig: z.infer<typeof SiteConfigSchema> =
  SiteConfigSchema.parse({
    showBlog: false,
    availableForFreelance: true,
  });

// ── Hero ─────────────────────────────────────────────────────────────────────

export const stats: z.infer<typeof StatSchema>[] = [
  { value: '8+', label: 'years shipping production software' },
  { value: '15+', label: 'platforms delivered end to end' },
  { value: '-57%', label: 'LCP — cut from 4.2s to 1.8s' },
  { value: '100%', label: 'WCAG conformance, enterprise-grade' },
];

export const clients = ['UBS', 'Raiffeisen', 'Generali', 'Nestlé'];

// ── Services (freelance) ─────────────────────────────────────────────────────

export const services: z.infer<typeof ServiceSchema>[] = [
  {
    title: 'Full-stack product engineering',
    description:
      'From empty repo to production: I design, build, and ship complete web products — frontend, API, database, auth, and deployment. I did exactly this as the first frontend engineer at a Swiss SaaS now relied on by major banks.',
    deliverables: [
      'React / Next.js applications',
      'Node.js REST APIs + PostgreSQL',
      'Authentication & session architecture',
      'AWS / Vercel deployment with CI/CD',
    ],
  },
  {
    title: 'Frontend architecture & migrations',
    description:
      'Legacy stack slowing you down? I plan and execute framework migrations without stopping feature delivery — I led a full Angular → React/Next.js migration to production inside a live enterprise product.',
    deliverables: [
      'Angular → React / Next.js migrations',
      'Monorepo architecture (Turborepo)',
      'Design systems + Storybook',
      'Migration strategy that ships incrementally',
    ],
  },
  {
    title: 'Performance & accessibility',
    description:
      'Speed and compliance as measurable outcomes, not vibes. I profile, restructure, and optimise until Core Web Vitals are green — and I have delivered 100% WCAG conformance for banking-grade clients.',
    deliverables: [
      'Core Web Vitals optimisation (LCP, CLS)',
      'Bundle & network-waterfall reduction',
      'WCAG accessibility audits & fixes',
      'Caching & CDN strategy',
    ],
  },
  {
    title: 'AI-accelerated delivery',
    description:
      'I build with agentic AI workflows — but I direct every step, review every line, and own the result. You get senior-engineer quality at a pace a traditional team of one cannot match.',
    deliverables: [
      'Agentic development workflows',
      'Rapid prototyping → production hardening',
      'Figma-to-code pipelines',
      'AI tooling & workflow consulting',
    ],
  },
];

// ── How I work (AI, engineer-directed) ───────────────────────────────────────

export const principles: z.infer<typeof PrincipleSchema>[] = [
  {
    title: 'AI drafts. I decide.',
    description:
      'Agents generate code fast — but every architectural choice, trade-off, and merge is mine. Eight years of production experience is the filter the output goes through.',
  },
  {
    title: 'Spec before code',
    description:
      'I write precise specifications — requirements, constraints, edge cases — before any agent runs. Tight direction in, quality out. Vague prompts produce vague software.',
  },
  {
    title: 'Guardrails everywhere',
    description:
      'Type-safe schemas, tests, linting, and CI gate everything AI touches. Nothing lands on main without passing the same bar I hold hand-written code to.',
  },
  {
    title: 'Speed you can measure',
    description:
      'The result is a delivery pace that used to need a small team — without sacrificing code review, accessibility, or performance budgets.',
  },
];

// ── Experience ───────────────────────────────────────────────────────────────

export const experience: z.infer<typeof ExperienceSchema>[] = [
  {
    company: 'Hypt AG',
    role: 'Senior Frontend Engineer',
    startDate: '2023',
    current: true,
    description:
      'Swiss conversational-feedback SaaS serving UBS, Raiffeisen, Generali, and Nestlé. Joined as the first frontend engineer and built the entire product from zero alongside a single backend engineer.',
    highlights: [
      'Architected and built the entire frontend, CI/CD pipelines, and core product from zero — now relied on by major Swiss banking and insurance enterprises.',
      'Co-designed and shipped the full REST API with the CTO — powering the funnel builder and real-time analytics dashboards, backed by PostgreSQL.',
      'Engineered the Chatbot Builder end-to-end: a fully customisable funnel builder with RxJS-based state management, from product design to delivery.',
      'Implemented the authentication architecture with Ory SDK — full auth flow, session and cookie handling across the platform.',
      'Delivered 100% WCAG accessibility conformance, meeting the strict standards required by enterprise banking clients.',
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
      'Specialised in performance optimisation for global brand clients — including cutting LCP from 4.2s to 1.8s and bundle size by ~35% on production platforms.',
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
];

// ── Skills ───────────────────────────────────────────────────────────────────

export const skills: z.infer<typeof SkillSchema>[] = [
  { name: 'TypeScript', category: 'languages' },
  { name: 'JavaScript (ES6+)', category: 'languages' },
  { name: 'PHP', category: 'languages' },
  { name: 'SQL', category: 'languages' },
  { name: 'HTML & CSS', category: 'languages' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'RxJS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Storybook', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'REST API design', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Redis', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'AWS', category: 'infra' },
  { name: 'Vercel', category: 'infra' },
  { name: 'CI/CD', category: 'infra' },
  { name: 'Turborepo', category: 'infra' },
  { name: 'Git', category: 'infra' },
  { name: 'Ory SDK', category: 'infra' },
  { name: 'Accessibility (WCAG)', category: 'practices' },
  { name: 'Core Web Vitals', category: 'practices' },
  { name: 'Design systems', category: 'practices' },
  { name: 'Testing (Vitest / RTL)', category: 'practices' },
  { name: 'Figma', category: 'practices' },
  { name: 'Agentic workflows', category: 'ai' },
  { name: 'Claude', category: 'ai' },
  { name: 'AI pair-programming', category: 'ai' },
  { name: 'Figma-to-code', category: 'ai' },
];

// ── Projects ─────────────────────────────────────────────────────────────────

export const projects: z.infer<typeof ProjectSchema>[] = [
  {
    title: 'Portfolio',
    slug: 'portfolio',
    description:
      'This site — a dark, single-scrollable portfolio with case studies, view counters, and OG image generation. Built with Next.js 16, Tailwind v4, and Upstash Redis.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Upstash Redis'],
    repo: 'https://github.com/eskruolis/portfolio',
    featured: true,
  },
];

export const workProjects: z.infer<typeof WorkProjectSchema>[] = [
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
    title: 'Performance Optimisation at Scale',
    company: 'Two Flamingos Ltd.',
    description:
      'Cut LCP from 4.2s to 1.8s and bundle size by ~35% on production client platforms — through waterfall profiling, code-splitting, lazy-loading, payload trimming, and caching/CDN strategy.',
    tags: ['Core Web Vitals', 'JavaScript', 'Caching & CDN'],
    caseStudy: 'performance-optimisation',
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
];

// ── Case studies ─────────────────────────────────────────────────────────────

export const caseStudies: z.infer<typeof CaseStudySchema>[] = [
  {
    slug: 'chatbot-builder',
    title: 'Chatbot Builder',
    subtitle:
      'Building an enterprise conversational-funnel builder from zero — now used by UBS, Raiffeisen, Generali, and Nestlé.',
    company: 'Hypt AG',
    year: '2023 — present',
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
      'Two-person team shipped and operated a product competing with far larger vendors.',
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
      'New stack (React + Next.js + Tailwind) measurably improved developer velocity and hiring reach.',
      'Monorepo architecture still underpins the platform today.',
    ],
  },
  {
    slug: 'performance-optimisation',
    title: 'Performance Optimisation at Scale',
    subtitle:
      'Cutting LCP from 4.2s to 1.8s (-57%) on production platforms for global brand clients.',
    company: 'Two Flamingos Ltd.',
    year: '2018 — 2022',
    role: 'Full-Stack Developer',
    tags: ['Core Web Vitals', 'JavaScript', 'Caching & CDN'],
    challenge:
      'Global brand clients came in with production platforms that looked polished but loaded slowly — heavy bundles, unoptimised images, and chained network requests pushing LCP past 4 seconds and hurting conversion.',
    approach: [
      'Profiled LCP and network waterfalls first — measurement before optimisation, so every change targeted a real bottleneck.',
      'Code-split and lazy-loaded modules, optimised and right-sized images, and trimmed API payloads.',
      'Layered in smart caching and CDN delivery, plus deliberate loading and error states.',
      'Turned the process into a repeatable playbook applied across multiple client platforms.',
    ],
    outcomes: [
      'LCP cut from 4.2s to 1.8s (-57%).',
      'Bundle size reduced by ~35%.',
      'The same discipline now applies to everything I ship — performance budgets from day one, not as a rescue.',
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
