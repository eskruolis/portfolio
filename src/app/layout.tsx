import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Sidebar } from '@/components/layout/Sidebar'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  axes: ['opsz'],
})

const dmMono = DM_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f2ede3' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1712' },
  ],
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-liart-three-r17ce5t2q7.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'Eigirdas Skruolis — Senior Frontend Engineer',
    template: '%s | Eigirdas Skruolis',
  },
  description:
    'Senior Frontend Engineer specialising in React, Next.js, and TypeScript. Portfolio, blog, and case studies.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Eigirdas Skruolis — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specialising in React, Next.js, and TypeScript. Portfolio, blog, and case studies.',
    url: SITE_URL,
    siteName: 'Eigirdas Skruolis',
    images: [
      {
        url: `/og`,
        width: 1200,
        height: 630,
        alt: 'Eigirdas Skruolis — Senior Frontend Engineer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eigirdas Skruolis — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specialising in React, Next.js, and TypeScript. Portfolio, blog, and case studies.',
    images: [`/og`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:ring-2 focus:ring-ring"
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
  )
}
