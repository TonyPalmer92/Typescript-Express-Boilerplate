import { Request, Response } from "express";
import { Todo } from "../../entity/Todo";

// GET /
async function getAllTodos(req: Request, res: Response) {
  try {
    // list of all todos in Todos table
    const todos = await Todo.find();

    res.send(todos);
  } catch (e) {
    res.send(e.message);
  }
}

// GET /:id
async function getTodo(req: Request, res: Response) {
  try {
    const { id } = req.body;

    // list of all todos in Todos table
    const todo = await Todo.findByIds(id);
    console.log(id);

    res.send(todo);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

// POST todos/
async function postTodo(req: Request, res: Response) {
  try {
    const { body, completed } = req.body;

    // Other properties in the entity class are completed automatically
    const todo = Todo.create({ body, completed }); // creates instance of the entity object

    await todo.save(); // adds object to database
    res.send(todo);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

// PUT todos/
async function updateItem(req: Request, res: Response) {
  try {
    const id = req.params.uuid;
    const { body, completed } = req.body;

    const todo = await Todo.findOneOrFail(id);

    todo.body = body || todo.body;
    todo.completed = completed || todo.completed;

    await todo.save();

    return res.send(todo);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

// DELETE todos/:id
async function deleteTodo(req: Request, res: Response) {
  try {
    const id = req.body;
    const todo = await Todo.findOneOrFail(id);

    await todo.remove();

    return res.send({ message: "User deleted successfully" });
  } catch (e) {
    res.status(500).send(e.message);
  }
}

export default { getAllTodos, deleteTodo, updateItem, postTodo, getTodo };
