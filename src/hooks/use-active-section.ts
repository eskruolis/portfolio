'use client'

import { useEffect, useState } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return activeSection
}
