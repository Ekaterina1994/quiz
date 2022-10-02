const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": {
      "name": 'webpack5',
      "options": {
        "lazyCompilation": true,
      },
    },
  },
  webpackFinal: async (config) => {
    // resolve absolute paths in stories
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];

    return config;
  },
}