const express = require("express");
const { shortUrl, redirect } = require("../controllers/urlShortControllers");
const router = express.Router();

router.post("/", shortUrl);
router.get("/:shortUrl", redirect);

module.exports = router;
