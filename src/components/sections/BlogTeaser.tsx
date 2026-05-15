import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/mdx';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function BlogTeaser() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section
      id="blog"
      aria-label="Blog"
      className="max-w-3xl px-8 py-16 lg:px-16"
    >
      <ScrollReveal>
        <h2 className="mb-8 text-2xl font-bold tracking-tight">Writing</h2>
      </ScrollReveal>
      <ul className="space-y-8" aria-label="Blog posts">
        {posts.map((post, i) => (
          <ScrollReveal key={post.slug} delay={i * 0.1}>
            <li>
              <Link
                href={`/blog/${post.slug}`}
                className="group hover:bg-muted/50 focus-visible:ring-ring -mx-4
                  block space-y-1 rounded-lg p-4 transition-colors
                  focus-visible:ring-2 focus-visible:outline-none"
              >
                <p className="text-muted-foreground text-xs">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span aria-hidden> · </span>
                  {post.readingTime} min read
                </p>
                <h3
                  className="group-hover:text-foreground/80 font-semibold
                    transition-colors"
                >
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 text-sm">
                  {post.summary}
                </p>
                <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Tags">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-secondary text-secondary-foreground
                        rounded-full px-2.5 py-0.5 text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
