const {VaccineModel, PetModel} = require('../../models');
const {validateBody} = require('../../utils');
const HttpStatus = require('../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await VaccineModel.find(),
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
      const vaccine = await VaccineModel.create(body);
      const pet = await PetModel.findById(body.petID);
      await pet.addVaccine(vaccine, next);
      res.json({
        success: true,
        content: vaccine,
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
        content: await VaccineModel.deleteByID(req.body.id),
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
        content: await VaccineModel.deleteMany({}),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
