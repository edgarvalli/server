const mongo = require("../../../helpers/mongo.client")("tlacrm");
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
  }
};
