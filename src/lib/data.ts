import { z } from 'zod'

export const ExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string(),
  skills: z.array(z.string()),
  url: z.string().url().optional(),
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
  url: z.string().url().optional(),
  repo: z.string().url().optional(),
  featured: z.boolean().default(false),
})

export const experience = [
  // add entries here
] satisfies z.infer<typeof ExperienceSchema>[]

export const skills = [
  // add entries here
] satisfies z.infer<typeof SkillSchema>[]

export const projects = [
  // add entries here
] satisfies z.infer<typeof ProjectSchema>[]
