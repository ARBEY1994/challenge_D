import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { finalizarTarea } from "../redux/action";
import { useDispatch } from "react-redux";

export default function TareaDetalle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const finalizarClick = () => {
    dispatch(finalizarTarea(parseInt(id)));

    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <h1>Detalle de la tarea #{id}</h1>
      <button onClick={finalizarClick}>Finalizar tarea #{id}</button>
      <Footer />
    </div>
  );
}
