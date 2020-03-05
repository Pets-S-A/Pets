const {UserModel} = require('../../models');
const HttpStatus = require('../../HttpStatus');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const config = require('../../config');

const EXPIRES_IN_MINUTES = '1440m'; // expires in 24 hours

module.exports = {
  insertUser: async (req, res, next) => {
    const body = req.body;

    if (!body) {
      const error = new Error();
      error.message = 'You must provide an user';
      error.status = HttpStatus.unauthorized;
      next(error);
    }

    UserModel.find({login: body.login}, (error, docs) => {
      if (docs.length) {
        const error = new Error();
        error.status(HttpStatus.badRequest).json({
          success: false,
          message: 'User Already exist',
        });
        next(error);
      } else {
        const user = new UserModel(body);

        if (!user) {
          return res
              .status(HttpStatus.badRequest)
              .json({success: false, error: error});
        }

        user
            .save()
            .then(() => {
              res.status(HttpStatus.created).json({
                success: true,
                id: user._id,
                message: 'User created!',
              });
            })
            .catch((error) => {
              next(error);
            });
      }
    });
  },
  authenticate: async (req, res, next) => {
    const login = req.body.login;
    const password = req.body.password;

    try {
      const login = UserModel.findOne({login});
      if (!login) {
        return res.status(HttpStatus.notFound).json({
          success: false,
          error: `login not found`,
        });
      }
    } catch (error) {
      next(error);
    }
    UserModel.findOne({login}).then((user, error) => {
      if (error) {
        return res
            .status(HttpStatus.badRequest)
            .json({success: false, error: error});
      }

      if (!user) {
        return res.status(HttpStatus.notFound).json({
          success: false,
          error: `login not found`,
        });
      }

      bcrypt.compare(password, user.password, function(error, result) {
        if (result === true) {
          const payload = {user: user._id};
          const token = jwt.sign(payload, config.JWTSecret, {
            expiresIn: EXPIRES_IN_MINUTES,
          });

          user.password = undefined;

          return res.status(HttpStatus.OK).json({
            success: true,
            user,
            token,
            message: 'User authenticated!',
          });
        } else {
          return res.status(HttpStatus.notAcceptable).json({
            success: false,
            error: `Password doesn't match`,
          });
        }
      });
    });
  },
};
