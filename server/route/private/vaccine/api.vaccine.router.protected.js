const express = require('express');
const {ApiVaccineCtrl} = require('../../../controllers');
const router = new express.Router();

router.post('/vaccine/create', ApiVaccineCtrl.create);
router.post('/vaccine/update', ApiVaccineCtrl.update);
router.get('/vaccine/all', ApiVaccineCtrl.getAll);
router.get('/vaccine/delete/:id', ApiVaccineCtrl.deleteByID);
router.delete('/vaccine/delete', ApiVaccineCtrl.delete);

module.exports = router;
