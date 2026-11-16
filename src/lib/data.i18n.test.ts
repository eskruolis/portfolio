import { describe, expect, it } from 'vitest';
import { getData, caseStudySlugs } from './data';
import { ENABLED_LOCALES } from '@/i18n/config';

/**
 * Structural parity across locales. Prose differs between languages, but the
 * shape and all language-neutral fields (slugs, tags, dates, companies, skill
 * categories) must be identical — otherwise a locale-prefixed route or a tag
 * filter silently breaks in one language.
 */
describe('locale data parity', () => {
  const en = getData('en');

  it('every enabled locale has the same collection lengths', () => {
    for (const locale of ENABLED_LOCALES) {
      const d = getData(locale);
      expect(d.services).toHaveLength(en.services.length);
      expect(d.principles).toHaveLength(en.principles.length);
      expect(d.experience).toHaveLength(en.experience.length);
      expect(d.workProjects).toHaveLength(en.workProjects.length);
      expect(d.caseStudies).toHaveLength(en.caseStudies.length);
      expect(d.stats).toHaveLength(en.stats.length);
      expect(d.lifecycle).toHaveLength(en.lifecycle.length);
      expect(d.story).toHaveLength(en.story.length);
      expect(d.personal).toHaveLength(en.personal.length);
      expect(d.education).toHaveLength(en.education.length);
      expect(d.languages).toHaveLength(en.languages.length);
    }
  });

  it('lifecycle layers name the same projects across locales', () => {
    for (const locale of ENABLED_LOCALES) {
      const d = getData(locale);
      d.lifecycle.forEach((layer, i) => {
        expect(layer.projects).toEqual(en.lifecycle[i].projects);
      });
    }
  });

  it('case study slugs and tags match across locales', () => {
    for (const locale of ENABLED_LOCALES) {
      const d = getData(locale);
      d.caseStudies.forEach((cs, i) => {
        expect(cs.slug).toBe(en.caseStudies[i].slug);
        expect(cs.tags).toEqual(en.caseStudies[i].tags);
        // approach/outcomes must have matching item counts (lists line up)
        expect(cs.approach).toHaveLength(en.caseStudies[i].approach.length);
        expect(cs.outcomes).toHaveLength(en.caseStudies[i].outcomes.length);
      });
    }
  });

  it('work project tags and companies match across locales', () => {
    for (const locale of ENABLED_LOCALES) {
      const d = getData(locale);
      d.workProjects.forEach((p, i) => {
        expect(p.tags).toEqual(en.workProjects[i].tags);
        expect(p.company).toBe(en.workProjects[i].company);
        expect(p.caseStudy).toBe(en.workProjects[i].caseStudy);
      });
    }
  });

  it('experience dates, companies and skills match across locales', () => {
    for (const locale of ENABLED_LOCALES) {
      const d = getData(locale);
      d.experience.forEach((job, i) => {
        expect(job.company).toBe(en.experience[i].company);
        expect(job.startDate).toBe(en.experience[i].startDate);
        expect(job.skills).toEqual(en.experience[i].skills);
      });
    }
  });

  it('caseStudySlugs() are locale-neutral and resolve in every locale', () => {
    const slugs = caseStudySlugs();
    expect(slugs.length).toBeGreaterThan(0);
    for (const locale of ENABLED_LOCALES) {
      const localeSlugs = getData(locale).caseStudies.map((cs) => cs.slug);
      expect(localeSlugs).toEqual(slugs);
    }
  });
});
