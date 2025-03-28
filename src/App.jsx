import { useState } from "react";
import ManageCurrentDate from "./components/ManageCurrentDate";
import InputTask from "./components/InputTask";

function App() {
  return (
    <div className="flex flex-col justify-start items-center gap-1 h-[70%] w-[50%] bg-[rgba(236,223,223,0.5)] rounded-[40px] sm:w-[80%] sm:h-[80%]">
      <ManageCurrentDate />
      <InputTask />
    </div>
  );
}

export default App;
