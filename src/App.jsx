// I M P O R T:   F I L E S
import "../src/styles/App.scss";
import "../src/styles/navigation.scss";

// I M P O R T:   P A C K A G E S
import { useState, useId } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ToDoContext from "./context/ToDoContext.jsx";

// I M P O R T:   F U N C T I O N S
import Navigation from "./components/Navigation.jsx";
import DonesContainer from "./components/DonesContainer.jsx";
import ToDosContainer from "./components/ToDosContainer.jsx";
import Help from "./components/Help.jsx";

// C O D E
function App() {
  const [tasks, setTasks] = useState([]);
  const updateTask = (id) => {
    const updatedItems = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
        return task;
      } else return task;
    });
    setTasks(updatedItems);
  };
  const addTask = (value) => {
    if (!value.trim()) {
      alert(
        "An empty to-do is not a to-do 😉\nThe text cannot be empty, please fill it out!"
      );
      return;
    }
    const uniqueId = `${new Date().getTime()}-${Math.floor(
      Math.random() * 1000
    )}`;

    const newItem = { id: uniqueId, text: value, done: false };
    setTasks([newItem, ...tasks]);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <ToDoContext.Provider
      value={[tasks, setTasks, updateTask, addTask, removeTask]}
    >
      <div className="App">
        <Navigation />
        <Routes>
          <Route index element={<Navigate to="/todos" />} />
          <Route path="/todos" element={<ToDosContainer />} />
          <Route path="/dones" element={<DonesContainer />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </ToDoContext.Provider>
  );
}

export default App;

// I M P O R T:   F I L E S

// I M P O R T:   P A C K A G E S

// I M P O R T:   F U N C T I O N S

// C O D E

{
  /* <Route path="" element={}/> */
}
