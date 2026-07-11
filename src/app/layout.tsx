import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Sidebar } from '@/components/layout/Sidebar';
import './globals.css';

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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://portfolio-liart-three-r17ce5t2q7.vercel.app';

const TITLE = 'Eigirdas Skruolis — Senior Full-Stack Engineer';
const DESCRIPTION =
  'Senior full-stack engineer — React, Next.js, TypeScript, Node.js, PostgreSQL. ' +
  'Open to freelance and full-time work. AI-accelerated delivery, engineer-directed at every step.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: '%s | Eigirdas Skruolis',
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
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
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Eigirdas Skruolis',
    images: [
      {
        url: `/og`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`/og`],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Eigirdas Skruolis',
  jobTitle: 'Senior Software Engineer',
  description: DESCRIPTION,
  url: SITE_URL,
  email: 'mailto:eskruolis@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valencia',
    addressCountry: 'ES',
  },
  sameAs: ['https://github.com/eskruolis', 'https://linkedin.com/in/eskruolis'],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'AI-assisted software development',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
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
          Skip to content
        </a>
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
