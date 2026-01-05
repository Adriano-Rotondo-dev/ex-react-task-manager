import { useState, useRef } from "react";
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {
  const [editedTask, setEditedTask] = useState(task);
  const editFormRef = useRef();

  const changeEditedTask = (key, event) => {
    setEditedTask((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  const { title, description, status } = editedTask;

  return (
    <Modal
      title="Modifica Task"
      content={
        <div className="d-flex justify-content-center">
          <form
            ref={editFormRef}
            onSubmit={handleSubmit}
            className="d-flex flex-column "
          >
            <div className="mb-3">
              <label className="form-label">
                Nome Task :{" "}
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => changeEditedTask("title", e)}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Descrizione:{" "}
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => changeEditedTask("description", e)}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Stato:{""}
                <select
                  className="form-select"
                  value={status}
                  onChange={(e) => changeEditedTask("status", e)}
                >
                  {["To do", "Doing", "Done"].map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </form>
        </div>
      }
      confirmText="Salva"
      show={show}
      onClose={onClose}
      onConfirm={() => editFormRef.current.requestSubmit()}
    />
  );
}
