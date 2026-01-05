import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, removeTask, updateTask } = useContext(GlobalContext);

  const task = tasks.find((task) => task.id === parseInt(id));

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  if (!task) {
    return (
      <div className="container vh-10 d-flex justify-content-center text-danger">
        <h2>Task non trovata</h2>
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      await removeTask(task.id);
      alert("Task Eliminata");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleUpdate = async (updatedTask) => {
    try {
      await updateTask(updatedTask);
      setShowEditModal(false);
      alert("Task modificata");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="container py-4">
      <h1>Task Detail Page</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-3">Dettagli Task {task.id}</h2>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">
                  <strong>Nome:</strong> {task.title}
                </li>
                <li className="list-group-item">
                  <strong>Descrizione:</strong> {task.description}
                </li>
                <li className="list-group-item">
                  <strong>Status:</strong> {task.status}
                </li>
                <li className="list-group-item">
                  <strong>Data:</strong>{" "}
                  {new Date(task.createdAt).toLocaleDateString("it-IT")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <button
          className="btn btn-danger w-25 mt-3 mx-3"
          onClick={() => setShowDeleteModal(true)}
        >
          Elimina Task
        </button>
        <button
          className="btn btn-danger w-25 mt-3 mx-3"
          onClick={() => setShowEditModal(true)}
        >
          Modifica Task
        </button>
        <Modal
          title="Elimina la task scelta?"
          content={<p>Vuoi eliminare questa task?</p>}
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
          confirmText="Elimina la task"
        />
        <EditTaskModal
          title="Modificare la task scelta?"
          task={task}
          content={<p>Vuoi modificare questa task?</p>}
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSave={handleUpdate}
          confirmText="Task Modificata"
        />
      </div>
    </div>
  );
}
