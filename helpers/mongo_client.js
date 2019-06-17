const { MongoClient, ObjectID } = require("mongodb");

class Mongo {
  id = id => ObjectID(id);
  url = "mongodb://localhost:27017";
  result = [];
  db = null;

  constructor(database, collection) {
    MongoClient.connect(this.url)
      .then(db => db.db(database))
      .then(client => (this.db = client.collection(collection)))
      .catch(({ message }) => (this.result = { error: true, message }));
  }

  async Find() {
    try {

        const result = await this.db.find({}).toArray();
        return result;

    } catch(error) {
        return error;
    }
  }

}



module.exports = Mongo;
