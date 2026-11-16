import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Sidebar } from '@/components/layout/Sidebar';
import { CardSpotlight } from '@/components/shared/CardSpotlight';
import {
  DEFAULT_LOCALE,
  ENABLED_LOCALES,
  isEnabledLocale,
  type Locale,
} from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { localePath } from '@/i18n/routing';
import { siteMeta } from '@/i18n/metadata';
import '../globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const viewport: Viewport = {
  themeColor: '#0e0f13',
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eigirdas.dev';

export function generateStaticParams() {
  return ENABLED_LOCALES.map((lang) => ({ lang }));
}

/** hreflang alternates: one entry per enabled locale + x-default → default. */
function languageAlternates(path = '/') {
  const languages: Record<string, string> = {};
  for (const l of ENABLED_LOCALES) {
    languages[l] = localePath(l, path);
  }
  languages['x-default'] = localePath(DEFAULT_LOCALE, path);
  return languages;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isEnabledLocale(lang) ? lang : DEFAULT_LOCALE;
  const meta = siteMeta[locale];

  return {
    title: {
      default: meta.title,
      template: '%s | Eigirdas Skruolis',
    },
    description: meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: localePath(locale, '/'),
      languages: languageAlternates('/'),
    },
    keywords: [
      'Senior Software Engineer',
      'Full-Stack Developer',
      'Freelance Developer',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AI-assisted development',
    ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localePath(locale, '/'),
      siteName: 'Eigirdas Skruolis',
      locale: locale === 'lt' ? 'lt_LT' : 'en_US',
      images: [
        {
          url: `/og?subtitle=${encodeURIComponent(meta.ogSubtitle)}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`/og?subtitle=${encodeURIComponent(meta.ogSubtitle)}`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const meta = siteMeta[locale];

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Eigirdas Skruolis',
    jobTitle: 'Senior Software Engineer',
    description: meta.description,
    url: SITE_URL,
    email: 'mailto:eskruolis@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valencia',
      addressCountry: 'ES',
    },
    sameAs: [
      'https://github.com/eskruolis',
      'https://linkedin.com/in/eskruolis',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AI-assisted software development',
    ],
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable}
        ${jetbrainsMono.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="focus:bg-background focus:ring-ring sr-only
            focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
            focus:rounded-md focus:px-4 focus:py-2 focus:text-sm
            focus:font-medium focus:ring-2"
        >
          {locale === 'lt' ? 'Pereiti prie turinio' : 'Skip to content'}
        </a>
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar locale={locale} dict={dict} />
            <main
              id="main-content"
              className="relative isolate flex-1 overflow-x-clip"
            >
              {/* Ambient light: pinned to the viewport, confined to <main> */}
              <div
                aria-hidden="true"
                className="page-ambient pointer-events-none sticky top-0 -z-20
                  -mb-[100vh] h-screen print:hidden"
              />
              {children}
            </main>
            <CardSpotlight />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
