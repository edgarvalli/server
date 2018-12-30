const express = require('express');
const router = express.Router();
const clientController = require('../../controllers/tlacrm/client.controller');
const { isAllowed } = require('../../middleware/authentication');

router
    .get('/fetch/:page/:limit*?',isAllowed,clientController.fetch)
    .post('/add',isAllowed,clientController.add)
    .post('/update',isAllowed,clientController.update)
    .get('/remove/:id',isAllowed,clientController.remove)
    .get('/getone/:id',isAllowed,clientController.getOne)
    .get('/search/:value',isAllowed,clientController.search)
    .post("/convert",isAllowed,clientController.convertToClient)
    .post("/convert-from-lead", isAllowed, clientController.convertToClient)
    .get("/fetch-jobs/:id", isAllowed, clientController.fetchJobs)
    .get("/get-last-ten-clients", isAllowed, clientController.getLastTenClients)

module.exports = router;