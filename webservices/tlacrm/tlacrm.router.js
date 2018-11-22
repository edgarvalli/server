const router = require("express").Router();

router
    .use("/leads", require("./leads/leads.router"))
    .use("/clients", require("./clients/clients.router"))
    .use("/jobs", require("./jobs/jobs.router"))
    .use("/users", require("./users/users.router"))

module.exports = router;