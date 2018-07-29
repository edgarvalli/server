const express = require('express');
const router = express.Router();
const client = require('./clients.methods');
const { isAuth } = require("../../../lib/func");

router
    .get('/fetch/:page',isAuth,client.fetch)
    .post('/add',isAuth,client.add)
    .post('/update',isAuth,client.update)
    .get('/remove/:id',isAuth,client.remove)
    .get('/getone/:id',isAuth,client.getOne)
    .get('/search/:value',isAuth,client.search)
    .post("/convert",isAuth,client.convertToClient)
    .post("/convert-from-lead", isAuth, client.convertToClient)
    .get("/get-jobs/:id", isAuth, client.getJobs)
    .get("/get-last-ten-clients", isAuth, client.getLastTenClients)

module.exports = router;