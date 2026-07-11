import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLayerGroup,
  faArrowsRotate,
  faGaugeHigh,
  faWandMagicSparkles,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { services } from '@/lib/data';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/shared/SectionHeading';

const SERVICE_ICONS: IconDefinition[] = [
  faLayerGroup,
  faArrowsRotate,
  faGaugeHigh,
  faWandMagicSparkles,
];

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="max-w-5xl px-8 py-20 lg:px-16"
    >
      <ScrollReveal>
        <SectionHeading
          label="Services"
          title="What I can build for you"
          intro="I work across the full stack — greenfield products, rescues,
            migrations, and performance work on existing codebases. Available
            as a freelancer or contractor, and equally open to committing
            full-time to one ambitious product."
        />
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.08}>
            <article
              className="border-border bg-card card-glow flex h-full flex-col
                gap-4 rounded-xl border p-6"
            >
              <div
                className="bg-primary/10 text-primary flex h-10 w-10
                  items-center justify-center rounded-lg"
                aria-hidden="true"
              >
                <FontAwesomeIcon
                  icon={SERVICE_ICONS[i] ?? faLayerGroup}
                  className="h-4.5 w-4.5"
                />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-muted-foreground grow text-sm leading-7">
                {service.description}
              </p>
              <ul className="flex flex-col gap-2" role="list">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground flex items-start gap-2.5
                      text-sm"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-primary mt-1 h-3 w-3 shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
