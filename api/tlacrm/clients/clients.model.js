const { mongoClient } = require("../../../helpers");
const mongo = mongoClient("tlacrm");

function Client() {
  this.db = null;
  this.onInit();
}

Client.prototype.onInit = async function() {
  this.db = await mongo.collection("clients");
};

Client.prototype.Find = async function(limit, skip) {
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

Client.prototype.Search = async function(val) {
  try {
    const users = await this.db.find({ name: new RegExp(val, "i") }).toArray();
    return users;
  } catch (error) {
    return error;
  }
};

Client.prototype.Save = async function(client) {
  try {
    client.createDate = new Date();
    const result = await this.db.save(client);
    return result;
  } catch (error) {
    return error;
  }
};

Client.prototype.Update = async function(id, data) {
  try {
    data.updateDate = new Date();
    const _id = mongo.id(id);
    const result = await this.db.update({ _id }, { $set: data });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = Client
