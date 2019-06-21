const MongoModel = require("../../models/MongoModel");
const mongo = new MongoModel("tlacrm", "clients");

class ClientModel {
  async Fetch(req, res) {
    try {
      const { limit, skip } = req.params;
      const clients = await mongo.Find(parseInt(limit), parseInt(skip));
      res.json({ error: false, clients });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }

  async Save(req, res) {
    try {
      const { client } = req.body;
      const result = await mongo.Save(client);
      res.json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }

  async Update(req, res) {
    try {
      const { id, data } = req.body;
      const result = await mongo.Update(id, data);
      res.json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }

  async Search(req, res) {
    try {
      const { value } = req.params;
      const clients = await _client.Search(value);
      res.json({ error: false, clients });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }
}

module.exports = ClientModel;
