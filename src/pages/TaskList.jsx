//elenco delle task
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  console.log("Tasks:", tasks);

  return (
    <div className="text-center flex-column justify-content p-3">
      <h1>Task list</h1>
      {/* Task list - placeholder */}
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className={`list-group-item ${
              index % 2 === 0 ? "bg-light text-dark" : "bg-dark text-white"
            }`}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
