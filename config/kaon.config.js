const path = require('path');

const { env } = process;

const config = {
  app: {
    name: `React isomorphic boilerplate (${env.NODE_ENV})`,
    shortName: 'rib',
    port: env.SERVER_PORT || 1827,
    keys: [env.APP_KEY],
    routes: path.resolve(__dirname, '../app/routes'),
    middlewares: path.resolve(__dirname, '../app/middlewares'),
  },
  resources: {
    root: path.resolve(__dirname, '../public'),
  },
  logs: {
    path: path.resolve('logs'),
    logname: `logstash_cybertron-${env.NODE_ENV}`,
  },
  cache: {
    redisCacheAlive: parseInt(env.REDIS_CACHE_ALIVE, 10),
    memoryCacheAlive: parseInt(env.MEMORY_CACHE_ALIVE, 10),
    validStatus: [200, 304],
    validMethods: ['GET'],
  },
  isomorphic: {
    routes: path.resolve(__dirname, '../src/routes'),
    store: path.resolve(__dirname, '../src/store/configureStore.js'),
    main: path.resolve(__dirname, '../src/client'),
  },
  postcss: {
    path: path.resolve(__dirname, './postcss.config.js'),
  },
  webpack: {
    client: path.resolve(__dirname, './webpack.client.config'),
    server: path.resolve(__dirname, './webpack.server.config'),
  },
  build: {
    host: process.env.NODE_ENV === 'production' ? 'localhost' : 'localhost',
    port: process.env.NODE_ENV === 'production' ? 1827 : 1592,
    path: process.env.NODE_ENV === 'production' ? 'build/' : '',
    target: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../public/build') : path.resolve(__dirname, '../build'),
  },
};

module.exports = config;
