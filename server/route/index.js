const userRouterProtected = require('./user.router.protected');

const userRouterUnprotected = require('./user.router.unprotected');
const errorRouterUnprotected = require('./error.router.unprotected');
const petRouterProtected = require('./private/api.pet.router.protected');

module.exports = {
  userRouterProtected,
  userRouterUnprotected,
  errorRouterUnprotected,
  petRouterProtected,
};
