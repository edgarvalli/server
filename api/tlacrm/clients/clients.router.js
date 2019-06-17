const router = require("express").Router();
const c = require("./clients.controller");
const decodeToken = require("../../../middleware/token.expiration");

router.get("/fetch/:limit?/:skip?", decodeToken, c.fetch)
router.get('/search/:value', decodeToken,c.search)
router.put('/', decodeToken, c.update)
router.post('/', decodeToken, c.add)
module.exports = router;
