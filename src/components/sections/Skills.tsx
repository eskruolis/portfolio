'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';
import { TechPill } from '@/components/shared/TechPill';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const CATEGORY_LABELS: Record<string, string> = {
  frontend: 'Frontend',
  tooling: 'Tooling & DevOps',
  testing: 'Testing',
  backend: 'Backend',
  other: 'Other',
};

const CATEGORY_ORDER = [
  'frontend',
  'tooling',
  'testing',
  'backend',
  'other',
] as const;

function PillGroup({
  names,
  baseDelay,
}: {
  names: string[];
  baseDelay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="flex flex-wrap gap-2">
      {names.map((name, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            duration: 0.35,
            delay: baseDelay + i * 0.05,
            ease: 'easeOut',
          }}
        >
          <TechPill name={name} gradient />
        </motion.div>
      ))}
    </div>
  );
}

export function Skills() {
  const grouped = skills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="max-w-3xl px-8 py-16 lg:px-16"
    >
      <ScrollReveal>
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Skills</h2>
      </ScrollReveal>
      <div className="flex flex-col gap-6">
        {CATEGORY_ORDER.filter((cat) => grouped[cat]?.length).map(
          (category, catIdx) => (
            <ScrollReveal key={category} delay={catIdx * 0.08}>
              <p
                className="text-muted-foreground mb-3 text-xs font-medium
                  tracking-widest uppercase"
              >
                {CATEGORY_LABELS[category]}
              </p>
              <PillGroup names={grouped[category]} baseDelay={catIdx * 0.05} />
            </ScrollReveal>
          ),
        )}
      </div>
    </section>
  );
}
