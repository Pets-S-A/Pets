const express = require('express');
const {ApiVaccineCtrl} = require('../../../controllers');
const router = new express.Router();

router.post('/vaccine/create', ApiVaccineCtrl.create);
router.get('/vaccine/all', ApiVaccineCtrl.getAll);
router.delete('/vaccine/delete', ApiVaccineCtrl.delete);
router.get('/vaccine/delete/:id', ApiVaccineCtrl.deleteByID);

module.exports = router;
