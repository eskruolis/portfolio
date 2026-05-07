'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { projects } from '@/lib/data'
import { TechPill } from '@/components/shared/TechPill'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLLIElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    setTilt({ x, y })
  }

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{
        perspective: 800,
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-shadow duration-300 hover:shadow-lg cursor-default"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold">{project.title}</h3>
        <div className="flex shrink-0 gap-1">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm leading-6 text-muted-foreground grow">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <TechPill key={tag} name={tag} />
        ))}
      </div>
    </motion.li>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="py-16 px-8 lg:px-16 max-w-3xl">
      <ScrollReveal>
        <h2 className="text-2xl font-bold tracking-tight mb-8">Projects</h2>
      </ScrollReveal>
      <ul className="grid gap-4 sm:grid-cols-2" role="list">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </ul>
    </section>
  )
}
