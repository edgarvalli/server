const router = require('express').Router();
const evbase = require('./evbase.controller');
router
    .get('/fetch/:data', evbase.fetch)

module.exports = router;