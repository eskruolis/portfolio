'use client'

import Link from 'next/link'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'
import type { NavItem } from '@/types'

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#hero', sectionId: 'hero' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Blog', href: '#blog', sectionId: 'blog' },
]

interface NavProps {
  onItemClick?: () => void
}

export function Nav({ onItemClick }: NavProps) {
  const activeSection = useActiveSection()

  return (
    <nav aria-label="Page sections">
      <ul className="flex flex-col gap-1" role="list">
        {NAV_ITEMS.map((item) => (
          <li key={item.sectionId}>
            <Link
              href={item.href}
              onClick={onItemClick}
              aria-current={activeSection === item.sectionId ? 'location' : undefined}
              className={cn(
                'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
                activeSection === item.sectionId
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground/70',
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
