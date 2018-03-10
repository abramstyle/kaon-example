const dotenv = require('dotenv');
const envHelper = require('../helpers/env');

envHelper.config();
dotenv.config();
// envHelper.config();

const bootstrap = () => {
  const getCompiler = require('./compiler');
  const serverConfig = require('../config/server.config');
  const serverCompiler = getCompiler(serverConfig);

  // const serverRun = serverCompiler.asyncRun();
  // const clientRun = clientCompiler.asyncRun();

  const startServer = require('./server');

  console.log('compiling assets.');
  let server = null;
  const serverWatching = serverCompiler.watch({
    ignored: /build/,
  }, () => {
    console.log('server compiling success.');
    if (server) {
      server.close(() => {
        startServer().then((startedServer) => {
          console.log('server is reloaded.');
          server = startedServer;
        });
      });
    } else {
      startServer().then((startedServer) => {
        server = startedServer;
      });
    }
  });

  const cleanUpAndExit = () => {
    // do something clean up
    if (server) {
      server.close(() => {
        console.log('\nserver stopped.');
      });
    }
    if (serverWatching) {
      serverWatching.close(() => {
        console.log('\nserver watching is closed.');
      });
    }
  };

  process.once('SIGUSR2', cleanUpAndExit);
  process.once('SIGINT', cleanUpAndExit);
  process.once('SIGTERM', cleanUpAndExit);
  process.once('SIGHUP', cleanUpAndExit);
  // Promise.all([serverRun, clientRun]).then(() => {
  // // const serverWatching = serverCompiler.watch();
  //   console.log('assets compiling success.');
  //
  //   const serverWatching = serverCompiler.wat  ch({}, () => {});
  //   // const clientWatching = clientCompiler.watch({}, (err, stats) => {
  //   //   server();
  //   // });
  // });
};

module.exports = bootstrap;
