const express = require('express');
const {ViewUserCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/', ViewUserCtrl.getLoginView);
router.get('/logout', ViewUserCtrl.logout);

module.exports = router;
