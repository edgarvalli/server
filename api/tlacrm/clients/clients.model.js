const { mongoClient } = require("../../../helpers");
const mongo = mongoClient("tlacrm");

module.exports = {
  Clients: async function(limit, skip) {
    try {
      const db = await mongo.collection("clients");
      const users = await db
        .find({})
        .limit(limit)
        .skip(skip)
        .toArray();

      return users;
    } catch (error) {
      return error;
    }
  },
  SearchClient: async function(val = "") {
    try {
      const db = await mongo.collection("clients");
      const users = await db.find({ name: new RegExp(val, "i") }).toArray();

      return users;
    } catch (error) {
      return error;
    }
  },
  SaveClient: async function(client) {
    try {
      const db = await mongo.collection("clients");
      client.createDate = new Date();
      const result = await db.save(client);
      return result;
    } catch (error) {
      return error;
    }
  },
  UpdateClient: async function(id, data) {
    try {
      const db = await mongo.collection("clients");
      data.updateDate = new Date();
      const _id = mongo.id(id);
      const result = await db.update({ _id }, { $set: data });
      return result;
    } catch (error) {
      return error;
    }
  }
};
