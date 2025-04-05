import { useState, useContext } from "react";
import { TasksContext } from "../Context/tasks-context";
import RenderTasks from "../RenderTasks/RenderTasks";

export default function InputTask() {
  const { addTask, setStatus } = useContext(TasksContext);
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
        <button
          className="w-[25%] max-w-[50px] min-w-fit h-[65%] md:w-[10%] border-0 rounded-[15px] outline-none cursor-pointer relative z-0 text-white material-symbols-outlined task-add"
          onClick={() => setStatus("popup")}
        >
          add
        </button>
      </div>
      <RenderTasks />
    </>
  );
}
