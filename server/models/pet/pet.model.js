const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetModel = new Schema(
    {
      name: {type: String, required: true},
      gender: {type: String, require: true},
      age: {type: String, require: true},
      breed: {type: String, require: true},
      image: {type: String, require: false},
      agressive: {type: Boolean, require: true},
    },
    {timestamps: true},
);

module.exports = mongoose.model('pet', PetModel);
