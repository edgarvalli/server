const mongo = require("../../../lib/mongo.client")("tlacrm");
const { nextPage } = require("../../../lib/func");
const collection = "leads";

module.exports = {
    
    leadSchema: (data = {}) => {
        this.name = data.name || '';
        this.cellphone = data.cellphone || '';
        this.phone = data.phone || '';
        this.zip = data.zip || '';
        this.address = data.address || '';
        this.hood = data.hood || '';
        this.county = data.county || '';
        this.state = data.state || '';
        this.description = data.description || '';
        this.create_by = data.create_by || '';
        this.create_date = data.create_date || new Date();
        this.update_date = data.update_date || new Date();
        return this;
    },

    async fetch(req, res) {
        const page = parseInt(req.params.page);
        const limit = 50;
        const leads = await mongo.collection(collection);
        const data = await leads.find({visited: false}).skip(nextPage(page, limit)).limit(limit).sort({update_date: -1}).toArray();
        const pages = Math.ceil(data.length/limit);
        if(pages < page) return res.send({complete: true, data: [], msg: "No hay elements"})
        res.json({error: false, data, complete: false})
    },

    async add(req,res) {
        const { data } = req.body;
        const { user } = req.client;

        // set data default
        data.lead.create_by = user._id;
        data.lead.create_date = new Date();
        data.lead.update_date = new Date();
        data.lead.visited = false;

        const leads = await mongo.collection(collection);
        await leads.insert(this.leadSchema(data.lead))
            .catch((error) => res.json({error: true, msg:`Ocurrio un error al crear prospecto  error: ${error}`}));
        res.json({error: false});
    },

    async update(req,res) {
        const { data } = req.body;
        const _id = mongo.id(data.id);
        data.lead.update_date = new Date();
        const leads = await mongo.collection(collection);
        await leads.update({_id}, {$set: this.leadSchema(data.lead)});
        res.json({error: false})
    },

    async getOne(req,res) {
        const _id = mongo.id(req.params.id);
        const leads = await mongo.collection(collection);
        const lead = await leads.findOne({_id});
        res.json({error: false , data: lead});
    },

    async remove(req,res) {
        const _id = mongo.id(req.params.id);
        const leads = await mongo.collection(collection);
        await leads.remove({_id});
        res.json({error: false});
    },

    async search(req,res) {
        const { value } = req.params;
        const query =  {
            $or: [
                {name: new RegExp(value, 'i')},
                {phone: new RegExp(value, 'i')},
                {cellphone: new RegExp(value, 'i')},
                {address: new RegExp(value, 'i')}
            ]
        };
        const leads = await mongo.collection(collection);
        const data = await leads.find(query).limit(20).toArray();
        res.json({error: false, data})
    }

}
