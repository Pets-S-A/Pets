const {UserModel, PersonModel} = require('../../../models');
const HttpStatus = require('../../../HttpStatus');
const {validateBody} = require('../../../utils');


module.exports = {
  getAll: async (req, res, next) => {
    res.status(HttpStatus.OK).json({
      success: true,
      content: await UserModel.find(),
      message: 'Usuários encontrados!',
    });
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
      return res.json({
        success: true,
        message: 'Pessoa criada com successo!',
        content: user,
      });
    } catch (error) {
      res.status(HttpStatus.badRequest).json({
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
      const user = await UserModel.findById(params.id);
      const person = await PersonModel.findById(user.person.id);
      user.delete();
      person.delete();
      res.json({
        success: true,
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
