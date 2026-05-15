'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function SectionDivider({ flip = false }: { flip?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const dotPositions = flip
    ? [
        { cx: 80, delay: 0.6 },
        { cx: 40, delay: 0.8 },
      ]
    : [
        { cx: 320, delay: 0.6 },
        { cx: 360, delay: 0.8 },
      ];

  return (
    <div aria-hidden="true" className="mx-8 lg:mx-16">
      <svg
        ref={ref}
        viewBox="0 0 400 16"
        fill="none"
        className="w-full overflow-visible"
        style={{ height: '16px' }}
      >
        {/* Main line draws in from center */}
        <motion.line
          x1={flip ? 400 : 0}
          y1="8"
          x2={flip ? 0 : 400}
          y2="8"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-border"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {/* Accent dot at the active end */}
        <motion.circle
          cx={flip ? 400 : 0}
          cy="8"
          r="2"
          className="fill-primary/40"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.9 }}
        />

        {/* Two small floating dots near the accent end */}
        {dotPositions.map(({ cx, delay }) => (
          <motion.circle
            key={cx}
            cx={cx}
            cy="8"
            r="1.5"
            className="fill-primary/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              inView
                ? {
                    opacity: [0, 0.6, 0.3],
                    scale: [0, 1, 1],
                    cy: [8, 5, 8],
                  }
                : {}
            }
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
