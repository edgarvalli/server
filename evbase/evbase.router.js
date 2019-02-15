const router = require('express').Router();
const evbase = require('./evbase.controller');

const parseParams = (req, res, next) => {
    const { q } = req.params;
    req.query = q;
    next();
}

router
    .get('/fetch/:q', parseParams, evbase.fetch)

module.exports = router;