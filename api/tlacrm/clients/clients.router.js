const router = require("express").Router();
const c = require("./clients.controller");
const decodeToken = require("../../../middleware/token.expiration");

router.get("/:limit?/:skip?", decodeToken, c.fetch);

module.exports = router;
