import { createContext } from "react";
import { useState, useEffect } from "react";

export const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  checkTask: () => {},
  setStatus: () => {},
  sortTasks: () => {},
  status: "",
});

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [status, setStatus] = useState("homepage");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task, date) {
    setTasks((prevTasks) => [...prevTasks, { task, date, decoration: "none" }]);
    setStatus("homepage");
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

  function sortTasks(key, ascending = true) {
    console.log(key, ascending);
    setTasks((prevTasks) =>
      [...prevTasks].sort((a, b) => {
        if (typeof a[key] === "string" && typeof b[key] === "string") {
          return ascending
            ? a[key].localeCompare(b[key])
            : b[key].localeCompare(a[key]);
        }
        console.log(prevTasks);
        return ascending ? a[key] - b[key] : b[key] - a[key];
      })
    );
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        checkTask,
        deleteTask,
        status,
        setStatus,
        sortTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
