require("dotenv").config();
const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT ?? 3000;
const loginRouter = require("./routes/login.route");
const tasksRouter = require("./routes/tasks.router");
const logoutRouter = require("./routes/logout.route");
const config = require("./config/config");

config(app);
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static(path.join(__dirname, "client", "build", "static")));
app.use(cors({ origin: "*", credentials: true }));

const sessionConfig = {
  store: new FileStore(),
  key: "sid",
  secret: process.env.SECRET_KEY || "secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60,
    httpOnly: true
  }
};
app.use(session(sessionConfig));

app.use("/tasks", tasksRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);

app.get("/checkAdmin", (req, res) => {
  let admin = req.session.admin;
  res.json({ admin });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => console.log(`***Server started at ${port} port ***`));
