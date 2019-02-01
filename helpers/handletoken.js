const jwt = require('jsonwebtoken');
const moment = require('moment');
const { secret } = require('./config');
module.exports = {
    decodeToken: token => new Promise(function(resolve, reject) {
        jwt.verify(token, secret, function(error, decoded) {
            error ? reject(error) : resolve(decoded)
        })
    }),
    generateToken(exp = 1, user) {
        const payload = { user };
        payload.exp = moment().add(exp, 'days').unix();
        return jwt.sign(payload, secret)
    }
}