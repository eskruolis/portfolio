'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faEnvelope, faMoon, faSun, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Nav } from './Nav'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div className="flex h-full flex-col gap-8 px-6 py-8">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-medium uppercase tracking-widest text-sidebar-foreground/50">
          Portfolio
        </p>
        <Link
          href="/"
          className="text-lg font-semibold text-sidebar-foreground hover:text-sidebar-primary transition-colors"
        >
          Eigirdas Skruolis
        </Link>
        <p className="text-sm text-sidebar-foreground/60">Senior Frontend Engineer</p>
      </div>

      <Nav onItemClick={onClose} />

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/eskruolis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-md p-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          >
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/eskruolis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
          </a>
          <a
            href="mailto:eskruolis@gmail.com"
            aria-label="Send email"
            className="rounded-md p-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
          </a>
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            className="ml-auto rounded-md p-2 text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          >
            <FontAwesomeIcon
              icon={resolvedTheme === 'dark' ? faSun : faMoon}
              className="h-4 w-4"
            />
          </button>
        </div>

        <a
          href="/cv.pdf"
          download="Eigirdas_Skruolis_CV.pdf"
          className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'w-full gap-2')}
        >
          <FontAwesomeIcon icon={faDownload} className="h-3.5 w-3.5" />
          Download CV
        </a>
      </div>
    </div>
  )
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        aria-label="Site navigation"
        className="hidden lg:flex lg:w-64 xl:w-72 shrink-0 sticky top-0 h-screen flex-col overflow-y-auto bg-sidebar border-r border-sidebar-border"
      >
        <SidebarContent />
      </aside>

      {/* Mobile hamburger button */}
      <button
        aria-label="Open navigation menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-40 rounded-md bg-background p-2 text-foreground shadow-sm ring-1 ring-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          className="lg:hidden fixed inset-0 z-50"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <aside
            aria-label="Site navigation"
            className="absolute left-0 top-0 h-full w-72 overflow-y-auto bg-sidebar border-r border-sidebar-border"
          >
            <button
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 rounded-md p-2 text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
            >
              <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
            </button>
            <SidebarContent onClose={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}
    </>
  )
}
