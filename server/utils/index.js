const validateBody = require('./admin/validateBody');
const validatePassword = require('./admin/validatePassword');

const validate = {
  validatePassword,
  validateBody,
};

module.exports = validate;
