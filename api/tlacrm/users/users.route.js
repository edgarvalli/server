const express = require('express');
const router = express.Router();
const users = require('./users.methods');
const { isAuth } = require('../../../lib/func');

router
    .put("/change-avatar", isAuth, users.changeAvatar)

    // .get('/m', lead.addNewFields)

module.exports = router;