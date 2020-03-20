const express = require('express');
const {ApiPersonCtrl} = require('../../../controllers');
const router = new express.Router();

router.post('/person/create', ApiPersonCtrl.create);
router.get('/person/all', ApiPersonCtrl.getAll);
router.delete('/person/delete', ApiPersonCtrl.delete);


module.exports = router;
