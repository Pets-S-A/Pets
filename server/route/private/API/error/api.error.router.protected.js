const express = require('express');
const {ApiErrorCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/api/error/all', ApiErrorCtrl.getAll);
router.delete('/api/error/delete', ApiErrorCtrl.delete);

module.exports = router;
