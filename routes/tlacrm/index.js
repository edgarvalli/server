const router = require("express").Router();

router
  .use("/leads", require("./leads.router"))
  .use("/clients", require("./clients.router"))
  .use("/jobs", require("./jobs.router"))
  .use("/users", require("./users.router"))
  .use("/budgets", require("./budgets.router"))
  .get("/get-avatar/:id", (req, res) => {
    const { id } = req.params;
    const fs = require("fs");
    const path = require("path");
    const filePng = path.join(
      path.join(__dirname, "../../files/profiles/" + id + ".png")
    );
    const fileJpg = path.join(
      path.join(__dirname, "../../files/profiles/" + id + ".jpg")
    );
    const fileDefault = path.join(
      path.join(__dirname, "../../files/profiles/default_avatar.png")
    );
    if (fs.existsSync(filePng)) {
      res.sendFile(filePng);
    } else if (fs.existsSync(fileJpg)) {
      res.sendFile(fileJpg);
    } else {
      res.sendFile(fileDefault);
    }
  });

module.exports = router;
