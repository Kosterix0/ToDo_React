import { useState, useContext } from "react";
import { TasksContext } from "../Context/tasks-context";
import { FaAngleLeft } from "react-icons/fa";

export default function Popup() {
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
    <div className="flex flex-col justify-start items-center gap-10 w-full h-full px-[1%] mt-[5%]">
      <header className="flex flex-row justify-center items-center w-full  ">
        <div className="flex flex-row w-[10%] absolute left-3">
          <button
            onClick={() => setStatus("homepage")}
            className="rounded-2xl bg-white w-fit h-full"
          >
            <FaAngleLeft className="w-7 h-7" />
          </button>
        </div>

        <h1 className="text-[20px]">Create Your Task!</h1>
      </header>
      <input
        type="text"
        placeholder="Your tasks here!"
        value={inputValue}
        className="w-full md:text-[20px] text-[15px] h-1/8 min-h-fit max-h-20 md:w-[65%] pl-[2%] border-none rounded-[15px] outline-none cursor-text relative z-0 placeholder:text-[15px] md:placeholder:text-[18px] bg-white"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="date"
        className="w-full md:text-[20px] text-[15px] h-1/8 min-h-fit max-h-20 md:w-[65%] pl-[2%] border-none rounded-[15px] outline-none cursor-text relative z-0 placeholder:text-[15px] md:placeholder:text-[18px] bg-white"
        value={dateValue}
        onChange={(e) => setDateValue(e.target.value)}
      />
      <button
        className="w-[7vmin] min-w-12 h-[7vmin] min-h-12 border-0 rounded-[15px] outline-none cursor-pointer relative z-0 text-white material-symbols-outlined task-add"
        onClick={handleSubmit}
      >
        add
      </button>
    </div>
  );
}
