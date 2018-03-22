function buildConfig(env) {
  const config = require(`./webpack/${env}.config`);

  return config;
}

module.exports = buildConfig;
