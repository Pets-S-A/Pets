const {ErrorModel} = require('../models');
const HttpStatus = require('../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        data: await ErrorModel.find(),
        message: 'User created!',
      });
    } catch (error) {
      next(error);
    }
  },
};
