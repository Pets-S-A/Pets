/* eslint-disable max-len */
const {PetModel, SharedPetID} = require('../../../models');
const {validateBody} = require('../../../utils');
const HttpStatus = require('../../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await SharedPetID.find(),
        message: 'Shared id created',
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  getSharedPetID: async (req, res, next) => {
    try {
      const body = req.body || {};
      if (validateBody(body)) {
        throw new Error('Boby not found');
      }
      const petID = body.petID;
      if (!petID) {
        throw new Error('petId is required');
      }
      const pet = await PetModel.findById(petID);
      if (!pet) {
        throw new Error('Pet not found');
      }
      const provisoryID = String(Math.floor(1000 + Math.random() * 9000));
      const bodyShared = {
        provisoryID,
        petID,
      };
      res.status(HttpStatus.OK).json({
        success: true,
        content: await SharedPetID.create(bodyShared),
        message: 'Shared id created with success',
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
};
