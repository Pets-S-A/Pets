const {UserModel} = require('../../models');
const HttpStatus = require('../../HttpStatus');
const {validateBody} = require('../../utils');


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const config = require('../../config');

const EXPIRES_IN_MINUTES = '1440m'; // expires in 24 hours

module.exports = {
  create: async (req, res, next) => {
    try {
      const body = req.body || {};
      if (validateBody(body)) {
        throw new Error('Body not found');
      }
      if (!body.application) {
        throw new Error('Aplication is required');
      }
      if (body.application == 'json') {
        res.json({
          success: true,
          content: await UserModel.create(body),
        });
      } else {
        res.json({
          success: false,
          message: 'not implemented',
        });
      }
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  },
  get: async (req, res, next) => {
    try {
      if (req.cookies) {
        const isValid = await token(req.cookies.auth);
        if (isValid) {
          res.render('admin/dashboard/dashboard.view.hbs');
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
    const login = req.body.login;
    const password = req.body.password;


    try {
      const user = await UserModel.findOne({login});

      if (!user) {
        return res.json({
          success: false,
          content: 'User not found',
        });
      }

      const compare = await bcrypt.compare(password, user.password);

      if (!compare) {
        return res.json({
          success: false,
          content: 'Password doesn\'t match',
        });
      }

      const payload = {user: user._id};
      const token = jwt.sign(payload, config.JWTSecret, {
        expiresIn: EXPIRES_IN_MINUTES,
      });

      if (req.body.application && req.body.application == 'json') {
        return res.json({
          success: true,
          content: token,
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


// TODO - FIX
// eslint-disable-next-line require-jsdoc
async function createAdmin() {
  const user = await UserModel.findOne({login: 'admin'});

  if (!user) {
    const password = 'admin123!@#';
    const body = {
      login: 'admin',
      name: 'Admin',
      password,
      access: ['master'],
    };
    await UserModel.create(body);
    console.log('admin criado com sucesso!', password);
  } else {
    console.log('admin já existe!');
  }
}

createAdmin();
