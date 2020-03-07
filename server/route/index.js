/* eslint-disable max-len */

const userRouterUnprotected = require('./public/user/user.router.unprotected');
const errorRouterProtected = require('./private/error/error.router.protected');
const userRouterProtected = require('./private/user/user.router.protected');

const apiPetRouterProtected = require('./private/pet/api.pet.router.protected');
const apiPersonRouterProtected = require('./private/person/api.person.router.protected');
const apiVaccineRouterProtected = require('./private/vaccine/api.vaccine.router.protected');

module.exports = {
  userRouterProtected,
  userRouterUnprotected,
  errorRouterUnprotected: errorRouterProtected,
  apiPetRouterProtected,
  apiPersonRouterProtected,
  apiVaccineRouterProtected,
};
