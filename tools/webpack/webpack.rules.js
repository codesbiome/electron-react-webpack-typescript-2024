const { inDev } = require('./webpack.helpers');

module.exports = [
  {
    // Add support for native node modules
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    // Webpack asset relocator loader
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
    ],
  },
  {
    // Images Loader
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          publicPath: 'assets/images',
          outputPath: inDev() ? 'assets/images' : './main_window/assets/images',
        },
      },
    ],
  },
  {
    // Font & SVG loader
    test: /\.(woff(2)?|ttf|otf|eot)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          publicPath: 'assets/fonts',
          outputPath: inDev() ? 'assets/fonts' : './main_window/assets/fonts',
        },
      },
    ],
  },
];
