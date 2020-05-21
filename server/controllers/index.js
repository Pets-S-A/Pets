// API
const ApiUserCtrl = require('./API/user/user.ctrl');
const ApiErrorCtrl = require('./API/error/error.ctrl');
const ApiPetCtrl = require('./API/pet/api.pet.ctrl');
const ApiSharedPetIDCtrl = require('./API/pet/api.id.pet.ctrl');
const ApiPersonCtrl = require('./API/person/api.person.ctrl');
const ApiVaccineCtrl = require('./API/vaccine/api.vaccine.ctrl');
const ApiVetCtrl = require('./API/vaccine/api.vaccine.ctrl');

// VIEW
const ViewVetCtrl = require('./view/vet/vet.ctrl');
const ViewUserCtrl = require('./view/user/user.ctrl');

const CTRL = {
  ApiUserCtrl,
  ApiErrorCtrl,
  ApiPetCtrl,
  ApiSharedPetIDCtrl,
  ApiPersonCtrl,
  ApiVaccineCtrl,
  ApiVetCtrl,

  ViewVetCtrl,
  ViewUserCtrl,
};

module.exports = CTRL;
