const express = require('express');
const {PetCtrl} = require('../../controllers');
const router = new express.Router();

router.post('/pet/create', PetCtrl.create);
router.get('/pet/all', PetCtrl.getAll);

module.exports = router;
