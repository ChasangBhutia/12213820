const urlModel = require("../models/urlModel");
const PORT = process.env.PORT || 3000;

module.exports.shortUrl = async (req, res) => {
  const { url } = req.body;
  if (!url)
    return res.status(400).json({ success: false, message: "URL not found" });
  try {
    const shortUrl = await urlModel.shortenUrl(url);
    return res.status(200).json({
      success: true,
      shortUrl: `http://localhost:${PORT}/${shortUrl}`,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Not able to shorten the URL" });
  }
};

module.exports.redirect = (req, res) => {
  const shortUrl = req.params.shortUrl;
  try {
    const originalUrl = urlModel.getOriginalUrl(shortUrl);
    if (originalUrl) {
      res.redirect(originalUrl);
    } else {
      res.status(404).json({ error: "Short URL not found" });
    }
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
