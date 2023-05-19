import React, { useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (name) => {
    const newTask = {
      id: Date.now(),
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="container">
        <div class="text-center pt-3 pb-2">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                alt="Check" width="60"/>
              <h2 class="my-4" style={{textShadow:"1px 1px 1px black"}}>My Todos</h2>
            </div>
      <TaskForm onAddTask={addTask} />
      <div className="filter-container">
        <label>Filter: </label>
        <select value={filter} onChange={handleFilterChange} className="form-select"  style={{ marginBottom:"80px",width:"100px"}}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggle={toggleTask}
      />
      <button onClick={clearCompletedTasks} className="btn btn-danger">
         <BsTrash className="btn-icon" />
      </button>
    </div>
  );
}

export default App;
