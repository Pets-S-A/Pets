const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vet = new Schema(
    {
      clinic: {type: String, required: true},
      name: {type: String, required: true},
      crmv: {type: String, required: true},
    },
    {timestamps: true},
);

module.exports = mongoose.model('vet', Vet);
