const startServer = async () => {
  const app = require('../lib/app');
  // const envHelper = require('./helpers/env');

  const appConfig = require('../../config/app.config');
  const routes = require('../../app/routes');


  // if (__PROD__ || __RELEASE__) {
  // }

  const server = await app({
    config: appConfig,
    routes,
  });

  return server;
};

module.exports = startServer;
