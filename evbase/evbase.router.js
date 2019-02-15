const router = require('express').Router();
const evbase = require('./evbase.controller');

const parseParams = (req, _, next) => {
    const { q } = req.params;
    const params = {};
    q.split("&").forEach(el => {
        params.keys = el
    })
    req.query = q.split("&");
    next();
}

router
    .get('/fetch/:q', parseParams, evbase.fetch)

module.exports = router;