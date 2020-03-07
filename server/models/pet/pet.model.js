/* eslint-disable max-len */
const {PersonModel} = require('../index');
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
      vaccines: [{type: mongoose.Schema.Types.ObjectId, ref: 'vaccine', autopopulate: true}],
    },
    {timestamps: true},
);

PetModel.pre('save', async (next) => {
  const pet = this;
  try {
    const person = await PersonModel.findOne({email: boby.email});
    person = person.addPet(person, pet);
    person.save();
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
