import { useContext } from "react";
import { taskContext } from "../context/ContextApi";

const InpuTask = () => {
  const { addTask,task,setTask } = useContext(taskContext);
 

  let handlechange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = async () => {
    if (!task.trim()) return; 
    try {
      await addTask(task);
      setTask("");
     console.log("task added successfully");
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="inputtask">
        <div>
          <input
            type="text"
            placeholder="enter task to add"
            value={task}
            onChange={handlechange}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>submit</button>
        </div>
      </div>
    </>
  );
};

export default InpuTask;