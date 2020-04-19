const {VetModel} = require('../../../models');
const HttpStatus = require('../../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await VetModel.find(),
        message: 'Vaccines founded!',
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
};
