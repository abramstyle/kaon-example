require('dotenv').config();
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
  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
});

module.exports = getConfig;
