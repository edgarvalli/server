const express = require('express');
const router = express.Router();
const lead = require('./leads.methods');
const { isAuth } = require('../../../lib/func');

router
    .get('/fetch/:page',isAuth,lead.fetch)
    .post('/add',isAuth,lead.add)
    .post('/update',isAuth,lead.update)
    .get('/remove/:id',isAuth,lead.remove)
    .get('/getone/:id',isAuth,lead.getOne)
    .get('/search/:value',isAuth,lead.search)

    // .get('/m', lead.addNewFields)

module.exports = router;