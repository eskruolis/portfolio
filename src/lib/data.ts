import { z } from 'zod'

export const ExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string(),
  skills: z.array(z.string()),
  url: z.url().optional(),
})

export const SkillSchema = z.object({
  name: z.string(),
  category: z.enum(['frontend', 'tooling', 'testing', 'backend', 'other']),
})

export const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  url: z.url().optional(),
  repo: z.url().optional(),
  featured: z.boolean().default(false),
})

export const experience: z.infer<typeof ExperienceSchema>[] = [
  {
    company: 'Hypt AG',
    role: 'Senior Frontend Engineer',
    startDate: '2023',
    current: true,
    description:
      "Joined as the sole frontend engineer at a Swiss AI SaaS startup and built the entire product from scratch alongside a single backend engineer. Engineered the Chatbot Builder end-to-end — a fully customisable funnel builder in Angular + Angular Material with RxJS-based state management. Co-designed the REST API, implemented the full auth flow using Ory SDK, and proposed and drove the stack migration to React + Next.js + Tailwind CSS within a Turborepo monorepo. Co-established the Figma design system and led the team's move from Adobe XD to Figma.",
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Turborepo', 'RxJS', 'Ory SDK', 'Figma'],
    url: 'https://hypt.io',
  },
  {
    company: 'Two Flamingos Ltd.',
    role: 'Full Stack Developer & WordPress Expert',
    startDate: '2018',
    endDate: '2022',
    current: false,
    description:
      'Delivered 15+ corporate and e-commerce platforms end-to-end, from architecture to deployment. Specialised in performance optimisation for global brand clients and integrated complex third-party APIs into production environments. Worked directly with clients to translate business requirements into technical decisions.',
    skills: ['JavaScript', 'TypeScript', 'WordPress', 'PHP', 'MySQL', 'REST APIs', 'CSS'],
  },
  {
    company: 'Freelance',
    role: 'Junior Frontend Developer',
    startDate: '2017',
    endDate: '2018',
    current: false,
    description:
      'Web development and UI services for London-based clients. Foundation built entirely through self-directed learning and real project delivery.',
    skills: ['JavaScript', 'HTML & CSS', 'WordPress'],
  },
]

export const skills: z.infer<typeof SkillSchema>[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript (ES6+)', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML & CSS', category: 'frontend' },
  { name: 'RxJS', category: 'frontend' },
  { name: 'Turborepo', category: 'tooling' },
  { name: 'Git', category: 'tooling' },
  { name: 'CI/CD', category: 'tooling' },
  { name: 'AWS', category: 'tooling' },
  { name: 'Figma', category: 'tooling' },
  { name: 'Storybook', category: 'tooling' },
  { name: 'Vitest', category: 'testing' },
  { name: 'React Testing Library', category: 'testing' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'PHP', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'WordPress', category: 'other' },
]

export const projects: z.infer<typeof ProjectSchema>[] = [
  {
    title: 'Portfolio',
    slug: 'portfolio',
    description:
      'This site — a single-scrollable portfolio with sidebar nav, MDX blog, view counters, and OG image generation. Built with Next.js 16, Tailwind v4, and Upstash Redis.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'Upstash Redis'],
    repo: 'https://github.com/eskruolis/my-portfolio',
    featured: true,
  },
  {
    title: 'Angular to React Migration',
    slug: 'angular-to-react-migration',
    description:
      'Case study: incrementally migrating a 200k-LOC Angular monolith to React without a big-bang rewrite. Covered module federation, shared state, and testing strategy.',
    tags: ['React', 'Angular', 'Module Federation', 'TypeScript'],
    featured: true,
  },
  {
    title: 'Component Library',
    slug: 'component-library',
    description:
      'A private design-system built with Radix UI primitives, Tailwind, and Storybook. Consumed by three product teams; ships typed tokens and full a11y coverage.',
    tags: ['React', 'Radix UI', 'Tailwind CSS', 'Storybook', 'TypeScript'],
    featured: false,
  },
]
