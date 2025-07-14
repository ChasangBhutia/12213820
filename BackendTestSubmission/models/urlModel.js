const { generateShortUrl } = require("../utils/generateShortUrl");

const urlDataBase = [];

module.exports.shortenUrl = async (originalUrl) => {
  let shortUrl;
  do {
    shortUrl = generateShortUrl();
  } while (urlDataBase[shortUrl]);

  urlDataBase[shortUrl] = originalUrl;
  return shortUrl;
};

module.exports.getOriginalUrl = (shortUrl) => {
  return urlDataBase[shortUrl];
};
