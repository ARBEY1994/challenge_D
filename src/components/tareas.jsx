import React, { useEffect } from "react";
import "../Styles/tareas.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { obtenerData } from "../redux/action";

export default function Tareas() {
  const tareas = useSelector((state) => state.tareasPen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerData());
    console.log("Estado de tareasPen:", tareas);
  }, [dispatch, tareas]);

  return (
    <div className="row justify-content-center">
      {tareas.map((tarea) => (
        <div
          className="card mb-3 mx-3 card-hover"
          style={{ maxWidth: "540px" }}
          key={tarea.descripcion[0].id}
        >
          <div className="row">
            <div className="col-md-4">
              <img
                src={tarea.imagen}
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{tarea.titulo}</h5>
                {tarea.descripcion.map((descripcion) => (
                  <p className="card-text" key={descripcion.id}>
                    <Link
                      className="text-decoration-none"
                      to={`/detail/${descripcion.id}`}
                    >
                      {descripcion.texto}
                    </Link>
                  </p>
                ))}
                <p className="card-text">
                  <small className="text-body-secondary">
                    Actualizada hace 2 horas
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
