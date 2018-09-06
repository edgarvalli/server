const mongo = require("../../lib/mongo.client")("tlacrm");
const db = "leads";
const nsp = '/leads-socket';

module.exports = (io, socket) => {
    return {
        async newLead(data) {

            // Store in databases

            const lead = await mongo.collection(db);
            data.create_by = socket.user._id;
            data.create_date = new Date();
            data.update_date = new Date();
            await lead.insert(data).catch(err => {
                console.log(err);
                return null;
            })

            // Eminting eventos to clients
            io.of(nsp).emit('lead-added', data);
	        io.of(nsp).emit('notify', {
                action: 'create',
                title: `${socket.user.name} ha creado un usuario`,
                avatar: ''
            })
        },

        async updateLead(data) {

        }
    }
}
