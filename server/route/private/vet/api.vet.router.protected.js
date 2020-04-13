const express = require('express');
const {VetCtrl} = require('../../../controllers');
const router = new express.Router();

router.get('/vet/all', VetCtrl.getAll);

module.exports = router;
