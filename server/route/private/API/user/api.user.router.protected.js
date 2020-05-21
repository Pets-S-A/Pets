const express = require('express');
const {ApiUserCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/api/user/all', ApiUserCtrl.getAll);
router.delete('/api/user/delete', ApiUserCtrl.delete);
router.get('/api/user/delete/:id', ApiUserCtrl.deleteByID);

module.exports = router;
