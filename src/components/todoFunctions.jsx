// I M P O R T:   F I L E S

// I M P O R T:   P A C K A G E S

// I M P O R T:   F U N C T I O N S

// C O D E
const updateTask = (id, tasks, setTasks) => {
  const updatedItems = tasks.map((task) => {
    if (task.id === id) {
      task.done = !task.done;
      return task;
    } else return task;
  });
  setTasks(updatedItems);
};

const addTask = (newTask, tasks, setTasks) => {
  if (!newTask.trim()) {
    alert(
      "An empty to-do is not a to-do 😉\nThe text cannot be empty, please fill it out!"
    );
    return;
  }
  const uniqueId = `${new Date().getTime()}-${Math.floor(
    Math.random() * 1000
  )}`;

  const newItem = { id: uniqueId, text: newTask, done: false };
  setTasks([newItem, ...tasks]);
};

const removeTask = (id, tasks, setTasks) => {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks);
};

export { updateTask, addTask, removeTask };
