'use client';

import { usePathname } from 'next/navigation';
import { localeFromPathname } from '@/i18n/routing';
import type { Locale } from '@/i18n/config';

/** Current locale, read from the first path segment. Client components only. */
export function useLocale(): Locale {
  const pathname = usePathname();
  return localeFromPathname(pathname);
}
