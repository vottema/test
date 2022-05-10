const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("sid");
  } catch (error) {
    res.end();
  }
});
module.exports = router;
