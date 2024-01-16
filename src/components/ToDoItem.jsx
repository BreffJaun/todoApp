// I M P O R T:   F I L E S

// I M P O R T:   P A C K A G E S
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import ToDoContext from "../context/ToDoContext.jsx";

// I M P O R T:   F U N C T I O N S

// C O D E

const ToDoItem = ({ task }) => {
  const [tasks, setTasks, updateTask, , removeTask, toggleEditing, editTask] =
    useContext(ToDoContext);
  const [newText, setNewText] = useState(task.text);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEditClick = () => {
    const updatedTasks = toggleEditing(task.id, tasks);
    setTasks(updatedTasks);
  };

  const handleNewTextChange = (event) => {
    setNewText(event.target.value);
  };

  const handleSaveClick = async (event) => {
    event.preventDefault();
    const updatedTasks = await editTask(task.id, newText, tasks);
    const updatedTasksEditing = await toggleEditing(task.id, updatedTasks);
    setTasks(updatedTasksEditing);
    setNewText(task.text);
  };

  return (
    <>
      {task.editing ? (
        <form className="todo-form" onSubmit={handleSaveClick}>
          <label className="input-item">
            <input
              type="text"
              name="text"
              value={newText}
              onChange={handleNewTextChange}
            />
          </label>
          <input className="btn" type="submit" value="SAVE" />
        </form>
      ) : (
        <div
          className={`todo-item ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p>{task.text}</p>
          <div className="todo-innerItem">
            <button
              className="btn"
              onClick={() => updateTask(task.id, tasks, setTasks)}
            >
              &#10004;
            </button>
            <button className="btn" onClick={handleEditClick}>
              &#9998;
            </button>
            <button
              className="btn trash-icon"
              onClick={() => removeTask(task.id, tasks, setTasks)}
            >
              &#128465;
            </button>
          </div>
          {isHovered && <div className="tooltip">{task.text}</div>}
        </div>
      )}
    </>
  );
};

ToDoItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default ToDoItem;
