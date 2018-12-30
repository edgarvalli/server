const moment = require('moment');
const { decodeToken } = require('../helpers/handletoken');

module.exports = {

    async isAllowed(req, res, next) {
        // APIRest authentication

        // Get token and skt from client
        const { token } = req.headers;

        // Check if token exist
        if (!token) return res.json({ error: true, msg: "Token no proporcionado" })

        // Decoding token
        const payload = await decodeToken(token).catch(error => {
            return res.json({ error: true, tokenExpired: true, msg: `${error.message} at ${new Date(error.expiredAt)}` })
        })

        // Check if token is not expired
        if (payload.exp < moment().unix()) return res.json({ error: true, tokenExpired: true, msg: error });
        
        // Checking if is the same client
        if (
            payload.user.client !== req.headers['user-agent'] ||
            payload.user.skt !== req.headers.skt
        ) {
            res.json({ error: true, msg: "No es tu token" })
        } else {
            req.client = payload.user;
            next();
        }
    }

}