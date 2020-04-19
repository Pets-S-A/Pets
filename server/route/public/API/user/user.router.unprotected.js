const express = require('express');
const {ApiUserCtrl} = require('../../../../controllers');
const router = new express.Router();

router.post('/user/create', ApiUserCtrl.create);
// router.post('/user/auth', UserCtrl.authenticate);

module.exports = router;
