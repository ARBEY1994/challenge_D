const initialState = {
  tareasPen: [],
};

const tareasReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OBTENER_DATA":
      return {
        ...state,
        tareasPen: action.payload,
      };
    case "FINALIZAR_TAREA":
      const nuevasTareas = state.tareasPen.filter(
        (tarea) => tarea.descripcion[0].id !== action.payload
      );

      return {
        ...state,
        tareasPen: nuevasTareas,
      };

    default:
      return state;
  }
};

export default tareasReducer;
