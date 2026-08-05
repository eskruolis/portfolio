import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import { getBlogPost, getBlogSlugs } from '@/lib/mdx';
import { ViewCounter } from '@/components/shared/ViewCounter';
import { isEnabledLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { localePath } from '@/i18n/routing';

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getBlogPost(slug);
    const ogUrl = `/og?title=${encodeURIComponent(meta.title)}&subtitle=${encodeURIComponent(meta.summary)}`;
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
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = await params;
  if (!isEnabledLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const dateLocale = locale === 'lt' ? 'lt-LT' : 'en-GB';

  let meta, content;
  try {
    ({ meta, content } = getBlogPost(slug));
  } catch {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 lg:py-24">
      <article aria-label={meta.title}>
        <Link
          href={localePath(locale, '/#blog')}
          className="text-muted-foreground hover:text-foreground mb-8
            inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <span aria-hidden>←</span> {dict.blog.allPosts}
        </Link>
        <header className="mb-10">
          <div
            className="text-muted-foreground mb-3 flex items-center gap-3
              text-sm"
          >
            <time dateTime={meta.date}>
              {new Date(meta.date).toLocaleDateString(dateLocale, {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span aria-hidden>·</span>
            <span>
              {meta.readingTime} {dict.blog.minRead}
            </span>
            <span aria-hidden>·</span>
            <ViewCounter slug={slug} dict={dict} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            {meta.title}
          </h1>
          {meta.tags.length > 0 && (
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label={dict.blog.tagsAria}
            >
              {meta.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-secondary text-secondary-foreground rounded-full
                    px-3 py-1 text-xs font-medium"
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
  );
}
