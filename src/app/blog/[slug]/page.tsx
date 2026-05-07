import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { getBlogPost, getBlogSlugs } from '@/lib/mdx'
import { ViewCounter } from '@/components/shared/ViewCounter'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getBlogPost(slug)
    const ogUrl = `/og?title=${encodeURIComponent(meta.title)}&subtitle=${encodeURIComponent(meta.summary)}`
    return {
      title: meta.title,
      description: meta.summary,
      openGraph: {
        title: meta.title,
        description: meta.summary,
        images: [{ url: ogUrl, width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.summary,
        images: [ogUrl],
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  let meta, content
  try {
    ;({ meta, content } = getBlogPost(slug))
  } catch {
    notFound()
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
      <article aria-label={meta.title}>
        <Link
          href="/#blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span aria-hidden>←</span> All posts
        </Link>
        <header className="mb-10">
          <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={meta.date}>
              {new Date(meta.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{meta.readingTime} min read</span>
            <span aria-hidden>·</span>
            <ViewCounter slug={slug} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">{meta.title}</h1>
          {meta.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
              {meta.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </header>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  )
}
