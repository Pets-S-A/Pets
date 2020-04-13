/* eslint-disable max-len */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pet = new Schema(
    {
      name: {type: String, required: true},
      gender: {type: String, require: true},
      age: {type: String, require: true},
      breed: {type: String, require: true},
      image: {type: String, require: false},
      agressive: {type: Boolean, require: true},
      vaccines: [{type: mongoose.Schema.Types.ObjectId, ref: 'vaccine', autopopulate: true}],
    },
    {timestamps: true},
);

Pet.methods.addVaccine = async function(vaccine, next) {
  try {
    const pet = this;
    pet.vaccines.push(vaccine.id);
    await pet.save();
    next();
  } catch (error) {
    return next(error);
  }
};

Pet.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('pet', Pet);
