import type { Meta, StoryObj } from '@storybook/react';

import Footer from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'KarmaComponents/Development/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    description: '© 2024 Sua Empresa. Todos os direitos reservados.',
    disclaimer: 'karma-accountability-office v1.5.0.12102024',
    links: [
      { name: 'Firefly', url: 'https://firefly.com' },
      { name: 'Draw.io', url: 'https://drawio.com' },
      { name: 'Load Balancer', url: 'https://loadbalancer.com' },
      { name: 'Pelos Sonhos', url: 'https://pelossonhos.com' },
      { name: 'Pezinhos Novos', url: 'https://pezinhosnovos.com' },
      { name: 'Storybook', url: 'https://storybook.com' },
    ],
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component: Story = {};
