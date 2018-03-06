const manifest = require('../build/manifest.json');
const { default: server } = require('../build/main');
const render = require('./html');

const renderer = {
  async render(ctx) {
    const assets = {
      manifest: manifest['manifest.js'],
      commons: manifest['commons.js'],
      app: manifest['app.js'],
    };

    const {
      html, state, helmet, bundles,
    } = await server(ctx);
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

    const result = await render({
      assets,
      html,
      lang,
      state: JSON.stringify(state),
      helmet: allAttributes,
      bundles: bundlesWithHosts,
    });

    return result;
  },
};

module.exports = renderer;
