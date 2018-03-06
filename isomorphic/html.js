const renderHtml = (data) => {
  const assets = Object.keys(data.assets)
    .map(key => `<script src=${data.assets[key]}></script>`)
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
            ${assets}
            ${data.helmet.script}
        </body>
    </html>
  `;
};

module.exports = renderHtml;
