const express = require("express");
const router = express.Router();

const { portfolio } = require("../controllers/portfolioController");

router.get("/", portfolio);

module.exports = router;
