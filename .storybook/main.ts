import type { StorybookConfig } from '@storybook/nextjs-vite';

/**
 * Storybook configuration.
 *
 * Uses the Vite-based Next.js framework (`@storybook/nextjs-vite`) so next/image,
 * next/font, the `@` path alias, and the project's PostCSS/Tailwind v4 pipeline
 * all work inside stories without extra wiring. The Vite builder is used (rather
 * than the webpack `@storybook/nextjs`) because the webpack SWC loader patch is
 * incompatible with Next.js 16. Stories are co-located as `*.stories.tsx`.
 *
 * Docs: https://storybook.js.org/docs/get-started/frameworks/nextjs
 */
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  // Serve files from public/ (profile.png, cv.pdf, icons) at the root.
  staticDirs: ['../public'],
};

export default config;
