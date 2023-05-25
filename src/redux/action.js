import data from "../data.json";

export const obtenerData = () => {
  return (dispatch) => {
    dispatch({
      type: "OBTENER_DATA",
      payload: data.tareas,
    });
  };
};
export const finalizarTarea = (id) => ({
  type: "FINALIZAR_TAREA",
  payload: id,
});
