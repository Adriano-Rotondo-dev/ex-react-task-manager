import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {
  const statusClass = task.status
    .replace("", "")
    .toLowerCase()
    .replace(/\s+/g, ""); //rimuovo gli spazi per il to do

  return (
    <tr>
      <td>
        <Link to={`/task/${task.id}`}>{task.title}</Link>
      </td>
      <td className={statusClass}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
});

export default TaskRow;
