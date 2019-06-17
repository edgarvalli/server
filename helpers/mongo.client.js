const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://localhost:27017";

module.exports = db => {
  return {
    id: id => new ObjectId(id),
    string: id => ObjectID(id).toString(),
    collection: async collection => {
      const conn = await MongoClient.connect(url);
      const set = conn.db(db);
      const c = await set.collection(collection);
      return c;
    }
  };
};
