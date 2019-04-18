module.exports = app => {
    app.use(function(_, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, ev-token");
        next();
    });
    app.use('/api/evbase', require('./evbase.router'));
}