import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './button';
import { sizeArgType, variantArgType } from '../../../.storybook/type';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shadcnui/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: variantArgType,
    size: sizeArgType
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    variant: 'default',
    children: 'submit'
  } as ButtonProps,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component: Story = {
  args: {
  },
};
