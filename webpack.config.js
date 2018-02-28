function buildConfig(env) {
  const config = require(`./config/webpack/${env}.config`)(env);

  return config;
}

module.exports = buildConfig;
