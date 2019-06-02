const mongo = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const url = "mongodb://localhost:27017";

module.exports = db => {
  return {
    id: id => ObjectID(id),
    string: id => ObjectID(id).toString(),
    collection: async collection => {
      const conn = await mongo.connect(url);
      const set = conn.db(db);
      const c = await set.collection(collection);
      return c;
    }
  };
};
