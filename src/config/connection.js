'use strict';

const mongoose = require('mongoose');

module.exports = {
  connectToDb: async function () {
    mongoose
      .connect('mongodb://localhost:27017/users_db', {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
      })
      .then(console.log('Connection succesful'));
  }
};
