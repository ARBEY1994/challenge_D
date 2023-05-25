import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../data.json";

export const obtenerData = createAsyncThunk("tareas/obtenerData", async () => {
  const response = await Promise.all((resolve) => {
    resolve(data.tareas);
  });

  return response;
});

const initialState = {
  tareasPen: data.tareas,
};

const tareasSlice = createSlice({
  name: "tareas",
  initialState,
  reducers: {
    finalizarTarea: (state, action) => {
      const nuevasTareas = state.tareasPen.map((tarea) => {
        if (tarea.descripcion[0].id === action.payload) {
          tarea.descripcion[0].finalizada = true;
        }

        return tarea;
      });
      state.tareasPen = nuevasTareas;
    },
  },
});

export const { finalizarTarea } = tareasSlice.actions;

export const obtenerTareasPendientes = (state) => state.tareas.tareasPen;

export default tareasSlice.reducer;
