const express = require('express');
const router = express.Router();
const controller = require('../../controllers/tlacrm/budgets.controllers');
const { tokenExpiration } = require("../../middleware");


router
    .post('/add', tokenExpiration, controller.add)
    .post('/update', tokenExpiration, controller.update)
    .get('/fetch', tokenExpiration, controller.fetch)
    .get('/getone', tokenExpiration, controller.getOne)
    .get('/remove', tokenExpiration, controller.remove)
    .get('/search', tokenExpiration, controller.search)

module.exports = router;