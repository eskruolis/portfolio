import type { ExperienceSchema, ProjectSchema, SkillSchema } from '@/lib/data'
import type { z } from 'zod'

export type Experience = z.infer<typeof ExperienceSchema>
export type Project = z.infer<typeof ProjectSchema>
export type Skill = z.infer<typeof SkillSchema>

export interface NavItem {
  label: string
  href: string
  sectionId: string
}
