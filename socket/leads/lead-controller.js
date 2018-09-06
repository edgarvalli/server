const mongo = require("../../lib/mongo.client")("tlacrm");
const db = "leads";
const nsp = '/leads-socket';

module.exports = (socket) => {
    return {
        newLead(data) {
            console.log(data);
            socket.emit('lead-added', data)
        }
    }
}