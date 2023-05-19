import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onEdit, onToggle }) {
  return (
    <table className="table table-striped table-dark mb-0">
      <thead>
        <tr>
        <th>Completed</th>
          <th>Task</th>     
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
