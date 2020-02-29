const { UserModel } = require('../models')
const HttpStatus = require('../HttpStatus')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const config = require('../config')

const EXPIRES_IN_MINUTES = '1440m' // expires in 24 hours

module.exports = {
    insertUser: async (req, res) => {
        const body = req.body

        if (!body) {
            return res.status(HttpStatus.unauthorized).json({
                success: false,
                error: 'You must provide an user',
            })
        }
        
        UserModel.find({ login: body.login }, (err, docs) => {
            if (docs.length) {
                return res
                    .status(HttpStatus.badRequest)
                    .json({ success: false, error: 'User Already exist' })
            } else {
                const user = new UserModel(body)

                if (!user) {
                    return res
                        .status(HttpStatus.badRequest)
                        .json({ success: false, error: err })
                }

                user
                    .save()
                    .then(() => {
                        res.status(HttpStatus.created).json({
                            success: true,
                            id: user._id,
                            message: 'User created!',
                        })
                    })
                    .catch(error => {
                        res.status(HttpStatus.badRequest).json({
                            success: false,
                            error,
                            message: 'User not created!',
                        })
                    })
            }
        })
    },
    authenticate: async (req, res, next) => {
        const login = req.body.login
        const password = req.body.password
        
        try {
            let login = UserModel.findOne({ login })
            if (!login) {
                return res.status(HttpStatus.notFound).json({
                    success: false,
                    error: `login not found`,
                })
            }

        } catch (error) {
            next(error)
        }
        UserModel.findOne({ login }).then((user, err) => {
            if (err) {
                return res
                    .status(HttpStatus.badRequest)
                    .json({ success: false, error: err })
            }

            if (!user) {
                return res.status(HttpStatus.notFound).json({
                    success: false,
                    error: `login not found`,
                })
            }

            bcrypt.compare(password, user.password, function(err, result) {
                if (result === true) {
                    const payload = { user: user._id }
                    const token = jwt.sign(payload, config.JWTSecret, {
                        expiresIn: EXPIRES_IN_MINUTES,
                    })

                    user.password = undefined

                    return res.status(HttpStatus.OK).json({
                        success: true,
                        user,
                        token,
                        message: 'User authenticated!',
                    })
                } else {
                    return res.status(HttpStatus.notAcceptable).json({
                        success: false,
                        error: `Password doesn't match`,
                    })
                }
            })
        })
    },
}
