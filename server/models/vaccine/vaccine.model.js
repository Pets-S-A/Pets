/* eslint-disable max-len */
const {PetModel} = require('../index');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vaccine = new Schema(
    {
      date: {type: String, required: true},
      price: {type: String, required: true},
      type: {type: String, required: true, unique: true},
    },
    {timestamps: true},
);

Vaccine.pre('save', async (next) => {
  const vaccine = this;
  try {
    const pet = await PetModel.findById({vaccine: vaccine.petID});
    pet = pet.addPet(pet, vaccine);
    pet.save();
    next();
  } catch (error) {
    return next(error);
  }
});

Vaccine.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('vaccine', Vaccine);
