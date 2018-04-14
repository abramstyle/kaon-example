require('dotenv').config();
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
      test: /\.css$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
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
      }),
    }, {
      test: /node_modules.*\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: false,
            minimize: true,
            modules: true,
            importLoaders: 1,
            localIdentName: '[local]',
          },
        }],
      }),
    }],
  },

  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
});

module.exports = getConfig;
