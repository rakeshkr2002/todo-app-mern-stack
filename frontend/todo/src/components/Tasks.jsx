import { useContext, useEffect, useState } from "react";
import { taskContext } from "../context/ContextApi";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

const Tasks = () => {
  const { getAllTasks, todo, deleteTask, updateTask } = useContext(taskContext);
  const [editingId, setEditingId] = useState(null); 
  const [editedTaskValue, setEditedTaskValue] = useState(""); // Tracks the edited task value

  useEffect(() => {
    getAllTasks(); 
  }, []);

  const handleEditClick = (task) => {
    setEditingId(task._id); 
    setEditedTaskValue(task.task); 
  };

  const handleTaskChange = (event) => {
    setEditedTaskValue(event.target.value); 
  };

  const handelcancel=()=>{
    setEditingId(null);
    setEditedTaskValue("");

  }
  const handleSaveClick = async () => {
    if (!editedTaskValue.trim()) return; 
    await updateTask(editingId,editedTaskValue); 
    setEditingId(null); 
    setEditedTaskValue(""); 
  };

  return (
    <div className="tasks">
      {todo.map((task,index) => (
        <div key={task._id} className="tasksmap">
          <div className="slno">
            <h1>{index+1}</h1>
          </div>
          <div className="tasksshow">
            {editingId === task._id ? (
              <div>
                <input
                  type="text"
                  value={editedTaskValue}
                  onChange={handleTaskChange}
                />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handelcancel}>cancel</button>
              </div>
            ) : (
              <h1>{task.task}</h1>
            )}
          </div>
          <div>
            <AiFillEdit
              color="#27548A"
              size={25}
              style={{ cursor: "pointer" }}
              onClick={() => handleEditClick(task)} 
            />
          </div>
          <div>
            <AiFillCloseCircle
              color="red"
              size={20}
              style={{ cursor: "pointer" }}
              onClick={() => deleteTask(task._id)} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;