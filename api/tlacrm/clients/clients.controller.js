const {
  Clients,
  SearchClient,
  SaveClient,
  UpdateClient
} = require("./clients.model");



module.exports = {
  fetch: async function(req, res) {
    try {
      const { limit = 50, skip = 0 } = req.params;
      const clients = await Clients(parseInt(limit), parseInt(skip));
      res.json({ error: false, clients });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  search: async function(req, res) {
    try {
      const { value } = req.params;
      const clients = await SearchClient(value);
      res.json({ error: false, clients });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  update: async function(req, res) {
    try {
      const { id, data } = req.body;
      const result = await UpdateClient(id, data);
      res.json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  add: async function(req, res) {
    try {
      const { client } = req.body;
      console.log(req.body)
      const result = await SaveClient(client);
      res.json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }
};
