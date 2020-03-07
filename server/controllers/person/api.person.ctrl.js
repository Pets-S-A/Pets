const {PersonModel} = require('../../models');
const {validateBody} = require('../../utils');
const HttpStatus = require('../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        data: await PersonModel.find(),
        message: 'Persons founded!',
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
      res.json({
        success: true,
        data: await PersonModel.create(body),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteByID: async (req, res, next) => {
    const body = req.body || {};
    if (validateBody(body)) {
      throw new Error('Boby not found');
    }
    if (!body.id) {
      throw new Error('Id is required');
    }
    try {
      res.json({
        success: true,
        data: await PersonModel.deleteByID(req.body.id),
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
        data: await PersonModel.deleteMany({}),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
