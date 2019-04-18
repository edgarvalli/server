const mongo = require("./helpers/evbase.mongo");
const Connection = async coll => await mongo("evbase").collection(coll);
module.exports = {
  User: async function(username) {
    try {
      const conn = await Connection("users");
      const user = await conn.findOne({ username });
      return user;
    } catch (error) {
      return error;
    }
  },
  Profile: async function(id) {
    try {
      const conn = await Connection("profiles");
      const profile = await conn.findOne({
        _id: mongo().ObjectID(id)
      });
      return profile;
    } catch (error) {
      return error;
    }
  }
};
