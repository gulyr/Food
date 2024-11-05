import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/slice.js";
import uiReducer from "./slices/uiSlice.js";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
  },
});
