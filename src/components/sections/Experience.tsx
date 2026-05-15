'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { experience } from '@/lib/data';
import { TechPill } from '@/components/shared/TechPill';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="bg-border absolute top-0 bottom-0 left-0 hidden w-px origin-top
        sm:block"
    >
      <motion.div
        style={{ scaleY, transformOrigin: 'top' }}
        className="from-primary/60 to-primary/20 absolute inset-0
          bg-linear-to-b"
      />
    </div>
  );
}

function JobEntry({
  job,
  index,
}: {
  job: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="relative flex flex-col gap-4 sm:flex-row sm:gap-8 sm:pl-6"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="border-primary bg-background absolute top-1 left-[-4px]
          hidden h-2.5 w-2.5 rounded-full border-2 sm:block"
      />

      <p
        className="text-muted-foreground shrink-0 text-xs font-medium
          tracking-widest uppercase sm:w-28 sm:pt-1"
      >
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
              className="hover:text-primary font-semibold transition-colors"
            >
              {job.company}
            </a>
          ) : (
            <span className="font-semibold">{job.company}</span>
          )}
          <p className="text-muted-foreground text-sm">{job.role}</p>
        </div>
        <p className="text-muted-foreground text-sm leading-7">
          {job.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <TechPill key={skill} name={skill} />
          ))}
        </div>
      </div>
    </motion.li>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="max-w-3xl px-8 py-16 lg:px-16"
    >
      <ScrollReveal>
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Experience</h2>
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
  );
}
