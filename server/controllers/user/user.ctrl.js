const {UserModel} = require('../../models');
const HttpStatus = require('../../HttpStatus');
const {validateBody} = require('../../utils');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const config = require('../../config');

const EXPIRES_IN_MINUTES = '1440m'; // expires in 24 hours

module.exports = {
  getAll: async (req, res, next) => {
    try {
      res.status(HttpStatus.OK).json({
        success: true,
        content: await UserModel.find(),
        message: 'Usuários encontrados!',
      });
    } catch (error) {
      return next(error);
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

      const user = await UserModel.create(body);
      await user.hash(next);
      if (body.application == 'json') {
        res.json({
          success: true,
          message: 'Pessoa criada com successo!',
          content: user,
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
    const email = req.body.email;
    const password = req.body.password;


    try {
      const user = await UserModel.findOne({email});

      if (!user) {
        return res.json({
          success: false,
          message: 'Usuário não encontrado!',
        });
      }
      if (!user.person) {
        return res.json({
          success: false,
          message: 'Pessoa não encontrada!',
        });
      }
      const compare = await bcrypt.compare(password, user.password);

      if (!compare) {
        return res.json({
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
        content: await UserModel.deleteMany({}),
      });
    } catch (error) {
      res.json({
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


// TODO - FIX
// eslint-disable-next-line require-jsdoc
async function createAdmin() {
  const user = await UserModel.findOne({email: 'admin'});

  if (!user) {
    const password = 'admin123!@#';
    const body = {
      email: 'admin',
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
