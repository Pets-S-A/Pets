/* eslint-disable max-len */
const {PetModel, PersonModel} = require('../../models');
const {validateBody} = require('../../utils');
const HttpStatus = require('../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await PetModel.find(),
        message: 'Pets found!',
      });
    } catch (error) {
      return next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const body = req.body || {};
      if (validateBody(body)) {
        throw new Error('Boby is required');
      }
      if (!body.personID) {
        throw new Error('personID is required');
      }
      const pet = await PetModel.create(body);
      const person = await PersonModel.findById(body.personID);
      await person.addPet(pet, next);

      res.json({
        success: true,
        content: pet,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteByID: async (req, res, next) => {
    try {
      const params = req.params || {};
      if (validateBody(params)) {
        throw new Error('Boby not found');
      }
      if (!params.id) {
        throw new Error('Id is required');
      }
      res.json({
        success: true,
        content: await PetModel.findByIdAndDelete(req.params.id),
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
        content: await PetModel.deleteMany({}),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
