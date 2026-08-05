/**
 * i18n configuration — single source of truth for locales.
 *
 * `ENABLED_LOCALES` is the toggle: it drives routing (`generateStaticParams`),
 * the proxy redirect, the language switcher, and the SEO alternates. Set it to
 * `['en']` to ship English-only — Lithuanian routes 404, the switcher hides, and
 * the site behaves exactly as it did before i18n. Add a new language by dropping
 * in its dictionary + `data.<x>.ts` and appending its code here.
 */

export const LOCALES = ['en', 'lt'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** The lever: which locales are live. Order controls switcher order. */
export const ENABLED_LOCALES: Locale[] = ['en', 'lt'];

/** Human-readable names for the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  lt: 'Lietuvių',
};

/** Short labels (e.g. for a compact switcher). */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  lt: 'LT',
};

/** Type guard: is this string one of our known locales? */
export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Is this locale both known and currently enabled? */
export function isEnabledLocale(value: string): value is Locale {
  return hasLocale(value) && ENABLED_LOCALES.includes(value);
}
