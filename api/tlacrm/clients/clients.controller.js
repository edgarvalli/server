const Client = require("./clients.model");
const _client = new Client();

module.exports = {
  fetch: async function(req, res) {
    try {
      const { limit = 50, skip = 0 } = req.params;
      const clients = await _client.Find(parseInt(limit), parseInt(skip));
      res.json({ error: false, clients });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  search: async function(req, res) {
    try {
      const { value } = req.params;
      const clients = await _client.Search(value)
      res.json({ error: false, clients });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  update: async function(req, res) {
    try {
      const { id, data } = req.body;
      const result = await _client.Update(id, data)
      res.json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  add: async function(req, res) {
    try {
      const { client } = req.body;
      console.log(req.body);
      const result = await _client.Save(client)
      res.json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }
};
