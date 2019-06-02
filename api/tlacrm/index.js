function Index(app) {
  app.use("/api/tlacrm/users", require("./users/users.router"));
}

module.exports = Index;
