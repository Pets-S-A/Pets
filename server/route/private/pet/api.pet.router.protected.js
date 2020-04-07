const express = require('express');
const {ApiPetCtrl} = require('../../../controllers');
const router = new express.Router();

router.post('/pet/create', ApiPetCtrl.create);
router.get('/pet/all', ApiPetCtrl.getAll);

router.get('/pet/allByUserID/:userID', ApiPetCtrl.getAllByUserID);

router.delete('/pet/delete/:id', ApiPetCtrl.delete);


module.exports = router;
