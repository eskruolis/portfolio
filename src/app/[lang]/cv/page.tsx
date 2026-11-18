import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getData } from '@/lib/data';
import { isEnabledLocale, DEFAULT_LOCALE, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

/**
 * The CV, rendered from the same data as the site so the two cannot drift.
 * It is a light "sheet of paper" on purpose: scripts/generate-cv-pdf.sh prints
 * this route to public/cv.pdf (and cv-<locale>.pdf), which the site links to.
 *
 * Single column, real text, no icons: applicant-tracking systems parse it.
 */

interface CvPageProps {
  params: Promise<{ lang: string }>;
}

const EMAIL = 'eskruolis@gmail.com';
const LINKS = [
  {
    label: 'linkedin.com/in/eskruolis',
    href: 'https://linkedin.com/in/eskruolis',
  },
  { label: 'github.com/eskruolis', href: 'https://github.com/eskruolis' },
  { label: 'eigirdas.dev', href: 'https://eigirdas.dev' },
];

// The phone number is printed only when the server that renders the page has
// CV_PHONE set (i.e. while generating the PDF). It stays out of the repo and
// off the public web page.
const PHONE = process.env.CV_PHONE;

export async function generateMetadata({
  params,
}: CvPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isEnabledLocale(lang) ? lang : DEFAULT_LOCALE;
  const dict = getDictionary(locale);
  return {
    title: dict.cv.title,
    description: getData(locale).cvSummary,
    // The homepage carries the same content; keep the CV out of search results.
    robots: { index: false, follow: true },
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2
        className="mb-2 border-b border-neutral-300 pb-1 font-sans text-xs
          font-bold tracking-widest text-neutral-900 uppercase"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function CvPage({ params }: CvPageProps) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const data = getData(locale);

  const categories = Object.keys(dict.skills.categories) as Array<
    keyof typeof dict.skills.categories
  >;

  return (
    <div className="px-4 py-10 print:p-0">
      <article
        className="cv-sheet mx-auto max-w-[210mm] rounded-sm bg-white px-10
          py-12 font-sans text-xs leading-5 text-neutral-800 print:max-w-none
          print:rounded-none print:p-0"
      >
        <header>
          <h1 className="font-sans text-3xl font-bold text-neutral-900">
            Eigirdas Skruolis
          </h1>
          <p className="mt-1 text-sm font-medium text-neutral-900">
            {dict.hero.role} · React / Next.js / TypeScript / Node.js /
            PostgreSQL
          </p>
          <p className="mt-2 text-neutral-700">
            {dict.cv.location}
            {PHONE && <> · {PHONE}</>} ·{' '}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
            {LINKS.map((link) => (
              <span key={link.href}>
                {' · '}
                <a href={link.href} className="underline">
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        </header>

        <Section title={dict.cv.summary}>
          <p>{data.cvSummary}</p>
        </Section>

        <Section title={dict.cv.experience}>
          {data.experience.map((job) => (
            <div
              key={`${job.company}-${job.startDate}`}
              className="mt-4 first:mt-0"
            >
              <div
                className="flex break-after-avoid flex-wrap items-baseline
                  justify-between gap-x-4"
              >
                <h3 className="font-sans text-sm font-bold text-neutral-900">
                  {job.role} · {job.company}
                </h3>
                <p className="text-neutral-700">
                  {job.startDate} –{' '}
                  {job.current ? dict.experience.present : job.endDate}
                </p>
              </div>
              <p className="mt-1 break-after-avoid">{job.description}</p>
              {job.highlights.length > 0 && (
                <ul className="mt-1.5 list-disc space-y-1 pl-4">
                  {job.highlights.map((item) => (
                    <li key={item} className="break-inside-avoid">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>

        <Section title={dict.cv.skills}>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category} className="break-inside-avoid">
                <span className="font-bold text-neutral-900">
                  {dict.skills.categories[category]}:
                </span>{' '}
                {data.skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => skill.name)
                  .join(', ')}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={dict.cv.education}>
          <ul className="space-y-1">
            {data.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title={dict.cv.languages}>
          <p>{data.languages.join(' · ')}</p>
        </Section>
      </article>
    </div>
  );
}
