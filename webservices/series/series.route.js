const Router = require('express').Router();
const c = require('./series.methods');

Router.use(function(res,req, next) {
    console.log('Middleware');
    next();
})

Router
    .get('/get-series/:page?*', c.getSeries)
    .get('/get-seasons/:id', c.getSeasons)
    .get('/get-chapters/:serieid/:seasonid', c.getChapters)


module.exports = Router;