import type { Meta, StoryObj } from '@storybook/react';

import ChartLine3 from './index';
import { mockDataChart } from '../../../../../.storybook/data';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'KarmaComponents/Development/ChartLine3',
  component: ChartLine3,
  parameters: {
    layout: '',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    chartTitle: 'ChartLine3',
    data: mockDataChart.data,
  },
} satisfies Meta<typeof ChartLine3>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component: Story = {};
