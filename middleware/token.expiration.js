const moment = require('moment');
const { decodeToken } = require('../helpers/handletoken');

module.exports = async (req, res, next) => {
    
    // Get token and skt from client
    const { token } = req.headers;

    // Check if token exist
    if (!token) return res.json({ error: true, message: "Token no proporcionado" })

    // Decoding token
    const payload = await decodeToken(token).catch(error => {
        return res.json({ error: true, tokenExpired: true, message: `${error.message} at ${new Date(error.expiredAt)}` })
    })

    console.log(payload, moment().unix())

    // Check if token is not expired
    if (payload.exp < moment().unix()) return res.json({ error: true, tokenExpired: true, message: error });

    next();

}