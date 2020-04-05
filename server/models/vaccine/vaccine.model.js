/* eslint-disable max-len */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vaccine = new Schema(
    {
      name: {type: String, required: true},
      date: {type: String, required: true},
    },
    {timestamps: true},
);

module.exports = mongoose.model('vaccine', Vaccine);
