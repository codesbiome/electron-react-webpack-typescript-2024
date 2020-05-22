// @ts-nocheck
/* eslint-disable @typescript-eslint/no-var-requires */
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const { createWebpackAliases } = require('./webpack.helpers');

// Custom path aliases for Webpack to resolve
// Aliases gets converted to their base path using cwd (project root)
const aliases = {
  '@src': 'src',
  '@app': 'src/app',
  '@static': 'src/static',
};

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      // React Hot Loader Patch
      'react-dom': '@hot-loader/react-dom',
      // Custom Aliases
      ...createWebpackAliases(aliases),
    },
  },
};
