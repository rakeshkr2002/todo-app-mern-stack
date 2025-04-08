// import React from 'react'
import axios from 'axios';
import { createContext, useState } from 'react'

export const taskContext = createContext();
// eslint-disable-next-line react/prop-types
const ContextApi = ({children}) => {
    const [task, setTask] = useState("");
    const [todo,setTodo] = useState([])
const getAllTasks =async()=>{

    try {
        let Alltasks = await axios.get("http://localhost:5000/todo");
        setTodo(Alltasks.data)
        // console.log("data fetched succesfully");
        
        return Alltasks.data;
    } catch (error) {
        console.log(error);
        
    }
       
}
const addTask = async (task) => {
    try {
        await axios.post("http://localhost:5000/todo", {task:task}); 
        // console.log("task added succesfully");
        getAllTasks()
    } catch (error) {
        console.log( error); 
    }
};

const updateTask = async(id,task)=>{
    try {
        await axios.put(`http://localhost:5000/todo/${id}`,{task:task})
        // console.log("update successfull");
        getAllTasks()
    } catch (error) {
        console.log(error);
        
    }
}

const deleteTask =async(task)=>{
    try {
        await axios.delete(`http://localhost:5000/todo/${task}`);
        // console.log("task delted successfully");
        getAllTasks()
    } catch (error) {
        console.log(error);
        
    }
}

  return (
    <taskContext.Provider value={{getAllTasks,addTask,task,setTask,todo,updateTask,deleteTask}}>
      {children}
    </taskContext.Provider>
  )
}

export default ContextApi
