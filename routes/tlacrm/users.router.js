const router = require('express').Router();
const userController = require('../../controllers/tlacrm/users.controllers');
const { isAllowed } = require('../../middleware/authentication');

router
    .post('/login', userController.login)
    .post("/change-avatar", isAllowed, userController.changeAvatar)
    .post('/change-name', isAllowed, userController.changeName)
    .post('/change-password', isAllowed, userController.changePassword)
    .get('/fetch-user-info/:id', isAllowed, userController.fetchUserInfo)
    .get('/fetch', isAllowed, userController.fetchUsers)
    .post('/add', isAllowed, userController.addUser)
    .post('/reset-password', isAllowed, userController.resetPassword)
    // .get('/m', lead.addNewFields)

module.exports = router;