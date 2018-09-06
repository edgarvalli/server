const mongo = require("../../lib/mongo.client")("tlacrm");
const db = "leads";
const nsp = '/leads-socket';

module.exports = (io, socket) => {
    return {
        async newLead(data) {

            // Store in databases

            const lead = await mongo.collection(db);
            data.create_by = socket.client.user._id;
            data.create_date = new Date();
            data.update_date = new Date();
            data.visited = false;
            await lead.insert(data).catch(err => {
                console.log(err);
                return null;
            })

            const newlead = await lead.find({}).sort({_id: -1}).limit(1)

            // Eminting eventos to clients
            io.of(nsp).emit('leads-changed', newlead[0]);
	        socket.broadcast.emit('notify', {
                action: 'create',
                title: `${socket.client.user.name} ha creado un usuario`,
                avatar: ''
            })
        },

        async updateLead(data) {
            
            // Update record in databases
            const _id = mongo.id(data._id);
            data.update_date = new Date();
            delete data._id;
            const leads = await mongo.collection(collection);
            await leads.update({_id}, {$set: data});

            // Eminting eventos to clients
            io.of(nsp).emit('leads-changed', data);
	        socket.broadcast.emit('notify', {
                action: 'create',
                title: `${socket.client.user.name} ha creado un usuario`,
                avatar: ''
            })
        }
    }
}
