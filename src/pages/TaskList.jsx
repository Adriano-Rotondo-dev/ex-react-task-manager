//elenco delle task
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  console.log("Tasks:", tasks);

  return (
    <div className="text-center flex-column justify-content p-3">
      <h1>Task list</h1>

      <table className="table table-striped table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Data di Creazione</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
