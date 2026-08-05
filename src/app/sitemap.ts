import type { MetadataRoute } from 'next';
import { ENABLED_LOCALES } from '@/i18n/config';
import { localePath } from '@/i18n/routing';
import { caseStudySlugs, siteConfig } from '@/lib/data';
import { getBlogSlugs } from '@/lib/mdx';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eigirdas.dev';

const abs = (path: string) => `${SITE_URL}${path}`;

/** Language alternates (hreflang) for a locale-neutral path. */
function alternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of ENABLED_LOCALES) {
    languages[locale] = abs(localePath(locale, path));
  }
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Locale-neutral paths, expanded per enabled locale below.
  const paths = [
    '/',
    ...caseStudySlugs().map((slug) => `/work/${slug}`),
    ...(siteConfig.showBlog
      ? getBlogSlugs().map((slug) => `/blog/${slug}`)
      : []),
  ];

  return paths.flatMap((path) =>
    ENABLED_LOCALES.map((locale) => ({
      url: abs(localePath(locale, path)),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
      alternates: { languages: alternates(path) },
    })),
  );
}
