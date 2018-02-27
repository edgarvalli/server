const bcrypt = require("bcrypt");
const mongo = require("../../../lib/mongo.client")("tlacrm");
const { createToken } = require('../../../lib/func');
const moment = require("moment");

module.exports = {

    login(req, res) {

        const { persistent, username, password } = req.body.data;
        const user = username.toLowerCase();
        
        mongo("users").find({ username: user }, (err, users) => {
            if(users.length > 0) {
                bcrypt.compare(password, users[0].password, (err, foundIt) => {
                    if(foundIt) {
                        delete users[0].password;
                        const info = {user: users[0]}
                        
                        if(persistent) {
                            info.persistent = true;
                        } else {
                            info.persistent = false;
                            info.exp = moment().add(1, "days").unix();
                        }

                        const token = createToken(info)
                        res.json({error: false, user: info.user, token, msg: "Token enviado"})

                    } else {
                        res.json({error: true, msg: "Contraseña incorrecta"})
                    }
                })
            } else {
                res.json({error: true, msg:"Usuario no encontrado"})
            }
        })
        
    }

}