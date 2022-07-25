import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menuOpen: false,
    slideIndex: 0,
  },

  reducers: {
    switchSlider: (state, index) => {
      state.slideIndex = index.payload || 0;
    },

    menuToggle: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
