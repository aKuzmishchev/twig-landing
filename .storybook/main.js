

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/stories/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: [
    { from: '../landing.html', to: '/landing.html' },
    { from: '../css',          to: '/css' },
    { from: '../js',           to: '/js' },
    { from: '../src/tokens',   to: '/src/tokens' },
  ],
};
export default config;