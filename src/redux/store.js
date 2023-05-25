import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "./Slice";

const store = configureStore({
  reducer: {
    tareas: tareasReducer,
  },
});

export default store;
