# Storybook

Component workbench for building and reviewing UI in isolation. Stories are
co-located with their components as `*.stories.tsx`.

## First-time setup

```bash
pnpm install   # picks up storybook 10, @storybook/nextjs-vite, vite, and the addons
```

## Running

```bash
pnpm storybook         # dev server at http://localhost:6006
pnpm build-storybook   # static build into storybook-static/
```

## Configuration

- `.storybook/main.ts` — framework (`@storybook/nextjs-vite`), story globs,
  addons, and `staticDirs` (serves `public/`).
  The **Vite** builder is used on purpose: the webpack `@storybook/nextjs`
  framework patches Next's SWC loader, which is incompatible with Next.js 16
  (`swc.isWasm is not a function`). `@storybook/nextjs-vite` avoids that patch.
- `.storybook/preview.tsx` — imports `globals.css` (Tailwind v4) and adds a
  Light/Dark theme toolbar that toggles the `dark` class on `<html>`, matching
  the app's class-based dark mode.

## Existing stories

| Story | Component |
|---|---|
| `UI/Button` | `components/ui/button.tsx` (shadcn) — variants, sizes, gradient CTA |
| `Shared/TechPill` | `components/shared/TechPill.tsx` — icon pill, gradient, gallery |
| `Shared/BrandLogo` | `components/shared/BrandLogo.tsx` — sizes |

## Adding a story

Create `MyComponent.stories.tsx` next to the component:

```tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Shared/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
```

## Notes

- The `@storybook/*` versions are pinned to `^10` (the Vite framework requires
  Storybook 10). If `pnpm install` surfaces a peer/version mismatch, run
  `pnpm dlx storybook@latest upgrade` to let Storybook reconcile automatically.
- The Button story documents the shadcn component without editing the managed
  `button.tsx` file.
```
