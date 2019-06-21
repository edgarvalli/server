const router = require("express").Router();
const ClientModel = require("../../controllers/tlacrm/client.controller");
const { tokenExpiration } = require("../../middleware");

const c = new ClientModel();

router.get("/fetch/:limit?/:skip?", tokenExpiration, c.Fetch);
router.get("/search/:value", tokenExpiration, c.Search);
router.put("/", tokenExpiration, c.Update);
router.post("/", tokenExpiration, c.Save);
module.exports = router;
