const bcrypt = require("bcrypt");

const decryptPassword = (cryptpass, pass) =>
  new Promise(function(resolve, reject) {
    bcrypt.compare(cryptpass, pass, function(error, success) {
      if (error) reject(error);
      success ? resolve(true) : resolve(false);
    });
  });

  module.exports = decryptPassword;