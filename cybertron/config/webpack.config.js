function buildConfig(env) {
  const config = require(`./${env}.config`)(env);

  return config;
}

module.exports = buildConfig;
