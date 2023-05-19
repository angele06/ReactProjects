import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      onAddTask(taskName);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          <AiOutlinePlus />
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
