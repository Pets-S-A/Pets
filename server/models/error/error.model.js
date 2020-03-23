const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ErrorModel = new Schema(
    {
      name: {type: String},
      message: {type: String},
      error: {type: String},
    },
    {timestamps: true},
);

module.exports = mongoose.model('error', ErrorModel);
