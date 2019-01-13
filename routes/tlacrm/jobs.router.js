const express = require('express');
const router = express.Router();
const jobController = require('../../controllers/tlacrm/jobs.controller');
const { tokenExpiration } = require("../../middleware");

router
    .get("/fetch/:page",jobController.fetch)
    .get("/getone/:id",tokenExpiration,jobController.getOne)
    // .get("/paid-out/:id",isAuth,jobController.makePaidOut)
    .post("/update",tokenExpiration,jobController.update)
    .post('/add',tokenExpiration,jobController.add)
    .post('/add-comment', tokenExpiration, jobController.addComment)
    .get("/get-client-jobs/:id", tokenExpiration, jobController.getAllJobsFromId)
    .get("/set-job-as-payment/:id", tokenExpiration, jobController.setAsPayed)

module.exports = router;

