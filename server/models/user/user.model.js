/* eslint-disable max-len */
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
      email: {type: String, required: true, unique: true},
      name: {type: String, required: true},
      password: {type: String, required: true},
      access: {type: [String], required: true},
      person: {type: mongoose.Schema.Types.ObjectId, ref: 'person', autopopulate: true},
      vet: {type: mongoose.Schema.Types.ObjectId, ref: 'vet', autopopulate: true},
    },
    {timestamps: true},
);

User.methods.hash = (async function(next) {
  const user = this;
  try {
    bcrypt.genSalt(10, async function(error, salt) {
      if (error) {
        return next(error);
      } else {
        bcrypt.hash(user.password, salt, async function(error, hashed) {
          if (error) {
            return next(error);
          }
          user.password = hashed;
          return;
        });
      }
    });
  } catch (error) {
    return next(error);
  }
});

User.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('users', User);
