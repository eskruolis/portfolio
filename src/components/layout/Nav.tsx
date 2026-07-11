'use client';

import Link from 'next/link';
import { useActiveSection } from '@/hooks/use-active-section';
import { NAV_ITEMS } from '@/lib/nav';
import { cn } from '@/lib/utils';

interface NavProps {
  onItemClick?: () => void;
}

export function Nav({ onItemClick }: NavProps) {
  const activeSection = useActiveSection();

  return (
    <nav aria-label="Page sections">
      <ul className="flex flex-col gap-0.5" role="list">
        {NAV_ITEMS.map((item) => {
          const active = activeSection === item.sectionId;
          return (
            <li key={item.sectionId}>
              <Link
                href={item.href}
                onClick={onItemClick}
                aria-current={active ? 'location' : undefined}
                className={cn(
                  `group flex items-center gap-3 rounded-md px-3 py-2 text-sm
                  font-medium transition-colors`,
                  `focus-visible:ring-sidebar-ring focus-visible:ring-2
                  focus-visible:outline-none`,
                  active
                    ? 'text-sidebar-primary'
                    : 'text-sidebar-foreground/60 hover:text-sidebar-foreground',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'h-px transition-all duration-300',
                    active
                      ? 'bg-sidebar-primary w-8'
                      : `bg-sidebar-foreground/30
                        group-hover:bg-sidebar-foreground/60 w-4
                        group-hover:w-6`,
                  )}
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
