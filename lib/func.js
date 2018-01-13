const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 's3cur1typ4ssw0rd@tlacrm2017';

module.exports = {

    nextPage: (page, totalRecords) => {
        return totalRecords * (page-1)
    },

    formatDate: (date) => {
        const formatedDate = date.getDate();
        return formatedDate
    },

    createToken: function(info, days = 2) {
        const payload = {
            user: info,
            exp: moment().add(days, 'days').unix()
        }
        return jwt.encode(payload, secret)
    },

    decodeToken: function(token) {
        return jwt.decode(token, secret, true);
    },

    isAuth: function(req,res, next) {
        const recivedToken = req.headers.token;
        const token = jwt.decode(recivedToken, secret)
        
        if(token.exp >= moment().unix()) {
            next();
        } else {
            console.log("No Allowed")
        }
    }

}