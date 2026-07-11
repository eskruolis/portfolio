'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEnvelope,
  faXmark,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { buttonVariants } from '@/components/ui/button';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { AvailabilityBadge } from '@/components/shared/AvailabilityBadge';
import { stats, clients } from '@/lib/data';
import { cn } from '@/lib/utils';

function CVModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-background/80 fixed inset-0 z-50 flex items-center
          justify-center p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="border-border bg-card relative flex max-h-[90vh] w-full
            max-w-3xl flex-col overflow-hidden rounded-xl border shadow-2xl"
        >
          <div
            className="border-border flex shrink-0 items-center justify-between
              border-b px-5 py-4"
          >
            <p className="text-sm font-medium">Eigirdas Skruolis — CV</p>
            <div className="flex items-center gap-2">
              <a
                href="/cv.pdf"
                download="Eigirdas_Skruolis_CV.pdf"
                className={cn(
                  buttonVariants({ variant: 'default', size: 'sm' }),
                  'btn-gradient gap-2',
                )}
              >
                <FontAwesomeIcon icon={faDownload} className="h-3.5 w-3.5" />
                Download
              </a>
              <button
                onClick={onClose}
                aria-label="Close CV preview"
                className="text-muted-foreground hover:text-foreground
                  hover:bg-muted focus-visible:ring-ring rounded-md p-2
                  transition-colors focus-visible:ring-2
                  focus-visible:outline-none"
              >
                <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
              </button>
            </div>
          </div>

          <iframe
            src="/cv.pdf"
            className="min-h-0 w-full flex-1 bg-white"
            style={{ height: '75vh' }}
            title="Eigirdas Skruolis CV"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Hero() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <section
        id="hero"
        aria-label="Introduction"
        className="relative max-w-5xl overflow-hidden px-8 pt-24 pb-16 lg:px-16"
      >
        {/* Backdrop: grid + glow */}
        <div
          aria-hidden="true"
          className="grid-pattern pointer-events-none absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="accent-glow pointer-events-none absolute -top-40 -left-40
            h-[36rem] w-[36rem]"
        />

        <div className="relative z-10 flex items-start justify-between gap-12">
          <div className="min-w-0 flex-1">
            <BrandLogo size={44} className="mb-6 lg:hidden" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-6"
            >
              <AvailabilityBadge />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gradient mb-4 text-4xl font-bold tracking-tight
                sm:text-6xl"
            >
              Eigirdas Skruolis
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="section-label mb-6"
            >
              Senior Software Engineer · Full-Stack
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-muted-foreground mb-10 max-w-xl text-base
                leading-8"
            >
              I build and ship production web software end to end — React and
              Next.js frontends, Node.js APIs, PostgreSQL, auth, and cloud
              deployment. Most recently the first frontend engineer at a Swiss
              SaaS platform trusted by major banks and insurers — built from
              zero to production. I deliver at AI speed with agentic workflows —{' '}
              <span className="text-foreground font-medium">
                directed and reviewed by me at every step
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:eskruolis@gmail.com?subject=Project%20enquiry"
                className={cn(
                  buttonVariants({ variant: 'default', size: 'lg' }),
                  'btn-gradient gap-2 px-5',
                )}
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                Start a project
              </a>
              <button
                onClick={() => setCvOpen(true)}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'gap-2 px-5',
                )}
              >
                <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
                View CV
              </button>
            </motion.div>
          </div>

          {/* Photo — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden shrink-0 xl:block"
          >
            <div
              className="ring-border rounded-2xl p-1 ring-1 transition-shadow
                duration-300
                hover:shadow-[0_0_40px_-8px_oklch(0.84_0.14_165_/_0.3)]"
            >
              <Image
                src="/profile.png"
                alt="Eigirdas Skruolis"
                width={280}
                height={336}
                className="rounded-xl object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="border-border relative z-10 mt-16 grid grid-cols-2 gap-8
            border-t pt-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd
                className="font-display text-primary text-3xl font-bold
                  tracking-tight"
              >
                {stat.value}
              </dd>
              <dd className="text-muted-foreground mt-1 text-xs leading-5">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* Client trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="relative z-10 mt-12"
        >
          <p className="text-muted-foreground/70 mb-3 text-xs">
            Built products relied on by teams at
          </p>
          <ul
            className="flex flex-wrap items-center gap-x-8 gap-y-2"
            role="list"
          >
            {clients.map((client) => (
              <li
                key={client}
                className="font-display text-muted-foreground text-lg
                  font-semibold tracking-wide"
              >
                {client}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </>
  );
}
