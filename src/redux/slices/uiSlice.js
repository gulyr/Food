import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menuActive: false,
    scrollTopActive: false,
  },
  reducers: {
    toggleMenu(state) {
      state.menuActive = !state.menuActive;
    },
    setScrollTopActive: (state, action) => {
      state.scrollTopActive = action.payload;
    },
  },
});

export const { toggleMenu, setScrollTopActive } = uiSlice.actions;
export default uiSlice.reducer;
