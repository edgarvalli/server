const express = require('express');
const router = express.Router();
const auth = require('./auth.methods');
const { isAuth } = require('../../../lib/func');

router
    .post("/login", auth.login)

module.exports = router;