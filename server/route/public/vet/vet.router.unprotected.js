const express = require('express');
const {VetCtrl} = require('../../../controllers');
const router = new express.Router();

router.post('/vet/create', VetCtrl.create);
router.get('/vet/create', VetCtrl.getRegister);


module.exports = router;
