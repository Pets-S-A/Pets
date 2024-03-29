/* eslint-disable max-len */
const {PetModel, SharedPetID} = require('../../../models');
const {validateBody} = require('../../../utils');
const HttpStatus = require('../../../HttpStatus');
const crypto = require('crypto');

module.exports = {
  getAll: async (req, res, next) => {
    res.status(HttpStatus.OK).json({
      success: true,
      content: await SharedPetID.find(),
      message: 'SharedIDs found!',
    });
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
      const shared = await SharedPetID.findOne({petID});
      if (shared) {
        res.status(HttpStatus.OK).json({
          success: true,
          content: shared,
          message: 'Shared id created with success',
        });
        return;
      }
      const pet = await PetModel.findById(petID);
      if (!pet) {
        throw new Error('Pet not found');
      }

      const buf = crypto.randomBytes(2);
      const provisoryID = body.provisoryID || buf.toString('hex').toUpperCase();
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
  getPetByProvisoryID: async (req, res, next) => {
    try {
      const params = req.params || {};
      if (validateBody(params)) { // retorna true caso o objeto esteja vazio
        throw new Error('Params not found');
      }

      const provisoryID = params.provisoryID;
      if (!provisoryID) {
        throw new Error('provisoryID is required');
      }

      const pet = await SharedPetID.findOneAndDelete({provisoryID});
      if (!pet) {
        throw new Error('Pet not found');
      }

      res.status(HttpStatus.OK).json({
        success: true,
        content: pet,
        message: 'Pet found!',
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
};
