const mongo = require("../../lib/mongo.client")("tlacrm");
const db = "leads";

module.exports = (io, socket, nsp) => {
    return {
        newLead(data) {
            io.of(nsp).emit('lead-added', data)
        }
    }
}