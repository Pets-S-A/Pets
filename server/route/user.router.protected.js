const express = require('express')
const { UserCtrl } = require('../controllers')
const router = express.Router()

router.post('/user', UserCtrl.insertUser)

module.exports = router
