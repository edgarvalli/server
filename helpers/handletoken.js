const jwt = require('jsonwebtoken');
const moment = require('moment');
const { secret } = require('./config');
module.exports = {
    decodeToken: token => new Promise(function(resolve, reject) {
        jwt.verify(token, secret, function(error, decoded) {
            error ? reject(error) : resolve(decoded)
        })
    }),
    generateToken(exp = 2, user) {
        const payload = { user };
        payload.exp = moment().add(exp, "minute").unix();
        return jwt.sign(payload, secret)
    },
    generateUniqueId = size => {
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (var i = 0, n = charset.length; i < size; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
}