const express = require('express');
const {ViewVetCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/vet/pet', ViewVetCtrl.getPet);
router.get('/vet/perfil', ViewVetCtrl.getPerfilInfo);
router.post('/vet/update', ViewVetCtrl.update);
router.post('/vet/update/password', ViewVetCtrl.updatePassword);
router.get('/vet/pet/info/:petID', ViewVetCtrl.getPetInfo);
router.get('/vet/delete/account/:password', ViewVetCtrl.deleleAccount);
module.exports = router;
