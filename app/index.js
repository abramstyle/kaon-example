function generateApp() {
  const Koa = require('koa');
  const bodyParser = require('koa-bodyparser');
  const koaLogger = require('koa-logger');
  const views = require('koa-views');
  const favicon = require('koa-favicon');
  const path = require('path');
  const Loadable = require('react-loadable');

  require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
    devMode: true,
  });

  const config = require('../config/app.config');
  const routes = require('./routes');

  return function start() {
    const app = new Koa();

    app.keys = config.app.keys;
    // use app as proxy
    app.proxy = true;
    app.use(bodyParser());
    app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
    app.use(koaLogger());

    // Must be used before any router is used
    app.use(views(`${__dirname}/views`, {
      map: {
        pug: 'pug',
      },
    }));


    routes(app);

    Loadable.preloadAll().then(() => {
      app.listen(config.app.port, () => {
        console.log('%s served on port %s', config.app.name, config.app.port);
      });
    });
  };
}

module.exports = generateApp;
