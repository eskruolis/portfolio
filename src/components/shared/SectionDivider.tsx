'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Boundary between two homepage sections: a gradient hairline that draws in
 * from its accent end, with a soft pool of light behind it so the canvas is
 * not one flat colour. `flip` mirrors it, so consecutive dividers alternate.
 */
export function SectionDivider({ flip = false }: { flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} aria-hidden="true" className="relative mx-8 lg:mx-16">
      {/* Light behind the boundary, on the accent side */}
      <div
        className={cn(
          'pointer-events-none absolute -top-56 -z-10 h-[30rem] w-[44rem]',
          'max-w-full',
          flip ? 'accent-glow-cool right-0' : 'accent-glow left-0',
        )}
      />

      <motion.div
        className={cn(
          'via-border h-px to-transparent',
          flip
            ? 'from-primary/60 origin-right bg-linear-to-l'
            : 'from-primary/60 origin-left bg-linear-to-r',
        )}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      {/* Glowing node at the accent end */}
      <motion.span
        className={cn(
          'bg-primary divider-node absolute top-0 size-1.5 -translate-y-1/2',
          'rounded-full',
          flip ? 'right-0' : 'left-0',
        )}
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}
      />
    </div>
  );
}
