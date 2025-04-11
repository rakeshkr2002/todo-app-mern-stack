// import React from 'react'
import { createContext, useState } from 'react'
import instance from '../axios/axios.js';


export const taskContext = createContext();

const ContextApi = ({children}) => {
    const [task, setTask] = useState("");
    const [todo,setTodo] = useState([])
const getAllTasks =async()=>{

    try {
        let Alltasks = await instance.get("/");
        setTodo(Alltasks.data)
        // console.log("data fetched succesfully");
        
        return Alltasks.data;
    } catch (error) {
        console.log(error);
        
    }
       
}
const addTask = async (task) => {
    try {
        await instance.post("/", {task:task}); 
        // console.log("task added succesfully");
        getAllTasks()
    } catch (error) {
        console.log( error); 
    }
};

const updateTask = async(id,task)=>{
    try {
        await instance.put(`/${id}`,{task:task})
        // console.log("update successfull");
        getAllTasks()
    } catch (error) {
        console.log(error);
        
    }
}

const deleteTask =async(task)=>{
    try {
        await instance.delete(`/${task}`);
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
