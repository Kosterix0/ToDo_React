import { useState } from "react";
import { Menu, Filter } from "lucide-react";
import { useContext } from "react";
import { TasksContext } from "../Context/tasks-context";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("None");

  const { tasks, sortTasks } = useContext(TasksContext);

  function filterTasks(key, ascending = true) {
    setSelectedFilter(key);
    sortTasks(key, ascending);
  }

  return (
    <>
      <button
        className="absolute top-2 left-2 bg-gray-800 text-white p-2 rounded-md shadow-md hover:bg-gray-700 transition z-50"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`absolute top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        <div className="p-4">
          <h2 className="text-lg font-semibold">Sidebar</h2>

          <button
            className="flex items-center justify-between w-full bg-gray-700 px-4 py-2 rounded-md mt-4 hover:bg-gray-600 transition"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <span>Sort</span>
            <Filter size={20} />
          </button>

          {filterOpen && (
            <div className="mt-2 p-3 bg-gray-800 rounded-md">
              <label className="block mb-2">
                <input
                  type="radio"
                  name="filter"
                  value="date"
                  checked={selectedFilter === "date"}
                  onChange={() => filterTasks("date")}
                  className="mr-2"
                />
                Date
              </label>
              <label className="block mb-2">
                <input
                  type="radio"
                  name="filter"
                  value="task"
                  checked={selectedFilter === "task"}
                  onChange={() => filterTasks("task")}
                  className="mr-2"
                />
                Text
              </label>
              <label className="block">
                <input
                  type="radio"
                  name="filter"
                  value="decoration"
                  checked={selectedFilter === "decoration"}
                  onChange={() => filterTasks("decoration")}
                  className="mr-2"
                />
                Status
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
