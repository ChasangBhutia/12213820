module.exports.generateShortUrl = () => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let shortenUrl = "";
  for (let i = 0; i < 10; i++) {
    shortenUrl += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return shortenUrl;
};
