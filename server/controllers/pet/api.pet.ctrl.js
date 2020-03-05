/* eslint-disable max-len */
const {PetModel} = require('../../models');
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
      const boby = req.boby;
      if (!boby) {
        throw new Error('Boby not found');
      }
      const pet = await PetModel.create({boby});

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
};
