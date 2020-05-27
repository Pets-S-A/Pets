const mongoose = require('mongoose');
const config = require('../config');
const URL = config.env == 'production' ? config.serverDb : config.serverDbDev;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose
    .connect(URL, options)
    .catch((e) => {
      console.error(URL, e.message);
    });

const db = mongoose.connection;

module.exports = db;
