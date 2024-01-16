// I M P O R T:   F I L E S
import "../styles/donesContainer.scss";

// I M P O R T:   P A C K A G E S
import { useContext } from "react";
import ToDoContext from "../context/ToDoContext.jsx";

// I M P O R T:   F U N C T I O N S
import DoneItem from "./DoneItem.jsx";

// C O D E

const DonesContainer = () => {
  const [tasks, , , ,] = useContext(ToDoContext);
  const doneTasks = tasks.filter((el) => el.done);

  return (
    <div className="todones-container">
      <h3>DONE TASKS</h3>
      {doneTasks.length > 0 &&
        doneTasks.map((el) => {
          return <DoneItem task={el} key={el.id} />;
        })}
    </div>
  );
};

export default DonesContainer;
