const jwt = require("jsonwebtoken");
const moment = require("moment");
const secret = "K3SwR59SxPQYve7hzgEU9SLxG9237A6bY92nQGtVbwudMjzW3ZrXgcYDLTZ3zF4dvcsrvDxrBb4jDMzjuxQ3sq8sfJ";
module.exports = {
  decodeToken: token =>
    new Promise(function(resolve, reject) {
      jwt.verify(token, secret, function(error, decoded) {
        error ? reject(error) : resolve(decoded);
      });
    }),
  generateToken(user) {
    const payload = { user };
    payload.exp = moment()
      .add(1, "day")
      .unix();
    return jwt.sign(payload, secret);
  }
};
