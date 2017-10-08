// Common Webpack configuration used by webpack.config.development and webpack.config.production

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

process.traceDeprecation = true;

module.exports = {
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../build/client'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.join(__dirname, '../src/client/scripts'),
      path.join(__dirname, '../src/client/assets'),
      path.join(__dirname, '../src/client/assets/javascripts'),
      path.join(__dirname, '../src/client/assets/javascripts/componets'),
      path.join(__dirname, '../src/client/assets/javascripts/features'),
      path.join(__dirname, '../src/client/assets/javascripts/utils'),
      path.join(__dirname, '../src/client/assets/javascripts/app'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json', '.less']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'  // fetch API
    }),
    // Shared code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js',
      minChunks: Infinity
    })
  ],
  module: {
    rules: [
      // JavaScript / ES6
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src/client/assets/javascripts'),
        use: [
          {loader: 'babel-loader'}
        ]
      },
      // Images
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|PNG|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //limit: 8192,
              name: 'images/[name].[ext]?[hash]'
            }
          },
        ]
      },
      // Fonts
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //limit: 8192,
              name: 'fonts/[name].[ext]?[hash]'
            }
          },
        ]
      }
    ],
  }
};
