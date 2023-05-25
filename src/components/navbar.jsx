import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark"
      aria-label="Second navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#1">
          Lista de Tareas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#1">
                {""}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#1">
                {""}
              </a>
            </li>
          </ul>
          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Busqueda..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
