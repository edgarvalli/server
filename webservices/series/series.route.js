const Router = require('express').Router();
const c = require('./series.methods');

Router.use(function(res,req, next) {
    console.log('Middleware');
    next();
})

Router
    .get('get-series', c.getSeries)


module.exports = Router;