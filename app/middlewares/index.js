const koaLogger = require('koa-logger');
const favicon = require('koa-favicon');
const path = require('path');

function applyMiddlewares(app) {
  // app.use(koaLogger());
  app.use(favicon(path.join(__dirname, '../../public/favicon.ico')));
}

module.exports = applyMiddlewares;
