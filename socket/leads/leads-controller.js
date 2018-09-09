const mongo = require("../../lib/mongo.client")("tlacrm");
const collection = "leads";
const nsp = '/leads-socket';

module.exports = (io, socket) => {
    return {
        async newLead(data) {

            // Store in databases

            const lead = await mongo.collection(collection);
            data.create_by = socket.agent.user._id;
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
	        socket.broadcast.to('/').emit('notify', {
                action: 'create',
                title: 'Nuevo prospecto',
                body: `${socket.agent.user.name} ha creado un usuario`,
                avatar: ''
            })
        },

        async updateLead(data) {
            
            // Update record in databases
            const id = data._id;
            const _id = mongo.id(id);
            data.update_date = new Date();
            delete data._id;
            const leads = await mongo.collection(collection);
            await leads.update({_id}, {$set: data});

            // Eminting eventos to clients
            data._id = id;
            io.of(nsp).emit('leads-changed', data);
	        socket.broadcast.to('/').emit('notify', {
                action: 'create',
                title: 'Actualización de prospecto',
                body: `${socket.agent.user.name} ha actualizado un prospecto`,
                avatar: ''
            })
        }
    }
}