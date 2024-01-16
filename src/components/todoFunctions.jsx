// C O D E
const updateTask = (id, tasks, setTasks) => {
  const updatedItems = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, done: !task.done };
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

  const newItem = { id: uniqueId, text: newTask, done: false, editing: false };
  setTasks([newItem, ...tasks]);
};

const removeTask = (id, tasks, setTasks) => {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks);
};

const toggleEditing = (id, tasks) => {
  const updatedItems = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, editing: !task.editing };
    }
    return task;
  });
  return updatedItems;
};

const editTask = async (id, newText, tasks) => {
  const updatedItems = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, text: newText };
    }
    return task;
  });
  return updatedItems;
};

export { updateTask, addTask, removeTask, toggleEditing, editTask };
