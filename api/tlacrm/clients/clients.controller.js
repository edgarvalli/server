const { Clients } = require("./clients.model");
module.exports = {
  fetch: async function(req, res) {
    try {
      const { limit = 50, skip = 0 } = req.params;
      const clients = await Clients(parseInt(limit), parseInt(skip));
      res.json({ error: false, clients });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }
};
