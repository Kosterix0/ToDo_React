import { useState, useEffect } from "react";
const buttonRender =
  "w-[30px] text-[25px] md:w-[5vmin] h-fit md:h-[4vmin] text-center border-none rounded-[5px] cursor-pointer md:text-[30px] md:w-[5vmin] md:text-xl";

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
      <div className="w-full h-[60%] flex flex-col items-center justify-start gap-[10px] overflow-y-scroll no-scrollbar">
        {curTasks.map((task, index) => {
          return (
            <div
              key={index}
              className="w-[95%] h-fit flex flex-col justify-around items-center text-[15px] md:w-full pb-[2%] gap-[3px] border-b-2 border-dotted border-black/30 md:flex-row quicksand-bold"
            >
              <button
                className={`bg-[rgb(118,243,84)] hover:bg-[rgb(161,255,134)] hover:text-white active:bg-[rgb(208,249,196)] active:text-white material-symbols-outlined ${buttonRender}`}
                onClick={() => {
                  checkTask(index);
                }}
              >
                check
              </button>
              <p
                style={{ textDecoration: task.decoration }}
                className="w-full text-[15px] border-none rounded-[10px] bg-white pl-[2%]  h-fit break-words whitespace-normal md:text-[20px] md:w-[60%]"
              >
                {task.task}
              </p>
              <p className="pl-[6px] text-[15px]   md:text-[18px] h-fit w-[10%] min-w-[50px] ">
                {task.date}
              </p>
              <button
                className={`bg-[rgb(157,36,23)] hover:bg-[rgb(231,107,93)] active:bg-[rgb(255,203,197)] material-symbols-outlined ${buttonRender}`}
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
      <div className="flex flex-col items-center w-full h-1/4 px-[1%] gap-[5px] md:h-[10%] md:flex-row md:justify-around md:items-start md:gap-[3%] ">
        <input
          type="text"
          placeholder="Your tasks here!"
          value={inputValue}
          className="w-full md:text-[20px] text-[15px] h-[65%] md:w-[65%] pl-[2%] border-none rounded-[15px] outline-none cursor-text relative z-0 placeholder:text-[15px] md:placeholder:text-[18px] bg-white"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <input
          type="date"
          className="w-full md:w-[20%] h-[65%] text-[20px] border-0 rounded-[15px] outline-none cursor-pointer relative z-0  bg-white"
          value={dateValue}
          onChange={(event) => {
            setDateValue(event.target.value);
          }}
        />
        <button
          className="w-[25%] max-w-[50px] min-w-fit h-[65%] md:w-[10%] border-0 rounded-[15px] outline-none cursor-pointer relative z-0 text-white material-symbols-outlined task-add"
          onClick={handleSubmit}
        >
          add
        </button>
      </div>
      <RenderTasks />
    </>
  );
}
