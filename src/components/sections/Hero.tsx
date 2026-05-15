'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEnvelope,
  faXmark,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { buttonVariants } from '@/components/ui/button';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { cn } from '@/lib/utils';

function FloatingShape({
  cx,
  cy,
  r,
  delay,
  duration,
}: {
  cx: number;
  cy: number;
  r: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      className="fill-primary/10"
      animate={{ cy: [cy - 8, cy + 8, cy - 8] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

function HeroSVG() {
  const bracketVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.4, delay, ease: 'easeInOut' },
    }),
  };

  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full select-none"
    >
      <FloatingShape cx={340} cy={40} r={28} delay={0} duration={5.2} />
      <FloatingShape cx={30} cy={160} r={16} delay={1.1} duration={6.8} />
      <FloatingShape cx={370} cy={170} r={10} delay={0.6} duration={4.5} />
      <FloatingShape cx={160} cy={10} r={8} delay={1.8} duration={7.1} />

      <motion.path
        d="M 72 40 Q 56 40 56 56 L 56 92 Q 56 110 40 110 Q 56 110 56 128 L 56 164 Q 56 180 72 180"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-primary/30"
        variants={bracketVariants}
        initial="hidden"
        animate="visible"
        custom={0.2}
      />
      <motion.path
        d="M 328 40 Q 344 40 344 56 L 344 92 Q 344 110 360 110 Q 344 110 344 128 L 344 164 Q 344 180 328 180"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-primary/30"
        variants={bracketVariants}
        initial="hidden"
        animate="visible"
        custom={0.5}
      />
      <motion.rect
        x="196"
        y="94"
        width="3"
        height="22"
        rx="1"
        className="fill-primary/60"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: [1, 0, 0, 1] }}
      />
    </svg>
  );
}

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
          {/* Header */}
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

          {/* PDF embed */}
          <iframe
            src="/cv.pdf"
            className="min-h-0 w-full flex-1"
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
        className="relative max-w-4xl overflow-hidden px-8 py-24 lg:px-16"
      >
        <HeroSVG />

        <div className="relative z-10 flex items-center justify-between gap-10">
          <div className="min-w-0 flex-1">
            <BrandLogo size={48} className="mb-6 lg:hidden" />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground mb-4 text-xs font-medium
                tracking-widest uppercase"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Eigirdas Skruolis
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-muted-foreground mb-6 text-xl"
            >
              Senior Frontend Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground mb-10 max-w-xl text-base
                leading-8"
            >
              I build fast, accessible web applications with React, Next.js, and
              TypeScript — and reach for shadcn/ui and Figma when the design
              side needs attention. Formerly deep in Angular, now fully invested
              in the React ecosystem. I genuinely enjoy understanding how things
              work under the hood, communicating across teams, and never shy
              away from a hard problem. That curiosity is what makes this job
              exciting.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="mailto:eskruolis@gmail.com"
                className={cn(
                  buttonVariants({ variant: 'default', size: 'lg' }),
                  'btn-gradient gap-2',
                )}
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                Get in touch
              </a>
              <button
                onClick={() => setCvOpen(true)}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'gap-2',
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
            className="hidden shrink-0 lg:block"
          >
            <Image
              src="/profile.png"
              alt="Eigirdas Skruolis"
              width={300}
              height={360}
              className="rounded-2xl object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </section>

      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </>
  );
}
