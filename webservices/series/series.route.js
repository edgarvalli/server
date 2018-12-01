const Router = require('express').Router();
const c = require('./series.methods');

Router.use(function(req,res, next) {
    const token = req.headers.token;
    (token !== '=a144sDajAcoimA2MAdjs#==')
        ? res.json({error: false, msg: 'No estas autorizado para usar este webservices'})
        : next();
})

Router
    .get('/get-series/:page?*', c.getSeries)
    .get('/get-seasons/:id', c.getSeasons)
    .get('/get-chapters/:serieid/:seasonid', c.getChapters)


module.exports = Router;
