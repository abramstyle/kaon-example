function isomorphicController() {
  // const render = require('../../isomorphic/renderer');
  const getRenderer = require('../../cybertron/lib/isomorphic');
  const render = getRenderer();

  return {
    async page(ctx) {
      // const page = await render();
      const markup = await render(ctx);
      ctx.body = markup;
      ctx.status = 200;
    },
  };
}

module.exports = isomorphicController;
