const router = require('express').Router();
const evbase = require('./evbase.controller');

router
    .get('/fetch/:limit?*/skipt?*', parseParams, evbase.fetch)

module.exports = router;