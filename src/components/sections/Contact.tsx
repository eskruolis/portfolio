'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { buttonVariants } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AvailabilityBadge } from '@/components/shared/AvailabilityBadge';
import { cn } from '@/lib/utils';

const PLACEHOLDERS = [
  'We need a full-stack engineer for...',
  "Here's the product we're building...",
  'Our frontend needs rescuing...',
  'Can we grab a virtual coffee?',
];

export function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  // Rotate the message placeholder while the field is untouched
  useEffect(() => {
    const id = setInterval(
      () => setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Hey Eigirdas — from ${name || 'your portfolio'}`,
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:eskruolis@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="max-w-5xl px-8 py-20 lg:px-16"
    >
      <ScrollReveal>
        <AvailabilityBadge className="mb-6" />
        <SectionHeading
          label="Contact"
          title="Let's build something"
          intro="I'm open to freelance and contract work — or committing my
            time fully to one big project as part of your team. Full products,
            migrations, performance rescues, or a senior full-stack hire. Tell
            me what you're building and I'll tell you honestly whether I'm the
            right person for it."
        />
      </ScrollReveal>

      <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex max-w-lg flex-col gap-4"
          >
            {/* Name */}
            <div className="relative">
              <label
                htmlFor="contact-name"
                className={cn(
                  `text-muted-foreground pointer-events-none absolute left-3
                  transition-all duration-200`,
                  focused === 'name' || name
                    ? 'top-1.5 text-xs'
                    : 'top-3.5 text-sm',
                )}
              >
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className="border-border bg-card text-foreground
                  focus:border-primary focus:ring-primary w-full rounded-lg
                  border px-3 pt-6 pb-2 text-sm transition-colors outline-none
                  focus:ring-1"
                autoComplete="name"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label
                htmlFor="contact-message"
                className={cn(
                  `text-muted-foreground pointer-events-none absolute left-3
                  transition-all duration-200`,
                  focused === 'message' || message
                    ? 'top-1.5 text-xs'
                    : 'top-3.5 text-sm',
                )}
              >
                {PLACEHOLDERS[placeholderIdx]}
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                rows={5}
                required
                className="border-border bg-card text-foreground
                  focus:border-primary focus:ring-primary w-full resize-none
                  rounded-lg border px-3 pt-6 pb-2 text-sm transition-colors
                  outline-none focus:ring-1"
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'btn-gradient gap-2 self-start px-5',
              )}
            >
              <motion.span
                animate={sent ? { rotate: [0, 20, -10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
              </motion.span>
              {sent ? 'Opening your mail app...' : 'Send message'}
            </motion.button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col gap-4 text-sm">
            <p
              className="text-muted-foreground font-mono text-xs tracking-wider
                uppercase"
            >
              Or reach me directly
            </p>
            <a
              href="mailto:eskruolis@gmail.com"
              className="text-foreground hover:text-primary flex items-center
                gap-3 transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
              eskruolis@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/eskruolis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary flex items-center
                gap-3 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
              linkedin.com/in/eskruolis
            </a>
            <a
              href="https://github.com/eskruolis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary flex items-center
                gap-3 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
              github.com/eskruolis
            </a>
            <p className="text-muted-foreground mt-2 max-w-xs leading-6">
              Based in Valencia, Spain (CET) — working with teams across Europe
              and beyond.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
