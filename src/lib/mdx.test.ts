import { describe, it, expect } from 'vitest';
import { getBlogSlugs, getBlogPost, getAllBlogPosts } from './mdx';

describe('getBlogSlugs', () => {
  it('returns at least the two seeded posts', () => {
    const slugs = getBlogSlugs();
    expect(slugs).toContain('angular-to-react-migration');
    expect(slugs).toContain('component-api-design');
  });
});

describe('getBlogPost', () => {
  it('parses frontmatter fields correctly', () => {
    const { meta } = getBlogPost('angular-to-react-migration');
    expect(meta.title).toBe(
      'Migrating a 200k-LOC Angular App to React Without a Big Bang',
    );
    expect(meta.slug).toBe('angular-to-react-migration');
    expect(meta.date).toBe('2025-04-10');
    expect(meta.tags).toContain('React');
    expect(meta.tags).toContain('Angular');
    expect(meta.readingTime).toBeGreaterThanOrEqual(1);
  });

  it('includes the raw MDX body in content', () => {
    const { content } = getBlogPost('component-api-design');
    expect(content.length).toBeGreaterThan(0);
    expect(content).toContain('composition');
  });

  it('throws for a non-existent slug', () => {
    expect(() => getBlogPost('does-not-exist')).toThrow();
  });
});

describe('getAllBlogPosts', () => {
  it('returns posts sorted newest-first', () => {
    const posts = getAllBlogPosts();
    for (let i = 1; i < posts.length; i++) {
      expect(posts[i - 1].date >= posts[i].date).toBe(true);
    }
  });

  it('every post has required fields', () => {
    for (const post of getAllBlogPosts()) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.summary).toBeTruthy();
      expect(Array.isArray(post.tags)).toBe(true);
      expect(post.readingTime).toBeGreaterThanOrEqual(1);
    }
  });
});
