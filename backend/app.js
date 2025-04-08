import express from "express"
import db from "./config/db.js"
import routes from "./routes/todo.routes.js"
import cors from "cors"

db()
let app = express()

app.use(cors({
    origin:"http://localhost:5173",methods:['GET',"POST",'PUT','DELETE']
}))
app.use(express.json())
app.use("/todo",routes)


export default app