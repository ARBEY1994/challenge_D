import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../data.json";

export const obtenerData = createAsyncThunk("tareas/obtenerData", async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.tareas);
    }, 10000);
  });

  return response;
});

const initialState = {
  tareasPen: [],
};

const tareasSlice = createSlice({
  name: "tareas",
  initialState,
  reducers: {
    finalizarTarea: (state, action) => {
      const nuevasTareas = state.tareasPen.filter(
        (tarea) => tarea.descripcion[0].id !== action.payload
      );
      state.tareasPen = nuevasTareas;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(obtenerData.fulfilled, (state, action) => {
      state.tareasPen = action.payload;
      console.log("Respuesddddta:", action.payload);
    });
  },
});

export const { finalizarTarea } = tareasSlice.actions;

export const obtenerTareasPendientes = (state) => state.tareas.tareasPen;

export default tareasSlice.reducer;
