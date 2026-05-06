<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Portfolio — project context

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16 App Router | RSC by default. `"use client"` only when necessary |
| Language | TypeScript (strict) | No `any`. No `@ts-ignore` without an explaining comment |
| Styling | Tailwind CSS v4 | Utility-first. No inline styles except dynamic values |
| Components | shadcn/ui | Lives in `components/ui/`. Never edit these files directly |
| Animation | Framer Motion | Page transitions + scroll reveals only. No gratuitous animation |
| Blog | MDX + next-mdx-remote | Content in `content/blog/*.mdx` |
| Validation | Zod | All data shapes validated — including `lib/data.ts` |
| DB | Upstash Redis | View counters only. Client in `lib/redis.ts` |
| Testing | Vitest + React Testing Library | Integration tests over unit tests |
| Deploy | Vercel | `main` = production, `dev` = staging |

## Folder structure

```
app/
  layout.tsx              Root layout — ThemeProvider, Sidebar, fonts
  page.tsx                Single scrollable homepage
  blog/[slug]/            Blog post pages (SSG via generateStaticParams)
  projects/[slug]/        Case study pages (SSG via generateStaticParams)
  uses/                   Dev setup / workflow page
  og/route.tsx            OG image generation API route
actions/
  views.ts                Server Action: increment Upstash view counter
components/
  layout/                 Sidebar, Nav, Footer — shared shell
  sections/               Hero, Skills, Experience, Projects, BlogTeaser
  ui/                     shadcn components — DO NOT EDIT
  shared/                 Reusable project-specific components
content/
  blog/                   .mdx blog posts
  projects/               .mdx case study pages
hooks/
  use-active-section.ts   IntersectionObserver — tracks active sidebar nav item
  use-media-query.ts      Responsive breakpoint detection
lib/
  data.ts                 Zod-typed experience, skills, projects data
  mdx.ts                  MDX parsing helpers
  redis.ts                Upstash Redis client
  utils.ts                cn() and shared utilities
types/
  index.ts                Shared TypeScript interfaces and types
public/
  cv.pdf                  Downloadable CV
```

## Conventions

### TypeScript
- Strict mode on. No `any` — use `unknown` and narrow it
- All data shapes in `types/index.ts` or co-located with their module
- Zod schemas in `lib/data.ts` for all structured data
- `interface` for object shapes, `type` for unions and aliases

### React / Next.js
- Default to React Server Components
- Add `"use client"` only for: browser APIs, event handlers, React hooks
- `generateStaticParams` required on all `[slug]` routes
- `metadata` exported from every page file
- `next/image` for all images — never raw `<img>`
- `next/link` for all internal navigation — never raw `<a>`

### Styling
- Tailwind utility classes only
- No arbitrary values (`w-[347px]`) unless genuinely necessary
- Dark mode via `dark:` prefix — ThemeProvider handles the toggle
- Responsive: mobile-first (`sm:`, `md:`, `lg:`)
- shadcn component variants over custom CSS when possible

### Naming
- Components: `PascalCase` (`ExperienceTimeline.tsx`)
- Hooks: `camelCase` prefixed with `use-` in filename (`use-active-section.ts`)
- Utilities: `camelCase` (`formatDate`, `cn`)
- Constants: `SCREAMING_SNAKE_CASE`
- MDX files: `kebab-case` (`angular-to-react-migration.mdx`)

### Git
- Branch from `dev`, not `main`
- Branch naming: `feat/`, `fix/`, `chore/`, `content/`, `refactor/`
- Conventional commits: `feat(sidebar): add active section highlight`
- Never commit directly to `main` or `dev`
- PRs require passing build before merge

## Accessibility
- Semantic HTML always — `<nav>`, `<main>`, `<article>`, `<section>` with `aria-label`
- Skip-to-content link in root layout
- All interactive elements keyboard navigable
- Images have meaningful alt text (not "image of...")
- Focus rings visible — never `outline: none` without a replacement

## What NOT to do
- Do not add `"use client"` to layout, page, or data-fetching components
- Do not use `any` type — ever
- Do not edit files in `components/ui/` — these are shadcn managed
- Do not use `<img>` — use `next/image`
- Do not use `<a>` for internal links — use `next/link`
- Do not add packages without checking if the functionality already exists
- Do not hardcode content — all CV data lives in `lib/data.ts`
- Do not write tests that only verify a component renders — test behaviour
- Do not commit `.env.local` — it is gitignored
- Do not use `console.log` in production code — remove before committing

## Testing approach
Focus on integration tests that cover real user flows:

| Subject | What to test |
|---|---|
| `hooks/use-active-section` | Correct section active state on scroll |
| `blog/[slug]` | MDX renders, view counter increments |
| Project filter | Tag filter shows correct cards |
| Sidebar nav | Keyboard navigation works, mobile drawer opens |
| CV download | Button fires, link resolves correctly |

Test files live alongside their subject: `use-active-section.test.ts`
