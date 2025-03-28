import { useContext } from "react";
import { TasksContext } from "../Context/tasks-context";

const buttonRender =
  "w-[30px] text-[25px] md:w-[5vmin] h-fit md:h-[4vmin] text-center border-none rounded-[5px] cursor-pointer md:text-[30px] md:w-[5vmin] md:text-xl";

export default function RenderTasks() {
  const { tasks, checkTask, deleteTask } = useContext(TasksContext);

  return (
    <div className="w-full h-[60%] flex flex-col items-center justify-start gap-[10px] overflow-y-scroll no-scrollbar">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="w-[95%] h-fit flex flex-col justify-around items-center text-[15px] md:w-full pb-[2%] gap-[3px] border-b-2 border-dotted border-black/30 md:flex-row quicksand-bold"
        >
          <button
            className={`bg-[rgb(118,243,84)] hover:bg-[rgb(161,255,134)] hover:text-white active:bg-[rgb(208,249,196)] active:text-white material-symbols-outlined ${buttonRender}`}
            onClick={() => checkTask(index)}
          >
            check
          </button>
          <p
            style={{ textDecoration: task.decoration }}
            className="w-full text-[15px] border-none rounded-[10px] bg-white pl-[2%] h-fit break-words whitespace-normal md:text-[20px] md:w-[60%]"
          >
            {task.task}
          </p>
          <p className="pl-[6px] text-[15px] md:text-[18px] h-fit w-[10%] min-w-[50px]">
            {task.date}
          </p>
          <button
            className={`bg-[rgb(157,36,23)] hover:bg-[rgb(231,107,93)] active:bg-[rgb(255,203,197)] material-symbols-outlined ${buttonRender}`}
            onClick={() => deleteTask(index)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
