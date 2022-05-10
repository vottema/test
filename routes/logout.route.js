const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("sid", { path: "https://test-bj-todol.herokuapp.com/" });
  } catch (error) {
    res.end();
  }
});
module.exports = router;
