import { z } from 'zod'

const RepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable(),
  html_url: z.string(),
  homepage: z.string().nullable(),
  language: z.string().nullable(),
  topics: z.array(z.string()),
  stargazers_count: z.number(),
  fork: z.boolean(),
  archived: z.boolean(),
})

export type GitHubRepo = z.infer<typeof RepoSchema>

const EXCLUDED = new Set(['.github', 'regenerate-post-permalinks'])

function languageToTag(lang: string | null): string[] {
  if (!lang) return []
  const map: Record<string, string> = {
    TypeScript: 'TypeScript',
    JavaScript: 'JavaScript',
    PHP: 'PHP',
    CSS: 'CSS',
    HTML: 'HTML & CSS',
  }
  return [map[lang] ?? lang]
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const res = await fetch(
    'https://api.github.com/users/eskruolis/repos?sort=updated&per_page=30&type=public',
    { headers, next: { revalidate: 3600 } },
  )

  if (!res.ok) return []

  const raw = await res.json()
  const parsed = z.array(RepoSchema).safeParse(raw)
  if (!parsed.success) return []

  return parsed.data.filter(
    (r) => !r.fork && !r.archived && !EXCLUDED.has(r.name) && r.description,
  )
}

export function repoToTags(repo: GitHubRepo): string[] {
  const tags = new Set<string>()
  languageToTag(repo.language).forEach((t) => tags.add(t))
  repo.topics.forEach((t) => tags.add(t.replace(/-/g, ' ')))
  return Array.from(tags)
}
