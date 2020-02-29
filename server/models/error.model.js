const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ErrorModel = new Schema(
    {
        name: { type: String, required: true },
        message: { type: String, required: true },
        error: { type: String }
    },
    { timestamps: true },
)   

module.exports = mongoose.model('error', ErrorModel)
