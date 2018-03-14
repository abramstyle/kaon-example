const merge = require('webpack-merge');
const { objectUtils } = require('@abramstyle/utils');

function buildConfig(configBuilder) {
  if (!configBuilder) return null;

  const env = process.env.NODE_ENV;
  let config = null;
  if (typeof configBuilder === 'function') {
    config = configBuilder(env);
  } else {
    config = configBuilder;
  }
  return config;
}

function loadBuildConfig(appConfig) {
  if (!objectUtils.isObject(appConfig)) {
    throw new Error('expect app config as an object');
  }
  const localConfigBuilder = require('../config/webpack.config');
  const clientConfig = buildConfig(localConfigBuilder);
  let externalConfig = null;
  if (appConfig.build.webpack) {
    try {
      externalConfig = require(app.config.webpack);
    } catch (e) {
      console.warn('webpack config found, but load file failed.');
    }
  }

  const config = merge.smart(clientConfig, externalConfig);

  return config;
}

module.exports = loadBuildConfig;
