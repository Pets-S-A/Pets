const UserCtrl = require('./user/user.ctrl');
const ErrorCtrl = require('./error/error.ctrl');
const ApiPetCtrl = require('./pet/api.pet.ctrl');
const ApiPersonCtrl = require('./person/api.person.ctrl');
const ApiVaccineCtrl = require('./vaccine/api.vaccine.ctrl');
const VetCtrl = require('./vet/vet.ctrl');

module.exports = {
  UserCtrl,
  ErrorCtrl,
  ApiPetCtrl,
  ApiPersonCtrl,
  ApiVaccineCtrl,
  VetCtrl,
};
