const startServer = async (config) => {
  const app = require('../lib/app');
  // const envHelper = require('./helpers/env');

  const appConfig = require('../../config/app.config');
  const routes = require('../../app/routes');


  // if (__PROD__ || __RELEASE__) {
  // }

  const server = await app({
    appConfig,
    config,
    routes,
  });

  return server;
};

module.exports = startServer;
