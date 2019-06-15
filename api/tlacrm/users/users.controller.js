const { handleToken, decryptPassword } = require("../../../helpers");
const {
  User,
  Users,
  NewUser,
  Profile,
  Profiles,
  UpdateUser,
  UpdateUserPassword
} = require("./user.model");

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password, autoLogin } = req.body;
      const _username = username.toLowerCase();
      const user = await User({ username: _username });

      if (!user) {
        return res.json({ error: true, message: "El usuario no existe" });
      }

      const success = await decryptPassword(password, user.password);
      if (!success) {
        return res.json({ error: true, message: "Contraseña incorrecta" });
      }
      user.profile = await Profile(user.profileId);
      user.autoLogin = autoLogin;

      res.json({ error: false, token: handleToken.generateToken(user), user });
    } catch (message) {
      console.log(message);
      res.json({ error: true, message });
    }
  },

  fetchAll: async (_, res) => {
    try {
      const { limit = "50", skip = "0" } = req.params;
      const users = await Users(parseInt(limit), parseInt(skip));
      res.json({ error: false, users });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },

  getOne: async (req, res) => {
    try {
      const user = await User({ _id: req.params.id });
      delete user.password;
      res.json({ error: false, user });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },

  fetchProfiles: async (_, res) => {
    try {
      const profiles = await Profiles();
      res.json({ error: false, profiles });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  addUser: async (req, res) => {
    try {
      const result = await NewUser(req.body.user);
      res, json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { id, data } = req.body;
      const result = await UpdateUser(id, data);
      res.json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  },
  uploadImageProfile: async (req, res) => {
    const base64Data = req.body.file.replace(/^data:image\/png;base64,/, "");
    require("fs").writeFileSync(
      `./files/profiles/${req.body.filename}`,
      base64Data,
      "base64"
    );
    res.json({ error: false });
  },
  updatePassword: async (req, res) => {
    try {
      const { id, password } = req.body;
      const result = await UpdateUserPassword(id, password);
      res.json({ error: false, result });
    } catch ({ message }) {
      res.json({ error: true, message });
    }
  }
};
