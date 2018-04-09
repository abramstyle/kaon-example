const koaLogger = require('koa-logger');
const favicon = require('koa-favicon');
const path = require('path');
const mobileDetect = require('./mobile-detect');

function applyMiddlewares(app) {
  app.use(koaLogger());
  app.use(favicon(path.join(__dirname, '../../public/favicon.ico')));
  app.use(mobileDetect());
}

module.exports = applyMiddlewares;
