import Todo from "../models/todo.model.js";

class TodoService{
    async create(req){
        let newTodo = await Todo.create({
            task:req.body.task
        })
        return newTodo
    }

    async findAll(req){
        let find = await Todo.find()
        return find;
    }

    async findById(req){
        let id = req.params.id
        let findbyid = await Todo.findById(id)
        return findbyid
    }

    async updateById(req){
        let id = req.params.id
        let updateById = await Todo.findByIdAndUpdate(id,{task:req.body.task},{new : true})
        return updateById;
    }

    async deleteById(req){
        let id =req.params.id
        let deltebyid= await Todo.findByIdAndDelete(id)
        return deltebyid
    }
}

export default TodoService