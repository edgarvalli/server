const express = require('express');
const router = express.Router();
const lead = require('./leads.class');
const { isAuth } = require('../../../lib/func');

router
    .get('/fetch/:page',lead.fetch)
    .post('/add', lead.add)
    .post('/update',lead.update)
    .get('/remove/:id',lead.remove)
    .get('/getone/:id',lead.getOne)
    .get('/search/:value', lead.search)

    // .get('/m', lead.addNewFields)

module.exports = router;