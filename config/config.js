const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionConfig = require('./sessionConfig')
const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());
  
};

module.exports = config;
