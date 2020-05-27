const express = require('express');
const {ViewVetCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/vet/pet', ViewVetCtrl.getPet);
router.get('/vet/perfil', ViewVetCtrl.getPerfilInfo);
router.post('/vet/update', ViewVetCtrl.update);
router.get('/vet/pet/info/:petID', ViewVetCtrl.getPetInfo);

module.exports = router;
