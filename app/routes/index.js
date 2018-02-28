const Router = require('koa-router');

function createRouter(app) {
  const router = new Router();
  const cybertronControllerGenerator = require('../controller/cybertron');
  const isomorphicControllerGenerator = require('../controller/isomorphic');

  const cybertron = cybertronControllerGenerator();
  const isomorphic = isomorphicControllerGenerator();

  router.get('/', cybertron.index)

  // All API here
  // .get('/:id/*', entrance.index)
    .get('/*', isomorphic.page);

  app
    .use(router.routes())
    .use(router.allowedMethods());
}

module.exports = createRouter;
