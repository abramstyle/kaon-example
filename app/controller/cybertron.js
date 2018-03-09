function cybertronController() {
  return {
    async index(ctx) {
      ctx.body = 'Cybertron is the home planet of the Transformers and (usually) the body of their creator, Primus. ';
    },
  };
}

module.exports = cybertronController;
