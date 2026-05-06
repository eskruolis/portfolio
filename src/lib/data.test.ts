import { describe, expect, it } from 'vitest'
import { ExperienceSchema, ProjectSchema, SkillSchema } from './data'

describe('ExperienceSchema', () => {
  it('accepts a valid entry', () => {
    const result = ExperienceSchema.safeParse({
      company: 'Acme',
      role: 'Frontend Engineer',
      startDate: '2022-01',
      description: 'Built things.',
      skills: ['React', 'TypeScript'],
    })
    expect(result.success).toBe(true)
  })

  it('rejects an entry missing required fields', () => {
    const result = ExperienceSchema.safeParse({ company: 'Acme' })
    expect(result.success).toBe(false)
  })
})

describe('SkillSchema', () => {
  it('rejects an unknown category', () => {
    const result = SkillSchema.safeParse({ name: 'React', category: 'magic' })
    expect(result.success).toBe(false)
  })
})

describe('ProjectSchema', () => {
  it('rejects a non-URL value for url field', () => {
    const result = ProjectSchema.safeParse({
      title: 'My Project',
      slug: 'my-project',
      description: 'A project.',
      tags: ['Next.js'],
      url: 'not-a-url',
    })
    expect(result.success).toBe(false)
  })
})
