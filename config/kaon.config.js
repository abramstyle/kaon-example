const path = require('path');

const { env } = process;

const config = {
  renderer: {
    // ssr: false,
  },
  app: {
    name: `Kaon example (${env.NODE_ENV})`,
    shortName: 'ke',
  },
  build: {
    port: process.env.NODE_ENV === 'production' ? 1827 : 1592,
    path: process.env.NODE_ENV === 'production' ? 'build/' : '',
    target: path.resolve(__dirname, '../public/build'),
  },
};

module.exports = config;
