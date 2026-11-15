import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';
import type { Dictionary } from '@/i18n/dictionaries';
import type { PortfolioData } from '@/lib/data';

interface StoryProps {
  dict: Dictionary;
  data: PortfolioData;
}

/** Personal background in the owner's own words — plain prose, no cards. */
export function Story({ dict, data }: StoryProps) {
  return (
    <section
      id="story"
      aria-label={dict.story.label}
      className="max-w-5xl px-8 py-20 lg:px-16"
    >
      <ScrollReveal>
        <SectionHeading label={dict.story.label} title={dict.story.title} />
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <div className="flex max-w-2xl flex-col gap-5">
          {data.story.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
