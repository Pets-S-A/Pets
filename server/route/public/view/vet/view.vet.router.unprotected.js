const express = require('express');
const {ViewVetCtrl} = require('../../../../controllers');
const router = new express.Router();

router.post('/vet/create', ViewVetCtrl.create);
router.get('/vet/create', ViewVetCtrl.getRegister);


module.exports = router;
