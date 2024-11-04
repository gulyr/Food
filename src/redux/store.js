import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/slice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
  },
});
