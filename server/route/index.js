const userRouterProtected = require('./user.router.protected');

const userRouterUnprotected = require('./user.router.unprotected');
const errorRouterUnprotected = require('./error.router.unprotected');

module.exports = {
  userRouterProtected,
  userRouterUnprotected,
  errorRouterUnprotected,
};
