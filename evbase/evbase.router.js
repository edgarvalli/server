const router = require('express').Router();
const evbase = require('./evbase.controller');

const parseParams = (req, _, next) => {
    const { q } = req.params;
    const params = q.split("&").map(elements => elements.split("=").map(el => ({[el[0]]: el[1]})))
    req.query = params;
    next();
}

router
    .get('/fetch/:q', parseParams, evbase.fetch)

module.exports = router;