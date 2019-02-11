const express = require('express');
const router = express.Router();
const controller = require('../../controllers/tlacrm/budgets.controllers');
const { tokenExpiration } = require("../../middleware");


router
    .post('/add', tokenExpiration, controller.add)
    .post('/update', tokenExpiration, controller.update)
    .get('/fetch/:page', tokenExpiration, controller.fetch)
    .get('/getone/:id', tokenExpiration, controller.getOne)
    .get('/remove/:id', tokenExpiration, controller.remove)
    .get('/search/:value', tokenExpiration, controller.search)
    .post('/uploadfiles/', tokenExpiration, controller.uploadFiles)

module.exports = router;