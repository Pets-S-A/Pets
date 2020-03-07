/* eslint-disable max-len */
const {PetModel} = require('../../models');
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
      const body = req.body;
      if (validateBody(body)) {
        throw new Error('Boby not found');
      }
      if (!body.email) {
        throw new Error('User e-mail is required');
      }

      res.json({
        success: true,
        data: await PetModel.create(body),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
