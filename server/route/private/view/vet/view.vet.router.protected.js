const express = require('express');
const {ViewVetCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/vet/pet', ViewVetCtrl.getPet);
router.get('/vet/pet/info/:petID', ViewVetCtrl.getPetInfo);

module.exports = router;
