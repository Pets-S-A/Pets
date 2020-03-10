const express = require('express');
const {UserCtrl} = require('../../../controllers');
const router = new express.Router();

router.post('/api/user/create', UserCtrl.create);
router.post('/api/user/auth', UserCtrl.authenticate);

module.exports = router;
