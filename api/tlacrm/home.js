const mongo = require("../../lib/mongo.client")("tlacrm");
const db = "leads";
const dbJob = "jobs";

module.exports = (req, res) => {

    const response = () => {
        mongo(db).findAndCount({visited: false}, (err, leads) => {
            if(err) return res.json({error: true, msg: "Fallo al contar los prospetos"})
            mongo(dbJob).findAndCount({paid_out: false}, (err, jobs) => {
                if(err) return res.json({error: true, msg: "Fallo al contar los trabajos"})
                res.json({error: false, data: { leads, jobs }})
            })
        })
    }

    const recivedToken = req.headers.token;
    if(!recivedToken) return res.json({error: true, msg: "Token no proporcionado"})

    const token = jwt.decode(recivedToken, secret)
    
    if(token.persistent) {
        req.user = token.user;
        response();
    } else {
        if(token.exp >= moment().unix()) {
            req.user = token.user;
            response();
        } else {
            res.json({error: true, msg: "Usuario no autorizado"})
        }
    }

}