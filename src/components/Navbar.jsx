import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <NavLink className="nav-link active p-3" href="#" aria-current="page">
        Lista task
      </NavLink>
      <NavLink className="nav-link p-3" href="#">
        Aggiungi Task
      </NavLink>
    </nav>
  );
}
