import { useEffect, type ReactNode } from 'react';
import type { Preview, Decorator } from '@storybook/nextjs-vite';
import '../src/app/globals.css';

/**
 * Applies the `dark` class to <html> based on the toolbar theme switcher, so
 * stories can be previewed in both light and dark mode (the app uses a
 * class-based dark mode via next-themes).
 *
 * The hook lives in a real component (not the decorator function itself) to
 * satisfy the react-hooks lint rule.
 */
function ThemeWrapper({ theme, children }: { theme: string; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return <>{children}</>;
}

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) ?? 'light';

  return (
    <ThemeWrapper theme={theme}>
      <Story />
    </ThemeWrapper>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  globalTypes: {
    theme: {
      description: 'Light or dark theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
