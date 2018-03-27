require('dotenv').config();
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const getConfig = () => ({
  resolve: {
    alias: {
      $components: path.resolve(__dirname, '../../../src/components'),
      $containers: path.resolve(__dirname, '../../../src/containers'),
    },
  },
});

module.exports = getConfig;
