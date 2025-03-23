import { useState } from "react";
import ManageCurrentDate from "./components/ManageCurrentDate";
import InputTask from "./components/InputTask";

function App() {
  return (
    <div className="container-app">
      <ManageCurrentDate />
      <InputTask />
    </div>
  );
}

export default App;
