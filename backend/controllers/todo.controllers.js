import TodoService from "../services/todo.services.js";

let todoInstance = new TodoService();

export let createTodo = async (req,res,next)=>{

        let newTodo = await todoInstance.create(req)
        res.send(newTodo)

}

export let getTodo = async (req,res,next)=>{

    let getTodos = await todoInstance.findAll()
    res.send(getTodos)

}

export let getTodoById = async(req,res,next)=>{
    let getTodoById = await todoInstance.findById(req)
    res.send(getTodoById)
}


export let updateTodo = async(req,res,next)=>{
    let update = await todoInstance.updateById(req)
    res.send(update)
}

export let deleteTodo = async(req,res,next)=>{
    let deletes = await todoInstance.deleteById(req)
    res.send(deletes)
}