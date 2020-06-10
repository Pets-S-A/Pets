const {UserModel, VetModel, PetModel} = require('../../../models');
const {validateBody, validatePassword} = require('../../../utils');
const config = require('../../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
      const params = req.params || {};
      if (validateBody(params)) {
        throw new Error('Params not found');
      }
      if (!params.petID) {
        throw new Error('petID is required');
      }
      const pet = await PetModel.findById(params.petID);
      res.render('vet/pet/pet.info.view.hbs', {isAuth: true, pet});
    } catch (err) {
      return next(err);
    }
  },
  getPerfilInfo: async (req, res, next) => {
    try {
      const token = req.cookies.auth;
      const response = await jwt.verify(token, config.JWTSecret);
      const userID = response.user;
      const user = await UserModel.findById(userID);
      if (!user) {
        throw new Error('User not found!');
      }
      const vet = user.vet;
      if (!vet) {
        throw new Error('Vet not found!');
      }
      res.render('vet/register/register.view.hbs', {isAuth: true, vet});
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
  update: async (req, res, next) => {
    try {
      const body = req.body || {};
      const token = req.cookies.auth;
      const response = await jwt.verify(token, config.JWTSecret);
      const userID = response.user;
      const user = await UserModel.findById(userID);
      if (!user) {
        throw new Error('User not found!');
      }
      const vet = await VetModel.findById(user.vet._id);
      if (!vet) {
        throw new Error('Vet not found!');
      }
      vet.name = body.name;
      vet.clinic = body.clinic;
      vet.crmv = body.crmv;

      await vet.save();

      res.render('vet/dashboard/dashboard.view.hbs', {
        message: 'Cadastro atualizado com sucesso!',
        isAuth: true,
      });
    } catch (error) {
      return next(error);
    }
  },
  updatePassword: async (req, res, next) => {
    try {
      const body = req.body || {};
      const oldPassword = body.oldPassword || '';
      const newPassword = body.password1 || '';

      if (oldPassword == '' || newPassword == '') {
        throw new Error('Senhas nao conferem');
      }
      const token = req.cookies.auth;
      const response = await jwt.verify(token, config.JWTSecret);
      const userID = response.user;
      const user = await UserModel.findById(userID);
      if (!user) {
        throw new Error('Usuario nao encontrado');
      }
      const compare = await bcrypt.compare(oldPassword, user.password);

      if (!compare) {
        return res.status(HttpStatus.badRequest).json({
          success: false,
          message: 'Senha não confere!',
        });
      }
      user.password = newPassword;
      user.password = await user.hash(next);
      await user.save();

      res.json({
        success: true,
      });
    } catch (error) {
      return next(error);
    }
  },
};
