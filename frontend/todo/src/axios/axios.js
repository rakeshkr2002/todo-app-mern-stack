import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:5000/todo"
})

export default instance;