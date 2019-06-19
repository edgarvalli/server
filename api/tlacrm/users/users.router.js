const router = require("express").Router();
const Users = require("./users.controller");
const decodeToken = require("../../../middleware/token.expiration");

const checkPermissions = (req, res, next) => {
  if (req.user.isAdmin) return next();
  res.json({ error: true, message: "No tienes permisos de administrador" });
};

router.post("/login", Users.login);
router.get("/fetch/:limit?/:skip?", decodeToken, checkPermissions, Users.fetchAll);
router.get("/getone/:id", decodeToken, checkPermissions, Users.getOne);
router.get("/profiles", decodeToken, checkPermissions, Users.fetchProfiles);
router.put(
  "/update-password",
  decodeToken,
  checkPermissions,
  Users.updatePassword
);
router.put("/", decodeToken, Users.updateUser);
router.post("/add", decodeToken, checkPermissions, Users.addUser);
router.post(
  "/upload-image",
  decodeToken,
  checkPermissions,
  Users.uploadImageProfile
);

module.exports = router;
