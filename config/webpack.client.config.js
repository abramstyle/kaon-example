function buildConfig(env) {
  const config = require(`./webpack/client/${env}.config`);

  return config;
}

module.exports = buildConfig;
