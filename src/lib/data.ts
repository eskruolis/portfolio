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
    company: 'Acme Corp',
    role: 'Senior Frontend Engineer',
    startDate: '2022',
    current: true,
    description:
      'Leading frontend architecture for a SaaS platform serving 50k+ users. Migrated a legacy Angular app to React/Next.js, reducing bundle size by 40% and improving Lighthouse scores from 58 to 94. Introduced Vitest + RTL across the team and established code review standards.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest', 'AWS'],
    url: 'https://example.com',
  },
  {
    company: 'TechStart',
    role: 'Frontend Engineer',
    startDate: '2019',
    endDate: '2022',
    current: false,
    description:
      'Built and maintained Angular applications for fintech clients. Owned the component library shared across three product teams, authored Storybook documentation, and drove the adoption of strict TypeScript across the codebase.',
    skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Storybook', 'SCSS'],
    url: 'https://example.com',
  },
  {
    company: 'Freelance',
    role: 'Frontend Developer',
    startDate: '2017',
    endDate: '2019',
    current: false,
    description:
      'Delivered bespoke web applications for small businesses and startups. Worked across the full stack with Vue and Node.js, managing projects from discovery through deployment.',
    skills: ['Vue.js', 'JavaScript', 'Node.js', 'CSS', 'Figma'],
  },
]

export const skills: z.infer<typeof SkillSchema>[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'HTML & CSS', category: 'frontend' },
  { name: 'Git', category: 'tooling' },
  { name: 'Vite / Webpack', category: 'tooling' },
  { name: 'CI/CD', category: 'tooling' },
  { name: 'Docker', category: 'tooling' },
  { name: 'Vitest', category: 'testing' },
  { name: 'Jest', category: 'testing' },
  { name: 'React Testing Library', category: 'testing' },
  { name: 'Cypress', category: 'testing' },
  { name: 'Node.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Figma', category: 'other' },
  { name: 'Agile / Scrum', category: 'other' },
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
    title: 'Angular → React Migration',
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
