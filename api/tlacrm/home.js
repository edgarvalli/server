const mongo = require("../../lib/mongo.client")("tlacrm");
const db = "leads";
const dbJob = "jobs";

module.exports = (req, res) => {
    mongo(db).findAndCount({visited: false}, (err, leads) => {
        if(err) return res.json({error: true, msg: "Fallo al contar los prospetos"})
        mongo(dbJob).findAndCount({paid_out: false}, (err, jobs) => {
            if(err) return res.json({error: true, msg: "Fallo al contar los trabajos"})
            res.json({error: false, data: { leads, jobs }})
        })
    })
}