const {PersonModel} = require('../../models');
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
      const boby = req.boby;
      if (!boby) {
        throw new Error('Boby not found');
      }
      const person = await PersonModel.create({boby});

      res.json({
        success: true,
        data: person,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
