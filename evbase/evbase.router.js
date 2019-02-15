const router = require('express').Router();
const evbase = require('./evbase.controller');

const parseParams = (req, _, next) => {
    const { q } = req.params;
    const params = {};
    q.split("&").forEach(el => {
        el.split('=').forEach( e => {
            params[e] = e
        })
    })
    req.query = params
    next();
}

router
    .get('/fetch/:q', parseParams, evbase.fetch)

module.exports = router;