const path = require("path");
const router = require("express").Router();
const evbase = require("./evbase.controller");

router
  .get("/console", (_, res) =>
    res.sendFile(path.resolve(path.join(__dirname, "./console.html")))
  )
  .get("/fetch/:module/:query", evbase.middleware, evbase.fetch)
  .post("/login", evbase.middleware, evbase.login);

module.exports = router;
