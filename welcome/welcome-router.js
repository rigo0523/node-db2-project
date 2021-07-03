const express = require("express");
const server = require("../api/server");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ API: "up and working " });
});

module.exports = router;
