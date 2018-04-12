require('dotenv').config();
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getConfig = () => ({
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
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader',
        options: {
          // sourceMap: true,
          minimize: false,
          modules: false,
          importLoaders: 1,
          localIdentName: '[local]',
        },
      }],
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          minimize: true,
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      }, {
        loader: 'postcss-loader',
        options: {
          config: {
            path: path.resolve(__dirname, '../postcss.config.js'),
          },
        },
      }],
    }],
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
});

module.exports = getConfig;
