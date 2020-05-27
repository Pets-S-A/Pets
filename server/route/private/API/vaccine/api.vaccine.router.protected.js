const express = require('express');
const {ApiVaccineCtrl} = require('../../../../controllers');
const router = new express.Router();

router.post('/api/vaccine/create', ApiVaccineCtrl.create);
router.post('/api/vaccine/update', ApiVaccineCtrl.update);
router.get('/api/vaccine/all', ApiVaccineCtrl.getAll);
router.get('/api/vaccine/delete/:id', ApiVaccineCtrl.deleteByID);
router.delete('/api/vaccine/delete', ApiVaccineCtrl.delete);

module.exports = router;
