'use client';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faEnvelope,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { Nav } from './Nav';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { AvailabilityBadge } from '@/components/shared/AvailabilityBadge';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { cvDownloadName, cvPdfPath, localePath } from '@/i18n/routing';

const DRAWER_ID = 'mobile-nav-drawer';

interface SidebarProps {
  locale: Locale;
  dict: Dictionary;
}

function SidebarContent({
  locale,
  dict,
  onClose,
}: SidebarProps & { onClose?: () => void }) {
  return (
    <div className="flex h-full flex-col gap-8 px-6 py-8">
      <div className="flex flex-col gap-3">
        <Link
          href={localePath(locale, '/')}
          className="group flex w-fit items-center gap-2.5"
        >
          <BrandLogo size={28} />
          <span
            className="text-sidebar-foreground group-hover:text-sidebar-primary
              font-display text-lg font-semibold transition-colors"
          >
            Eigirdas Skruolis
          </span>
        </Link>
        <p className="text-sidebar-foreground/60 text-sm">
          {dict.sidebar.role}
          <span className="text-sidebar-foreground/40 block text-xs">
            {dict.sidebar.roleSub}
          </span>
        </p>
        <AvailabilityBadge
          label={dict.common.availability}
          compact
          className="w-fit"
        />
      </div>

      <Nav dict={dict} locale={locale} onItemClick={onClose} />

      <div className="mt-auto flex flex-col gap-4">
        <LanguageSwitcher locale={locale} label={dict.languageSwitcher.label} />

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/eskruolis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.sidebar.githubAria}
            className="text-sidebar-foreground/60 hover:bg-sidebar-accent
              hover:text-sidebar-accent-foreground
              focus-visible:ring-sidebar-ring rounded-md p-2 transition-colors
              focus-visible:ring-2 focus-visible:outline-none"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/eskruolis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.sidebar.linkedinAria}
            className="text-sidebar-foreground/60 hover:bg-sidebar-accent
              hover:text-sidebar-accent-foreground
              focus-visible:ring-sidebar-ring rounded-md p-2 transition-colors
              focus-visible:ring-2 focus-visible:outline-none"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
          </a>
          <a
            href="mailto:eskruolis@gmail.com"
            aria-label={dict.sidebar.emailAria}
            className="text-sidebar-foreground/60 hover:bg-sidebar-accent
              hover:text-sidebar-accent-foreground
              focus-visible:ring-sidebar-ring rounded-md p-2 transition-colors
              focus-visible:ring-2 focus-visible:outline-none"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
          </a>
        </div>

        <a
          href={cvPdfPath(locale)}
          download={cvDownloadName(locale)}
          className={cn(
            buttonVariants({ variant: 'default', size: 'sm' }),
            'btn-gradient w-full gap-2',
          )}
        >
          <FontAwesomeIcon icon={faDownload} className="h-3.5 w-3.5" />
          {dict.sidebar.downloadCv}
        </a>
      </div>
    </div>
  );
}

export function Sidebar({ locale, dict }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    // Move focus into the drawer when it opens
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      // Focus trap: keep Tab cycling within the drawer
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        );
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        aria-label={dict.common.siteNavigation}
        className="bg-sidebar border-sidebar-border sticky top-0 hidden h-screen
          shrink-0 flex-col overflow-y-auto border-r lg:flex lg:w-64 xl:w-72
          print:hidden"
      >
        <SidebarContent locale={locale} dict={dict} />
      </aside>

      {/* Mobile hamburger button */}
      <button
        ref={hamburgerRef}
        aria-label={dict.sidebar.openMenu}
        aria-expanded={mobileOpen}
        aria-controls={DRAWER_ID}
        onClick={() => setMobileOpen(true)}
        className="bg-background text-foreground ring-border
          focus-visible:ring-ring fixed top-4 right-4 z-40 rounded-md p-2
          shadow-sm ring-1 focus-visible:ring-2 focus-visible:outline-none
          lg:hidden print:hidden"
      >
        <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-label={dict.sidebar.menuLabel}
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop */}
          <div
            className="bg-background/80 absolute inset-0 backdrop-blur-sm"
            onClick={() => {
              setMobileOpen(false);
              hamburgerRef.current?.focus();
            }}
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <aside
            id={DRAWER_ID}
            ref={drawerRef}
            aria-label={dict.common.siteNavigation}
            className="bg-sidebar border-sidebar-border absolute top-0 left-0
              h-full w-72 overflow-y-auto border-r"
          >
            <button
              ref={closeButtonRef}
              aria-label={dict.sidebar.closeMenu}
              onClick={() => {
                setMobileOpen(false);
                hamburgerRef.current?.focus();
              }}
              className="text-sidebar-foreground/60 hover:bg-sidebar-accent
                hover:text-sidebar-accent-foreground
                focus-visible:ring-sidebar-ring absolute top-4 right-4
                rounded-md p-2 focus-visible:ring-2 focus-visible:outline-none"
            >
              <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
            </button>
            <SidebarContent
              locale={locale}
              dict={dict}
              onClose={() => {
                setMobileOpen(false);
                hamburgerRef.current?.focus();
              }}
            />
          </aside>
        </div>
      )}
    </>
  );
}
