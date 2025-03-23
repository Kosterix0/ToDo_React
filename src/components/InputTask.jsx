import { useState, useEffect } from "react";

export default function InputTask() {
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [curTasks, setCurTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(curTasks));
  }, [curTasks]);

  function handleSubmit() {
    if (inputValue && dateValue) {
      setCurTasks((prevTasks) => [
        ...prevTasks,
        {
          task: inputValue,
          date: dateValue,
          decoration: "none",
        },
      ]);
      setInputValue("");
      setDateValue("");
    }
  }

  function checkTask(index) {
    setCurTasks((prevTasks) =>
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
    setCurTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function RenderTasks() {
    return (
      <div className="tasks-container">
        {curTasks.map((task, index) => {
          return (
            <div key={index} className="item quicksand-bold">
              <button
                className="check-item material-symbols-outlined"
                onClick={() => {
                  checkTask(index);
                }}
              >
                check
              </button>
              <p style={{ textDecoration: task.decoration }}>{task.task}</p>
              <p className="date-item">{task.date}</p>
              <button
                className="delete-item material-symbols-outlined"
                onClick={() => {
                  deleteTask(index);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Your tasks here!"
          className="task-input"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <input
          type="date"
          className="task-date"
          onChange={(event) => {
            setDateValue(event.target.value);
          }}
        />
        <button
          className="task-add material-symbols-outlined"
          onClick={handleSubmit}
        >
          add
        </button>
      </div>
      <RenderTasks />
    </>
  );
}
