const mongo = require('../../lib/mongo.client')('own_series');

module.exports = {
    
    async getSeries(req, res)
    {
        const db = await mongo.collection('series');
        const series = await db.find({release: true}).toArray();
        res.json({error: false, data: { series } })
    },

    async getSeasons(req, res)
    {
        let serie_id = req.params.id;
        serie_id = mongo.id(serie_id);

        const db = await mongo.collection('seasons');
        const seasons = await db.find({serie_id, release: true}).toArray()
            .catch(error => res.json({error: true, msg: error}))
        res.json({error: false, data: { seasons }})
    },

    async getChapters(req, res)
    {
        let serie_id = req.params.serieid;
        let season_id = req.params.seasonid;

        serie_id = mongo.id(serie_id);
        season_id = mongo.id(season_id);

        const db = await mongo.collection('chapters');
        const chapters = await db.find({season_id, serie_id, release: true}).toArray()
            .catch(msg => res.json({error: true, msg}));
        res.json({error: false, data: { chapters }});
    }
}