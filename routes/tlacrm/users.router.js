const router = require('express').Router();
const userController = require('../../controllers/tlacrm/users.controllers');
const { tokenExpiration } = require("../../middleware");

const userRouter = webpush => {
    router
        .post('/login', userController.login)
        .post("/change-avatar", tokenExpiration, userController.changeAvatar)
        .post('/change-name', tokenExpiration, userController.changeName)
        .post('/change-password', tokenExpiration, userController.changePassword)
        .get('/fetch-user-info/:id', tokenExpiration, userController.fetchUserInfo)
        .get('/fetch', tokenExpiration, userController.fetchUsers)
        .post('/add', tokenExpiration, userController.addUser)
        .post('/reset-password', tokenExpiration, userController.resetPassword)
        // .get('/m', lead.addNewFields)
        .post('/subscribe', (_, res) => {
            const subscription = req.body;
            console.log(subscription)
            const payload = JSON.stringify({
                title: "TlaCrm Notification",
                message: "Tu tes has subscripto a las notificaciones"
            })

            webpush.sendNotification(subscription, payload).catch(message => {
                res.json({ error: true, message })
            })

            res.json({ error: false })
        })

    return router
}

module.exports = userRouter;