import { useState } from "react";
import ManageCurrentDate from "./components/HeaderDate/ManageCurrentDate";
import InputTask from "./components/InputTask";
import TasksContextProvider from "./components/Context/tasks-context";

function App() {
  return (
    <div className="flex flex-col justify-start items-center gap-1 sm:h-[70%] sm:w-[50%] bg-[rgba(236,223,223,0.5)] rounded-[40px] w-[80%] h-[80%]">
      <ManageCurrentDate />
      <TasksContextProvider>
        <InputTask />
      </TasksContextProvider>
    </div>
  );
}

export default App;
