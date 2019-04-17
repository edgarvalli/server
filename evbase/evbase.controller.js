const mongo = require("./evbase.mongo");
const bcrypt = require("bcrypt");
const Model = require("./evbase.model");

const { generateToken } = require("../helpers/handletoken");

const decryptPassword = (cryptpass, pass) =>
  new Promise(function(resolve, reject) {
    bcrypt.compare(cryptpass, pass, function(error, success) {
      if (error) reject(error);
      success ? resolve(true) : resolve(false);
    });
  });

module.exports = {
  middleware: function(req, _, next) {
    if (req.params.module) {
      req.evbaseQuery = {
        db: req.params.db,
        module: req.params.module,
        params: JSON.parse(req.params.query)
      };
    } else {
      req.evbaseQuery = req.body;
    }
    next();
  },

  login: async function(req, res) {
    try {
      const { username, password, autoLogin } = req.evbaseQuery.credentials;

      const user = await Model.User(username);
      if (!user)
        return res.json({ error: true, message: "Usuario no encontrado" });
        const success = await decryptPassword(password, user.password);
        console.log(success)
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
      res.json({ error: true, message });
    }
  },

  fetch: async function(req, res) {
    const { params, module, db } = req.evbaseQuery;

    const instance = await mongo(db).collection(module);
    const q = await instance
      .find({})
      .sort(params.sort || { _id: -1 })
      .limit(params.limit || 0)
      .skip(params.skip || 0)
      .toArray();

    res.json(q);
  }
};
