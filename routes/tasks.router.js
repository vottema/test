const router = require("express").Router();
const { Task } = require("../db/models");

router.route("/sort").post((req, res) => {
  let { column, order } = req.body;
  if (column) {
    Task.findAll({ order: [[column, order]], raw: true })
      .then((allTasks) => res.json(allTasks))
      .catch((error) => console.log(error));
  } else {
    Task.findAll({ raw: true })
      .then((allTasks) => res.json(allTasks))
      .catch((error) => console.log(error));
  }
});

router.route("/").post((req, res) => {
  const { name, email, text, status, change } = req.body;

  Task.create({ name, email, text, status, change })
    .then((newTask) => res.status(201).json(newTask))
    .catch((error) => res.status(500).json(error));
});

router.route("/update").put((req, res) => {
  const { id, status, text } = req.body;
  if (req.session.admin) {
    if (status) {
      Task.update({ status: status }, { where: { id }, returning: true });
    } else {
      Task.update(
        { text: text, change: "Отредактировано администратором" },
        { where: { id }, returning: true }
      );
      res.sendStatus(201);
    }
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
