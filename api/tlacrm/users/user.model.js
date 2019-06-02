const { mongoClient } = require("../../../helpers/");
const bcrypt = require("bcrypt");

const Connection = async coll => await mongoClient("tlacrm").collection(coll);
module.exports = {
  User: async query => {
    try {
      if ("_id" in query) query._id = mongoClient().id(query._id);
      const conn = await Connection("users");
      const user = await conn.findOne(query);
      return user;
    } catch (error) {
      return error;
    }
  },
  Users: async () => {
    try {
      const client = await Connection("users");
      const users = await client.aggregate([
        {
          $lookup: {
            from: "profiles",
            localField: "profileId",
            foreignField: "_id",
            as: "_profile"
          }
        }
      ])
      return users;
    } catch (error) {
      return error;
    }
  },
  UpdateUserPassword: async (id, plainTextPassword) => {
    const _id = mongoClient().id(id);
    const password = bcrypt.hashSync(plainTextPassword, 10);
    const client = await Connection("users");
    const result = await client.updateOne({ _id }, { $set: {  password } } );
    return result;
  },
  Profile: async id => {
    try {
      const conn = await Connection("profiles");
      const profile = await conn.findOne({
        _id: mongoClient().id(id)
      });
      return profile;
    } catch (error) {
      return error;
    }
  },
  Profiles: async () => {
    try {
      const conn = await Connection("profiles");
      const profiles = await conn.find().toArray();
      return profiles;
    } catch (error) {
      return error;
    }
  }
};
