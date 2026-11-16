import type { NavItem } from '@/types';
import { siteConfig } from '@/lib/data';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localePath } from '@/i18n/routing';

/**
 * Build the localized nav. Section IDs must match the `id` attributes on the
 * corresponding <section> elements in app/[lang]/page.tsx. Hrefs are prefixed
 * with the active locale so in-page anchors stay within the current language.
 */
export function getNavItems(dict: Dictionary, locale: Locale): NavItem[] {
  return [
    { label: dict.nav.about, sectionId: 'hero' },
    { label: dict.nav.services, sectionId: 'services' },
    { label: dict.nav.howIWork, sectionId: 'how-i-work' },
    { label: dict.nav.skills, sectionId: 'skills' },
    { label: dict.nav.story, sectionId: 'story' },
    { label: dict.nav.experience, sectionId: 'experience' },
    { label: dict.nav.work, sectionId: 'projects' },
    ...(siteConfig.showBlog
      ? [{ label: dict.nav.blog, sectionId: 'blog' }]
      : []),
    { label: dict.nav.contact, sectionId: 'contact' },
  ].map((item) => ({
    ...item,
    href: localePath(locale, `/#${item.sectionId}`),
  }));
}
