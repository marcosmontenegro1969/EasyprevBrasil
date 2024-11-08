module.exports = function (middlewares, devServer) {
  // Verifique se `onBeforeSetupMiddleware` está definido e substitua por `setupMiddlewares`
  if (typeof devServer.onBeforeSetupMiddleware === 'function') {
    middlewares.unshift((req, res, next) => {
      devServer.onBeforeSetupMiddleware(req, res, next);
    });
  }

  // Verifique se `onAfterSetupMiddleware` está definido e substitua por `setupMiddlewares`
  if (typeof devServer.onAfterSetupMiddleware === 'function') {
    middlewares.push((req, res, next) => {
      devServer.onAfterSetupMiddleware(req, res, next);
    });
  }

  // Retorne as middlewares modificadas
  return middlewares;
};

