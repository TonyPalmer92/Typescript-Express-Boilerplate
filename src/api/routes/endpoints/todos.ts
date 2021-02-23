import express, { Router } from "express";
import todoController from "../../controllers/TodoController";

const router: Router = express.Router();

/**
 * Route: api/v1/todos
 *
 * Pass requests to respective controller methods to handle req/res.
 * This is the main routing file, add middleware to this file
 *
 */

router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodo);
router.post("/", todoController.postTodo);
router.put("/:id", todoController.updateItem);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
