const Router = require('koa-router');

function applyRoutes(app) {
  const router = new Router();

  router.get('/', async (ctx) => {
    ctx.body = 'hello world.';
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
}

module.exports = applyRoutes;
