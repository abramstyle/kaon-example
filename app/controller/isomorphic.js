function isomorphicController() {
  // const render = require('../../isomorphic/renderer');
  const renderer = require('../../cybertron/lib/isomorphic');

  return {
    async page(ctx) {
      // const page = await render();
      const markup = await renderer.render(ctx);
      ctx.body = markup;
      ctx.status = 200;
    },
  };
}

module.exports = isomorphicController;
