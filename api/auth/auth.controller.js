const bcrypt = require("bcrypt");
const mongo = require("../../lib/mongo.client")("tlacrm");
const { createToken } = require('../../lib/func');

const generateUniqueId = size => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < size; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

module.exports = {

    async login(req, res) {
        const { persistent = false, username, password } = req.body;
        const { client } = req.headers;
        
        const userRequest = username.toLowerCase();
        const users = await mongo.collection("users");
        const user = await users.find({username: userRequest}).toArray();
        
        if(user.length <= 0 || user === undefined) return res.json({error: true, msg:"Usuario no encontrado"})
        
        bcrypt.compare(password, user[0].password, (err, success) => {
            
            if(err) return res.json({error: true, msg: "Contraseña incorrecta"})
            delete user[0].password;
            const info = {
                user: user[0],
                skt: generateUniqueId(70),
                client
            }
            let token;

            if(persistent) {
                info.persistent = true
                token = createToken(info, 100, "years")
            } else {
                info.persistent = false;
                token = createToken(info, 1, "days")
            }
            res.json({error: false, user: info.user, token, msg: "Token enviado"})
        })
    }

}