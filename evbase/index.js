module.exports = app => {
    app.use(function (_, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Token, DBNAME, Collection');

        // Pass to next layer of middleware
        next();
    })
    app.use('/api/evbase', require('./evbase.router'));
}