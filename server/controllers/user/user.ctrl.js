const {UserModel} = require('../../models');
const HttpStatus = require('../../HttpStatus');
const {validateBody} = require('../../utils');


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../../config');

const EXPIRES_IN_MINUTES = '1440m'; // expires in 24 hours

module.exports = {
  login: async (req, res, next) => {
    const body = req.body || {};
    if (validateBody(body)) {
      throw new Error('Body não encontrado');
    }
    const email = body.email;
    const password = body.password;

    try {
      const user = await UserModel.findOne({email});

      if (!user) {
        return res.status(HttpStatus.badRequest).json({
          success: false,
          message: 'Usuário não encontrado!',
        });
      }

      const compare = await bcrypt.compare(password, user.password);
      if (!compare) {
        return res.status(HttpStatus.badRequest).json({
          success: false,
          message: 'Senha não confere!',
        });
      }

      const payload = {user: user._id};
      const token = jwt.sign(payload, config.JWTSecret, {
        expiresIn: EXPIRES_IN_MINUTES,
      });

      res.cookie('auth', token);
      res.render('vet/dashboard/dashboard.view.hbs');
    } catch (error) {
      return next(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await UserModel.find(),
        message: 'Usuários encontrados!',
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
      if (!body.application) {
        throw new Error('Aplication is required');
      }
      const previusUser = await UserModel.findOne({email: body.email});
      if (previusUser) {
        if (!previusUser.person) {
          previusUser.person = null;
          return res.json({
            success: true,
            message: 'Pessoa criada com successo!',
            content: previusUser,
          });
        } else {
          return res.status(HttpStatus.badRequest).json({
            success: false,
            message: 'E-mail já cadastrado!',
          });
        }
      }
      const user = await new UserModel(body);
      user.password = await user.hash(next);
      await user.save();
      if (body.application == 'json') {
        return res.json({
          success: true,
          message: 'Pessoa criada com successo!',
          content: user,
        });
      } else {
        res.status(HttpStatus.notAcceptable).json({
          success: false,
          message: error.message,
        });
      }
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  get: async (req, res, next) => {
    try {
      const token = req.cookies.auth;
      if (token) {
        const response = await jwt.verify(req.cookies.auth, config.JWTSecret);
        if (response) {
          // let userID = response.user;
          res.render('vet/dashboard/dashboard.view.hbs');
        } else {
          res.render('index', {
            pageIsLogin: true,
          });
        }
      } else {
        res.render('index', {
          pageIsLogin: true,
        });
      }
    } catch (err) {
      return next(err);
    }
  },
  authenticate: async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;


    try {
      const user = await UserModel.findOne({email});

      if (!user) {
        return res.status(HttpStatus.badRequest).json({
          success: false,
          message: 'Usuário não encontrado!',
        });
      }
      if (!user.person) {
        return res.status(HttpStatus.badRequest).json({
          success: false,
          message: 'Usuário não encontrado!',
        });
      }
      const compare = await bcrypt.compare(password, user.password);

      if (!compare) {
        return res.status(HttpStatus.badRequest).json({
          success: false,
          message: 'Senha não confere!',
        });
      }

      const payload = {user: user._id};
      const token = jwt.sign(payload, config.JWTSecret, {
        expiresIn: EXPIRES_IN_MINUTES,
      });

      if (req.body.application && req.body.application == 'json') {
        console.log(user);
        return res.json({
          success: true,
          content: user,
          message: token,
        });
      } else {
        res.cookie('auth', token);
        res.render('admin/dashboard/dashboard.view.hbs');
      }
    } catch (error) {
      return next(error);
    }

    return;
  },
  deleteByID: async (req, res, next) => {
    const params = req.params || {};
    try {
      if (!params.id) {
        throw new Error('Id is required');
      }
      res.json({
        success: true,
        content: await UserModel.findByIdAndDelete(params.id),
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
        content: await UserModel.deleteMany({}),
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
        success: false,
        message: error.message,
      });
    }
  },
  logout: async (req, res, next) => {
    res.clearCookie('auth');
    res.redirect('/user/auth');
  },
};
