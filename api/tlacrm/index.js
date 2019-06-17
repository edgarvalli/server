const fs = require("fs");
const path = require("path");

function Index(app) {
  const route = "/api/tlacrm";

  app.get(route + "/get-avatar/:id", (req, res) => {
    const { id } = req.params;
    const file = path.resolve(
      path.join(__dirname, "../../files/profiles/" + id + ".png")
    );
    if (fs.existsSync(file)) return res.sendFile(file);
    const defaultAvatar = path.resolve(
      path.join(__dirname, "../../files/profiles/default_avatar.png")
    );
    return res.sendFile(defaultAvatar);
  });

  app.use(route + "/users", require("./users/users.router"));
  app.use(route + "/clients", require("./clients/clients.router"));
}

module.exports = Index;
