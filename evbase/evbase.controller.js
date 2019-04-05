const mongo = require('./evbase.mongo')("tlacrm");
module.exports = {

    async fetch(req, res) {
        
        const params = JSON.parse(req.params.query)
        const query = {};
        for(var key in params.query) query[key] = new RegExp(params.query[key], "i")

        const instance = await mongo.collection("clients");
        const q = await instance.find(query)
            .sort(params.sort || {_id: -1})
                .limit(params.limit || 0)
                    .skip(params.skip || 0)
                        .toArray();

        res.json(q)
    }

}