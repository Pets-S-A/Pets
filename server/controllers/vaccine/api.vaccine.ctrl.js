const {VaccineModel} = require('../../models');
const {validateBody} = require('../../utils');
const HttpStatus = require('../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        data: await VaccineModel.find(),
        message: 'Vaccines founded!',
      });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const body = req.body || {};
      if (validateBody(body)) {
        throw new Error('Boby not found');
      }
      if (!body.petID) {
        throw new Error('petID is required');
      }
      res.json({
        success: true,
        data: await VaccineModel.create(body),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
  delete: async (req, res, next) => {
    try {
      res.json({
        success: true,
        data: await VaccineModel.deleteMany({}),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
