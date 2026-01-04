export default function Toast({ toast, onClose }) {
  if (!toast.message) return null;
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div className={`toast show text-bg-${toast.type}`}>
        <div className="d-flex">
          <div className="toast-body">{toast.message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}
