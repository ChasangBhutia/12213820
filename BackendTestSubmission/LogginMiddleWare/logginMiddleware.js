const Log = require("./apiLogger");

module.exports.createLoggingMiddleware = (packageName, level = "info") => {
  return function (req, res, next) {
    const stack = `${req.method} ${req.originalUrl}`;
    const message = `Incoming request from IP: ${req.ip}`;
    Log(stack, level, packageName, message);
    next();
  };
};
