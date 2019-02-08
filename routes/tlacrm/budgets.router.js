const express = require('express');
const router = express.Router();
const controller = require('../../controllers/tlacrm/budgets.controllers');
const { tokenExpiration } = require("../../middleware");


router
    .post('add', controller.add)
    .post('update', controller.update)
    .get('fetch', controller.fetch)
    .get('getone', controller.getOne)
    .get('remove', controller.remove)
    .get('search', controller.search)

module.exports = router;