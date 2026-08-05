'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/** A home path is the bare locale root, e.g. `/en` or `/lt` (or `/`). */
function isHomePath(pathname: string): boolean {
  return pathname.split('/').filter(Boolean).length <= 1;
}

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const onHome = isHomePath(pathname);

  useEffect(() => {
    if (!onHome) return;

    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  // Off the homepage there are no observed sections — report none active.
  return onHome ? activeSection : null;
}
