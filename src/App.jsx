import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import TaskDetail from "./pages/TaskDetail";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
