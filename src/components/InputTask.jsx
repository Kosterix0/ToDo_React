import { useState, useContext } from "react";
import { TasksContext } from "./Context/tasks-context";
import RenderTasks from "./RenderTasks/RenderTasks";

export default function InputTask() {
  const { addTask } = useContext(TasksContext);
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  function handleSubmit() {
    if (inputValue && dateValue) {
      addTask(inputValue, dateValue);
      setInputValue("");
      setDateValue("");
    }
  }

  return (
    <>
      <div className="flex flex-col items-center w-full h-1/4 px-[1%] gap-[5px] md:h-[10%] md:flex-row md:justify-around md:items-start md:gap-[3%]">
        <input
          type="text"
          placeholder="Your tasks here!"
          value={inputValue}
          className="w-full md:text-[20px] text-[15px] h-[65%] md:w-[65%] pl-[2%] border-none rounded-[15px] outline-none cursor-text relative z-0 placeholder:text-[15px] md:placeholder:text-[18px] bg-white"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="date"
          className="w-full md:w-[20%] h-[65%] text-[20px] border-0 rounded-[15px] outline-none cursor-pointer relative z-0 bg-white"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
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
