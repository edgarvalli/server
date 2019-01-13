const express = require('express');
const router = express.Router();
const clientController = require('../../controllers/tlacrm/client.controller');
const { tokenExpiration } = require("../../middleware");

router
    .get('/fetch/:page/:limit*?',tokenExpiration,clientController.fetch)
    .post('/add',tokenExpiration,clientController.add)
    .post('/update',tokenExpiration,clientController.update)
    .get('/remove/:id',tokenExpiration,clientController.remove)
    .get('/getone/:id',tokenExpiration,clientController.getOne)
    .get('/search/:value',tokenExpiration,clientController.search)
    .post("/convert",tokenExpiration,clientController.convertToClient)
    .post("/convert-from-lead", tokenExpiration, clientController.convertToClient)
    .get("/fetch-jobs/:id", tokenExpiration, clientController.fetchJobs)
    .get("/get-last-ten-clients", tokenExpiration, clientController.getLastTenClients)

module.exports = router;