const mongoose = require('mongoose');
const config = require('../config');

const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose
    .connect(config.serverDb, options)
    .catch((e) => {
      console.error(config.serverDb, e.message);
    });

const db = mongoose.connection;

module.exports = db;
