import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TechPill } from './TechPill';

const meta = {
  title: 'Shared/TechPill',
  component: TechPill,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    gradient: { control: 'boolean' },
  },
  args: {
    name: 'TypeScript',
    gradient: false,
  },
} satisfies Meta<typeof TechPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Gradient: Story = {
  args: { gradient: true },
};

/** A name with no matching icon renders just the label. */
export const NoIcon: Story = {
  args: { name: 'GraphQL' },
};

/** A gallery of every tech that has a mapped icon. */
export const Gallery: Story = {
  render: () => {
    const names = [
      'React',
      'Next.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML & CSS',
      'Turborepo',
      'Git',
      'Figma',
      'Storybook',
      'Vitest',
      'PHP',
      'MySQL',
      'WordPress',
      'CSS',
    ];
    return (
      <div className="flex max-w-xl flex-wrap gap-2">
        {names.map((name) => (
          <TechPill key={name} name={name} />
        ))}
      </div>
    );
  },
};
