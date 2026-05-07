'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  const initial =
    direction === 'up'
      ? { opacity: 0, y: 32 }
      : direction === 'left'
        ? { opacity: 0, x: -24 }
        : { opacity: 0 }

  const animate = direction === 'up'
    ? { opacity: inView ? 1 : 0, y: inView ? 0 : 32 }
    : direction === 'left'
      ? { opacity: inView ? 1 : 0, x: inView ? 0 : -24 }
      : { opacity: inView ? 1 : 0 }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
