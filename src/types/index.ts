import type {
  CaseStudySchema,
  ExperienceSchema,
  PrincipleSchema,
  ProjectSchema,
  ServiceSchema,
  SkillSchema,
  StatSchema,
  WorkProjectSchema,
} from '@/lib/data';
import type { z } from 'zod';

export type Experience = z.infer<typeof ExperienceSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type WorkProject = z.infer<typeof WorkProjectSchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type Stat = z.infer<typeof StatSchema>;
export type Principle = z.infer<typeof PrincipleSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: number;
}
