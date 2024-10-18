import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path'; // Importar o módulo path

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Verifique se config.resolve está definido
    if (!config.resolve) {
      config.resolve = {}; // Inicializa config.resolve se for undefined
    }

    // Adicionar o alias
    config.resolve.alias = {
      '@karma': path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, '../src'),
      ...config.resolve.alias,
    };
    return config;
  },
};

export default config;
