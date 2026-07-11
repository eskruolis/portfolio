import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BrandLogo } from './BrandLogo';

const meta = {
  title: 'Shared/BrandLogo',
  component: BrandLogo,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 256, step: 4 } },
  },
  args: {
    size: 32,
  },
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  args: { size: 96 },
};

/** A range of sizes side by side. */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <BrandLogo size={24} />
      <BrandLogo size={48} />
      <BrandLogo size={96} />
    </div>
  ),
};
