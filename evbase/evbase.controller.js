const mongo = require("./helpers/evbase.mongo");
const decryptPassword = require("./helpers/decrypt.password");
const Model = require("./evbase.model");
const sendNotification = require("./helpers/send.notificacion");
const { generateToken, decodeToken } = require("./helpers/handle.token");

module.exports = {
  checkToken: async function(req, res, next) {
    try {
      const token = req.headers["ev-token"];
      const decoded = await decodeToken(token);
      req.user = decoded.user;
      next();
    } catch ({ message }) {
      res.json({ error: true, tokenExpired: true, message });
    }
  },
  middleware: function(req, res, next) {
    // if (req.user) {
    //   const allow = req.user.profile.modules.filter(m => {
    //     return m.key === req.params.module;
    //   });

    //   if (allow.length > 0) {
    //   }
    // }

    if (req.params.module) {
      req.evbaseQuery = {
        db: req.params.db,
        module: req.params.module,
        params: JSON.parse(req.params.query)
      };
    } else {
      req.evbaseQuery = req.body;
    }

    if ("credentials" in req.evbaseQuery) {
      next();
    } else if (!req.evbaseQuery.module) {
      res.json({ error: true, message: "No definio el modulo" });
    } else if (!req.evbaseQuery.db) {
      res.json({ error: true, message: "No definio la base de datos" });
    } else if (!req.evbaseQuery.params) {
      res.json({ error: true, message: "No definio los parametros" });
    } else {
      next();
    }
  },

  subscribe: async function(req, res) {
    const subscription = req.body;
    const payload = {
      title: "TlaCrm Notification",
      message: "Tu te has subscripto a las notificaciones",
      icon: "https://ev-server.ddns.net/tlacrm/images/icons/icon_72x72.png"
    };

    const coll = await mongo("evbase").collection("users");
    await coll.update(
      { _id: mongo().ObjectID(req.user._id) },
      { $push: { notificationEndPoint: subscription } }
    );
    sendNotification(subscription, payload);

    res.json({ error: false });
  },

  login: async function(req, res) {
    try {
      const { username, password, autoLogin } = req.evbaseQuery.credentials;

      const user = await Model.User(username);
      if (!user)
        return res.json({ error: true, message: "Usuario no encontrado" });
      const success = await decryptPassword(password, user.password);
      if (!success)
        return res.json({ error: true, message: "Contraseña incorrecta" });

      delete user.password;

      const profile = await Model.Profile(user.profileId);
      if (!profile)
        return res.json({
          error: true,
          message: "Ocurrio un error al seleccionar perfil"
        });

      user.profile = profile;
      user.autoLogin = autoLogin;

      res.json({
        error: false,
        token: generateToken(user),
        userInformation: user
      });
    } catch (message) {
      console.log(message);
      res.json({ error: true, message });
    }
  },

  fetch: async function(req, res) {
    try {
      const { params, module, db } = req.evbaseQuery;

      const instance = await mongo(db).collection(module);
      const data = await instance
        .find({})
        .sort(params.sort || { _id: -1 })
        .limit(params.limit || 0)
        .skip(params.skip || 0)
        .toArray();

      res.json({ error: false, data });
    } catch (message) {
      res.json({ error: true, message });
    }
  },

  search: async function(req, res) {
    try {
      const { params, module, db } = req.evbaseQuery;
      const query = { $or: [] };
      const _params = params.params
      for (let key in _params) {
        query.$or.push({ [key]: new RegExp(_params[key], "i") });
      }
      const instance = await mongo(db).collection(module);
      const data = await instance.find(query).toArray();
      res.json({ error: false, data });
    } catch (message) {
      res.json({ error: false, message });
    }
  },

  findOne: async function(req, res) {
    try {
      const { params, module, db } = req.evbaseQuery;
      const instance = await mongo(db).collection(module);
      const data = await instance.findOne({ _id: mongo().ObjectID(params.id) });
      res.json({ error: false, data });
    } catch (message) {
      console.log(req.evbaseQuery);
      res.json({ error: true, message });
    }
  },

  update: async function(req, res) {
    try {
      const { params, module, db } = req.evbaseQuery;
      const instance = await mongo(db).collection(module);
      const data = await instance.updateOne(
        { _id: mongo().ObjectID(params.id) },
        { $set: params.data }
      );
      res.json({ error: false, data });
    } catch (message) {
      res.json({ error: false, message });
    }
  },

  remove: async function(req, res) {
    try {
      const { params, module, db } = req.evbaseQuery;
      const instance = await mongo(db).collection(module);
      const data = await instance.remove({ _id: mongo().ObjectID(params.id) });
      res.json({ error: false, data });
    } catch (message) {
      res.json({ error: false, message });
    }
  },
  add: async function(req, res) {
    try {
      const { params, module, db } = req.evbaseQuery;
      const instance = await mongo(db).collection(module);
      const data = await instance.insertOne(params);
      res.json({ error: false, data });
    } catch (message) {
      res.json({ error: false, message });
    }
  }
};
