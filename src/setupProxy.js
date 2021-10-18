const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/location/",
    createProxyMiddleware({
      target: "https://www.metaweather.com/api/",
      changeOrigin: true,
    })
  );

  app.use(
    "/location/search",
    createProxyMiddleware({
      target: "https://www.metaweather.com/api/",
      changeOrigin: true,
    })
  );

  app.use(
    "/json",
    createProxyMiddleware({
      target: "https://geolocation-db.com",
      changeOrigin: true,
    })
  );
};
