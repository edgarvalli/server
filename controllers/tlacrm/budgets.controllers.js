const MongoModel = require("../../models/MongoModel");
const mongo = new MongoModel("tlacrm", "budgets");

class BugetsController {
  async Fetch(req, res) {
    try {
      const { limit, skip } = req.params;
      const budgets = await mongo.Find(parseInt(limit), parseInt(skip));
      res.json({ error: false, budgets });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }

  async Save(req, res) {
    try {
      const { budget } = req.body;
      budget.createDate = new Date();
      const result = await mongo.Save(budget);
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
      const budgets = await mongo.Search({
        clientName: value,
        budgetDescription: value
      });
      res.json({ error: false, budgets });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }

  async Remove(req, res) {
    try {
      const { id } = req.params;
      const result = await mongo.DeleteOne(id);
      res.json({ error: true, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }

  async FindOne(req, res) {
    try {
      const { id } = req.params;
      const budget = await mongo.FindOne(id);
      res.json({ error: false, budget });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }
}

module.exports = BugetsController;
