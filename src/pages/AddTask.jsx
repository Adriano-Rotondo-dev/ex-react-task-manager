import { useState, useRef, useMemo } from "react";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();

  const taskTitleError = useMemo(() => {
    if (!taskTitle.trim()) return "Non lasciarlo vuoto!";
    if ([...taskTitle].some((char) => symbols.includes(char)))
      return "Non può contenere simboli speciali!";
    return "";
  }, [taskTitle]);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Add Task</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Nome Task
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Inserisci il nome della task"
                required
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            {taskTitleError && <p className="text-danger">{taskTitleError}</p>}
            <label htmlFor="description" className="form-label">
              Descrizione Task
            </label>
            <textarea
              ref={descriptionRef}
              type="text"
              className="form-control"
              id="description"
              placeholder="Inserisci la descrizione della task"
              required
            />

            <label htmlFor="status" className="form-label">
              Status Task
            </label>
            <select
              ref={statusRef}
              defaultValue={"To do"}
              className="form-control"
              id="status"
              placeholder="Scegli lo status della task"
              required
            >
              {["To do", "Doing", "Done"].map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-primary w-100 my-3" type="submit">
              Aggiungi Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
