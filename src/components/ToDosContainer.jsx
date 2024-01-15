// I M P O R T:   F I L E S
import "../styles/todosContainer.scss";

// I M P O R T:   P A C K A G E S
import { useState, useContext } from "react";
import ToDoContext from "../context/ToDoContext.jsx";

// I M P O R T:   F U N C T I O N S
import ToDoItem from "./ToDoItem.jsx";

// C O D E
const ToDosContainer = () => {
  const [tasks, , , addTask] = useContext(ToDoContext);
  const [newTask, setNewTask] = useState("");
  const toDos = tasks.filter((el) => !el.done);

  const handleNewTodoChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="todos-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="input-item">
          <input
            type="text"
            name="todo"
            value={newTask}
            onChange={handleNewTodoChange}
          />
        </label>
        <input className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {toDos.length > 0 &&
          toDos.map((el) => {
            return <ToDoItem task={el} key={el.id} />;
          })}
      </div>
    </div>
  );
};

export default ToDosContainer;
