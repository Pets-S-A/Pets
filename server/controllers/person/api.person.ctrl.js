const {PersonModel, UserModel} = require('../../models');
const {validateBody} = require('../../utils');
const HttpStatus = require('../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await PersonModel.find(),
        message: 'Persons founded!',
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
      if (!body.userID) {
        throw new Error('UserID is required');
      }
      const user = await UserModel.findById(body.userID);
      if (!user) {
        throw new Error('User not found');
      }
      const person = await PersonModel.create(body);
      user.person = person.id;
      await user.save();

      res.json({
        success: true,
        message: 'Pessoa criada com sucesso!',
        content: person,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteByID: async (req, res, next) => {
    const params = req.params || {};
    try {
      if (!params.id) {
        throw new Error('Id is required');
      }
      res.json({
        success: true,
        content: await PersonModel.findByIdAndDelete(params.id),
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
        content: await PersonModel.deleteMany({}),
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
};
