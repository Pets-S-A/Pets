/* eslint-disable max-len */

const vetRouterUnprotected = require('./public/view/vet/vet.router.unprotected');
const userRouterUnprotected = require('./public/API/user/user.router.unprotected');
const errorRouterProtected = require('./private/API/error/error.router.protected');
const userRouterProtected = require('./private/API/user/user.router.protected');

const apiPetRouterProtected = require('./private/API/pet/api.pet.router.protected');
const apiPersonRouterProtected = require('./private/API/person/api.person.router.protected');
const apiVaccineRouterProtected = require('./private/API/vaccine/api.vaccine.router.protected');
const apiVetRouterProtected = require('./private/API/vet/api.vet.router.protected');

const API = {
  userRouterProtected,
  userRouterUnprotected,
  errorRouterUnprotected: errorRouterProtected,
  apiPetRouterProtected,
  apiPersonRouterProtected,
  apiVaccineRouterProtected,
  vetRouterUnprotected,
  apiVetRouterProtected,
};

module.exports = API;
