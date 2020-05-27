const {PersonModel, UserModel} = require('../../../models');
const {validateBody} = require('../../../utils');
const HttpStatus = require('../../../HttpStatus');

module.exports = {
  getAll: async (req, res, next) => {
    res.json({
      success: true,
      content: await PersonModel.find(),
      message: 'Persons founded!',
    });
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
        throw new Error('Person not found');
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
      if (!body._id && !body.id) {
        throw new Error('id is required');
      }
      const person = await PersonModel.findById(body._id || body.id);
      if (!person) {
        throw new Error('Person not found');
      }
      person.name = body.name;
      person.image = body.image;
      await person.save();

      res.json({
        success: true,
        message: 'Pessoa atualizada com sucesso!',
        content: person,
      });
    } catch (error) {
      return res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteByID: async (req, res, next) => {
    const params = req.params;
    try {
      if (!params.id) {
        throw new Error('Id is required');
      }
      res.json({
        success: true,
        content: await PersonModel.findByIdAndDelete(params.id),
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
      content: await PersonModel.deleteMany({}),
    });
  },
};
