

import React, { useState } from "react";
import { FaPencilAlt,  FaTrash} from 'react-icons/fa';

function TaskItem({ task, onEdit, onDelete, onToggle }) {
 
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    setEditedTaskName(task.name);
  };

  const handleInputChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  const handleEdit = () => {
    onEdit(task.id, editedTaskName);
    setIsEditing(false);
  };

  return (
    <tr>
       <td>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      </td>
      <td className={task.completed ? "completed" : ""}>
        {isEditing ? (
          <input
            type="text"
            value={editedTaskName}
            onChange={handleInputChange}
          />
        ) : (
          task.name
        )}
      </td>
      <td>
        {isEditing ? (
          <button  class="btn btn-success" onClick={handleEdit}>Save</button>
        ) : (
        <button className="btn btn-warning"  onClick={handleToggleEdit}><FaPencilAlt/></button>
        )}
      </td>
      <td>
       <button     className="btn btn-danger"  onClick={() => onDelete(task.id)}  ><FaTrash/></button> 
      </td>
     
    </tr>
  );
}

export default TaskItem