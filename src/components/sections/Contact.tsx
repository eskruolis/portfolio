'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { buttonVariants } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { cn } from '@/lib/utils';

const PLACEHOLDERS = [
  "Hey, we're building something cool...",
  'I have a role that might interest you...',
  'Can we grab a virtual coffee?',
  'I loved your blog post on...',
];

export function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

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
      className="max-w-3xl px-8 py-16 lg:px-16"
    >
      <ScrollReveal>
        <h2 className="mb-2 text-2xl font-bold tracking-tight">
          Let&apos;s talk
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-muted-foreground mb-10 max-w-lg leading-7">
          Got an interesting role, a project that needs a frontend mind, or just
          want to say hi? I&apos;m always up for a good conversation —
          don&apos;t be shy.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <form onSubmit={handleSubmit} className="flex max-w-lg flex-col gap-4">
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
                focus:border-primary focus:ring-primary w-full rounded-lg border
                px-3 pt-6 pb-2 text-sm transition-colors outline-none
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
              {
                PLACEHOLDERS[
                  Math.floor(Date.now() / 10000) % PLACEHOLDERS.length
                ]
              }
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
              'btn-gradient gap-2 self-start',
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
    </section>
  );
}
