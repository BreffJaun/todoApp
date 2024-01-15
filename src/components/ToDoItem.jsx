// I M P O R T:   F I L E S

// I M P O R T:   P A C K A G E S
import PropTypes from "prop-types";
import { useContext } from "react";
import ToDoContext from "../context/ToDoContext.jsx";

// I M P O R T:   F U N C T I O N S

// C O D E

const ToDoItem = ({ task }) => {
  const [, , updateTask, , removeTask] = useContext(ToDoContext);
  return (
    <div className="todo-item">
      <p>{task.text}</p>
      <div className="todo-innerItem">
        <button className="btn" onClick={() => updateTask(task.id)}>
          &#10004;
        </button>
        <button className="btn trash-icon" onClick={() => removeTask(task.id)}>
          &#128465;
        </button>
      </div>
    </div>
  );
};

ToDoItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default ToDoItem;
