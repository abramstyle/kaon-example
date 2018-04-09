const path = require('path');

const { env } = process;

const config = {
  app: {
    name: `Kaon example (${env.NODE_ENV})`,
    shortName: 'ke',
  },
  build: {
    port: process.env.NODE_ENV === 'production' ? 1827 : 1592,
    path: process.env.NODE_ENV === 'production' ? 'build/' : '',
    target: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../public/build') : path.resolve(__dirname, '../build'),
  },
};

module.exports = config;
