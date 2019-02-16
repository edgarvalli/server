const router = require('express').Router();

const mainRouter = webpush => {
    router
        .use("/leads", require('./leads.router'))
        .use("/clients", require('./clients.router'))
        .use("/jobs", require('./jobs.router'))
        .use("/users", require('./users.router')(webpush))
        .use('/budgets', require('./budgets.router'))

        return router
}

module.exports = mainRouter;