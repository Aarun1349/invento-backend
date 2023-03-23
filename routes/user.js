const express = require("express");
const router = express.Router();
router.get("/user", function (req, res) {
  res.status(200).json({
    success: true,
    message:'User routes are available'
  });
});


module.exports = router;