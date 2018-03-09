async function generateApp({ config, routes }) {
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

  // const config = require('../config/app.config');
  // const routes = require('./routes');

  const app = new Koa();

  app.keys = config.app.keys;

  // if (__DEV__) {
  //   const koaWebpack = require('koa-webpack');
  //   const webpack = require('webpack');
  //
  //   const webpackConfig = require('../config/development.config')(process.env.NODE_ENV);
  //   const compiler = webpack(webpackConfig);
  //
  //   app.use(koaWebpack({
  //     compiler,
  //     dev: {
  //       serverSideRender: true,
  //     },
  //   }));
  // }

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

  await Loadable.preloadAll();

  return app.listen(config.app.port, () => {
    console.log('%s served on port %s', config.app.name, config.app.port);
  });
}

module.exports = generateApp;
