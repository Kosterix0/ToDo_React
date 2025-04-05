import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TasksContextProvider from "./components/Context/tasks-context";
import "./style.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </StrictMode>
);
