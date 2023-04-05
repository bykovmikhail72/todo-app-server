const { Todo } = require("../models/models");

class TodoController {
  async createTodo(req, res) {
    const {
      title,
      description,
      finishDate,
      priority,
      status,
      creator,
      worker,
    } = req.body;
    const todo = await Todo.create({
      title,
      description,
      finishDate,
      priority,
      status,
      creator,
      worker,
    });

    res.json(todo);
  }

  async getTodo(req, res) {
    const {
      title,
      description,
      finishDate,
      priority,
      status,
      creator,
      worker,
    } = req.query;

    const todo = await Todo.findAll({
      title,
      description,
      finishDate,
      priority,
      status,
      creator,
      worker,
    });

    res.json(todo);
  }

  async updateTodo(req, res) {
    const { id, title, description, finishDate, priority, status, worker } =
      req.body;

    const todo = await Todo.update({
      title, description, finishDate, priority, status, worker
    }, {where: {id: id}})

    return res.json(todo)
  }
}

module.exports = new TodoController();
