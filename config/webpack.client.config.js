function buildConfig(env) {
  const configEnv = env === 'development' ? 'development' : 'production';
  const config = require(`./webpack/client/${configEnv}.config`);

  return config;
}

module.exports = buildConfig;
