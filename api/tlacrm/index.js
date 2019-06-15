function Index(app) {
  const route = "/api/tlacrm";
  app.use(route + "/users", require("./users/users.router"));
  app.use(route + "/clients", require("./clients/clients.router"));
}

module.exports = Index;
