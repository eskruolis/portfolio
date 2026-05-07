'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { experience } from '@/lib/data'
import { TechPill } from '@/components/shared/TechPill'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="absolute left-0 top-0 bottom-0 w-px bg-border origin-top hidden sm:block">
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="absolute inset-0 bg-linear-to-b from-primary/60 to-primary/20"
      />
    </div>
  )
}

function JobEntry({ job, index }: { job: typeof experience[0]; index: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col gap-4 sm:flex-row sm:gap-8 relative sm:pl-6"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="absolute left-[-4px] top-1 h-2.5 w-2.5 rounded-full border-2 border-primary bg-background hidden sm:block"
      />

      <p className="shrink-0 text-xs font-medium uppercase tracking-widest text-muted-foreground sm:w-28 sm:pt-1">
        {job.startDate}
        {' — '}
        {job.current ? 'Present' : job.endDate}
      </p>

      <div className="flex flex-col gap-3">
        <div>
          {job.url ? (
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              {job.company}
            </a>
          ) : (
            <span className="font-semibold">{job.company}</span>
          )}
          <p className="text-sm text-muted-foreground">{job.role}</p>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{job.description}</p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <TechPill key={skill} name={skill} />
          ))}
        </div>
      </div>
    </motion.li>
  )
}

export function Experience() {
  return (
    <section id="experience" aria-label="Work experience" className="py-16 px-8 lg:px-16 max-w-3xl">
      <ScrollReveal>
        <h2 className="text-2xl font-bold tracking-tight mb-8">Experience</h2>
      </ScrollReveal>
      <div className="relative">
        <TimelineLine />
        <ol className="flex flex-col gap-12 sm:pl-6" aria-label="Work history">
          {experience.map((job, i) => (
            <JobEntry key={job.company} job={job} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}
