'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';
import { TechPill } from '@/components/shared/TechPill';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';

const CATEGORY_LABELS: Record<string, string> = {
  languages: 'Languages & Core',
  frontend: 'Frontend',
  backend: 'Backend & Data',
  infra: 'Auth & Infrastructure',
  practices: 'Engineering Practices',
  ai: 'AI-Assisted Development',
};

const CATEGORY_ORDER = [
  'frontend',
  'backend',
  'languages',
  'infra',
  'practices',
  'ai',
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
            delay: baseDelay + i * 0.04,
            ease: 'easeOut',
          }}
        >
          <TechPill name={name} />
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
      className="max-w-5xl px-8 py-20 lg:px-16"
    >
      <ScrollReveal>
        <SectionHeading
          label="Skills"
          title="A full-stack toolkit"
          intro="Most of the technologies out there, one engineer. If your
            stack isn't listed, I've probably shipped something adjacent to
            it — adapting fast is the actual skill."
        />
      </ScrollReveal>
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {CATEGORY_ORDER.filter((cat) => grouped[cat]?.length).map(
          (category, catIdx) => (
            <ScrollReveal key={category} delay={catIdx * 0.06}>
              <p
                className="text-muted-foreground mb-3 font-mono text-xs
                  font-medium tracking-widest uppercase"
              >
                {CATEGORY_LABELS[category]}
              </p>
              <PillGroup names={grouped[category]} baseDelay={catIdx * 0.04} />
            </ScrollReveal>
          ),
        )}
      </div>
    </section>
  );
}
