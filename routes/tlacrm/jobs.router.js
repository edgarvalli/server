const express = require('express');
const router = express.Router();
const jobController = require('../../controllers/tlacrm/jobs.controller');
const { isAllowed } = require('../../middleware/authentication');

router
    .get("/fetch/:page",jobController.fetch)
    .get("/getone/:id",isAllowed,jobController.getOne)
    // .get("/paid-out/:id",isAuth,jobController.makePaidOut)
    .post("/update",isAllowed,jobController.update)
    .post('/add',isAllowed,jobController.add)
    .post('/add-comment', isAllowed, jobController.addComment)
    .get("/get-client-jobs/:id", isAllowed, jobController.getAllJobsFromId)

module.exports = router;

