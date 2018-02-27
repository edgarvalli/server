const authRouter = require("./auth/auth.route");
const clientRouter = require("./clients/clients.route");
const leadRouter = require("./leads/leads.route");
const jobRouter = require("./jobs/jobs.route");

module.exports = app => {
    app
        .use('/api/tlacrm/leads', leadRouter)
        .use('/api/tlacrm/clients', clientRouter)
        .use('/api/tlacrm/auth', authRouter)
        .use('/api/tlacrm/jobs',jobRouter)
}