const router = require('express').Router();
const evbase = require('./evbase.controller');

const parseParams = (req, _, next) => {
    if(req.params.q) {
        const { q } = req.params;
        const params = {};
        q.split("&").forEach(el => {
            console.log(el)
            const e = el.split('=');
            params[e[0]] = e[1];
        })
        req.query = params
    }
    next();
}

router
    .get('/fetch/:q?*', parseParams, evbase.fetch)

module.exports = router;