# eskruolis.dev

Personal portfolio and engineering blog. Built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4.

**Live:** [eskruolis.dev](https://eskruolis.dev) &nbsp;·&nbsp; **Staging:** [dev.eskruolis.dev](https://dev.eskruolis.dev)

---

## Tech stack

| Layer | Package | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org) | 16.2.4 |
| Runtime | [React](https://react.dev) | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) | ^4 |
| Components | [shadcn/ui](https://ui.shadcn.com) | latest |
| Animation | [Framer Motion](https://www.framer.com/motion/) | latest |
| Blog | [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) | latest |
| Validation | [Zod](https://zod.dev) | latest |
| Database | [Upstash Redis](https://upstash.com) | latest |
| Testing | [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com) | latest |
| Deploy | [Vercel](https://vercel.com) | — |

---

## Local development

**Prerequisites:** Node.js 20+, pnpm

```bash
git clone https://github.com/eskruolis/portfolio
cd portfolio
pnpm install
cp .env.local.example .env.local   # fill in Upstash credentials
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run Vitest |
| `pnpm test:ui` | Vitest with browser UI |

---

## Branch strategy

```
main          production — auto-deploys to eskruolis.dev
dev           staging — auto-deploys to dev.eskruolis.dev
feat/*        new features — branch from dev, PR back to dev
fix/*         bug fixes — branch from dev, PR back to dev
content/*     blog posts and CV data — branch from dev, PR back to dev
chore/*       tooling, config, deps — branch from dev, PR back to dev
refactor/*    code quality — branch from dev, PR back to dev
```

- Never commit directly to `main` or `dev`
- PRs require a passing build before merge
- `dev` → `main` is merged as a release (tagged)

---

## Releases

This project uses [Semantic Versioning](https://semver.org).

| Version bump | When |
|---|---|
| `v1.0.0` | Initial public launch |
| `v1.0.x` | Bug fixes, copy edits, content updates |
| `v1.x.0` | New sections, features, or pages |
| `vX.0.0` | Major redesign or architectural rewrite |

### Cutting a release

1. Merge all intended `feat/*` / `fix/*` branches into `dev` and confirm staging looks good
2. Open a PR from `dev` → `main` titled `release: vX.Y.Z`
3. Merge the PR
4. Create a tag and GitHub release from `main`:

```bash
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin vX.Y.Z
```

5. On GitHub: **Releases → Draft a new release** → select the tag → auto-generate changelog → publish

Vercel deploys `main` to production automatically on merge.

---

## Project structure

```
app/                    Next.js App Router routes
actions/                Server Actions (view counters)
components/
  layout/               Sidebar, Nav, Footer
  sections/             Homepage sections
  ui/                   shadcn/ui — do not edit
  shared/               Reusable project components
content/
  blog/                 MDX blog posts
  projects/             MDX case study pages
hooks/                  Custom React hooks
lib/                    Data, MDX helpers, Redis client, utilities
types/                  Shared TypeScript interfaces
public/                 Static assets including cv.pdf
```

---

## Environment variables

| Variable | Description |
|---|---|
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST endpoint |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis auth token |

Copy `.env.local.example` to `.env.local` and fill in values. Never commit `.env.local`.

---

## Contributing

This is a personal project and not open for feature contributions. Bug reports and accessibility issues are welcome — please [open an issue](https://github.com/eskruolis/portfolio/issues).
