const mongo = require("./evbase.mongo");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/handletoken");

const handleError = (res, message) => res.json({ error: true, message });

module.exports = {

  middleware: function(req, _, next) {
    if (req.params) {
      req.evbaseQuery = {
        module: req.params.module,
        params: JSON.parse(req.params.query)
      };
    } else {
      req.evbaseQuery = req.body;
    }
    next();
  },

  login: async function(req, res) {
    const { username, password } = req.evbaseQuery.credentials;
    const user = await mongo("evbase").collection("users");
    const _user = await user
      .findOne({ username })
      .catch(error => handleError(res, error));
    if (!_user)
      return res.json({ error: true, message: "Usuario no encontrado" });

    async function decryptPassword(error, success) {
      if (error)
        return res.json({
          error: true,
          message: "Ocurrio un error con la libreria"
        });
      if (!success)
        return res.json({ error: true, message: "Contraseña incorrecta" });

      delete _user.password;

      const profile = await mongo.collection("profiles");
      const _profile = await profile
        .findOne({ _id: mongo.ObjectID(_user.profileId) })
        .catch(error => handleError(res, error));
      console.log(_profile);
      if (!_profile)
        return res.json({
          error: true,
          message: "Ocurrio un error al seleccionar perfil"
        });
      _user.profile = _profile;

      res.json({
        error: false,
        token: generateToken(_user),
        userInformation: _user
      });
    }

    bcrypt.compare(password, _user.password, decryptPassword);
  },

  fetch: async function(req, res) {
    const { params } = req.evbaseQuery;
    const query = {};
    for (var key in params.query)
      query[key] = new RegExp(params.query[key], "i");

    const instance = await mongo("tlacrm").collection(req.evbaseQuery.module);
    const q = await instance
      .find(query)
      .sort(params.sort || { _id: -1 })
      .limit(params.limit || 0)
      .skip(params.skip || 0)
      .toArray();

    res.json(q);
  }
};
