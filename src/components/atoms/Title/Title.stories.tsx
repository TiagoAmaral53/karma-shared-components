import type { Meta, StoryObj } from '@storybook/react';

import Title from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'KarmaComponents/Version1/Atom/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    children: 'this is a generic title',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Title3: Story = {
  args: {
    children: 'this is a generic title',
  },
};

export const Title1: Story = {
  args: {
    children: 'Accountability Office components',
    level: 1,
  },
};
export const Title2: Story = {
  args: {
    children: 'this is a generic title',
    level: 3,
  },
};
export const Title4: Story = {
  args: {
    children: 'this is a generic title',
    level: 4,
  },
};
export const Title5: Story = {
  args: {
    children: 'this is a generic title',
    level: 5,
  },
};
