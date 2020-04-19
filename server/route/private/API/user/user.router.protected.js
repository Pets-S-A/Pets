const express = require('express');
const {ApiUserCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/user/all', ApiUserCtrl.getAll);
router.delete('/user/delete', ApiUserCtrl.delete);
router.get('/user/delete/:id', ApiUserCtrl.deleteByID);

module.exports = router;
