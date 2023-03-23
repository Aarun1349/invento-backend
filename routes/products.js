const express = require("express");
const router = express.Router();
router.get("/products", function (req, res) {
  res.status(200).json({
    success: true,
    message: "Product routes are available",
  });
});

module.exports = router;
