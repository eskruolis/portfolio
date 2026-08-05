import type { Locale } from './config';

/** Per-locale site metadata for <head> (title, description, OG). */
export const siteMeta: Record<
  Locale,
  { title: string; description: string; ogSubtitle: string; homeTitle: string }
> = {
  en: {
    title: 'Eigirdas Skruolis — Senior Full-Stack Engineer',
    homeTitle:
      'Eigirdas Skruolis — Senior Full-Stack Engineer · Freelance',
    description:
      'Senior full-stack engineer — React, Next.js, TypeScript, Node.js, PostgreSQL. Open to freelance and full-time work. AI-accelerated delivery, engineer-directed at every step.',
    ogSubtitle: 'Senior Software Engineer · Full-Stack',
  },
  lt: {
    title: 'Eigirdas Skruolis — Senior Full-Stack inžinierius',
    homeTitle:
      'Eigirdas Skruolis — Senior Full-Stack inžinierius · Freelance',
    description:
      'Senior full-stack inžinierius — React, Next.js, TypeScript, Node.js, PostgreSQL. Priimu freelance ir etatinį darbą. AI pagreitintas pristatymas, kiekvieną žingsnį valdo inžinierius.',
    ogSubtitle: 'Senior programinės įrangos inžinierius · Full-Stack',
  },
};
