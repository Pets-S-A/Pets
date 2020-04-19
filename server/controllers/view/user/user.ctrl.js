const {UserModel} = require('../../../models');
const HttpStatus = require('../../../HttpStatus');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../../../config');

const EXPIRES_IN_MINUTES = '1440m'; // expires in 24 hours

module.exports = {
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
  logout: async (req, res, next) => {
    res.clearCookie('auth');
    res.redirect('/user/auth');
  },
};
