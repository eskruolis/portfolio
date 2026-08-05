import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getCaseStudy, caseStudySlugs } from '@/lib/data';
import { isEnabledLocale, DEFAULT_LOCALE, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { localePath } from '@/i18n/routing';
import { TechPill } from '@/components/shared/TechPill';
import { Footer } from '@/components/layout/Footer';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CaseStudyPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  return caseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isEnabledLocale(lang) ? lang : DEFAULT_LOCALE;
  const caseStudy = getCaseStudy(locale, slug);
  if (!caseStudy) return {};
  const dict = getDictionary(locale);

  return {
    title: `${caseStudy.title} — ${dict.caseStudy.metaSuffix}`,
    description: caseStudy.subtitle,
    openGraph: {
      title: `${caseStudy.title} — ${dict.caseStudy.metaSuffix} | Eigirdas Skruolis`,
      description: caseStudy.subtitle,
      images: [
        {
          url: `/og?title=${encodeURIComponent(caseStudy.title)}&subtitle=${encodeURIComponent(dict.caseStudy.metaSuffix)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="section-label mb-4">{label}</h2>
      {children}
    </div>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { lang, slug } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const locale: Locale = lang;
  const caseStudy = getCaseStudy(locale, slug);
  if (!caseStudy) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <article className="max-w-3xl px-8 py-20 lg:px-16">
        <Link
          href={localePath(locale, '/#projects')}
          className="text-muted-foreground hover:text-primary mb-10 inline-flex
            items-center gap-2 text-sm font-medium transition-colors"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-3.5 w-3.5" />
          {dict.caseStudy.back}
        </Link>

        <header className="mb-12">
          <p className="section-label mb-3">{dict.caseStudy.label}</p>
          <h1
            className="text-gradient mb-4 text-3xl font-bold tracking-tight
              sm:text-4xl"
          >
            {caseStudy.title}
          </h1>
          <p className="text-muted-foreground mb-8 text-lg leading-8">
            {caseStudy.subtitle}
          </p>

          <dl
            className="border-border grid grid-cols-1 gap-6 border-y py-6
              sm:grid-cols-3"
          >
            <div>
              <dt
                className="text-muted-foreground mb-1 font-mono text-xs
                  tracking-wider uppercase"
              >
                {dict.caseStudy.company}
              </dt>
              <dd className="text-sm font-medium">{caseStudy.company}</dd>
            </div>
            <div>
              <dt
                className="text-muted-foreground mb-1 font-mono text-xs
                  tracking-wider uppercase"
              >
                {dict.caseStudy.timeline}
              </dt>
              <dd className="text-sm font-medium">{caseStudy.year}</dd>
            </div>
            <div>
              <dt
                className="text-muted-foreground mb-1 font-mono text-xs
                  tracking-wider uppercase"
              >
                {dict.caseStudy.role}
              </dt>
              <dd className="text-sm font-medium">{caseStudy.role}</dd>
            </div>
          </dl>
        </header>

        <Block label={dict.caseStudy.challenge}>
          <p className="text-muted-foreground leading-8">
            {caseStudy.challenge}
          </p>
        </Block>

        <Block label={dict.caseStudy.approach}>
          <ul className="flex flex-col gap-4" role="list">
            {caseStudy.approach.map((item) => (
              <li
                key={item}
                className="text-muted-foreground before:bg-primary/50 relative
                  pl-5 leading-7 before:absolute before:top-3 before:left-0
                  before:h-1 before:w-2.5 before:rounded-full
                  before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </Block>

        <Block label={dict.caseStudy.outcome}>
          <ul className="flex flex-col gap-3" role="list">
            {caseStudy.outcomes.map((item) => (
              <li
                key={item}
                className="border-border bg-card rounded-lg border p-4 text-sm
                  leading-7"
              >
                {item}
              </li>
            ))}
          </ul>
        </Block>

        <Block label={dict.caseStudy.stack}>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <TechPill key={tag} name={tag} />
            ))}
          </div>
        </Block>

        <div className="border-border mt-16 rounded-xl border p-8">
          <h2 className="font-display mb-2 text-xl font-semibold">
            {dict.caseStudy.ctaTitle}
          </h2>
          <p className="text-muted-foreground mb-6 text-sm leading-7">
            {dict.caseStudy.ctaBody}
          </p>
          <a
            href="mailto:eskruolis@gmail.com?subject=Project%20enquiry"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'btn-gradient gap-2 px-5',
            )}
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
            {dict.caseStudy.ctaButton}
          </a>
        </div>
      </article>
      <Footer dict={dict} />
    </>
  );
}
