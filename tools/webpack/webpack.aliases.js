// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createWebpackAliases } = require('./webpack.helpers');

// Webpack aliases to resolve
const aliases = createWebpackAliases({
  '@assets': 'assets',
  '@src': 'src',
});

// Export aliases
module.exports = aliases;
