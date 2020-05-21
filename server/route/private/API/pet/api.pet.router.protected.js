/* eslint-disable max-len */
const express = require('express');
const {ApiPetCtrl, ApiSharedPetIDCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/api/pet/all', ApiPetCtrl.getAll);
router.get('/api/pet/allByUserID/:userID', ApiPetCtrl.getAllByUserID);
router.post('/api/pet/create', ApiPetCtrl.create);
router.post('/api/pet/update', ApiPetCtrl.update);
router.delete('/api/pet/delete', ApiPetCtrl.delete);
router.get('/api/pet/delete/:id', ApiPetCtrl.deleteByID);

// Shared Pet
router.get('/api/pet/shared/all', ApiSharedPetIDCtrl.getAll);
router.get('/api/pet/shared/getPet/:provisoryID', ApiSharedPetIDCtrl.getPetByProvisoryID);
router.post('/api/pet/shared/getProvisoryID', ApiSharedPetIDCtrl.getSharedPetID);


module.exports = router;
