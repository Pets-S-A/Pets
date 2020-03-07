/* eslint-disable max-len */
const {PetModel, PersonModel} = require('../../models');
const {validateBody} = require('../../utils');
const HttpStatus = require('../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        data: await PetModel.find(),
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
      if (!body.email) {
        throw new Error('E-mail is required');
      }
      const pet = await PetModel.create(body);
      const person = await PersonModel.findOne({email: body.email});
      await person.addPet(pet, next);

      res.json({
        success: true,
        data: pet,
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
        data: await PetModel.deleteByID(req.body.id),
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
        data: await PetModel.deleteMany({}),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
