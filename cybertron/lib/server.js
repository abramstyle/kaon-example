const startServer = async (config) => {
  const app = require('../lib/app');
  // const envHelper = require('./helpers/env');

  /* eslint import/no-dynamic-require: 0 */
  const routes = require(config.app.routes);


  // if (__PROD__ || __RELEASE__) {
  // }

  const server = await app({
    config,
    routes,
  });

  return server;
};

module.exports = startServer;
