'use strict';

const express = require('express');
const mongoose = require('mongoose');
const routes = require('../config/router.js');
const middleware = require('../config/middleware.js');
const db = require('../config/connection.js');

const app = express();
const port = 3000;

db.connectToDb();
let connection = mongoose.connection;

connection.once('open', function () {
  app.listen(port, function () {
    app.use(express.json());
    app.use(middleware.isJson());
    console.log(mongoose.connection.readyState);
    console.log(`Example app listening on port ${port}!`);
    app.use(routes);
  });
});
