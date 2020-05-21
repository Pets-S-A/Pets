const express = require('express');
const {ApiVetCtrl} = require('../../../../controllers');
const router = new express.Router();

router.get('/api/vet/all', ApiVetCtrl.getAll);

module.exports = router;
