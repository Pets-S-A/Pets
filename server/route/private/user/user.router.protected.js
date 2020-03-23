const express = require('express');
const {UserCtrl} = require('../../../controllers');
const router = new express.Router();

router.get('/user/all', UserCtrl.getAll);
router.delete('/user/delete', UserCtrl.delete);
router.delete('/user/delete/:id', UserCtrl.deleteByID);

module.exports = router;
