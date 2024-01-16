// I M P O R T:   F I L E S

// I M P O R T:   P A C K A G E S
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import ToDoContext from "../context/ToDoContext.jsx";

// I M P O R T:   F U N C T I O N S

// C O D E

const DoneItem = ({ task }) => {
  const [tasks, setTasks, updateTask, , removeTask] = useContext(ToDoContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={`todones-item ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{task.text}</p>
      <div className="todone-innerItem">
        <button
          className="btn"
          onClick={() => updateTask(task.id, tasks, setTasks)}
        >
          &#8635;
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
  );
};

DoneItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default DoneItem;
