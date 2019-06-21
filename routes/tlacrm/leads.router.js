const express = require("express");
const router = express.Router();
const LeadController = require("../../controllers/tlacrm/leads.controller");
const { tokenExpiration } = require("../../middleware");

const leadController = new LeadController();

router
  .get("/find/:limit/:skip", leadController.Find)
  .post("/add", tokenExpiration, leadController.Save)
  .put("/update", tokenExpiration, leadController.Update)
  .delete("/remove/:id", tokenExpiration, leadController.Remove)
  .get("/search/:value", tokenExpiration, leadController.Search);

// .get('/m', lead.addNewFields)

module.exports = router;
