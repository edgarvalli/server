const { isAuth } = require("../lib/func");

module.exports = app => {
    app
        .get("/tlacrm/api/count-records", isAuth,require("./home"))
        .use('/tlacrm/api/leads', require("./leads/leads.route"))
        .use('/tlacrm/api/clients', require("./clients/clients.route"))
        .use('/tlacrm/api/auth', require("./auth/auth.route"))
        .use('/tlacrm/api/jobs',require("./jobs/jobs.route"))
        .use("/tlacrm/api/users", require("./users/users.route"))
}