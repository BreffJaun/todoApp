// I M P O R T:   F I L E S
import "../src/styles/App.scss";
import "../src/styles/navigation.scss";

// I M P O R T:   P A C K A G E S
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ToDoContext from "./context/ToDoContext.jsx";

// I M P O R T:   F U N C T I O N S
import {
  updateTask,
  addTask,
  removeTask,
  toggleEditing,
  editTask,
} from "./components/todoFunctions.jsx";
import Navigation from "./components/Navigation.jsx";
import DonesContainer from "./components/DonesContainer.jsx";
import ToDosContainer from "./components/ToDosContainer.jsx";
import Help from "./components/Help.jsx";

// C O D E
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <ToDoContext.Provider
      value={[
        tasks,
        setTasks,
        updateTask,
        addTask,
        removeTask,
        toggleEditing,
        editTask,
      ]}
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
