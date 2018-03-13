async function generateApp({ config, routes }) {
  const Koa = require('koa');
  const bodyParser = require('koa-bodyparser');
  const koaLogger = require('koa-logger');
  const views = require('koa-views');
  const favicon = require('koa-favicon');
  const path = require('path');
  const koaStatic = require('koa-static');
  const Loadable = require('react-loadable');

  require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
    devMode: true,
  });

  const app = new Koa();

  // inject config
  app.context.config = config;
  app.keys = config.app.keys;


  app.use(bodyParser());
  app.use(favicon(path.join(__dirname, '../../public/favicon.ico')));
  app.use(koaLogger());

  // Must be used before any router is used
  app.use(views(`${__dirname}/views`, {
    map: {
      pug: 'pug',
    },
  }));
  app.use(koaStatic(config.resources.root));


  routes(app);

  await Loadable.preloadAll();

  return app.listen(config.app.port, () => {
    console.log('%s served on port %s', config.app.name, config.app.port);
  });
}

module.exports = generateApp;
