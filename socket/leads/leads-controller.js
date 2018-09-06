const mongo = require("../../lib/mongo.client")("tlacrm");
const db = "leads";
const nsp = '/leads-socket';

module.exports = (io, socket) => {
    return {
        newLead(data) {
            io.of(nsp).emit('lead-added', data)
	    io.of(nsp).emit('notify', {})
        }
    }
}
