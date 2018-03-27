function buildConfig(env) {
  const config = require(`./webpack/server/${env}.config`);

  return config;
}

module.exports = buildConfig;
