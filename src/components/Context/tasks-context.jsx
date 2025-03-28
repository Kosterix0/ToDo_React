import { createContext } from "react";
import { useState, useEffect } from "react";

export const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  checkTask: () => {},
});

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task, date) {
    setTasks((prevTasks) => [...prevTasks, { task, date, decoration: "none" }]);
  }

  function checkTask(index) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index
          ? {
              ...task,
              decoration: task.decoration === "none" ? "line-through" : "none",
            }
          : task
      )
    );
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, checkTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}
