const dotenv = require('dotenv');
const envHelper = require('../helpers/env');
const loadConfig = require('../helpers/loadConfig');

envHelper.config();
dotenv.config();
// envHelper.config();

const bootstrap = (options) => {
  const { env: { NODE_ENV } } = process;
  const { configPath } = options;
  const config = loadConfig(configPath);
  const getCompiler = require('./compiler');
  const serverConfig = require('../config/server.config');
  const serverCompiler = getCompiler(serverConfig);
  const startDevServer = require('./dev-server');

  let server = null;
  let devServer = null;

  if (__DEV__) {
    const getClientConfig = require('../config/development.config');
    let clientConfig = null;
    if (typeof getClientConfig === 'function') {
      clientConfig = getClientConfig(NODE_ENV);
    } else {
      clientConfig = getClientConfig;
    }
    devServer = startDevServer(clientConfig);
  }

  // const serverRun = serverCompiler.asyncRun();
  // const clientRun = clientCompiler.asyncRun();

  const startServer = require('./server');

  console.log('compiling assets.');
  const serverWatching = serverCompiler.watch({
    ignored: /build/,
  }, () => {
    console.log('server compiling success.');
    if (server) {
      server.close(() => {
        startServer(config).then((startedServer) => {
          console.log('server is reloaded.');
          server = startedServer;
        });
      });
    } else {
      startServer(config).then((startedServer) => {
        server = startedServer;
      });
    }
  });

  const cleanUpAndExit = () => {
    console.log('\n');
    // do something clean up
    if (server) {
      server.close(() => {
        console.log('server stopped.');
      });
    }
    if (serverWatching) {
      serverWatching.close(() => {
        console.log('server watching is closed.');
      });
    }
    if (devServer) {
      devServer.close(() => {
        console.log('dev server is stopped.');
      });
    }
  };

  process.once('SIGUSR2', cleanUpAndExit);
  process.once('SIGINT', cleanUpAndExit);
  process.once('SIGTERM', cleanUpAndExit);
  process.once('SIGHUP', cleanUpAndExit);
};

module.exports = bootstrap;
