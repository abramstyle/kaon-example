const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const fs = require('fs');
const net = require('net');
const devServerLog = require('./dev-log');
const addDevServerEntrypoints = require('webpack-dev-server/lib/util/addDevServerEntrypoints');


function getDevServer(config = {}) {
  const options = Object.assign(
    {
      hot: true,
      historyApiFallback: true,
      publicPath: 'http://localhost:1592/',
      headers: { 'Access-Control-Allow-Origin': '*' },
      port: 1592,
      host: 'localhost',
      progress: true,
      filename: '[name].js',
      watchOptions: undefined,
      hotOnly: false,
      clientLogLevel: 'info',
    },
    config.devServer || {},
  );
  addDevServerEntrypoints(config, options);
  const compiler = webpack(config);
  const log = devServerLog(options);

  const server = new WebpackDevServer(compiler, options, log);
  const devServer = server.listen(options.port, options.host);

  server.listeningApp.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      const clientSocket = new net.Socket();
      clientSocket.on('error', (clientError) => {
        if (clientError.code === 'ECONNREFUSED') {
          // No other server listening on this socket so it can be safely removed
          fs.unlinkSync(options.socket);
          server.listen(options.socket, options.host, (err) => {
            if (err) throw err;
          });
        }
      });
      clientSocket.connect({ path: options.socket }, () => {
        throw new Error('This socket is already used');
      });
    }
  });
  return devServer;
}

module.exports = getDevServer;
