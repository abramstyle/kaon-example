const renderHtml = (data = {}) => {
  const bundles = (data.bundles || [])
    .map(bundle => `<script src="${bundle}"></script>`)
    .join('');

  return `
    <!doctype html>
    <html ${data.helmet.htmlAttributes}>
        <head>
            ${data.helmet.title}
            ${data.helmet.meta}
            ${data.helmet.link}
            ${data.helmet.style}
        </head>
        <body ${data.helmet.bodyAttributes}>
            ${data.helmet.noscript}
            <main id="root">${data.html}</main>
            <script>
              window.__PRELOADED_STATE__ = ${data.state}
            </script>
            <script src="${data.assets.manifest}"></script>
            <script src="${data.assets.commons}"></script>
            ${bundles}
            <script src="${data.assets.app}"></script>
            ${data.helmet.script}
        </body>
    </html>
  `;
};

module.exports = renderHtml;
