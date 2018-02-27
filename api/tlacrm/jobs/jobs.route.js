const express = require('express');
const router = express.Router();
const jobClass = require('./jobs.methods');
const { isAuth } = require("../../../lib/func");

router
    .get("/fetch/:page",isAuth,jobClass.fetch)
    .get("/getone/:id",isAuth,jobClass.getOne)
    .get("/paid-out/:id",isAuth,jobClass.makePaidOut)
    .post("/update",isAuth,jobClass.update)
    .post('/add',isAuth,jobClass.add)

module.exports = router;

