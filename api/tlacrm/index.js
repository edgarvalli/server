const authRouter = require("./auth/auth.route");
const { isAuth } = require("../../lib/func");

module.exports = app => {
    app
        .get("/api/tlacrm/count-records", isAuth,require("./home"))
        .use('/api/tlacrm/leads', require("./leads/leads.route"))
        .use('/api/tlacrm/clients', require("./clients/clients.route"))
        .use('/api/tlacrm/auth', require("./auth/auth.route"))
        .use('/api/tlacrm/jobs',require("./jobs/jobs.route"))
        .use("/api/tlacrm/users", require("./users/users.route"))
}