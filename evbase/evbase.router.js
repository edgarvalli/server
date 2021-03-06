const path = require("path");
const router = require("express").Router();
const evbase = require("./evbase.controller");

router
  .get("/console", (_, res) =>
    res.sendFile(path.resolve(path.join(__dirname, "./console.html")))
  )
  .get(
    "/fetch/:db/:module/:query",
    evbase.checkToken,
    evbase.middleware,
    evbase.fetch
  )
  .get(
    "/search/:db/:module/:query",
    evbase.checkToken,
    evbase.middleware,
    evbase.search
  )
  .get(
    "/delete/:db/:module/:query",
    evbase.checkToken,
    evbase.middleware,
    evbase.remove
  )
  .get(
    "/find-one/:db/:module/:query",
    evbase.checkToken,
    evbase.middleware,
    evbase.findOne
  )
  .post("/login", evbase.middleware, evbase.login)
  .post("/update", evbase.checkToken, evbase.middleware, evbase.update)
  .post("/add", evbase.checkToken, evbase.middleware, evbase.add)
  .post("/webpush/subscribe", evbase.checkToken, evbase.subscribe);

module.exports = router;
