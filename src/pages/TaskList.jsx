//elenco delle task
export default function TaskList() {
  return (
    <div className="text-center flex-column justify-content p-3">
      <h1>Task list</h1>
      {/* Task list - placeholder */}
      <ul>
        <li className="list-group-item p-3 bg-light">Task 1</li>
        <li className="list-group-item p-3 bg-dark text-white">Task 2</li>
      </ul>
    </div>
  );
}
