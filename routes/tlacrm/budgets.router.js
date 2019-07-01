const express = require("express");
const router = express.Router();
const BudgetModel = require("../../controllers/tlacrm/budgets.controllers");
const { tokenExpiration } = require("../../middleware");
const bm = new BudgetModel();

router
  .post("/save", tokenExpiration, bm.Save)
  .put("/update", tokenExpiration, bm.Update)
  .delete("/remove/:id", tokenExpiration, bm.Remove)
  .get("/search/:value", tokenExpiration, bm.Search)
  .get("/fetch/:limit/:skip", tokenExpiration, bm.Fetch)
  .delete("/remove/:id", tokenExpiration, bm.Remove)
  get("/find-one/:id", tokenExpiration, bm.FindOne)

module.exports = router;
