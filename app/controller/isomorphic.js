function isomorphicController() {
  // const render = require('../../isomorphic/renderer');
  const renderMarkup = require('../../src/server').default;

  return {
    async page(ctx) {
      // const page = await render();
      const markup = await renderMarkup(ctx);
      ctx.body = markup;
      ctx.status = 200;
    },
  };
}

module.exports = isomorphicController;
