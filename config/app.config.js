const path = require('path');

const { env } = process;

module.exports = {
  app: {
    name: `Heimdallr (${env.NODE_ENV})`,
    shortName: 'cybertron',
    port: env.SERVER_PORT || 1827,
    keys: [env.APP_KEY],
  },
  resources: {
    root: path.resolve('./public'),
  },
  logs: {
    path: path.resolve('logs'),
    logname: `logstash_cybertron-${env.NODE_ENV}`,
  },
  session: {
    key: env.APP_KEY, /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false,
  },
  csrf: {
    invalidSessionSecretMessage: 'Invalid session secret',
    invalidSessionSecretStatusCode: 403,
    invalidTokenMessage: 'Invalid CSRF token',
    invalidTokenStatusCode: 403,
    excludedMethods: ['GET', 'HEAD', 'OPTIONS'],
    disableQuery: true,
  },
  security: {
    secret: env.APP_SECRET,
  },
  cache: {
    redisCacheAlive: parseInt(env.REDIS_CACHE_ALIVE, 10),
    memoryCacheAlive: parseInt(env.MEMORY_CACHE_ALIVE, 10),
    validStatus: [200, 304],
    validMethods: ['GET'],
  },
};
