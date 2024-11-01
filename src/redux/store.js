import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/slice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
