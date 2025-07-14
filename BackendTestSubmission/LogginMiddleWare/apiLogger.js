function Log(stack, level, packageName, message) {
  const timestamp = new Date().toISOString();
  console.log(
    `[${timestamp}] [${level.toUpperCase()}] [${packageName}] [${stack}] - ${message}`
  );
}

module.exports = Log;
