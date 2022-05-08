require('dotenv').config();
const express = require('express');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const cors = require('cors');



const app = express();
const port = process.env.PORT ?? 3000;
const loginRouter = require('./routes/login.route');
const tasksRouter = require('./routes/tasks.router');
const config = require('./config/config');

config(app);
app.use(cors({ origin: 'http://localhost:3000', credentials: true}));

const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: process.env.SECRET_KEY || 'secret',
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: { expires: 24 * 60 * 60e3 },
};
app.use(session(sessionConfig));

app.use('/tasks', tasksRouter);
app.use('/login', loginRouter);

app.get('/',(req,res)=>{
  let admin = req.session.admin
  res.json(admin)
})

app.listen(port, () => console.log(`***Server started at ${port} port ***`));
