const authRouter = require("./auth/auth.route");
const { isAuth } = require("../../lib/func");

module.exports = app => {
    app
        .get("/api/count-records", isAuth,require("./home"))
        .use('/api/leads', require("./leads/leads.route"))
        .use('/api/clients', require("./clients/clients.route"))
        .use('/api/auth', require("./auth/auth.route"))
        .use('/api/jobs',require("./jobs/jobs.route"))
        .use("/api/users", require("./users/users.route"))
}