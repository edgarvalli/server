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
      let users = await client
        .aggregate([
          {
            $lookup: {
              from: "profiles",
              localField: "profileId",
              foreignField: "_id",
              as: "profile"
            }
          }
        ])
        .toArray();

      users = users.map(user => {
        user.profile = user.profile[0];
        return user;
      });

      return users;
    } catch (error) {
      return error;
    }
  },
  NewUser: async user => {
    try {
      user.createDate = new Date();
      const client = await Connection("users");
      const result = await client.insertOne(user);
      return result;
    } catch (error) {
      return error;
    }
  },
  UpdateUser: async (id, data) => {
    const _id = mongoClient().id(id);
    const client = await Connection("users");
    if ("profileId" in data) data.profileId = mongoClient().id(data.profileId);
    gi;
    const result = await client.updateOne({ _id }, { $set: data });
    return result;
  },
  UpdateUserPassword: async (id, plainTextPassword) => {
    const _id = mongoClient().id(id);
    const password = bcrypt.hashSync(plainTextPassword, 10);
    const client = await Connection("users");
    const result = await client.updateOne({ _id }, { $set: { password } });
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
