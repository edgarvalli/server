const bcrypt = require("bcrypt");
const mongo = require("../../../lib/mongo.client")("tlacrm");
const { createToken } = require('../../../lib/func');
const moment = require("moment");

module.exports = {

    async login(req, res) {
        const { persistent, username, password } = req.body.data;
        const userRequest = username.toLowerCase();
        const users = await mongo.collection("users");
        const user = await users.find({username: userRequest}).toArray();
        if(user.length <= 0 || user === undefined) return res.json({error: true, msg:"Usuario no encontrado"})
        bcrypt.compare(password, user[0].password, (err, success) => {
            if(err) return res.json({error: true, msg: "Contraseña incorrecta"})
            delete user[0].password;
            const info = { user: user[0]}
            if(persistent) {
                info.persistent = true;
            } else {
                info.persistent = false;
                info.exp = moment().add(1, "days").unix();
            }
            const token = createToken(info);
            res.json({error: false, user: info.user, token, msg: "Token enviado"})
        })
    }

}