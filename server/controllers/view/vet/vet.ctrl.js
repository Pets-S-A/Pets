const {UserModel, VetModel, PetModel} = require('../../../models');
const {validateBody, validatePassword} = require('../../../utils');

module.exports = {
  getRegister: async (req, res, next) => {
    try {
      res.render('vet/register/register.view.hbs');
    } catch (err) {
      return next(err);
    }
  },
  getPet: async (req, res, next) => {
    try {
      res.render('vet/pet/pet.view.hbs', {isAuth: true});
    } catch (err) {
      return next(err);
    }
  },
  getPetInfo: async (req, res, next) => {
    try {
      const pet = await PetModel.findOne({});
      res.render('vet/pet/pet.info.view.hbs', {isAuth: true, pet});
    } catch (err) {
      return next(err);
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

      res.render('index', {
        message: 'Cadastro realizado com sucesso!',
      });
    } catch (error) {
      return next(error);
    }
  },
};
