module.exports = function (app) {
    app.use('/ws/series/', require('./series.route'));
    app.use("/api/tlacrm/", require("./tlacrm"));
}