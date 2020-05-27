const express = require('express');
const {ApiUserCtrl, ViewUserCtrl} = require('../../../../controllers');
const router = new express.Router();

router.post('/api/user/create', ApiUserCtrl.create);
router.post('/api/user/auth', ViewUserCtrl.authenticate);

module.exports = router;
