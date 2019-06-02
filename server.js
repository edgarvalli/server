const express = require("express");
const app = express();
const cors = require("cors");

module.exports = function() {
  app
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use(cors())
    .use(express.static("public"));

  require("./api")(app);

  app.get("/image-profile/:id",(req, res) => {
    res.sendFile(`${__dirname}/files/profiles/${req.params.id}.png`)
  })

  return app;
};
