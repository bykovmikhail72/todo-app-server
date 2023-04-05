const Router = require('express')

const router = new Router()

const todoController = require('../controller/todo.controller')

router.post('/todo', todoController.createTodo)
router.get('/todo', todoController.getTodo)
// router.get('/todo/:id', todoController.getOneUser)
router.put('/todo', todoController.updateTodo)
// router.delete('/todo/:id', todoController.deleteUser)

module.exports = router