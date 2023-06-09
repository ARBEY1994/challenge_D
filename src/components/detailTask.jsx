import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { finalizarTarea, obtenerTareasPendientes } from "../redux/Slice";
import { useDispatch, useSelector } from "react-redux";

export default function TareaDetalle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tareas = useSelector(obtenerTareasPendientes);

  const tareaActual = tareas.find((tarea) =>
    tarea.descripcion.some((desc) => desc.id === id)
  );
  const tareaAnterior = tareas.find((tarea) =>
    tarea.descripcion.some((desc) => desc.id === id - 1)
  );

  const finalizarClick = async () => {
    if (
      tareaAnterior &&
      !tareaAnterior.descripcion.every((desc) => desc.finalizada)
    ) {
      alert(
        `Debes finalizar la tarea ${tareaAnterior.titulo} antes de continuar.`
      );
    } else {
      await Promise.all([dispatch(finalizarTarea(parseInt(id)))]);
    }
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1>Detalle de la tarea #{id}</h1>
          <img
            src="https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-15768.jpg?w=2000"
            alt=""
            width="100em"
            height="350em"
          />
          <button className="btn btn-secondary" onClick={finalizarClick}>
            Finalizar tarea #{id}
          </button>
          {tareaActual && <p>Esta es la tarea actual: {tareaActual.titulo}</p>}
        </div>
      </div>

      <Footer />
    </div>
  );
}
