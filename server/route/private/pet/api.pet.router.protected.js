const express = require('express');
const {ApiPetCtrl} = require('../../../controllers');
const router = new express.Router();

router.get('/pet/all', ApiPetCtrl.getAll);
router.get('/pet/allByUserID/:userID', ApiPetCtrl.getAllByUserID);
router.post('/pet/create', ApiPetCtrl.create);
router.post('/pet/update', ApiPetCtrl.update);
router.delete('/pet/delete', ApiPetCtrl.delete);
router.delete('/pet/delete/:id', ApiPetCtrl.deleteByID);


module.exports = router;
