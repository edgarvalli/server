const path = require("path");
const router = require('express').Router();
const evbase = require('./evbase.controller');

router
    .get("/console", (_, res) => res.sendFile(path.resolve(path.join(__dirname, "./console.html"))))
    .get("/fetch/:module/:query", evbase.fetch)
    .post("/login", evbase.login)

module.exports = router;