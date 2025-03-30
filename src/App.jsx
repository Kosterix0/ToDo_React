import { useState } from "react";
import ManageCurrentDate from "./components/HeaderDate/ManageCurrentDate";
import InputTask from "./components/HeaderInput/InputTask";
import TasksContextProvider from "./components/Context/tasks-context";
import Popup from "./components/Popup/Popup";

function App() {
  return (
    <div className="flex flex-col justify-start items-center gap-1 sm:h-[70%] sm:w-[50%] bg-[rgba(236,223,223,0.5)] rounded-[40px] w-[80%] h-[80%]">
      {/* <Popup /> */}
      <ManageCurrentDate />
      <TasksContextProvider>
        <InputTask />
      </TasksContextProvider>
    </div>
  );
}

export default App;
