const UserModel = require('./user/user.model');
const ErrorModel = require('./error/error.model');
const PetModel = require('./pet/pet.model');
const SharedPetID = require('./pet/id.pet.model');
const PersonModel = require('./person/person.model');
const VaccineModel = require('./vaccine/vaccine.model');
const VetModel = require('./vet/vet.model');

module.exports = {
  UserModel,
  ErrorModel,
  PetModel,
  SharedPetID,
  PersonModel,
  VaccineModel,
  VetModel,
};
