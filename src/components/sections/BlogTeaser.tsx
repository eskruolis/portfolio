import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/mdx'

export function BlogTeaser() {
  const posts = getAllBlogPosts().slice(0, 3)

  return (
    <section id="blog" aria-label="Blog" className="py-16 px-8 lg:px-16 max-w-3xl">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Writing</h2>
      <ul className="space-y-8" aria-label="Blog posts">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block space-y-1 rounded-lg p-4 -mx-4 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <p className="text-xs text-muted-foreground">
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
              <h3 className="font-semibold group-hover:text-foreground/80 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.summary}</p>
              <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Tags">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
