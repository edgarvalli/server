module.exports = function (app, webpush) {
    app.use('/ws/series/', require('./series.route'));
    app.use("/api/tlacrm/", require("./tlacrm")(webpush));
}