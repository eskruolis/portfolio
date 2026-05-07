import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost } from '@/types'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getBlogPost(slug: string): { meta: BlogPost; content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const meta: BlogPost = {
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: computeReadingTime(content),
  }

  return { meta, content }
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
