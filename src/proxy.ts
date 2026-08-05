import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, ENABLED_LOCALES, type Locale } from '@/i18n/config';

/**
 * Locale routing (Next 16 renamed middleware → proxy).
 * Every enabled locale lives under a `/[lang]` prefix. Requests without one are
 * redirected to the best-matching locale, detected from the Accept-Language
 * header and falling back to DEFAULT_LOCALE.
 */

function pathnameHasLocale(pathname: string): boolean {
  return ENABLED_LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
}

/** Pick the best enabled locale from an Accept-Language header. */
function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const primary = tag.split('-')[0];
    const match = ENABLED_LOCALES.find((l) => l === primary);
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathnameHasLocale(pathname)) return;

  const locale = detectLocale(request.headers.get('accept-language'));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the OG route, and any file with an extension
  // (favicon.ico, icon.svg, apple-icon.png, robots.txt, sitemap.xml, cv.pdf…).
  matcher: ['/((?!_next|og|.*\\.).*)'],
};
