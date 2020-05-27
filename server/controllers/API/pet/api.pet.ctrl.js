/* eslint-disable max-len */
const {PetModel, PersonModel, UserModel} = require('../../../models');
const {validateBody} = require('../../../utils');
const HttpStatus = require('../../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await PetModel.find(),
        message: 'Pets found!',
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  getAllByUserID: async (req, res, next) => {
    try {
      const params = req.params || {};
      if (validateBody(params)) {
        throw new Error('Boby not found');
      }
      if (!params.userID) {
        throw new Error('id is required');
      }

      const user = await UserModel.findById(params.userID);
      if (!user) {
        throw new Error('User not found');
      }

      if (!user.person) {
        throw new Error('Person not found');
      }

      res.status(HttpStatus.OK).json({
        success: true,
        content: user.person.pets,
        message: 'Pets found!',
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
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
      if (body._id === '') {
        body._id = undefined;
      }
      const pet = await PetModel.create(body);
      const person = await PersonModel.findById(body.personID);
      await person.addPet(pet, next);

      res.json({
        success: true,
        content: pet,
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
      const pet = await PetModel.findByIdAndUpdate(body._id, {$set: body}, {'new': true});
      res.json({
        success: true,
        content: pet,
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
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
      await PetModel.findByIdAndDelete(req.params.id);
      res.json({
        success: true,
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
      content: await PetModel.deleteMany({}),
    });
  },
};
