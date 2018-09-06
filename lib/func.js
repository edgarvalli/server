const jwt = require('jwt-simple');
const moment = require('moment');
const password = 'K3SwR59SxPQYve7hzgEU9SLxG9237A6bY92nQGtVbwudMjzW3ZrXgcYDLTZ3zF4dvcsrvDxrBb4jDMzjuxQ3sq8sfJ';
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

    createToken(info, days = 2, time = "days") {
        const payload = {
            user: info,
            iat: moment().unix(),
            exp: moment().add(days, time).unix()
        }
        return jwt.encode(payload, password)
    },

    decodeToken(token) {
        return jwt.decode(token, password, true);
    },

    isAuth(req,res, next) {
        const recivedToken = req.headers.token;
        if(!recivedToken) return res.json({error: true, msg: "Token no proporcionado"})
        const token = jwt.decode(recivedToken, password)
        if(token.exp >= moment().unix()) {
            if(
                token.user.client !== req.headers['user-agent'] ||
                token.user.skt !== req.headers.skt
            ) {
                res.json({error: true, msg: "No es tu token"})
            } else {
                req.extra = token.user;
                next();
            }

        } else {
            res.json({error: true, msg: "Token expiro"})
        }
    },

    socketAuthentication(socket) {
        // Part of socket authentication

        // Get token and skt from client
        const { token, skt } = socket.handshake.query;
        // Check if token exits
        if(!token) return socket.disconnect();
        // Decoded token
        const decodeToken = jwt.decode(token, password);
        //Check if secret key token is the same as the token
        if(decodeToken.user.skt !== skt) return socket.disconnect();
        // Set user information in user
        socket.user = decodeToken.user;
        console.log(socket.user);
    }

}
