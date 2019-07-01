const { mongoClient } = require("../helpers");

function MongoModel(database, collection) {
  this.database = database;
  this.collection = collection;
  this.db = null;
  this.onInit();
}

MongoModel.prototype.onInit = async function() {
  const mongo = mongoClient(this.database);
  this.mongo = mongo;
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

MongoModel.prototype.Search = async function(matches) {
  try {
    const params = Object.keys(matches).map(key => {
      return { [key]: new RegExp(matches[key], "i") };
    });
    const users = await this.db.find({ $or: params }).toArray();
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
    const _id = this.mongo.id(id);
    const result = await this.db.update({ _id }, { $set: data });
    return result;
  } catch (error) {
    return error;
  }
};

MongoModel.prototype.DeleteOne = async function(id) {
  try {
    const _id = this.mongo.id(id);
    const result = await this.db.deleteOne({ _id });
    return result;
  } catch (error) {
    return error;
  }
};

MongoModel.prototype.FindOne = async function(id) {
  try {
    const _id = this.mongo.id(id);
    const result = await this.db.findOne({ _id });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = MongoModel;
