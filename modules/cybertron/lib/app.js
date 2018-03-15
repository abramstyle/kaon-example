async function generateApp({ config, routes }) {
  const Koa = require('koa');
  const bodyParser = require('koa-bodyparser');
  const views = require('koa-views');
  const favicon = require('koa-favicon');
  const path = require('path');
  const koaStatic = require('koa-static');
  const Loadable = require('react-loadable');
  const applyMiddlewares = require('../utils/applyMiddlewares');

  require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
    devMode: true,
  });

  const app = new Koa();

  // inject config
  app.context.config = config;
  app.keys = config.app.keys;

  // if external middlewares provided, then apply it
  if (config.app.middlewares) {
    applyMiddlewares(config.app.middlewares, app);
  }


  app.use(bodyParser());
  app.use(favicon(path.join(__dirname, '../../public/favicon.ico')));

  // Must be used before any router is used
  app.use(views(`${__dirname}/views`, {
    map: {
      pug: 'pug',
    },
  }));
  app.use(koaStatic(config.resources.root));

  const getRenderer = require('../../cybertron/lib/isomorphic');
  const render = await getRenderer(config);

  if (typeof routes === 'function') {
    routes(app);
  }

  app.use(async (ctx) => {
    const markup = await render(ctx);
    ctx.body = markup;
    ctx.status = 200;
  });

  await Loadable.preloadAll();

  return app.listen(config.app.port, () => {
    console.log('%s served on port %s', config.app.name, config.app.port);
  });
}

module.exports = generateApp;
