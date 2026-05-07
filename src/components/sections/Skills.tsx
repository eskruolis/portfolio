'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'
import { TechPill } from '@/components/shared/TechPill'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

const CATEGORY_LABELS: Record<string, string> = {
  frontend: 'Frontend',
  tooling: 'Tooling & DevOps',
  testing: 'Testing',
  backend: 'Backend',
  other: 'Other',
}

const CATEGORY_ORDER = ['frontend', 'tooling', 'testing', 'backend', 'other'] as const

function PillGroup({ names, baseDelay }: { names: string[]; baseDelay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {names.map((name, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: baseDelay + i * 0.05, ease: 'easeOut' }}
        >
          <TechPill name={name} gradient />
        </motion.div>
      ))}
    </div>
  )
}

export function Skills() {
  const grouped = skills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {})

  return (
    <section id="skills" aria-label="Skills" className="py-16 px-8 lg:px-16 max-w-3xl">
      <ScrollReveal>
        <h2 className="text-2xl font-bold tracking-tight mb-8">Skills</h2>
      </ScrollReveal>
      <div className="flex flex-col gap-6">
        {CATEGORY_ORDER.filter((cat) => grouped[cat]?.length).map((category, catIdx) => (
          <ScrollReveal key={category} delay={catIdx * 0.08}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
              {CATEGORY_LABELS[category]}
            </p>
            <PillGroup names={grouped[category]} baseDelay={catIdx * 0.05} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
