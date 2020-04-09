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
  try {
    const password = this.password;
    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })

    return hashedPassword
  } catch (error) {
    return next(error);
  }
});

User.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('users', User);
