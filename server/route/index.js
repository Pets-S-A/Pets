/* eslint-disable max-len */

const apiUserRouterProtected = require('./private/API/user/api.user.router.protected');
const apiErrorRouterProtected = require('./private/API/error/api.error.router.protected');
const apiPetRouterProtected = require('./private/API/pet/api.pet.router.protected');
const apiPersonRouterProtected = require('./private/API/person/api.person.router.protected');
const apiVaccineRouterProtected = require('./private/API/vaccine/api.vaccine.router.protected');
const apiVetRouterProtected = require('./private/API/vet/api.vet.router.protected');

const viewUserRouterUnprotected = require('./public/view/user/view.user.router.unprotected');
const viewVetRouterUnprotected = require('./public/view/vet/view.vet.router.unprotected');


const API = {
  apiUserRouterProtected,
  apiErrorRouterProtected,
  apiPetRouterProtected,
  apiPersonRouterProtected,
  apiVaccineRouterProtected,
  apiVetRouterProtected,

  viewUserRouterUnprotected,
  viewVetRouterUnprotected,
};

module.exports = API;
