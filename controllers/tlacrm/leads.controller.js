const MongoModel = require("../../models/MongoModel");
const mongo = new MongoModel("tlacrm", "budgets");

class LeadController {
  async Find(req, res) {
    try {
      const { limit, skip } = req.params;
      const leads = await mongo.Find(parseInt(limit), parseInt(skip));
      res.json({ error: false, leads });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }

  async Save(req, res) {
    try {
      const { budget } = req.body;
      budget.createDate = new Date();
      const result = await mongo.save(budget);
      return result;
    } catch (error) {
      return error;
    }
  }

  async Update(req, res) {}

  async Search(req, res) {}

  async Remove(req, res) {}
}

module.exports = LeadController;
