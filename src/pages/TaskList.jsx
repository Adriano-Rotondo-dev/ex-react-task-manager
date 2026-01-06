//elenco delle task
import { useContext, useState, useMemo, useCallback } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

function debounce(callback, delay) {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, delay);
  };
}

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  console.log("Tasks:", tasks);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);
  const sortIcon = sortOrder === 1 ? "↓" : "↑";

  const [searchQuery, setSearchQuery] = useState("");
  const debounceSetSearchQuery = useCallback(debounce(setSearchQuery, 500), []);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder((prev) => prev * -1);
    } else {
      setSortBy(field);
      setSortOrder(1);
    }
  };

  const filteredAndSortedTasks = useMemo(() => {
    return [...tasks]
      .filter((t) => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        let comparison;

        if (sortBy === "title") {
          comparison = a.title.localeCompare(b.title);
        } else if (sortBy === "status") {
          const statusOptions = ["To Do", "Doing", "Done"];
          comparison =
            //sorting numerico - rivedere
            statusOptions.indexOf(a.status) - statusOptions.indexOf(b.status);
        } else if (sortBy === "createdAt") {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          comparison = dateA - dateB;
        }

        return comparison * sortOrder;
      });
  }, [tasks, sortBy, sortOrder, searchQuery]);

  return (
    <div className="text-center flex-column justify-content p-3">
      <h1>Task list</h1>

      <input
        className="form-control my-3"
        type="text"
        placeholder="Cerca una task.."
        onChange={(e) => debounceSetSearchQuery(e.target.value)}
      />

      <table className="table table-striped table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th onClick={() => handleSort("title")}>
              Nome {sortBy === "title" && sortIcon}
            </th>
            <th onClick={() => handleSort("status")}>
              Status {sortBy === "status" && sortIcon}
            </th>
            <th onClick={() => handleSort("createdAt")}>
              Data di Creazione {sortBy === "createdAt" && sortIcon}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedTasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
