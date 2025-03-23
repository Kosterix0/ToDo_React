import { useState } from "react";

export default function InputTask() {
  const [inputValue, setInputValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [curTasks, setCurTasks] = useState([]);

  function handleSubmit() {
    if (inputValue && dateValue) {
      curTasks.push({
        task: inputValue,
        date: dateValue,
      });
      setCurTasks([...curTasks]);
      console.log(curTasks);
    }
  }

  function RenderTasks() {
    return (
      <div className="tasks-container">
        {curTasks.map((task, index) => {
          return (
            <div key={index} className="item quicksand-bold">
              <button className="check-item material-symbols-outlined">
                check
              </button>
              <p>{task.task}</p>
              <p className="date-item">{task.date}</p>
              <button className="delete-item material-symbols-outlined"></button>
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
