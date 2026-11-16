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
| Component dev | Storybook (`@storybook/nextjs-vite`) | Vite builder (webpack `@storybook/nextjs` breaks on Next 16). Stories co-located as `*.stories.tsx`. Run with `pnpm storybook` |
| Deploy | Vercel | `main` = production; every PR gets a Vercel preview deployment |

## Folder structure

```
src/
  proxy.ts                  Locale routing (Next 16 proxy): redirects unprefixed paths to /en or /lt
  app/
    [lang]/
      layout.tsx            Root layout per locale — html lang, ThemeProvider, Sidebar, fonts, JSON-LD, hreflang metadata
      page.tsx              Single scrollable homepage
      blog/[slug]/          Blog post pages (SSG; hidden via siteConfig.showBlog)
      work/[slug]/          Case study pages (SSG, from the locale's caseStudies)
    og/route.tsx            OG image generation API route
    robots.ts, sitemap.ts   Per-locale robots + sitemap with hreflang alternates
  i18n/
    config.ts               LOCALES, DEFAULT_LOCALE, ENABLED_LOCALES (the language toggle)
    dictionaries/{en,lt}.ts UI microcopy — en.ts defines the shape, lt.ts is type-checked against it
    routing.ts, metadata.ts localePath() helpers, per-locale site metadata
  actions/
    views.ts                Server Action: increment Upstash view counter
  components/
    layout/                 Sidebar, Nav, Footer, ThemeProvider — shared shell
    sections/               Hero, Services, HowIWork, Skills, Experience, Projects, Contact, BlogTeaser
    ui/                     shadcn components — DO NOT EDIT
    shared/                 Reusable project-specific components (AvailabilityBadge, SectionHeading, TechPill, ScrollReveal…)
  content/
    blog/                   .mdx blog posts
  hooks/
    use-active-section.ts   IntersectionObserver — tracks active sidebar nav item
    use-media-query.ts      Responsive breakpoint detection (useSyncExternalStore)
  lib/
    data.ts                 Zod schemas, siteConfig, shared skills/clients, getData(locale)
    data.en.ts, data.lt.ts  Localized CV content — slugs/tags/dates must match (parity test)
    mdx.ts                  MDX parsing helpers
    redis.ts                Upstash Redis client
    utils.ts                cn() and shared utilities
  types/
    index.ts                Shared TypeScript interfaces and types
  test/
    setup.ts                Vitest global setup
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
- **Dark-only theme** — ThemeProvider forces `dark`; the palette in `globals.css` is a single dark set (near-black canvas, emerald `--primary` accent). No light mode, no toggle
- Display font: Space Grotesk (`font-display`, auto-applied to h1–h3); body: Inter; mono accents: JetBrains Mono (`.section-label`)
- Reusable theme classes in `globals.css`: `.section-label`, `.text-gradient`, `.accent-glow`, `.grid-pattern`, `.card-glow`, `.availability-dot`
- Responsive: mobile-first (`sm:`, `md:`, `lg:`)
- shadcn component variants over custom CSS when possible

### Buttons and interactive elements — gradient rule
Every primary call-to-action (default variant buttons, primary `<a>` styled as a button) **must** include the `btn-gradient` class alongside the shadcn variant:

```tsx
// correct
className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'btn-gradient gap-2')}

// wrong — missing gradient
className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'gap-2')}
```

The `btn-gradient` class is defined in `src/app/globals.css` and uses `--btn-gradient` / `--btn-gradient-hover` CSS variables (emerald → teal accent gradient). Do **not** apply it to:
- `outline` or `ghost` variant buttons — these intentionally have no fill
- Icon-only utility buttons (theme toggle, close/hamburger icons)

### Naming
- Components: `PascalCase` (`ExperienceTimeline.tsx`)
- Hooks: `camelCase` prefixed with `use-` in filename (`use-active-section.ts`)
- Utilities: `camelCase` (`formatDate`, `cn`)
- Constants: `SCREAMING_SNAKE_CASE`
- MDX files: `kebab-case` (`angular-to-react-migration.mdx`)

### Git
- **No `dev` branch in this repo.** It's a small personal site: branch from `main` and open PRs straight into `main`. The Vercel preview on the PR is the staging check. This overrides any general "PRs go to `dev`" rule. (GitHub auto-deletes merged head branches here, which is why a long-lived `dev` kept disappearing.)
- Branch naming: `feat/`, `fix/`, `chore/`
- Conventional commits: `feat(sidebar): add active section highlight`
- Never commit directly to `main`. Every change goes through a PR
- PRs require passing CI (lint, type-check, build, tests) before merge

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
- Do not hardcode content — CV data lives in `lib/data.en.ts` + `lib/data.lt.ts` (both, always), UI copy in `i18n/dictionaries/`
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
