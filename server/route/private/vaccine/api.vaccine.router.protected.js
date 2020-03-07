const express = require('express');
const {ApiVaccineCtrl} = require('../../../controllers');
const router = new express.Router();

router.post('/vaccine/create', ApiVaccineCtrl.create);
router.get('/vaccine/all', ApiVaccineCtrl.getAll);

module.exports = router;
