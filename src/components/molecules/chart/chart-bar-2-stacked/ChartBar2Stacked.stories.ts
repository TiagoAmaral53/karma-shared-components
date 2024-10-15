import type { Meta, StoryObj } from '@storybook/react';

import ChartBar2Stacked from './index';
import { mockDataChart } from '../../../../../.storybook/data';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'KarmaComponents/Development/ChartBar2Stacked',
  component: ChartBar2Stacked,
  parameters: {
    layout: '',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    chartTitle: 'ChartBar2Stacked',
    data: mockDataChart.data,
  },
} satisfies Meta<typeof ChartBar2Stacked>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component: Story = {};
