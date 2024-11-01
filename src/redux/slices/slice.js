import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const mainSlice = createSlice({
  name: "main",
  initialState: data,
  reducers: {},
});
export default mainSlice.reducer;
