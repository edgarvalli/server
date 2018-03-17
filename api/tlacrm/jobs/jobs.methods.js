const mongo = require("../../../lib/mongo.client")("tlacrm");
const db = "jobs";

module.exports = {

    fetch(req, res){
        const { page } = req.params;
        const querys = {
            query: [
                {
                    $lookup: {
                        from: "clients",
                        localField: "client_id",
                        foreignField: "_id",
                        as: "client"
                    },
                },
                { $match: { paid_out: false } }
            ]
        }
        mongo(db).aggregate(querys, (err, jobs) => {

            if (err) return res.json({error: true, msg: "Ocurrio un error al buscar los clients", msgError: err})

            const data = [];

            jobs.map((j,i) => {

                const s = [];
                j.jobs.map((el, i) => {
                    s.push(parseFloat(el.cant) * parseFloat(el.cost))
                })
                let sumTotal = s.reduce((a,b) => a+b);
                
                const ad = [];
                let advances;
                // if(j.advances.length > 0 ) j.advances.map((el,i) => ad.push(parseFloat(el.advance)))
                // (ad.length > 0 ) ? advances = ad.reduce((a,b) => a + b) : advances = 0;

                if(j.advances.length > 0) {
                    j.advances.map((el,i) => ad.push(parseFloat(el.advance)))
                    advances = ad.reduce((a,b) => a + b) 
                } else { advances = 0 }

                const total = sumTotal - advances;
                const client = {
                    _id: j._id,
                    client_name: j.client[0].name,
                    total
                }
                data.push(client)
            })

            res.json({error: false, data})
        })
    },

    getOne(req, res) {
        const { id } = req.params;
        const _id = mongo().id(id);
        mongo(db).findOne({_id }, (err, data) => {
            err ? res.json({error: true, msg:"Hello from server"}) : res.json({error: false, data})

        })
    },

    update(req,res) {
        const { data } = req.body;
        const id = data.id;
        delete data.id;
        const _id = mongo().id(id);


        const s = [];
        data.jobs.map((el, i) => {
            s.push(parseFloat(el.cant) * parseFloat(el.cost))
        })
        let sumTotal = s.reduce((a,b) => a+b);
        
        const ad = [];
        data.advances.map((el,i) => ad.push(parseFloat(el.advance)))
        const advances = ad.reduce((a,b) => a + b)

        const total = sumTotal - advances;

        (total <= 0) ? data.paid_out = true : data.paid_out = false

        data.update_date = new Date();

        const update = {
            $set: {
                jobs: data.jobs,
                advances: data.advances,
                tax: data.tax,
                paid_out: data.paid_out
            }
        }

        mongo(db).update({_id}, update, err => err ? res.json({error: true, msg: "Ocurrio un error"}): res.json({error: false}))
    },

    add(req,res) {
        const { data } = req.body;
        data.create_date = new Date();
        data.update_date = new Date();
        data.paid_out =  false;
        data.client_id = mongo().id(data.client_id);

        mongo(db).insert(data, err => {
            if(err) {
                res.send({error: true, msg:"Ocurrio un error al insertar el registro en la base de datos", errorMsg: err})
            } else {
                res.json({error: false})
            }
        })
    },

    makePaidOut(req, res) {
        const _id = mongo().id(req.params.id);
        mongo(db).update({ _id }, { $set: { paid_out: true } }, err => err ? res.json({error: true, msg: "Ocurrio un error al marcar como pagado"})
            : res.json({error: false}))
    }

}
