const express = require('express');
const router = express.Router();
const client = require('./clients.class');

router.use( (req,res,next) => {
    // console.log('client router works');
    next();
})

router
    .get('/fetch/limit=:limit&page=:page', client.fetch)
    .post('/add', client.add)
    .post('/update',client.update)
    .get('/remove/:id',client.remove)
    .get('/getone/:id',client.getOne)
    .get('/search/:value', client.search)

    // .get('/m', client.addNewFields)

module.exports = router;