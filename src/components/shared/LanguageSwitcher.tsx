'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ENABLED_LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/config';
import { switchLocalePath } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

/** Locale toggle. Renders nothing when only one language is enabled. */
export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  if (ENABLED_LOCALES.length <= 1) return null;

  function switchTo(target: Locale) {
    if (target === locale) return;
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    router.push(switchLocalePath(pathname, target) + hash);
  }

  return (
    <div
      className="bg-muted flex w-fit gap-0.5 rounded-lg p-0.5"
      role="group"
      aria-label={label}
    >
      {ENABLED_LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            aria-current={active ? 'true' : undefined}
            className={cn(
              `rounded-md px-2.5 py-1 font-mono text-xs font-medium
              transition-colors`,
              'focus-visible:ring-sidebar-ring focus-visible:ring-2 focus-visible:outline-none',
              active
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {LOCALE_LABELS[l]}
          </button>
        );
      })}
    </div>
  );
}
