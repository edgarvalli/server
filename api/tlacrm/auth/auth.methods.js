const { createToken } = require('../../../lib/func');
const moment = require("moment");

module.exports = {

    login(req, res) {

        const info = {
            user: {
                username: 'Edgar Valli',
                userId: 1989
            },
            exp: moment().add(100, "days").unix()
        }
        const token = createToken(info)
        res.json({user: info.user, token})
    }

}