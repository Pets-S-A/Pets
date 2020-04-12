const express = require('express');
const {ApiPersonCtrl} = require('../../../controllers');
const router = new express.Router();

router.get('/person/all', ApiPersonCtrl.getAll);
router.post('/person/create', ApiPersonCtrl.create);
router.post('/person/update', ApiPersonCtrl.update);
router.delete('/person/delete', ApiPersonCtrl.delete);
router.delete('/person/delete/:id', ApiPersonCtrl.deleteByID);


module.exports = router;
