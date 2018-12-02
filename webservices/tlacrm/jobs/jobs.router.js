const express = require('express');
const router = express.Router();
const jobClass = require('./jobs.controller');
const { isAuth } = require("../../../lib/func");

router
    .get("/fetch/:page",jobClass.fetch)
    .get("/getone/:id",isAuth,jobClass.getOne)
    // .get("/paid-out/:id",isAuth,jobClass.makePaidOut)
    .post("/update",isAuth,jobClass.update)
    .post('/add',isAuth,jobClass.add)
    .post('/add-comment', isAuth, jobClass.addComment)
    .get("/get-client-jobs/:id")

module.exports = router;

