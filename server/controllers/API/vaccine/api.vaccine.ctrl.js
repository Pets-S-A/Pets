const {VaccineModel, PetModel} = require('../../../models');
const {validateBody} = require('../../../utils');
const HttpStatus = require('../../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    res.status(HttpStatus.OK).json({
      success: true,
      content: await VaccineModel.find(),
      message: 'Vaccines founded!',
    });
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
      const pet = await PetModel.findById(body.petID);

      if (!pet) {
        throw new Error('Pet not found');
      }

      const vaccine = await VaccineModel.create(body);
      await pet.addVaccine(vaccine, next);
      res.json({
        success: true,
        content: vaccine,
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res, next) => {
    try {
      const body = req.body || {};
      if (validateBody(body)) {
        throw new Error('Boby not found');
      }
      if (!body._id) {
        throw new Error('Id is required');
      }
      const vaccine = await VaccineModel.findById(body._id);
      vaccine.name = body.name;
      vaccine.date = body.date;
      await vaccine.save();

      res.json({
        success: true,
        content: vaccine,
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteByID: async (req, res, next) => {
    const params = req.params || {};
    if (validateBody(params)) {
      throw new Error('Boby not found');
    }
    if (!params.id) {
      throw new Error('Id is required');
    }
    try {
      res.json({
        success: true,
        content: await VaccineModel.findByIdAndDelete(req.params.id),
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  delete: async (req, res, next) => {
    res.json({
      success: true,
      content: await VaccineModel.deleteMany({}),
    });
  },
};
