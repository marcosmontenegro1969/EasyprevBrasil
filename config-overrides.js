const { override } = require('customize-cra');
const setupMiddlewares = require('./middleware-config');

module.exports = override(
  config => {
    if (config.devServer) {
      config.devServer.setupMiddlewares = setupMiddlewares;
    }
    return config;
  }
);
