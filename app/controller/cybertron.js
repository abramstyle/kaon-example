function cybertronController() {
  return {
    async index(ctx) {
      console.log('index page.');
      await ctx.render('index.pug');
    },
  };
}

module.exports = cybertronController;
