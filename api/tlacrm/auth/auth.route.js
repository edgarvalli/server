const express = require('express');
const router = express.Router();
const auth = require('./auth.class');
const { isAuth } = require('../../../func');

router
    .get('/login', auth.login)

module.exports = router;