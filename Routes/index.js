// create some routes which can recieve the incoming request

const express = require('express');
const router = express.Router();

const controller = require('../Controllers/index');

router.get('/travels', controller.getAllTravels);

router.get('/travels/:id', controller.getTravelsById);

router.get('/getTravelsByCity/:city', controller.getTravelsByCity);

module.exports = router;