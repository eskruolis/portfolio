import { principles } from '@/lib/data';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      aria-label="How I work"
      className="max-w-5xl px-8 py-20 lg:px-16"
    >
      <ScrollReveal>
        <SectionHeading
          label="How I work"
          title="AI-accelerated. Engineer-directed."
          intro="I transitioned early into agentic AI development — not to
            replace engineering judgement, but to multiply it. Agents do the
            typing; I do the thinking, the reviewing, and the shipping."
        />
      </ScrollReveal>

      <ol className="grid gap-5 sm:grid-cols-2" role="list">
        {principles.map((principle, i) => (
          <ScrollReveal key={principle.title} delay={i * 0.08}>
            <li
              className="border-border bg-card card-glow flex h-full gap-5
                rounded-xl border p-6"
            >
              <span
                className="text-primary/60 font-mono text-sm leading-7
                  font-medium"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="mb-2 font-semibold">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-7">
                  {principle.description}
                </p>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </section>
  );
}
