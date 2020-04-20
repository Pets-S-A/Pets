const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SharedPetID = new Schema(
    {
      provisoryID: {type: String, required: true},
      petID: {type: String, required: true},
    },
    {timestamps: false},
);

module.exports = mongoose.model('sharedpetid', SharedPetID);
