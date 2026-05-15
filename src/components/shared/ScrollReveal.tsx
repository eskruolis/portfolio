'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'none';
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const hidden =
    direction === 'up'
      ? { opacity: 0, y: 24 }
      : direction === 'left'
        ? { opacity: 0, x: -20 }
        : { opacity: 0 };

  const visible =
    direction === 'up'
      ? { opacity: 1, y: 0 }
      : direction === 'left'
        ? { opacity: 1, x: 0 }
        : { opacity: 1 };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
