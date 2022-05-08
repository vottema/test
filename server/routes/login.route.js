const router = require("express").Router();
const { Admin } = require("../db/models");

router.route("/").post(async (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "123") {
    req.session.admin = name;
    res.sendStatus(201);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
