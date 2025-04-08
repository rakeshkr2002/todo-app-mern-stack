import express from "express"
import {createTodo,getTodo,getTodoById,updateTodo,deleteTodo} from "../controllers/todo.controllers.js"

let routes = express.Router()

routes.post("/",createTodo)
routes.get("/",getTodo)
routes.get("/:id",getTodoById)
routes.put("/:id",updateTodo)
routes.delete("/:id",deleteTodo)

export default routes
