/* eslint-disable @typescript-eslint/no-var-requires */
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const aliases = require('./webpack.aliases');

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
      ...aliases,
    },
  },
};
