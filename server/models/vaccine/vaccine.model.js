/* eslint-disable max-len */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vaccine = new Schema(
    {
      date: {type: String, required: true},
      price: {type: String, required: true},
      type: {type: String, required: true},
    },
    {timestamps: true},
);

module.exports = mongoose.model('vaccine', Vaccine);
