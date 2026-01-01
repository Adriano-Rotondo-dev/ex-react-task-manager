export default function AddTask() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Add Task</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="title" className="form-label" />
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Inserisci qui la Task"
                required
              />
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="completed"
              />
              <label className="form-check-label" htmlFor="completed">
                Completata?
              </label>
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Aggiungi Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
