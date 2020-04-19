const {ErrorModel} = require('../../../models');
const HttpStatus = require('../../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await ErrorModel.find(),
        message: 'Errors founded!',
      });
    } catch (error) {
      next(error);
    }
  },
};
