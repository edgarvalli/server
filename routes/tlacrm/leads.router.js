const express = require('express');
const router = express.Router();
const leadController = require('../../controllers/tlacrm/leads.controller');
const { isAllowed } = require('../../middleware/authentication');

router
    .get('/fetch/:page',isAllowed,leadController.fetch)
    .post('/add',isAllowed,leadController.add)
    .post('/update',isAllowed,leadController.update)
    .get('/remove/:id',isAllowed,leadController.remove)
    .get('/getone/:id',isAllowed,leadController.getOne)
    .get('/search/:value',isAllowed,leadController.search)

    // .get('/m', lead.addNewFields)

module.exports = router;