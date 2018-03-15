const getRenderer = () => {
  // invalidate cache and require fresh cache
  const render = require('./template');

  return async (ctx) => {
    const { config } = ctx;
    if (__DEV__) {
      delete require.cache[require.resolve(`${config.build.path}/main`)];
    }

    const { default: server } = require(`${config.build.path}/main`);
    const manifest = {
    };
    Object.assign(manifest, require(`${config.build.path}/manifest.json`));

    const assets = {
      manifest: manifest['manifest.js'],
      commons: manifest['commons.js'],
      app: manifest['app.js'],
    };

    const {
      html, state, helmet, bundles,
    } = await server(ctx, config);
    const allAttributes = Object.keys(helmet).reduce((attributes, key) => {
      attributes[key] = (helmet[key] || {}).toString();

      return attributes;
    }, {});

    const cdnPath = 'http://localhost:1592/';

    // add cdn path to bundles
    const bundlesWithHosts = bundles
      .filter(bundle => bundle.file.endsWith('.js'))
      .map(bundle => `${cdnPath}${bundle.file}`);

    const lang = 'lang="zh-CN"';

    // FIXME: DO Some security thing to ensure only escaped string will be rendered

    return render({
      assets,
      html,
      lang,
      state: JSON.stringify(state),
      helmet: allAttributes,
      bundles: bundlesWithHosts,
    });
  };
};

module.exports = getRenderer;
