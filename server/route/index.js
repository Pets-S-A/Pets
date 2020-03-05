/* eslint-disable max-len */

const userRouterUnprotected = require('./public/user/user.router.unprotected');
const errorRouterProtected = require('./private/error/error.router.protected');
const petRouterProtected = require('./private/pet/api.pet.router.protected');
const userRouterProtected = require('./private/user/user.router.protected');

module.exports = {
  userRouterProtected,
  userRouterUnprotected,
  errorRouterUnprotected: errorRouterProtected,
  petRouterProtected,
};
