import { DEFAULT_LOCALE, ENABLED_LOCALES, hasLocale, type Locale } from './config';

/**
 * Prefix an internal app path with a locale segment.
 * Pure — safe on the server and the client. Never pass public assets
 * (e.g. `/cv.pdf`) through this; those are not localized routes.
 *
 *   localePath('en', '/')          -> '/en'
 *   localePath('lt', '/#projects') -> '/lt#projects'
 *   localePath('en', '/work/x')    -> '/en/work/x'
 */
export function localePath(locale: Locale, path = '/'): string {
  if (path === '/' || path === '') return `/${locale}`;
  // '/#hero' -> '/en#hero'  (drop the leading slash before the hash)
  if (path.startsWith('/#')) return `/${locale}${path.slice(1)}`;
  if (path.startsWith('#')) return `/${locale}${path}`;
  return `/${locale}${path}`;
}

/**
 * Public path of the CV PDF for a locale. A static asset generated from the
 * /[lang]/cv route by scripts/generate-cv-pdf.sh — not a localized route.
 */
export function cvPdfPath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/cv.pdf' : `/cv-${locale}.pdf`;
}

/** File name offered to the browser when the CV is downloaded. */
export function cvDownloadName(locale: Locale): string {
  const suffix = locale === DEFAULT_LOCALE ? '' : `_${locale.toUpperCase()}`;
  return `Eigirdas_Skruolis_CV${suffix}.pdf`;
}

/** Read the locale from a pathname's first segment, falling back to default. */
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return first && hasLocale(first) ? first : DEFAULT_LOCALE;
}

/**
 * Swap the locale segment of a pathname, preserving the rest of the path.
 * Used by the language switcher.
 *
 *   switchLocalePath('/en/work/x', 'lt') -> '/lt/work/x'
 *   switchLocalePath('/en', 'lt')        -> '/lt'
 *   switchLocalePath('/', 'lt')          -> '/lt'
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && hasLocale(segments[0])) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return `/${segments.join('/')}`;
}

/** Locales to expose to routing / SEO — the enabled set, default first. */
export function routableLocales(): Locale[] {
  return [
    DEFAULT_LOCALE,
    ...ENABLED_LOCALES.filter((l) => l !== DEFAULT_LOCALE),
  ].filter((l) => ENABLED_LOCALES.includes(l));
}
