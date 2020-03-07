/* eslint-disable max-len */
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
      email: {type: String, require: true},
      vaccines: [{type: mongoose.Schema.Types.ObjectId, ref: 'vaccine', autopopulate: true}],
    },
    {timestamps: true},
);

PetModel.pre('save', async function(next) {
  const {PersonModel} = require('../index');
  const pet = this;

  try {
    const person = await PersonModel.findOne({email: pet.email});
    await person.addPet(pet, next);
    next();
  } catch (error) {
    return next(error);
  }
});

PetModel.methods.addVaccine = async (pet, vaccine) => {
  const petReturn = pet;
  if (petReturn.vaccine) {
    petReturn.vaccine += vaccine.id;
  } else {
    petReturn.vaccine = vaccine.id;
  }
  return petReturn;
};


module.exports = mongoose.model('pet', PetModel);
