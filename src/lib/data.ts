import { z } from 'zod';
import type { Locale } from '@/i18n/config';
import { enContent } from './data.en';
import { ltContent } from './data.lt';

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
  /** What the number measures. */
  label: z.string(),
  /** Where it comes from and how it was achieved. */
  detail: z.string(),
});

export const LifecycleLayerSchema = z.object({
  title: z.string(),
  proof: z.string(),
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
  /** What the work did not solve, or has not proven yet. */
  stillOpen: z.string().optional(),
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

// ── Language-neutral data (shared across locales) ────────────────────────────
// Names, tech terms, and proper nouns don't translate — kept here so the
// localized data files (data.en.ts / data.lt.ts) only carry prose.

export const clients = ['UBS', 'Raiffeisen', 'Generali', 'Nestlé'];

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
  { name: 'Medusa', category: 'backend' },
  { name: 'REST API design', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Redis', category: 'backend' },
  { name: 'Meilisearch', category: 'backend' },
  { name: 'Stripe', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'AWS', category: 'infra' },
  { name: 'Vercel', category: 'infra' },
  { name: 'Railway', category: 'infra' },
  { name: 'Cloudflare', category: 'infra' },
  { name: 'Docker', category: 'infra' },
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
  { name: 'AI image pipelines', category: 'ai' },
];

// ── Localized data bundle ────────────────────────────────────────────────────
// Per-locale prose lives in data.en.ts / data.lt.ts. Structural fields (slugs,
// tags, dates, urls, companies) must stay identical across locales — the parity
// test in lib/data.test.ts enforces that.

/** The prose-bearing, per-locale slice of the portfolio data. */
export interface LocaleContent {
  stats: z.infer<typeof StatSchema>[];
  /** The web-software layers I own, each with one piece of real evidence. */
  lifecycle: z.infer<typeof LifecycleLayerSchema>[];
  /** CV-only content: the summary paragraph, education and spoken languages. */
  cvSummary: string;
  education: string[];
  languages: string[];
  services: z.infer<typeof ServiceSchema>[];
  principles: z.infer<typeof PrincipleSchema>[];
  experience: z.infer<typeof ExperienceSchema>[];
  projects: z.infer<typeof ProjectSchema>[];
  workProjects: z.infer<typeof WorkProjectSchema>[];
  caseStudies: z.infer<typeof CaseStudySchema>[];
}

/** The full data bundle a page consumes: locale content + shared neutral data. */
export interface PortfolioData extends LocaleContent {
  clients: string[];
  skills: z.infer<typeof SkillSchema>[];
}

const content: Record<Locale, LocaleContent> = {
  en: enContent,
  lt: ltContent,
};

/** Full portfolio data for a locale (localized prose + shared neutral data). */
export function getData(locale: Locale): PortfolioData {
  return { ...content[locale], clients, skills };
}

/** A single case study by slug, in the given locale. */
export function getCaseStudy(locale: Locale, slug: string) {
  return content[locale].caseStudies.find((cs) => cs.slug === slug);
}

/** Slugs are locale-neutral — used for generateStaticParams. */
export function caseStudySlugs(): string[] {
  return enContent.caseStudies.map((cs) => cs.slug);
}
