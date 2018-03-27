
require('dotenv').config();
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = {
  entry: {
    commons: [
      'isomorphic-fetch',
      'classnames',
      'immutable',
      '@abramstyle/redux-api',
    ],
  },
  module: {
    rules: [{
      test: /node_modules.*\.css$/,
      use: [{
        loader: 'style-loader',
        options: {
          useable: true,
        },
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          minimize: false,
          modules: false,
          importLoaders: 1,
          localIdentName: '[local]',
        },
      }],
    }],
  },
  resolve: {
    alias: {
      $components: path.resolve(__dirname, 'src/components'),
      $containers: path.resolve(__dirname, 'src/containers'),
    },
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
};

module.exports = config;
