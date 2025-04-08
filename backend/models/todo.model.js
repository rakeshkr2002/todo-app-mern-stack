
import  { model, Schema } from "mongoose"

let todoSchema = new Schema({
    task:String
})

let Todo = model("Todo",todoSchema)

export default Todo