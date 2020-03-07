const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema(
    {
      name: {type: String, required: true},
      image: {type: String, required: true},
      email: {type: String, required: true, unique: true},
    },
    {timestamps: true},
);


module.exports = mongoose.model('person', Person);
