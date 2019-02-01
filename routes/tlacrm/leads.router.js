const express = require('express');
const router = express.Router();
const leadController = require('../../controllers/tlacrm/leads.controller');
const { tokenExpiration } = require("../../middleware");

router
    .get('/fetch/:page',tokenExpiration,leadController.fetch)
    .post('/add',tokenExpiration,leadController.add)
    .post('/update',tokenExpiration,leadController.update)
    .get('/remove/:id',tokenExpiration,leadController.remove)
    .get('/getone/:id',tokenExpiration,leadController.getOne)
    .get('/search/:value',tokenExpiration,leadController.search)

    // .get('/m', lead.addNewFields)

module.exports = router;