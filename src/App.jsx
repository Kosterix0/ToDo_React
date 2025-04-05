import { useContext } from "react";
import ManageCurrentDate from "./components/HeaderDate/ManageCurrentDate";
import InputTask from "./components/HeaderInput/InputTask";
import Popup from "./components/Popup/Popup";
import { TasksContext } from "./components/Context/tasks-context";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const { status } = useContext(TasksContext);

  return (
    <>
      <Sidebar />
      <div className="relative flex flex-col justify-start items-center gap-1 sm:h-[80%] sm:w-[80%] bg-[rgba(236,223,223,0.5)] rounded-[40px] w-[80%] h-[80%] overflow-hidden">
        {status === "homepage" ? (
          <>
            <ManageCurrentDate />
            <InputTask />
          </>
        ) : (
          <Popup />
        )}
      </div>
    </>
  );
}

export default App;
