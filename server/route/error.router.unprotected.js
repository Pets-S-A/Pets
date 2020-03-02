const express = require('express');
const {ErrorCtrl} = require('../controllers');
const router = new express.Router();

router.get('/error', ErrorCtrl.getAll);

module.exports = router;
