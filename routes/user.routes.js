const Router = require('express')

const router = new Router()

const userController = require('../controller/user.controller')
const AuthMiddleware = require('../middleware/AuthMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', AuthMiddleware, userController.check)
// router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
// router.get('/auth', userController.checkIsAuth)

module.exports = router