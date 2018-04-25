const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 's3cur1typ4ssw0rd@tlacrm2017';

module.exports = {

    nextPage: (page, totalRecords) => {
        return totalRecords * (page-1)
    },

    now(date){
        const today = new Date();
    
        let day = today.getDate() + 1;
        let month = today.getMonth() + 1;
        const year = today.getFullYear();
    
        day = "00" + day;
        day = day.slice(day.length - 2);
    
        month = "00" + month;
        month = month.slice(month.length -2)
    
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        
        h = "00" + h;
        m = "00" + m;
        s = "00" + s;
    
        h = h.slice(h.length - 2)
        m = m.slice(m.length - 2)
        s = s.slice(s.length - 2)
    
        return {
            date: `${year}-${month}-${day}`,
            time: `${h}:${m}:${s}`
        }
    },

    createToken(info, time = 2, time = "days") {
        const payload = {
            user: info,
            iat: moment().unix(),
            exp: moment().add(days, time).unix()
        }
        return jwt.encode(payload, secret)
    },

    decodeToken(token) {
        return jwt.decode(token, secret, true);
    },

    isAuth(req,res, next) {
        const recivedToken = req.headers.token;
        if(!recivedToken) return res.json({error: true, msg: "Token no proporcionado"})
        const token = jwt.decode(recivedToken, secret)
        if(token.exp >= moment().unix()) {
            req.user = token.user;
            next();
        } else {
            res.json({error: true, msg: "Token expiro"})
        }
    }

}