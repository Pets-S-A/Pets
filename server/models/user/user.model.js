const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
      login: {type: String, required: true},
      name: {type: String, required: true},
      password: {type: String, required: true},
      access: {type: [String], required: true},
    },
    {timestamps: true},
);

User.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(error, salt) {
    if (error) {
      return next(error);
    } else {
      bcrypt.hash(user.password, salt, function(error, hashed) {
        if (error) {
          return next(error);
        }
        user.password = hashed;
        next();
      });
    }
  });
});

module.exports = mongoose.model('users', User);
