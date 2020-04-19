const express = require('express');
const {ApiPersonCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/api/person/all', ApiPersonCtrl.getAll);
router.post('/api/person/create', ApiPersonCtrl.create);
router.post('/api/person/update', ApiPersonCtrl.update);
router.delete('/api/person/delete', ApiPersonCtrl.delete);
router.get('/api/person/delete/:id', ApiPersonCtrl.deleteByID);


module.exports = router;
