import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import type { Dictionary } from '@/i18n/dictionaries';
import type { PortfolioData } from '@/lib/data';

interface HowIWorkProps {
  dict: Dictionary;
  data: PortfolioData;
}

export function HowIWork({ dict, data }: HowIWorkProps) {
  return (
    <section
      id="how-i-work"
      aria-label={dict.howIWork.label}
      className="max-w-5xl px-8 py-20 lg:px-16"
    >
      <ScrollReveal>
        <SectionHeading
          label={dict.howIWork.label}
          title={dict.howIWork.title}
          intro={dict.howIWork.intro}
        />
      </ScrollReveal>

      <ol className="grid gap-5 sm:grid-cols-2" role="list">
        {data.principles.map((principle, i) => (
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
