const {UserModel, VetModel} = require('../../models');
const HttpStatus = require('../../HttpStatus');
const {validateBody, validatePassword} = require('../../utils');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await VetModel.find(),
        message: 'Vets founded!',
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
        throw new Error('Body não encontrado');
      }

      if (!validatePassword(body.password, body.password2)) {
        throw new Error('Senhas não são iguais');
      }

      if (await UserModel.findOne({email: body.email})) {
        throw new Error('E-mail já cadastrado');
      }

      const user = await new UserModel(body);
      user.password = await user.hash(next);
      const vet = await VetModel.create(body);
      user.vet = vet;

      await user.save();
      await user.save();

      res.render('index', {
        message: 'Cadastro realizado com sucesso!',
      });
    } catch (error) {
      return next(error);
    }
  },
  getRegister: async (req, res, next) => {
    try {
      res.render('vet/register/register.view.hbs');
    } catch (err) {
      return next(err);
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
        content: await VetModel.findByIdAndDelete(params.id),
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  delete: async (req, res, next) => {
    try {
      res.json({
        success: true,
        content: await VetModel.deleteMany({}),
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
};
