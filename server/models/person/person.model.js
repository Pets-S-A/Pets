/* eslint-disable max-len */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Person = new Schema(
    {
      name: {type: String, required: true},
      image: {type: String, required: true},
      email: {type: String, required: true, unique: true},
      pets: [{type: mongoose.Schema.Types.ObjectId, ref: 'pet', autopopulate: true}],
    },
    {timestamps: true},
);

Person.methods.addPet = async (person, pet) => {
  const personReturn = person;
  if (personReturn.pet) {
    personReturn.pet += pet.id;
  } else {
    personReturn.pet = pet.id;
  }
  return personReturn;
};

Person.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('person', Person);
