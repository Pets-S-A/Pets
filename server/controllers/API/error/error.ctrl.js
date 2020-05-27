const {ErrorModel} = require('../../../models');
const HttpStatus = require('../../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    res.status(HttpStatus.OK).json({
      success: true,
      content: await ErrorModel.find(),
      message: 'Errors founded!',
    });
  },
  delete: async (req, res, next) => {
    res.json({
      success: true,
      content: await ErrorModel.deleteMany({}),
    });
  },
};
