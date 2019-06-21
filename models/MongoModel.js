const { mongoClient } = require("../helpers");

function MongoModel(database, collection) {
  this.database = database;
  this.collection = collection;
  this.db = null;
  this.onInit();
}

MongoModel.prototype.onInit = async function() {
  const mongo = mongoClient(this.database);
  this.db = await mongo.collection(this.collection);
};

MongoModel.prototype.Find = async function(limit, skip) {
  try {
    const users = await this.db
      .find({})
      .limit(limit)
      .skip(skip)
      .toArray();
    return users;
  } catch (error) {
    return error;
  }
};

MongoModel.prototype.Search = async function(val) {
  try {
    const users = await this.db.find({ name: new RegExp(val, "i") }).toArray();
    return users;
  } catch (error) {
    return error;
  }
};

MongoModel.prototype.Save = async function(client) {
  try {
    client.createDate = new Date();
    const result = await this.db.save(client);
    return result;
  } catch (error) {
    return error;
  }
};

MongoModel.prototype.Update = async function(id, data) {
  try {
    data.updateDate = new Date();
    const _id = mongo.id(id);
    const result = await this.db.update({ _id }, { $set: data });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = MongoModel;
