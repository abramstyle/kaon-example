const webpack = require('webpack');
const Promise = require('bluebird');

const getCompiler = (config) => {
  const compiler = webpack(config);

  return {
    asyncRun: Promise.promisify(compiler.run, { context: compiler }),
    run: compiler.run.bind(compiler),
    watch: compiler.watch.bind(compiler),
  };
};

module.exports = getCompiler;
